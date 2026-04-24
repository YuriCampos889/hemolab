import React from 'react';
import Input from '../../../components/ui/Input';
import { TabLayout, FormSide, InfoCard, InfoTitle, InfoText, FormGrid } from '../styles';

export default function IntracranialTab({ formData, handleChange, isLocked }) {
  return (
    <TabLayout>
      <FormSide>
        <FormGrid>
          <Input
            label="Resistance Factor"
            type="number" 
            step="any" 
            name="vasculatureResistance" 
            value={formData.vasculatureResistance} 
            onChange={handleChange} 
            disabled={isLocked}
          />

          <Input
            label="Compliance Factor"
            type="number" 
            step="any" 
            name="vasculatureCompliance" 
            value={formData.vasculatureCompliance} 
            onChange={handleChange} 
            disabled={isLocked}
          />

          <div style={{ gridColumn: '1 / -1' }}>
            <Input
              label="Reabsorption Resistance"
              type="number" 
              step="any" 
              name="reabsorptionResistance" 
              value={formData.reabsorptionResistance} 
              onChange={handleChange} 
              disabled={isLocked}
            />
          </div>
        </FormGrid>
      </FormSide>

      <InfoCard>
        <InfoTitle>Intracranial</InfoTitle>
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