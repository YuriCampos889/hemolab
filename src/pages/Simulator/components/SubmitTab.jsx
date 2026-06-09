import React from 'react';
import Input from '../../../components/ui/Input';
import Title from '../../../components/ui/Title';

export default function SubmitTab({ formData, handleChange, erro, staticUserName, staticSimID }) {
  return (
    <>
      <Title level="h4" style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
        Finalize Submission
      </Title>

      <div style={{ width: '55rem', maxWidth: '100%', marginBottom: '0.75rem' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#1A2B4C', textTransform: 'uppercase' }}>User</p>
        <p style={{ margin: '0.25rem 0 0 0', color: '#4A5568' }}>{staticUserName}</p>
      </div>

      <div style={{ width: '55rem', maxWidth: '100%', marginBottom: '1rem' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#1A2B4C', textTransform: 'uppercase' }}>ID</p>
        <p style={{ margin: '0.25rem 0 0 0', color: '#4A5568' }}>{staticSimID}</p>
      </div>

      <Input 
        label="Simulation Name"
        type="text" 
        name="nome" 
        value={formData.nome}
        onChange={handleChange}
        error={erro && !staticUserName ? erro : null}
        placeholder="e.g. adavn sim 2026.04.21 14.30.00"
        fullWidth={false}
        style={{ width: '55rem', maxWidth: '100%' }}
      />
    </>
  );
}