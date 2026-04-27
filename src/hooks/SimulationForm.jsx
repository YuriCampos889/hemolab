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

const formatDateForName = (date) => {
  const pad = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}.${pad(date.getMinutes())}.${pad(date.getSeconds())}`;
};

const createUserId = (userName) => {
  const sanitized = userName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');

  return sanitized || 'user';
};

const createShortSimulationId = () => {
  return `${Date.now().toString(36).slice(-4)}${Math.random().toString(36).slice(2, 4)}`.toUpperCase();
};

export default function useSimulatorForm(onSuccessCallback, staticUserName = 'Guest User') {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [currentSimulationID, setCurrentSimulationID] = useState(() => createShortSimulationId());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erro) setErro(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!staticUserName.trim()) {
      setErro('USER NAME IS REQUIRED.');
      return;
    }

    setIsLoading(true);
    const submitDate = new Date();
    const userID = createUserId(staticUserName);
    const simulationID = currentSimulationID;
    const defaultName = `adavn sim ${formatDateForName(submitDate)}`;
    const simulationName = formData.nome.trim() || defaultName;
    const submitPayload = {
      ...formData,
      userName: staticUserName,
      nome: simulationName,
      userID,
      simulationID,
      simID: `${userID}_${simulationID}`,
      submittedAt: submitDate.toISOString(),
      status: 'Submitted'
    };

    setTimeout(() => {
      setFormData(INITIAL_STATE);
      setIsLoading(false); 
      setCurrentSimulationID(createShortSimulationId());
      
      if (onSuccessCallback) {
        onSuccessCallback(submitPayload);
      }
    }, 2000);
  };

  return { formData, isLoading, erro, handleChange, handleSubmit, currentSimulationID };
}