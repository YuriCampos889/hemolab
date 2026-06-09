import React, { useState, useEffect } from 'react'; 
import { Activity, Droplet, Wind, Brain, Send, AlertCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();
  
  const [userId] = useState(() => {
    return getUserIdFromToken() || null;
  });
  
  const [historico, setHistorico] = useState([]);

  const [selectedSim, setSelectedSim] = useState(null); 
  const [pendingDeleteSim, setPendingDeleteSim] = useState(null);
  const [submissionErrors, setSubmissionErrors] = useState([]);
  const [apiError, setApiError] = useState(null);

  // Mapeamento dos campos para as suas respectivas abas
  const FIELD_TAB_MAP = {
    cardiacCycle: 'Cardiac', cardiacOutput: 'Cardiac', systoleDuration: 'Cardiac', retrogradeDuration: 'Cardiac', retrogradeAmplitude: 'Cardiac',
    lumenRadius: 'Vascular', wallThickness: 'Vascular', arterialLength: 'Vascular', elastinFactor: 'Vascular', collagenFactor: 'Vascular', smoothMuscleFactor: 'Vascular', collagenMean: 'Vascular', collagenWidth: 'Vascular',
    inspiratoryPeriod: 'Respiration', expiratoryPeriod: 'Respiration', inspiratoryPressure: 'Respiration', expiratoryPressure: 'Respiration', larynxVolume: 'Respiration', tracheaVolume: 'Respiration', bronchiVolume: 'Respiration', alveoliVolume: 'Respiration',
    vasculatureResistance: 'Intracranial', vasculatureCompliance: 'Intracranial', reabsorptionResistance: 'Intracranial', ventriclesResistance: 'Intracranial', ventriclesElastance: 'Intracranial', ventriclesVolume: 'Intracranial'
  };

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
                simID: params.simID || params.simulationID || `#${job.id}`,
                submittedAt: params.submittedAt || params.date || job.createdAt || new Date().toISOString(),
                simulationID: params.simulationID || `#${job.id}`,
                id: job.id
              };
            });
            
            jobsFormatados.forEach(j => console.log(`  ${j.nome}: ${j.status} (source: ${j.source})`));
            
            setHistorico(jobsFormatados);
          } else {
            setHistorico([]);
          }
        } catch (err) {
          console.warn("Não foi possível carregar histórico da API:", err.message);
          setHistorico([]);
        }
      };
      
      carregarHistoricoAPI();
    }, [userId]);

  // Efeito para rolar direto para o formulário e voltar à primeira aba ao vir da Home
  useEffect(() => {
    if (location.state?.reset) {
      wizard.setActiveTab('Cardiac'); 
      
      setTimeout(() => {
        const formCard = document.getElementById('simulation-form-card');
        if (formCard) {
          // Rola suavemente até o card do formulário
          formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Aguarda 100ms para garantir que a tela foi renderizada

      // Limpa a variável de estado para não repetir o efeito se o usuário atualizar a página manualmente
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, wizard]);

  // Função utilitária para converter e tratar valores numéricos
  const parseNumber = (val) => {
    if (val === undefined || val === null || val === '') return null;
    const parsed = parseFloat(val);
    return isNaN(parsed) ? null : parsed;
  };

  const handleSimulationSubmitted = async (submittedData) => { 
    setApiError(null);
    
    const errors = [];
    
    Object.entries(submittedData).forEach(([key, value]) => {
      // Valida apenas os parâmetros numéricos que estão mapeados nas abas
      if (!FIELD_TAB_MAP[key]) return;
      
      const num = parseFloat(value);
      if (isNaN(num) || num < 0) {
        const formattedField = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        errors.push({
          tab: FIELD_TAB_MAP[key],
          field: formattedField
        });
      }
    });

    if (errors.length > 0) {
      setSubmissionErrors(errors);
      return; // Interrompe o envio
    }

    setSubmissionErrors([]); // Limpa os erros caso passe na validação

    const simulationRecord = {
      ...submittedData,
      simID: submittedData.simulationID,
      userID: userId,
      userName: getUserNameFromToken(),
      historyId: `${submittedData.simulationID}-${Math.random().toString(36).slice(2, 8)}`,
      status: 'processing'
    };

    try {
      const payload = {
        model: "ADAVN",
        user: getUserNameFromToken(),
        userID: userId,
        simID: submittedData.simulationID,
        date: new Date().toISOString(),
        name: submittedData.nome,
        
        "cardiac.waveform": submittedData.waveform,
        "cardiac.cycle": parseNumber(submittedData.cardiacCycle),
        "cardiac.output": parseNumber(submittedData.cardiacOutput),
        "systole.duration": parseNumber(submittedData.systoleDuration),
        "retrograde.duration": parseNumber(submittedData.retrogradeDuration),
        "retrograde.amplitude": parseNumber(submittedData.retrogradeAmplitude),
        
        "geometry.rad": parseNumber(submittedData.lumenRadius),
        "geometry.thickness": parseNumber(submittedData.wallThickness),
        "geometry.length": parseNumber(submittedData.arterialLength),
        "mechanical.Ee": parseNumber(submittedData.elastinFactor),
        "mechanical.Ec": parseNumber(submittedData.collagenFactor),
        "mechanical.Km": parseNumber(submittedData.smoothMuscleFactor),   
        "mechanical.e0": parseNumber(submittedData.collagenMean),         
        "mechanical.er": parseNumber(submittedData.collagenWidth), 

        
        "inspiratory.period": parseNumber(submittedData.inspiratoryPeriod),
        "expiratory.period": parseNumber(submittedData.expiratoryPeriod),
        "inspiratory.pressure": parseNumber(submittedData.inspiratoryPressure),
        "expiratory.pressure": parseNumber(submittedData.expiratoryPressure),
        "larynx_volume": parseNumber(submittedData.larynxVolume),         
        "trachea_volume": parseNumber(submittedData.tracheaVolume),       
        "bronchi_volume": parseNumber(submittedData.bronchiVolume),       
        "alveoli_volume": parseNumber(submittedData.alveoliVolume),       
        
        "vasculature.resistance": parseNumber(submittedData.vasculatureResistance),
        "vasculature.compliance": parseNumber(submittedData.vasculatureCompliance),
        "reabsorption.resistance": parseNumber(submittedData.reabsorptionResistance),
        "ventricles.resistance": parseNumber(submittedData.ventriclesResistance),   
        "ventricles.elastance": parseNumber(submittedData.ventriclesElastance),     
        "ventricles.volume": parseNumber(submittedData.ventriclesVolume),           
        
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
        const novoJob = {
          ...simulationRecord,
          id: jobCriado.id,
          simulationID: jobCriado.simulationID || simulationRecord.simID,
          simID: jobCriado.simulationID || simulationRecord.simID,
          source: 'api',
          status: jobCriado.status || 'processing'
        };
        
        setHistorico((prev) => [novoJob, ...prev]);
      }
      
      wizard.resetWizard(); // Reseta o formulário apenas em caso de sucesso

    } catch (err) {
      console.warn("Falha ao enviar para API:", err.message);
      setApiError("Error submitting the simulation to the server");
    }
  };

  const form = useSimulatorForm(handleSimulationSubmitted, loggedUserName);
  const staticSimID = `${userId || 'user'}_${form.currentSimulationID}`; // Detalhe a Discutir com Alonso currentSimulationID
  
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
        <Card padding="2.5rem" style={{ minHeight: '35rem' }} id="simulation-form-card">
          
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
            {wizard.activeTab === 'Cardiac' && <CardiacTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Cardiac && !submissionErrors.some(e => e.tab === 'Cardiac')} />}
            {wizard.activeTab === 'Vascular' && <VascularTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Vascular && !submissionErrors.some(e => e.tab === 'Vascular')} />}
            {wizard.activeTab === 'Respiration' && <RespirationTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Respiration && !submissionErrors.some(e => e.tab === 'Respiration')} />}
            {wizard.activeTab === 'Intracranial' && <IntracranialTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Intracranial && !submissionErrors.some(e => e.tab === 'Intracranial')} />}
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
                  {submissionErrors.length > 0 && (
                    <div style={{ flex: 1, display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ color: '#DC2626', fontSize: '0.9rem', fontWeight: 600 }}>
                        Check invalid or negative values in:
                      </span>
                      {submissionErrors.map((err, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => wizard.setActiveTab(err.tab)}
                          style={{
                            background: '#FEE2E2', color: '#B91C1C', border: '1px solid #F87171',
                            padding: '0.3rem 0.6rem', borderRadius: '0.4rem', fontSize: '0.8rem',
                            fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem',
                            transition: 'all 0.2s'
                          }}
                          title="Click to go to this tab"
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          {err.tab} &rarr; {err.field}
                        </button>
                      ))}
                    </div>
                )}
                {apiError && (
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', padding: '0.6rem 1rem', borderRadius: '0.4rem', border: '1px solid #F87171', color: '#B91C1C', fontSize: '0.85rem', fontWeight: 600 }}>
                    <AlertCircle size={18} />
                    <span>{apiError}</span>
                  </div>
                  )}
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