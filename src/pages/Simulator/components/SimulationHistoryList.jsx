import React from 'react';
import { Trash2, Eye, CheckCircle2, Loader2, CircleDashed } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Title from '../../../components/ui/Title';
import { 
  HistoryCard, HistoryInfo, SimTitle, MetaRow, StatusPill, IdPill, DateText, TimeText, ActionRow, ActionBtn
} from '../styles';
import { formatDateTimeSplit } from '../utils/simulationUtils';

export default function SimulationHistoryList({ historico, setSelectedSim, setPendingDeleteSim }) {
  const getStatusIcon = (status) => {
    if (status === 'Done' || status === 'Completed') return <CheckCircle2 size={14} />;
    if (status === 'Running') return <Loader2 size={14} className="animate-spin" />;
    return <CircleDashed size={14} />;
  };

  return (
    <Card padding="32px" style={{ marginTop: '24px' }}>
      <Title level="h3">Simulation History</Title>
      <div style={{ marginTop: '20px' }}>
        {historico.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #CBD5E1', borderRadius: '8px' }}>
            No simulations yet
          </div>
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
                      View log
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
  );
}