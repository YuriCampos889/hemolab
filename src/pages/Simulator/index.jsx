import React, { useState, useEffect } from 'react'; 
import { Activity, Droplet, Wind, Brain, Send } from 'lucide-react';

import useWizard from '../../hooks/Wizard';
import useSimulatorForm from '../../hooks/SimulationForm';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';
import BackToTop from '../../components/layout/BackToTop';

import { SimulationForm, BottomNav } from './styles'; 

import CardiacTab from './components/CardiacTab';
import VascularTab from './components/VascularTab';
import RespirationTab from './components/RespirationTab';
import IntracranialTab from './components/IntracranialTab';
import SubmitTab from './components/SubmitTab';

import SimulationHistoryList from '../../components/layout/History';
import SimulationDetailsModal from './components/SimulationDetailsModal';
import DeleteSimulationModal from './components/DeleteSimulationModal';

import { buildSimulationTxtContent } from './utils/simulationUtils';

import { createJob, deleteJob, fetchJobsByUsuario } from '../../services/api';
import { getUserIdFromToken, getUserNameFromToken } from '../../hooks/jwtDecoder';

const SIMULATOR_TABS = ['Cardiac', 'Vascular', 'Respiration', 'Intracranial', 'Submit simulation'];

const TAB_ICONS = {
  'Cardiac': Activity,
  'Vascular': Droplet,
  'Respiration': Wind,
  'Intracranial': Brain,
  'Submit simulation': Send
};

const getLoggedUserName = () => {
  const directKeys = ['@HeMoLAB:userName', '@HeMoLAB:username', 'userName', 'username', 'loggedUserName'];

  for (const key of directKeys) {
    const value = localStorage.getItem(key);
    if (value && value.trim()) return value.trim();
  }

  const objectKeys = ['@HeMoLAB:user', 'user', 'authUser', 'loggedUser'];
  for (const key of objectKeys) {
    const rawValue = localStorage.getItem(key);
    if (!rawValue) continue;

    try {
      const parsed = JSON.parse(rawValue);
      const candidate = parsed?.name || parsed?.userName || parsed?.username;
      if (candidate && String(candidate).trim()) {
        return String(candidate).trim();
      }
    } catch {
    }
  }

  return 'Logged User';
};

export default function ConfigSimulacaoScreen() {
  const wizard = useWizard(SIMULATOR_TABS);
  const [loggedUserName] = useState(() => getLoggedUserName());
  
  const [userId] = useState(() => {
    return getUserIdFromToken() || null;
  });
  
  const [historico, setHistorico] = useState(() => {
    const historicoGuardado = localStorage.getItem('@HeMoLAB:historico');
    return historicoGuardado ? JSON.parse(historicoGuardado) : [];
  });

  const [selectedSim, setSelectedSim] = useState(null); 
  const [pendingDeleteSim, setPendingDeleteSim] = useState(null);

  useEffect(() => {
      const carregarHistoricoAPI = async () => {
        if (!userId) return;
        
        try {
          const response = await fetchJobsByUsuario(userId);
          const jobs = response?.jobs || [];
          

          
          jobs.forEach(job => {
            console.log(`🔄 Job #${job.id} - nome: ${job.nome} - status: ${job.status}`);
          });
          
          if (jobs.length > 0) {
            const jobsFormatados = jobs.map(job => {
              let params = {};
              if (job.parametros) {
                try {
                  params = typeof job.parametros === 'string' 
                    ? JSON.parse(job.parametros) 
                    : job.parametros;
                } catch(e) {
                  params = {};
                }
              }

              return {
                ...job,
                historyId: `api-${job.id}`,
                source: 'api',
                nome: job.nome || 'Simulation',
                status: job.status || 'processing',
                simID: params.simID || `${job.fk_user_id}_${params.simulationID}` || `#${job.id}`,
                submittedAt: params.submittedAt || params.date || job.createdAt || new Date().toISOString(),
                simulationID: params.simulationID || `#${job.id}`,
                id: job.id
              };
            });
            
            jobsFormatados.forEach(j => console.log(`  ${j.nome}: ${j.status} (source: ${j.source})`));
            
            setHistorico(jobsFormatados);
          }
        } catch (err) {
          console.warn("Não foi possível carregar histórico da API:", err.message);
        }
      };
      
      carregarHistoricoAPI();
    }, [userId]);

  useEffect(() => {
      const submittedTimers = historico
        .filter((sim) => sim.status === 'Submitted' && sim.source !== 'api')
        .map((sim) =>
          setTimeout(() => {
            setHistorico((prev) =>
              prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'processing' } : item))
            );
          }, 1200)
        );

      const processingTimers = historico
        .filter((sim) => sim.status === 'processing' && sim.source !== 'api')
        .map((sim) =>
          setTimeout(() => {
            setHistorico((prev) =>
              prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'completed' } : item))
            );
          }, 2600)
        );

      return () => {
        submittedTimers.forEach((timer) => clearTimeout(timer));
        processingTimers.forEach((timer) => clearTimeout(timer));
      };
    }, [historico]);

  const handleSimulationSubmitted = async (submittedData) => { 
    const simulationRecord = {
      ...submittedData,
      simID: submittedData.simulationID,
      userID: userId,
      userName: getUserNameFromToken(),
      historyId: `${submittedData.simulationID}-${Math.random().toString(36).slice(2, 8)}`,
      status: 'Submitted'
    };
    setHistorico((prev) => [simulationRecord, ...prev]);
    // o handleSimulationSubmitted ainda algum resto de mock por aqui que apos fazer uma simulação 

    try {
      const payload = {
        model: "ADAVN",
        user: getUserNameFromToken(),
        userID: userId,
        simID: submittedData.simulationID,
        date: new Date().toISOString(),
        name: submittedData.nome,
        
        "cardiac.waveform": submittedData.waveform,
        "cardiac.cycle": submittedData.cardiacCycle,
        "cardiac.output": submittedData.cardiacOutput,
        "systole.duration": submittedData.systoleDuration,
        "retrograde.duration": submittedData.retrogradeDuration,
        "retrograde.amplitude": submittedData.retrogradeAmplitude,
        
        "geometry.rad": submittedData.lumenRadius,
        "geometry.thickness": submittedData.wallThickness,
        "geometry.length": submittedData.arterialLength,
        "mechanical.Ee": submittedData.elastinFactor,
        "mechanical.Ec": submittedData.collagenFactor,
        "mechanical.Km": submittedData.smoothMuscleFactor,   
        "mechanical.e0": submittedData.collagenMean,         
        "mechanical.er": submittedData.collagenWidth, 

        
        "inspiratory.period": submittedData.inspiratoryPeriod,
        "expiratory.period": submittedData.expiratoryPeriod,
        "inspiratory.pressure": submittedData.inspiratoryPressure,
        "expiratory.pressure": submittedData.expiratoryPressure,
        "larynx_volume": submittedData.larynxVolume,         
        "trachea_volume": submittedData.tracheaVolume,       
        "bronchi_volume": submittedData.bronchiVolume,       
        "alveoli_volume": submittedData.alveoliVolume,       
        
        "vasculature.resistance": submittedData.vasculatureResistance,
        "vasculature.compliance": submittedData.vasculatureCompliance,
        "reabsorption.resistance": submittedData.reabsorptionResistance,
        "ventricles.resistance": submittedData.ventriclesResistance,   
        "ventricles.elastance": submittedData.ventriclesElastance,     
        "ventricles.volume": submittedData.ventriclesVolume,           
        
        status: "processing"
      };

      const response = await createJob({
        nome: submittedData.nome,
        parametros: JSON.stringify(payload),
        usuario_id: userId,
        status: "processing"
      });

      const jobCriado = response?.job;
      if (jobCriado) {
        setHistorico((prev) =>
          prev.map((item) =>
            item.historyId === simulationRecord.historyId
              ? { 
                  ...item, 
                  id: jobCriado.id,
                  simulationID: jobCriado.simulationID,
                  simID: jobCriado.simulationID,
                  source: 'api' 
                }
              : item
          )
        );
      }

    } catch (err) {
      console.warn("Simulação salva localmente, mas falha ao enviar para API:", err.message);
    }

    wizard.resetWizard();
  };

  const form = useSimulatorForm(handleSimulationSubmitted, loggedUserName);
  const staticSimID = `${userId || 'user'}_${form.currentSimulationID}`; // Detalhe a Discutir com Alonso currentSimulationID
  
  useEffect(() => {
    const submittedTimers = historico
      .filter((sim) => sim.status === 'Submitted')
      .map((sim) =>
        setTimeout(() => {
          setHistorico((prev) =>
            prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'processing' } : item))
          );
        }, 1200)
      );

    const processingTimers = historico
      .filter((sim) => sim.status === 'processing')
      .map((sim) =>
        setTimeout(() => {
          setHistorico((prev) =>
            prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'completed' } : item))
          );
        }, 2600)
      );

    return () => {
      submittedTimers.forEach((timer) => clearTimeout(timer));
      processingTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [historico]);

  const handleDeleteSimulation = async (simulation) => {
    if (selectedSim?.historyId === simulation.historyId) {
      setSelectedSim(null);
    }
    
    setHistorico((prev) => prev.filter((sim) => sim.historyId !== simulation.historyId));
    
    if (simulation.source === 'api') {
      try {
        const id = simulation.id;
        if (id) await deleteJob(id);
      } catch (err) {
        console.warn("Falha ao deletar da API:", err.message);
      }
    }
    
    setPendingDeleteSim(null);
  };

  const handleDownloadSimulation = (simulation) => {
    let simData = simulation;
    if (simulation.parametros) {
      try {
        simData = typeof simulation.parametros === 'string' 
          ? JSON.parse(simulation.parametros) 
          : { ...simulation, ...simulation.parametros };
      } catch(e) {
        simData = simulation;
      }
    }
    const content = buildSimulationTxtContent(simData);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = (simulation.nome || 'simulation').replace(/[^a-z0-9._-]/gi, '_');
    link.href = url;
    link.download = `${safeName || 'simulation'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <PageLayout>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
        <Card padding="2.5rem" style={{ minHeight: '35rem' }}>
          
          <Title underline>Configure Simulation</Title>
          
          <Tabs 
            tabs={SIMULATOR_TABS.map(tab => ({
              value: tab,
              label: tab,
              icon: TAB_ICONS[tab]
            }))} 
            activeTab={wizard.activeTab} 
            withBorder 
            onChange={(tab) => wizard.setActiveTab(tab)} 
          />

          <SimulationForm onSubmit={form.handleSubmit}>
            {wizard.activeTab === 'Cardiac' && <CardiacTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Cardiac} />}
            {wizard.activeTab === 'Vascular' && <VascularTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Vascular} />}
            {wizard.activeTab === 'Respiration' && <RespirationTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Respiration} />}
            {wizard.activeTab === 'Intracranial' && <IntracranialTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Intracranial} />}
            {wizard.activeTab === 'Submit simulation' && (
              <>
                <SubmitTab
                  formData={form.formData}
                  handleChange={form.handleChange}
                  isLoading={form.isLoading}
                  erro={form.erro}
                  staticUserName={getUserNameFromToken() || loggedUserName}
                  staticSimID={staticSimID}
                />
                <BottomNav>
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={form.isLoading}
                    className="nav-btn"
                  >
                    Submit Simulation
                  </Button>
                </BottomNav>
              </>
            )}
          </SimulationForm>
        </Card>

        <SimulationHistoryList 
          historico={historico}
          setSelectedSim={setSelectedSim}
          setPendingDeleteSim={setPendingDeleteSim}
        />
        
        <BackToTop />
      </div>
      
      <SimulationDetailsModal 
        selectedSim={selectedSim}
        onClose={() => setSelectedSim(null)}
        onDownload={handleDownloadSimulation}
      />

      <DeleteSimulationModal 
        simulation={pendingDeleteSim}
        onClose={() => setPendingDeleteSim(null)}
        onConfirm={() => handleDeleteSimulation(pendingDeleteSim)}
      />
    </PageLayout>
  );
}