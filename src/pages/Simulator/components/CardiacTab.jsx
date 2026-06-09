import React from 'react';
import Input from '../../../components/ui/Input';
import { TabLayout, FormSide, InfoCard, InfoTitle, InfoText, FormGrid, Select } from '../styles';

export default function CardiacTab({ formData, handleChange, isLocked }) {
  return (
    <TabLayout>
      <FormSide>
        <FormGrid>
          <div style={{ gridColumn: '1 / -1' }}>
             <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#1A2B4C', marginBottom: '8px' }}>
               Cardiac Ejection Waveform
             </label>
             <Select name="waveform" value={formData.waveform} onChange={handleChange} disabled={isLocked}>
               <option value="Murgo1980">Murgo1980</option>
             </Select>
          </div>

          <Input 
            label="Cardiac Cycle (s)" 
            type="number" step="any" 
            name="cardiacCycle" value={formData.cardiacCycle} onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Cardiac Output (L/min)" 
            type="number" step="any" 
            name="cardiacOutput" value={formData.cardiacOutput} onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Systole Duration (s)" 
            type="number" step="any" 
            name="systoleDuration" value={formData.systoleDuration} onChange={handleChange} 
            disabled={isLocked}
          />
          
          <Input 
            label="Retrograde Duration (s)" 
            type="number" step="any" 
            name="retrogradeDuration" value={formData.retrogradeDuration} onChange={handleChange} 
            disabled={isLocked}
          />

          <Input 
            label="Retrograde Amplitude (cm³/s)" 
            type="number" step="any" 
            name="retrogradeAmplitude" value={formData.retrogradeAmplitude} onChange={handleChange} 
            disabled={isLocked}
          />
        </FormGrid>
      </FormSide>

      <InfoCard>
        <InfoTitle>Cardiac</InfoTitle>
        <InfoText>
        Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description 
        Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description 
        Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description Cardiac Text Description 
        </InfoText>
      </InfoCard>
    </TabLayout>
  );
}