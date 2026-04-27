import React from 'react';
import Input from '../../../components/ui/Input';
import { TabLayout, FormSide, InfoCard, InfoTitle, InfoText, FormGrid } from '../styles';

export default function RespirationTab({ formData, handleChange, isLocked }) {
  return (
    <TabLayout>
      <FormSide>
        <FormGrid>
          <Input 
            label="Inspiratory Period (s)" 
            type="number" 
            step="any" 
            name="inspiratoryPeriod" 
            value={formData.inspiratoryPeriod} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Expiratory Period (s)" 
            type="number" 
            step="any" 
            name="expiratoryPeriod" 
            value={formData.expiratoryPeriod} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Inspiratory Pressure" 
            type="number" 
            step="any" 
            name="inspiratoryPressure" 
            value={formData.inspiratoryPressure} 
            onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Expiratory Pressure" 
            type="number" 
            step="any" 
            name="expiratoryPressure" 
            value={formData.expiratoryPressure} 
            onChange={handleChange} 
            disabled={isLocked}
          />
        </FormGrid>
      </FormSide>

      <InfoCard>
        <InfoTitle>Respiration</InfoTitle>
        <InfoText>
          Respiratory Text Description Respiratory Text Description Respiratory Text Description Respiratory Text Description Respiratory Text Description Respiratory Text Description 

        </InfoText>
        <InfoText>
        Respiratory Text Description Respiratory Text Description Respiratory Text Description Respiratory Text Description Respiratory Text Description 
        </InfoText>
      </InfoCard>
    </TabLayout>
  );
}