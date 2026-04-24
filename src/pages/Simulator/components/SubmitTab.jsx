import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Title from '../../../components/ui/Title';

export default function SubmitTab({ formData, handleChange, isLoading, erro }) {
  return (
    <>
      <Title level="h4" style={{ marginBottom: '16px', marginTop: '8px' }}>
        Finalize Submission
      </Title>
      
      <Input 
        label="User Name"
        type="text" 
        name="userName" 
        value={formData.userName}
        onChange={handleChange}
        error={erro && !formData.userName ? 'Required' : null}
        placeholder="Enter your name"
      />

      <Input 
        label="Simulation Name"
        type="text" 
        name="nome" 
        value={formData.nome}
        onChange={handleChange}
        error={erro && !formData.nome ? erro : null}
        placeholder="e.g. adavn_sim_2026.04.21_14.30.00"
      />

      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        isLoading={isLoading}
        style={{ marginTop: '20px' }}
      >
        SUBMIT SIMULATION
      </Button>
    </>
  );
}