import { useState } from 'react';

// Guardamos o estado inicial numa constante fora do Hook para facilitar o reset
const INITIAL_STATE = {
  nome: '', 
  userName: '', 
  waveform: 'Murgo1980', 
  cardiacCycle: 1.0, 
  cardiacOutput: 5.0,
  systoleDuration: 0.37, 
  retrogradeDuration: 0.035, 
  retrogradeAmplitude: 136.0,
  lumenRadius: 1.0, 
  wallThickness: 1.0, 
  arterialLength: 1.0, 
  elastinFactor: 1.0,
  collagenFactor: 1.0, 
  smoothMuscleFactor: 1.0, 
  collagenMean: 1.0, 
  collagenWidth: 1.0,
  inspiratoryPeriod: 1.875, 
  expiratoryPeriod: 3.125, 
  inspiratoryPressure: 1.0, 
  expiratoryPressure: 1.0, 
  larynxVolume: 1.0, 
  tracheaVolume: 1.0, 
  bronchiVolume: 1.0,
  alveoliVolume: 1.0, 
  vasculatureResistance: 1.0, 
  vasculatureCompliance: 1.0,
  vasculatureVolume: 1.0, 
  ventriclesResistance: 1.0, 
  ventriclesElastance: 1.0,
  ventriclesVolume: 1.0, 
  reabsorptionResistance: 1.0
};

export default function useSimulatorForm(onSuccessCallback) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erro) setErro(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!formData.nome.trim() || !formData.userName.trim()) {
      setErro("NOME DA SIMULAÇÃO E USUÁRIO SÃO OBRIGATÓRIOS.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setFormData(INITIAL_STATE);
      setIsLoading(false); 
      
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 2000);
  };

  return { formData, isLoading, erro, handleChange, handleSubmit };
}