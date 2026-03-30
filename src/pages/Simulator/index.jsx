import React, { useEffect, useRef, useState } from 'react'; 
import { 
  Trash2, 
  Eye,
  Activity,
  X,
  Download
} from 'lucide-react';

import {
  Container,
  GrayWrapper,
  MainContent,
  CenterColumn,
  FormTitle,
  SimulationForm,
  FormGrid,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  LoadingContainer,
  HistorySection,
  TableScrollContainer,
  HistoryTable,
  StatusBadge,
  ErrorMessage,
  ActionGroup,
  ActionButton,
  EmptyHistoryMessage,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  InfoRow,
  DownloadButton,
  CloseButton
} from './styles';

import Header from '../../components/Header';
import BackgroundTopbar from '../../components/Backgroundtopbar';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer'; 

export default function ConfigSimulacaoScreen() {
  const navbarRef = useRef(null);
  
  const [formData, setFormData] = useState({
    nome: '',
    co: '',
    hr: '',
    ee: '',
    ec: '',
    outras: ''
  });

  const [historico, setHistorico] = useState(() => {
    const historicoGuardado = localStorage.getItem('@HeMoLAB:historico');
    return historicoGuardado ? JSON.parse(historicoGuardado) : [];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [selectedSim, setSelectedSim] = useState(null); 

  useEffect(() => {
    localStorage.setItem('@HeMoLAB:historico', JSON.stringify(historico));
  }, [historico]);

  useEffect(() => {
    if (navbarRef.current) {
      setTimeout(() => {
        const rect = navbarRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({
          top: elementTop - 120,
          behavior: 'smooth'
        });
      }, 600); 
    }
  }, []); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erro) setErro(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!formData.nome.trim()) {
      setErro("NOME DA SIMULAÇÃO É OBRIGATÓRIO.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const novoId = `SIM-${Math.floor(1000 + Math.random() * 9000)}`;
      const dataAtual = new Date().toLocaleDateString('pt-BR');

      const novaSimulacao = {
        id: novoId,
        nome: formData.nome,
        data: dataAtual,
        status: 'Concluído',
        detalhes: { ...formData } 
      };

      setHistorico([novaSimulacao, ...historico]);
      setFormData({ nome: '', co: '', hr: '', ee: '', ec: '', outras: '' });
      setIsLoading(false); 
    }, 2000);
  };

  const handleDelete = (id) => {
    const novoHistorico = historico.filter(sim => sim.id !== id);
    setHistorico(novoHistorico);
  };

  const handleDownloadTxt = (sim) => {
    const conteudo = `
HEMOLAB - RELATÓRIO DE SIMULAÇÃO CARDIACA
------------------------------------------
ID DA SIMULAÇÃO: ${sim.id}
NOME: ${sim.nome}
DATA: ${sim.data}
STATUS: ${sim.status}

PARÂMETROS TÉCNICOS:
- Cardiac Output (CO): ${sim.detalhes?.co || '0'} L/min
- Heart Rate (HR): ${sim.detalhes?.hr || '0'} bpm
- Ejection Efficiency (EE): ${sim.detalhes?.ee || '0'} mmHg/mL
- Elastic Constant (EC): ${sim.detalhes?.ec || '0'} mmHg/mL

OUTRAS OBSERVAÇÕES:
${sim.detalhes?.outras || 'Nenhuma observação registrada.'}
------------------------------------------
Gerado em: ${new Date().toLocaleString('pt-BR')}
`.trim();

    const element = document.createElement("a");
    const file = new Blob([conteudo], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Relatorio_${sim.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Container>
      <Header />
      <BackgroundTopbar />
      <div ref={navbarRef}><Navbar /></div>

      <GrayWrapper>
        <MainContent>
          <CenterColumn> 
            <FormTitle>Cardiac Ejection</FormTitle>
            <SimulationForm onSubmit={handleSubmit}>
              <FormGroup style={{ gridColumn: '1 / -1' }}>
                <Label>Nome da Simulação</Label>
                <Input 
                  type="text" 
                  name="nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  className={erro ? 'has-error' : ''}
                />
                {erro && <ErrorMessage>{erro}</ErrorMessage>}
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <Label>CO</Label>
                  <Input type="number" step="any" min="0" name="co" value={formData.co} onChange={handleChange} placeholder="L/min" />
                </FormGroup>
                <FormGroup>
                  <Label>HR</Label>
                  <Input type="number" step="any" min="0" name="hr" value={formData.hr} onChange={handleChange} placeholder="bpm" />
                </FormGroup>
                <FormGroup>
                  <Label>EE</Label>
                  <Input type="number" step="any" min="0" name="ee" value={formData.ee} onChange={handleChange} placeholder="mmHg/mL" />
                </FormGroup>
                <FormGroup>
                  <Label>EC</Label>
                  <Input type="number" step="any" min="0" name="ec" value={formData.ec} onChange={handleChange} placeholder="mmHg/mL" />
                </FormGroup>
              </FormGrid>

              <FormGroup style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                <Label>Outras Propriedades</Label>
                <TextArea name="outras" rows="2" value={formData.outras} onChange={handleChange} />
              </FormGroup>

              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <LoadingContainer><Activity size={18} /> A PROCESSAR...</LoadingContainer>
                ) : (
                  'SUBMETER SIMULAÇÃO'
                )}
              </SubmitButton>
            </SimulationForm>
          </CenterColumn>

          <HistorySection>
            <FormTitle>Execuções</FormTitle>
            {historico.length > 0 ? (
              <TableScrollContainer>
                <HistoryTable>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NOME DA SIMULAÇÃO</th>
                      <th>DATA</th>
                      <th style={{ textAlign: 'center' }}>STATUS</th>
                      <th style={{ textAlign: 'center' }}>AÇÕES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historico.map((sim) => (
                      <tr key={sim.id}>
                        <td style={{ fontWeight: '700', color: '#1A2B4C' }}>{sim.id}</td>
                        <td style={{ fontWeight: '500' }}>{sim.nome}</td>
                        <td>{sim.data}</td>
                        <td style={{ textAlign: 'center' }}>
                          {/* AQUI ESTÁ O PULO DO GATO: $status em vez de status */}
                          <StatusBadge $status={sim.status}>{sim.status}</StatusBadge>
                        </td>
                        <td>
                          <ActionGroup>
                            <ActionButton 
                              title="Visualizar Resultados"
                              onClick={() => setSelectedSim(sim)}
                            >
                              <Eye size={16} />
                            </ActionButton>
                            <ActionButton 
                              title="Eliminar" 
                              className="delete"
                              onClick={() => handleDelete(sim.id)}
                            >
                              <Trash2 size={16} />
                            </ActionButton>
                          </ActionGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </HistoryTable>
              </TableScrollContainer>
            ) : (
              <EmptyHistoryMessage>
                Nenhuma simulação no histórico ainda.<br/>
                Preencha o formulário ao lado.
              </EmptyHistoryMessage>
            )}
          </HistorySection>
        </MainContent>
      </GrayWrapper>

      {/* MODAL DE DETALHES */}
      {selectedSim && (
        <ModalOverlay onClick={() => setSelectedSim(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Detalhes da Simulação</h3>
              <CloseButton onClick={() => setSelectedSim(null)}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow><span>ID:</span> <span>{selectedSim.id}</span></InfoRow>
              <InfoRow><span>Nome:</span> <span>{selectedSim.nome}</span></InfoRow>
              <InfoRow><span>Data:</span> <span>{selectedSim.data}</span></InfoRow>
              <InfoRow><span>CO:</span> <span>{selectedSim.detalhes?.co || '0'} L/min</span></InfoRow>
              <InfoRow><span>HR:</span> <span>{selectedSim.detalhes?.hr || '0'} bpm</span></InfoRow>
              <InfoRow><span>EE:</span> <span>{selectedSim.detalhes?.ee || '0'} mmHg/mL</span></InfoRow>
              <InfoRow><span>EC:</span> <span>{selectedSim.detalhes?.ec || '0'} mmHg/mL</span></InfoRow>
              <div style={{ marginTop: '12px' }}>
                <Label>Outras Propriedades:</Label>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#4A5568', 
                  backgroundColor: '#F8F9FA', 
                  padding: '10px', 
                  borderRadius: '4px',
                  marginTop: '5px' 
                }}>
                  {selectedSim.detalhes?.outras || 'Nenhuma observação.'}
                </p>
              </div>
            </ModalBody>
            <DownloadButton onClick={() => handleDownloadTxt(selectedSim)}>
              <Download size={18} />
              GERAR ARQUIVO .TXT
            </DownloadButton>
          </ModalContent>
        </ModalOverlay>
      )}
      
      <Footer />
    </Container>
  );
}