import React, { useState, useEffect } from 'react'; 
import { Trash2, Eye, X, Download, CheckCircle2, Loader2, CircleDashed } from 'lucide-react'; // Adicionado ícones de status

import useWizard from '../../hooks/Wizard';
import useSimulatorForm from '../../hooks/SimulationForm';
import useAutoScroll from '../../hooks/AutoScroll';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';

import { 
  SimulationForm, BottomNav, NavButtonGroup,
  HistoryCard, HistoryInfo, SimTitle, MetaRow, StatusPill, IdPill, DateText, TimeText, ActionRow, ActionBtn
} from './styles'; 

import CardiacTab from './components/CardiacTab';
import VascularTab from './components/VascularTab';
import RespirationTab from './components/RespirationTab';
import IntracranialTab from './components/IntracranialTab';
import SubmitTab from './components/SubmitTab';

const SIMULATOR_TABS = ['Cardiac', 'Vascular', 'Respiration', 'Intracranial', 'Submit simulation'];

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

const formatDateTimeSplit = (isoDate) => {
  if (!isoDate) return { datePart: '', timePart: '' };
  const d = new Date(isoDate);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const datePart = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  const timePart = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  
  return { datePart, timePart };
};

const formatDateForDisplay = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleString('en-US');
};

const buildSimulationTxtContent = (simulation) => {
  return [
    '[general]',
    'model: ADAVN',
    `user: ${simulation.userName}`,
    `userID: ${simulation.userID}`,
    `simID: ${simulation.simID}`,
    `date: ${simulation.submittedAt}`,
    `name: ${simulation.nome}`,
    '',
    '[params.cardiac]',
    `cardiac.waveform: ${simulation.waveform}`,
    `cardiac.cycle: ${simulation.cardiacCycle}`,
    `cardiac.output: ${simulation.cardiacOutput}`,
    `systole.duration: ${simulation.systoleDuration}`,
    `retrograde.duration: ${simulation.retrogradeDuration}`,
    `retrograde.amplitude: ${simulation.retrogradeAmplitude}`,
    '',
    '[params.respiration]',
    `respiration.inspiratory_period: ${simulation.inspiratoryPeriod}`,
    `respiration.expiratory_period: ${simulation.expiratoryPeriod}`,
    `respiration.inspiratory_pressure: ${simulation.inspiratoryPressure}`,
    `respiration.expiratory_pressure: ${simulation.expiratoryPressure}`,
    `respiration.larynx_volume: ${simulation.larynxVolume}`,
    `respiration.trachea_volume: ${simulation.tracheaVolume}`,
    `respiration.bronchi_volume: ${simulation.bronchiVolume}`,
    `respiration.alveoli_volume: ${simulation.alveoliVolume}`,
    '',
    '[params.vascular]',
    `geometry.rad: ${simulation.lumenRadius}`,
    `geometry.thickness: ${simulation.wallThickness}`,
    `geometry.length: ${simulation.arterialLength}`,
    `mechanical.Ee: ${simulation.elastinFactor}`,
    `mechanical.Ec: ${simulation.collagenFactor}`,
    `mechanical.Km: ${simulation.smoothMuscleFactor}`,
    `mechanical.e0: ${simulation.collagenMean}`,
    `mechanical.er: ${simulation.collagenWidth}`,
    '',
    '[params.intracranial]',
    `vasculature.resistance: ${simulation.vasculatureResistance}`,
    `vasculature.compliance: ${simulation.vasculatureCompliance}`,
    `ventricles.resistance: ${simulation.ventriclesResistance}`,
    `ventricles.elastance: ${simulation.ventriclesElastance}`,
    `ventricles.volume: ${simulation.ventriclesVolume}`,
    `reabsorption.resistance: ${simulation.reabsorptionResistance}`
  ].join('\n');
};

export default function ConfigSimulacaoScreen() {
  const scrollRef = useAutoScroll();
  const wizard = useWizard(SIMULATOR_TABS);
  const [isSavingAndNext, setIsSavingAndNext] = useState(false);
  const [loggedUserName] = useState(() => getLoggedUserName());
  
  const [historico, setHistorico] = useState(() => {
    const historicoGuardado = localStorage.getItem('@HeMoLAB:historico');
    return historicoGuardado ? JSON.parse(historicoGuardado) : [];
  });
  const [selectedSim, setSelectedSim] = useState(null); 
  const [pendingDeleteSim, setPendingDeleteSim] = useState(null);

  useEffect(() => {
    localStorage.setItem('@HeMoLAB:historico', JSON.stringify(historico));
  }, [historico]);

  const handleSimulationSubmitted = (submittedData) => {
    const simulationRecord = {
      ...submittedData,
      historyId: `${submittedData.simulationID}-${Math.random().toString(36).slice(2, 8)}`
    };

    setHistorico((prev) => [simulationRecord, ...prev]);
    wizard.resetWizard();
  };

  const form = useSimulatorForm(handleSimulationSubmitted, loggedUserName);
  const staticSimID = `${form.formData.userID || loggedUserName.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') || 'user'}_${form.currentSimulationID}`;
  
  useEffect(() => {
    const submittedTimers = historico
      .filter((sim) => sim.status === 'Submitted')
      .map((sim) =>
        setTimeout(() => {
          setHistorico((prev) =>
            prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'Running' } : item))
          );
        }, 1200)
      );

    const runningTimers = historico
      .filter((sim) => sim.status === 'Running')
      .map((sim) =>
        setTimeout(() => {
          setHistorico((prev) =>
            prev.map((item) => (item.historyId === sim.historyId ? { ...item, status: 'Done' } : item))
          );
        }, 2600)
      );

    return () => {
      submittedTimers.forEach((timer) => clearTimeout(timer));
      runningTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [historico]);

  const handleSaveAndNext = async () => {
    if (isSavingAndNext) return;

    setIsSavingAndNext(true);

    if (!wizard.isCurrentSaved) {
      wizard.handleSave();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    wizard.handleNext();
    setIsSavingAndNext(false);
  };

  const handleDeleteSimulation = (simulation) => {
    if (selectedSim?.historyId === simulation.historyId) {
      setSelectedSim(null);
    }
    setHistorico((prev) => prev.filter((sim) => sim.historyId !== simulation.historyId));
    setPendingDeleteSim(null);
  };

  const handleDownloadSimulation = (simulation) => {
    const content = buildSimulationTxtContent(simulation);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = simulation.nome.replace(/[^a-z0-9._-]/gi, '_');

    link.href = url;
    link.download = `${safeName || 'simulation'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status) => {
    if (status === 'Done' || status === 'Completed') return <CheckCircle2 size={14} />;
    if (status === 'Running') return <Loader2 size={14} className="animate-spin" />;
    return <CircleDashed size={14} />;
  };

  return (
    <PageLayout>
      <div ref={scrollRef}>
        <Card padding="40px" style={{ minHeight: '750px' }}>
          
          <Title underline>Configure Simulation</Title>
          
          <Tabs 
            tabs={SIMULATOR_TABS} 
            activeTab={wizard.activeTab} 
            withBorder 
            readOnly 
          />

          <SimulationForm onSubmit={form.handleSubmit}>
            {wizard.activeTab === 'Cardiac' && <CardiacTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Cardiac} />}
            {wizard.activeTab === 'Vascular' && <VascularTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Vascular} />}
            {wizard.activeTab === 'Respiration' && <RespirationTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Respiration} />}
            {wizard.activeTab === 'Intracranial' && <IntracranialTab formData={form.formData} handleChange={form.handleChange} isLocked={wizard.savedTabs.Intracranial} />}
            {wizard.activeTab === 'Submit simulation' && (
              <SubmitTab
                formData={form.formData}
                handleChange={form.handleChange}
                isLoading={form.isLoading}
                erro={form.erro}
                staticUserName={loggedUserName}
                staticSimID={staticSimID}
              />
            )}

            <BottomNav>
              <Button type="button" variant="outline" disabled={wizard.isFirstTab} onClick={wizard.handleBack}>
                Back
              </Button>

              {!wizard.isSubmitTab && (
                <NavButtonGroup>
                  <Button
                    type="button"
                    variant="primary"
                    isLoading={isSavingAndNext}
                    onClick={handleSaveAndNext}
                  >
                    Save and Continue
                  </Button>
                </NavButtonGroup>
              )}
            </BottomNav>
          </SimulationForm>
        </Card>

        <Card padding="32px" style={{ marginTop: '24px' }}>
          <Title level="h3">Simulation History</Title>
          <div style={{ marginTop: '20px' }}>
            {historico.length === 0 ? (
               <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #CBD5E1', borderRadius: '8px' }}>No simulations yet</div>
            ) : (
              <div style={{ display: 'grid', gap: '16px' }}>
                {historico.map((sim) => {
                  const { datePart, timePart } = formatDateTimeSplit(sim.submittedAt);
                  const displayStatus = sim.status === 'Done' ? 'Completed' : (sim.status || 'Completed');

                  return (
                    <HistoryCard key={sim.historyId} $status={displayStatus}>
                      <HistoryInfo>
                        <SimTitle>{sim.nome}</SimTitle>
                        <MetaRow>
                          Status
                          <StatusPill $status={displayStatus}>
                            {getStatusIcon(displayStatus)}
                            {displayStatus}
                          </StatusPill>
                          <IdPill>ID: {sim.simID}</IdPill>
                        </MetaRow>
                        <DateText>{datePart}</DateText>
                        <TimeText>{timePart}</TimeText>
                      </HistoryInfo>
  
                      <ActionRow>
                        <ActionBtn type="button" $variant="view" onClick={() => setSelectedSim(sim)}>
                          <Eye size={16} />
                          View Results
                        </ActionBtn>
                        <ActionBtn type="button" $variant="delete" onClick={() => setPendingDeleteSim(sim)}>
                          <Trash2 size={16} />
                          Delete
                        </ActionBtn>
                      </ActionRow>
                    </HistoryCard>
                  );
                })}
              </div>
            )}
          </div>
        </Card>
      </div>
      
      {selectedSim && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 2000
          }}
          onClick={() => setSelectedSim(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '760px',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '24px'
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Title level="h4" style={{ margin: 0 }}>Simulation Details</Title>
              <button
                type="button"
                onClick={() => setSelectedSim(null)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#4A5568' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '12px',
                marginBottom: '20px',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '12px'
              }}
            >
              <p style={{ margin: 0 }}><strong>User:</strong> {selectedSim.userName}</p>
              <p style={{ margin: 0 }}><strong>SimID:</strong> {selectedSim.simID}</p>
              <p style={{ margin: 0 }}><strong>Name:</strong> {selectedSim.nome}</p>
              <p style={{ margin: 0 }}><strong>Date:</strong> {formatDateForDisplay(selectedSim.submittedAt)}</p>
            </div>

            <pre
              style={{
                background: '#F8F9FA',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '12px',
                whiteSpace: 'pre-wrap',
                margin: 0
              }}
            >
              {buildSimulationTxtContent(selectedSim)}
            </pre>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="button" variant="primary" onClick={() => handleDownloadSimulation(selectedSim)}>
                <Download size={16} />
                Download .txt
              </Button>
            </div>
          </div>
        </div>
      )}

      {pendingDeleteSim && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 2100
          }}
          onClick={() => setPendingDeleteSim(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '460px',
              padding: '20px',
              border: '1px solid #E2E8F0'
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <Title level="h4" style={{ marginTop: 0, marginBottom: '8px' }}>
              Delete simulation?
            </Title>
            <p style={{ marginTop: 0, marginBottom: '16px', color: '#4A5568' }}>
              This action will permanently remove <strong>{pendingDeleteSim.nome}</strong> from history.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <Button type="button" variant="outline" size="small" onClick={() => setPendingDeleteSim(null)}>
                Cancel
              </Button>
              <Button type="button" variant="primary" size="small" onClick={() => handleDeleteSimulation(pendingDeleteSim)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}