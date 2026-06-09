import React, { useState } from 'react';
import { Trash2, Eye, EyeOff, CheckCircle2, Loader2, XCircle, CircleDashed, ChevronDown } from 'lucide-react';
import Card from '../../ui/Card';
import Title from '../../ui/Title';
import {
  HistoryCard, HistoryInfo, SimTitle, MetaRow, StatusPill, IdPill, DateText, TimeText, ActionRow, ActionBtn,
  DropdownContainer, DropdownButton, DropdownMenu, DropdownItem
} from './styles';
import { formatDateTimeSplit } from '../../../pages/Simulator/utils/simulationUtils';

// Simulação Base Saudável (Baseline injetada apenas no componente)
export const BASELINE_SIMULATION = {
  id: 'baseline-sim',
  historyId: 'system-baseline-001',
  simID: 'REF-001',
  simulationID: 'REF-001',
  nome: 'Simulation Base',
  status: 'completed',
  source: 'system',
  submittedAt: new Date().toISOString(),
  parametros: {
    cardiacOutput: 5.0,
    systoleDuration: 0.3,
    lumenRadius: 1.5,
    vasculatureResistance: 1.1,
    inspiratoryPressure: 10.0,
    ventriclesVolume: 70.0,
    cardiacCycle: 0.8,
    retrogradeDuration: 0.05,
    retrogradeAmplitude: 0,
    wallThickness: 0.15,
    arterialLength: 10.0,
    elastinFactor: 1.0,
    collagenFactor: 1.0,
    smoothMuscleFactor: 1.0,
    collagenMean: 1.0,
    collagenWidth: 1.0,
    inspiratoryPeriod: 2.0,
    expiratoryPeriod: 3.0,
    expiratoryPressure: 0.0,
    larynxVolume: 50.0,
    tracheaVolume: 100.0,
    bronchiVolume: 200.0,
    alveoliVolume: 3000.0,
    vasculatureCompliance: 0.5,
    reabsorptionResistance: 0.5,
    ventriclesResistance: 0.1,
    ventriclesElastance: 0.1
  }
};

export default function SimulationHistoryList({
  historico,
  setSelectedSim,
  setPendingDeleteSim,
  showActions = true,
  isOpenExternal,
  setIsOpenExternal,
  onSelect,
  selectedId
}) {
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const isOpen = isOpenExternal !== undefined ? isOpenExternal : isOpenInternal;
  const setIsOpen = setIsOpenExternal !== undefined ? setIsOpenExternal : setIsOpenInternal;

  // Controle local para saber se o usuário escondeu a baseline
  const [isBaselineDeleted, setIsBaselineDeleted] = useState(false);

  const displayHistorico = !isBaselineDeleted 
    ? (historico.some(h => h.id === 'baseline-sim') ? historico : [BASELINE_SIMULATION, ...historico]) 
    : historico.filter(h => h.id !== 'baseline-sim');

  const [selectedSim, setSelectedSimLocal] = useState(displayHistorico[0] || null);

  const getStatusIcon = (status) => {
    const s = (status || '').toLowerCase();
    if (s === 'completed') return <CheckCircle2 size={14} />;
    if (s === 'processing') return <Loader2 size={14} className="animate-spin" />;
    if (s === 'error') return <XCircle size={14} />;
    return <CircleDashed size={14} />;
  };

  const handleSelect = (sim) => {
    setSelectedSimLocal(sim);
    setIsOpen(false);
    if (onSelect) {
      onSelect(sim);
    }
  };

  // Modo dropdown para Results page (showActions = false)
  if (!showActions) {
    let selectedDisplayStatus = null;
    let selectedDate = '';
    let selectedTime = '';

    if (selectedSim) {
      selectedDisplayStatus = selectedSim.status === 'Done' ? 'Completed' : (selectedSim.status || 'Completed');
      const formatted = formatDateTimeSplit(selectedSim.submittedAt);
      selectedDate = formatted.datePart;
      selectedTime = formatted.timePart;
    }

    return (
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen} $status={selectedDisplayStatus}>
            {selectedSim ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1, paddingRight: '1rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 700, color: '#1A2B4C', fontSize: '0.82rem' }}>{selectedSim.nome}</div>
                  <StatusPill $status={selectedDisplayStatus} style={{ fontSize: '0.6rem' }}>
                    {getStatusIcon(selectedDisplayStatus)}
                    {selectedDisplayStatus}
                  </StatusPill>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>ID: {selectedSim.simID}</div>
                  <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.65rem', color: '#94A3B8' }}>
                    <span>{selectedDate}</span>
                    <span>{selectedTime}</span>
                  </div>
                </div>
              </div>
            ) : (
              <span style={{ color: '#94A3B8', flex: 1, textAlign: 'left' }}>Select a simulation...</span>
            )}
            <ChevronDown size={16} style={{ flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
          </DropdownButton>

          {isOpen && (
            <DropdownMenu>
              {displayHistorico.length === 0 ? (
                <DropdownItem disabled>No simulations available</DropdownItem>
              ) : (
                displayHistorico.map((sim) => {
                  const { datePart, timePart } = formatDateTimeSplit(sim.submittedAt);
                  const displayStatus = sim.status === 'Done' ? 'Completed' : (sim.status || 'Completed');
                  return (
                    <DropdownItem
                      key={sim.historyId}
                      onClick={() => handleSelect(sim)}
                      $selected={selectedSim?.historyId === sim.historyId}
                      $status={displayStatus}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ fontWeight: 700, color: '#1A2B4C', fontSize: '0.82rem' }}>{sim.nome}</div>
                          <StatusPill $status={displayStatus} style={{ fontSize: '0.6rem' }}>
                            {getStatusIcon(displayStatus)}
                            {displayStatus}
                          </StatusPill>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>ID: {sim.simID}</div>
                          <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.65rem', color: '#94A3B8' }}>
                            <span>{datePart}</span>
                            <span>{timePart}</span>
                          </div>
                        </div>
                      </div>
                    </DropdownItem>
                  );
                })
              )}
            </DropdownMenu>
          )}
        </DropdownContainer>
    );
  }

  const formatStatus = (status) => {
    if (!status) return 'Unknown';
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Card padding="32px">
      <Title level="h3">Simulation History</Title>
      <div style={{ marginTop: '20px' }}>
        {displayHistorico.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #CBD5E1', borderRadius: '8px' }}>
            No simulations yet
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {displayHistorico.map((sim) => {
              const { datePart, timePart } = formatDateTimeSplit(sim.submittedAt);
              const displayStatus = formatStatus(sim.status);
              const isSelected = selectedId === sim.historyId;
              const isBaseline = sim.id === 'baseline-sim';

              return (
                <HistoryCard 
                  key={sim.historyId} 
                  $status={displayStatus}
                  onClick={() => {
                    if (sim.status === 'completed' && onSelect) {
                      onSelect(sim);
                    }
                  }}
                  style={{ 
                    cursor: sim.status === 'completed' ? 'pointer' : 'default',
                    opacity: sim.status !== 'completed' ? 0.7 : 1,
                    ...(isSelected ? { border: '2px solid #0369A1' } : {}),
                    ...(isBaseline && !isSelected ? { backgroundColor: '#F8FAFC', border: '2px dashed #CBD5E1', boxShadow: 'none' } : {})
                  }}
                >
                  <HistoryInfo>
                    <SimTitle style={{ display: 'flex', alignItems: 'center' }}>
                      {sim.nome}
                    </SimTitle>
                    <MetaRow>
                      Status
                      <StatusPill $status={displayStatus}>
                        {getStatusIcon(sim.status)}
                        {displayStatus}
                      </StatusPill>
                      <IdPill>ID: {sim.simID}</IdPill>
                    </MetaRow>
                    <DateText>{datePart}</DateText>
                    <TimeText>{timePart}</TimeText>
                  </HistoryInfo>

                  {showActions && (
                    <ActionRow>
                    <ActionBtn 
                      type="button" 
                      $variant={isSelected ? 'selected' : 'view'}
                      onClick={(e) => { 
                        e.stopPropagation();
                        if (onSelect) {
                          onSelect(sim);
                        } else if (setSelectedSim) {
                          setSelectedSim(sim);
                        }
                      }}
                    >
                      <Eye size={16} />
                      {isSelected ? 'Selected' : onSelect ? 'Select' : 'View log'}
                    </ActionBtn>

                      {setPendingDeleteSim && !isBaseline && (
                        <ActionBtn 
                          type="button" 
                          $variant="delete" 
                          onClick={(e) => { 
                            e.stopPropagation();
                            setPendingDeleteSim(sim); 
                          }}
                        >
                          <Trash2 size={16} />
                          Delete
                        </ActionBtn>
                      )}
                    </ActionRow>
                  )}

                </HistoryCard>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}