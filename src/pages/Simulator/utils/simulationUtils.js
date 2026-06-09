import { getUserNameFromToken, getUserIdFromToken } from '../../../hooks/jwtDecoder';

export const formatDateTimeSplit = (isoDate) => {
    if (!isoDate) return { datePart: '', timePart: '' };
    const d = new Date(isoDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const datePart = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    const timePart = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    
    return { datePart, timePart };
};
  
export const formatDateForDisplay = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US');
};
  
export const buildSimulationTxtContent = (simulation) => {
    // Pega do simulation direto (que já foi mesclado com parametros)
    return [
      '[general]',
      'model: ADAVN',
      `user: ${simulation.user || getUserNameFromToken() || simulation.userName}`,
      `userID: ${simulation.userID || getUserIdFromToken()}`,
      `simID: ${simulation.simID}`,
      `date: ${simulation.date || simulation.submittedAt}`,
      `name: ${simulation.name || simulation.nome}`,
      '',
      '[params.cardiac]',
      `cardiac.waveform: ${simulation['cardiac.waveform'] || simulation.waveform}`,
      `cardiac.cycle: ${simulation['cardiac.cycle'] || simulation.cardiacCycle}`,
      `cardiac.output: ${simulation['cardiac.output'] || simulation.cardiacOutput}`,
      `systole.duration: ${simulation['systole.duration'] || simulation.systoleDuration}`,
      `retrograde.duration: ${simulation['retrograde.duration'] || simulation.retrogradeDuration}`,
      `retrograde.amplitude: ${simulation['retrograde.amplitude'] || simulation.retrogradeAmplitude}`,
      '',
      '[params.respiration]',
      `respiration.inspiratory_period: ${simulation['inspiratory.period'] || simulation.inspiratoryPeriod}`,
      `respiration.expiratory_period: ${simulation['expiratory.period'] || simulation.expiratoryPeriod}`,
      `respiration.inspiratory_pressure: ${simulation['inspiratory.pressure'] || simulation.inspiratoryPressure}`,
      `respiration.expiratory_pressure: ${simulation['expiratory.pressure'] || simulation.expiratoryPressure}`,
      `respiration.larynx_volume: ${simulation['larynx_volume'] || simulation.larynxVolume}`,
      `respiration.trachea_volume: ${simulation['trachea_volume'] || simulation.tracheaVolume}`,
      `respiration.bronchi_volume: ${simulation['bronchi_volume'] || simulation.bronchiVolume}`,
      `respiration.alveoli_volume: ${simulation['alveoli_volume'] || simulation.alveoliVolume}`,
      '',
      '[params.vascular]',
      `geometry.rad: ${simulation['geometry.rad'] || simulation.lumenRadius}`,
      `geometry.thickness: ${simulation['geometry.thickness'] || simulation.wallThickness}`,
      `geometry.length: ${simulation['geometry.length'] || simulation.arterialLength}`,
      `mechanical.Ee: ${simulation['mechanical.Ee'] || simulation.elastinFactor}`,
      `mechanical.Ec: ${simulation['mechanical.Ec'] || simulation.collagenFactor}`,
      `mechanical.Km: ${simulation['mechanical.Km'] || simulation.smoothMuscleFactor}`,
      `mechanical.e0: ${simulation['mechanical.e0'] || simulation.collagenMean}`,
      `mechanical.er: ${simulation['mechanical.er'] || simulation.collagenWidth}`,
      '',
      '[params.intracranial]',
      `vasculature.resistance: ${simulation['vasculature.resistance'] || simulation.vasculatureResistance}`,
      `vasculature.compliance: ${simulation['vasculature.compliance'] || simulation.vasculatureCompliance}`,
      `ventricles.resistance: ${simulation['ventricles.resistance'] || simulation.ventriclesResistance}`,
      `ventricles.elastance: ${simulation['ventricles.elastance'] || simulation.ventriclesElastance}`,
      `ventricles.volume: ${simulation['ventricles.volume'] || simulation.ventriclesVolume}`,
      `reabsorption.resistance: ${simulation['reabsorption.resistance'] || simulation.reabsorptionResistance}`
    ].join('\n');
};