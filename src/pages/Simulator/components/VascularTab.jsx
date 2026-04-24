import React from 'react';
import Input from '../../../components/ui/Input';
import Title from '../../../components/ui/Title';
import { TabLayout, FormSide, InfoCard, InfoTitle, InfoText, FormGrid } from '../styles';

export default function VascularTab({ formData, handleChange, isLocked }) {
  return (
    <TabLayout>
      <FormSide>
        <Title level="h4" style={{ marginBottom: '16px' }}>Vascular Geometry</Title>
        
        <FormGrid>
          <Input 
            label="Lumen Radius" 
            type="number" 
            step="any" 
            name="lumenRadius" 
            value={formData.lumenRadius} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Wall Thickness" 
            type="number" 
            step="any" 
            name="wallThickness" 
            value={formData.wallThickness} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <div style={{ gridColumn: '1 / -1' }}>
            <Input 
              label="Arterial Length" 
              type="number" 
              step="any" 
              name="arterialLength" 
              value={formData.arterialLength} 
              onChange={handleChange} 
              disabled={isLocked}
            />
          </div>
        </FormGrid>

        <Title level="h4" style={{ marginBottom: '16px', marginTop: '24px' }}>Mechanical Factors</Title>
        
        <FormGrid>
          <Input 
            label="Elastin Factor" 
            type="number" 
            step="any" 
            name="elastinFactor" 
            value={formData.elastinFactor} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Collagen Factor" 
            type="number" 
            step="any" 
            name="collagenFactor" 
            value={formData.collagenFactor} 
            onChange={handleChange} 
            disabled={isLocked}
          />
        </FormGrid>
      </FormSide>

      <InfoCard>
        <InfoTitle>Vascular</InfoTitle>
        <InfoText>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.
        </InfoText>
        <InfoText>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text.
        </InfoText>
      </InfoCard>
    </TabLayout>
  );
}