import React from 'react';
import { X, Download } from 'lucide-react';
import Title from '../../../components/ui/Title';
import Button from '../../../components/ui/Button';
import { formatDateForDisplay, buildSimulationTxtContent } from '../utils/simulationUtils';

export default function SimulationDetailsModal({ selectedSim, onClose, onDownload }) {
  if (!selectedSim) return null;

  // Mescla parametros no selectedSim para o preview
  let simData = selectedSim;
  if (selectedSim.parametros) {
    try {
      simData = typeof selectedSim.parametros === 'string' 
        ? JSON.parse(selectedSim.parametros) 
        : { ...selectedSim, ...selectedSim.parametros };
    } catch(e) {
      simData = selectedSim;
    }
  }

  return (
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
      onClick={onClose}
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
            onClick={onClose}
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
          <p style={{ margin: 0 }}><strong>User:</strong> {simData.user || simData.userName}</p>
          <p style={{ margin: 0 }}><strong>SimID:</strong> {simData.simID}</p>
          <p style={{ margin: 0 }}><strong>Name:</strong> {simData.name || simData.nome}</p>
          <p style={{ margin: 0 }}><strong>Date:</strong> {formatDateForDisplay(simData.submittedAt)}</p>
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
          {buildSimulationTxtContent(simData)}
        </pre>

        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" variant="primary" onClick={() => onDownload(simData)}>
            <Download size={16} />
            Download .txt
          </Button>
        </div>
      </div>
    </div>
  );
}