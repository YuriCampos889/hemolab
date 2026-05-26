import React from 'react';
import Title from '../../../components/ui/Title';
import Button from '../../../components/ui/Button';

export default function DeleteSimulationModal({ simulation, onClose, onConfirm }) {
  if (!simulation) return null;

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
        zIndex: 2100
      }}
      onClick={onClose}
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
          This action will permanently remove <strong>{simulation.nome}</strong> from history.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <Button type="button" variant="outline" size="small" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" variant="primary" size="small" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}