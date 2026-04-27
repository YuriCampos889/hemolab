import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Title from '../../../components/ui/Title';

export default function SubmitTab({ formData, handleChange, isLoading, erro, staticUserName, staticSimID }) {
  return (
    <>
      <Title level="h4" style={{ marginBottom: '16px', marginTop: '8px' }}>
        Finalize Submission
      </Title>

      <div style={{ width: '880px', maxWidth: '100%', marginBottom: '12px' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#1A2B4C', textTransform: 'uppercase' }}>User</p>
        <p style={{ margin: '4px 0 0 0', color: '#4A5568' }}>{staticUserName}</p>
      </div>

      <div style={{ width: '880px', maxWidth: '100%', marginBottom: '16px' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#1A2B4C', textTransform: 'uppercase' }}>ID</p>
        <p style={{ margin: '4px 0 0 0', color: '#4A5568' }}>{staticSimID}</p>
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
        style={{ width: '880px', maxWidth: '100%' }}
      />

      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        isLoading={isLoading}
        style={{ width: '880px', marginTop: '100px', minWidth: '220px' }}
      >
        SUBMIT SIMULATION
      </Button>
    </>
  );
}