import React, { useState, useEffect } from 'react'; // Importação do useState e useEffect adicionada
// import { Trash2, Eye, X, Download } from 'lucide-react'; // Pode descomentar isso se for usar os ícones no histórico

import useWizard from '../../hooks/Wizard';
import useSimulatorForm from '../../hooks/SimulationForm';
import useAutoScroll from '../../hooks/AutoScroll';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';

import { SimulationForm, BottomNav, NavButtonGroup } from './styles'; 

import CardiacTab from './components/CardiacTab';
import VascularTab from './components/VascularTab';
import RespirationTab from './components/RespirationTab';
import IntracranialTab from './components/IntracranialTab';
import SubmitTab from './components/SubmitTab';

const SIMULATOR_TABS = ['Cardiac', 'Vascular', 'Respiration', 'Intracranial', 'Submit simulation'];

export default function ConfigSimulacaoScreen() {
  const scrollRef = useAutoScroll();
  const wizard = useWizard(SIMULATOR_TABS);
  
  // === ESTADOS DO HISTÓRICO DESCOMENTADOS ===
  const [historico, setHistorico] = useState(() => {
    const historicoGuardado = localStorage.getItem('@HeMoLAB:historico');
    return historicoGuardado ? JSON.parse(historicoGuardado) : [];
  });
  const [selectedSim, setSelectedSim] = useState(null); 

  useEffect(() => {
    localStorage.setItem('@HeMoLAB:historico', JSON.stringify(historico));
  }, [historico]);

  const form = useSimulatorForm(() => wizard.resetWizard());

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
            {wizard.activeTab === 'Submit simulation' && <SubmitTab formData={form.formData} handleChange={form.handleChange} isLoading={form.isLoading} erro={form.erro} />}

            <BottomNav>
              <Button type="button" variant="outline" disabled={wizard.isFirstTab} onClick={wizard.handleBack}>
                Back
              </Button>

              {!wizard.isSubmitTab && (
                <NavButtonGroup>
                  <Button type="button" variant="secondary" disabled={wizard.isCurrentSaved} onClick={wizard.handleSave}>
                    {wizard.isCurrentSaved ? 'Saved' : 'Save Parameters'}
                  </Button>
                  <Button type="button" variant="primary" disabled={!wizard.isCurrentSaved} onClick={wizard.handleNext}>
                    Next Step
                  </Button>
                </NavButtonGroup>
              )}
            </BottomNav>
          </SimulationForm>
        </Card>

        {/* === SEÇÃO DE HISTÓRICO DESCOMENTADA E AJUSTADA === */}
        <Card padding="32px" style={{ marginTop: '24px' }}>
          <Title level="h3">Histórico de Simulações</Title>
          <div style={{ marginTop: '20px' }}>
            {historico.length === 0 ? (
               <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #CBD5E1' }}>Histórico Vazio</div>
            ) : (
               <p>Simulações salvas: {historico.length}</p>
               /* Aqui você pode adicionar a renderização da tabela do histórico quando quiser exibir os detalhes */
            )}
          </div>
        </Card>
      </div>
      
      {/* === MODAL MANTIDO COMENTADO (Até você precisar dele) ===
      {selectedSim && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)' }}>
           Modal Detalhes...
        </div>
      )}
      */}
    </PageLayout>
  );
}