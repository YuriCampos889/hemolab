import React, { useState, useEffect, useMemo } from 'react';
import { Search, Download, Activity, Filter, Maximize, X, MoreVertical, Trash2, Eye, CheckSquare, Check, ChevronDown, FileText, Droplet, Wind, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Tabs from '../../components/ui/Tabs';
import Button from '../../components/ui/Button';
import BackToTop from '../../components/layout/BackToTop';

import { fetchJobsByUsuario } from '../../services/api';
import { getUserIdFromToken } from '../../hooks/jwtDecoder';
import SimulationHistoryList, { BASELINE_SIMULATION } from '../../components/layout/History'; 

import {
  ResultsHeader,
  TabsWrapper,
  TopControlsRow,
  InputLabel,
  SearchBox,
  ChartGrid,
  ChartCard,
  SelectionIndicator,
  FilterBar,
  TableContainer,
  BiomarkerTable,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  DownloadContainer,
  DownloadIconWrapper,
  DownloadContent,
  ActionGroup,
  DropdownSelectWrapper,
  StyledSelect
} from './styles';

// Substitua pelos nomes exatos usados na tela Configure Simulation
const RESULT_TABS = ['Cardiac', 'Vascular', 'Respiration', 'Intracranial', 'Biomarkers'];

const TAB_ICONS = {
  'Cardiac': Activity,
  'Vascular': Droplet,
  'Respiration': Wind,
  'Intracranial': Brain,
  'Biomarkers': FileText // Ícone escolhido para Biomarkers
};

const BIOMARKER_MAP = [
  { label: 'Cardiac Output', key: 'cardiacOutput', unit: 'L/min', baseline: 5.0, format: (v) => v.toFixed(2) },
  { label: 'Systole Duration', key: 'systoleDuration', unit: 's', baseline: 0.3, format: (v) => v.toFixed(2) },
  { label: 'Lumen Radius', key: 'lumenRadius', unit: 'cm', baseline: 1.5, format: (v) => v.toFixed(2) },
  { label: 'Vasculature Resistance', key: 'vasculatureResistance', unit: 'mmHg·s/mL', baseline: 1.1, format: (v) => v.toFixed(3) },
  { label: 'Inspiratory Pressure', key: 'inspiratoryPressure', unit: 'cmH2O', baseline: 10.0, format: (v) => v.toFixed(2) },
  { label: 'Ventricles Volume', key: 'ventriclesVolume', unit: 'mL', baseline: 70.0, format: (v) => v.toFixed(2) },
];

const STANDARD_CHARTS = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9'];

export default function ResultadosScreen() {
  const [activeTab, setActiveTab] = useState('Cardiac');
  const [arteryOfInterest, setArteryOfInterest] = useState('Artery A');
  const [expandedChart, setExpandedChart] = useState(null);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedCharts, setSelectedCharts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userId] = useState(() => getUserIdFromToken() || null);
  
  const [meusResultados, setMeusResultados] = useState([]);
  const [selectedSimulation, setSelectedSimulation] = useState(null);

  useEffect(() => {
    const carregarHistoricoAPI = async () => {
      if (!userId) return;
      
      try {
        const response = await fetchJobsByUsuario(userId);
        const jobs = response?.jobs || [];
        
        if (jobs.length > 0) {
          const jobsFormatados = jobs.map(job => {
            let params = {};
            if (job.parametros) {
              try {
                params = typeof job.parametros === 'string' 
                  ? JSON.parse(job.parametros) 
                  : job.parametros;
              } catch(e) {
                params = {};
              }
            }

            return {
              ...job,
              historyId: `api-${job.id}`,
              source: 'api',
              nome: job.nome || 'Simulation',
              status: job.status || 'processing',
              simID: params.simID || params.simulationID || `#${job.id}`,
              submittedAt: params.submittedAt || params.date || job.createdAt || new Date().toISOString(),
              simulationID: params.simulationID || `#${job.id}`,
              id: job.id
            };
          });
          
          // Filtra apenas as simulações finalizadas para a tela de resultados!!!!!!!!!!!!!!!!!
          const completedHistory = jobsFormatados.filter(sim => 
            sim.status?.toLowerCase() === 'completed' || sim.status?.toLowerCase() === 'done'
          );
          
          setMeusResultados([BASELINE_SIMULATION, ...completedHistory]);
        } else {
          setMeusResultados([BASELINE_SIMULATION]);
        }
      } catch (error) {
        console.warn("Não foi possível carregar resultados da API:", error.message);
        setMeusResultados([BASELINE_SIMULATION]);
      }
    };

    carregarHistoricoAPI();
  }, [userId]);

  useEffect(() => {
    // Seleciona a primeira simulação da lista por padrão!!!!!!!!
    if (!selectedSimulation && meusResultados.length > 0) {
      setSelectedSimulation(meusResultados[0]);
    }
  }, [meusResultados, selectedSimulation]);

  const parsedSimulationData = useMemo(() => {
    if (!selectedSimulation) return null;

    let params = {};
    if (selectedSimulation.parametros) {
      try {
        params = typeof selectedSimulation.parametros === 'string'
          ? JSON.parse(selectedSimulation.parametros)
          : selectedSimulation.parametros;
      } catch {
        params = {};
      }
    }
    return { ...selectedSimulation, ...params };
  }, [selectedSimulation]);

  useEffect(() => {
    setIsSelectionMode(false);
    setSelectedCharts([]);
  }, [activeTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedChart) {
        setExpandedChart(null);
      }
    };

    if (expandedChart) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedChart]);

  const toggleSelection = (title) => {
    setSelectedCharts(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const filteredResultados = meusResultados.filter(sim => 
    sim.simID?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sim.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderChart = (title) => {
    const isSelected = selectedCharts.includes(title);
    return (
    <ChartCard 
      key={title} 
      $isSelectable={isSelectionMode} 
      $isSelected={isSelected}
      onClick={() => isSelectionMode && toggleSelection(title)}
    >
      {isSelectionMode && (
        <SelectionIndicator $isSelected={isSelected}>
          {isSelected && <Check size={12} strokeWidth={3} />}
        </SelectionIndicator>
      )}
      <div className="chart-header" style={{ paddingLeft: isSelectionMode ? '2.5rem' : '', transition: 'padding 0.2s' }}>
        {title}
        <div style={{ display: 'flex', gap: '0.2rem' }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setExpandedChart(title);
            }}
            title={`Expand ${title}`}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.25rem',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Maximize size={16} color="#64748B" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              console.log(`Download ${title}`);
            }}
            title={`Download ${title}`}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.25rem',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Download size={16} color="#64748B" />
          </button>
        </div>
      </div>
      <div className="chart-placeholder" style={{ paddingLeft: isSelectionMode ? '2.5rem' : '', transition: 'padding 0.2s' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M0,40 Q15,10 30,30 T60,20 T100,35" fill="none" stroke="#CBD5E1" strokeWidth="2" />
        </svg>
      </div>
    </ChartCard>
    );
  };

  return (
    <PageLayout>
      <Card padding="2.5rem" style={{ minHeight: '50rem' }}>
        
        <Title underline>Results</Title>
        
        <TopControlsRow>
          <div className="header-row">
            <Title level="h4" style={{ margin: 0 }}>Select Simulation</Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <InputLabel>SimID:</InputLabel>
              <SearchBox className="small-search">
                <Search size={14} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  onClick={() => setIsDropdownOpen(true)}
                  onFocus={() => setIsDropdownOpen(true)}
                />
              </SearchBox>
            </div>
          </div>
          <SimulationHistoryList 
            historico={filteredResultados} 
            showActions={false} 
            isOpenExternal={isDropdownOpen}
            setIsOpenExternal={setIsDropdownOpen}
            onSelect={setSelectedSimulation}
          />
        </TopControlsRow>

        <ResultsHeader>
          <TabsWrapper>
            <Tabs 
              tabs={RESULT_TABS.map(tab => ({
                value: tab,
                label: tab,
                icon: TAB_ICONS[tab]
              }))} 
              activeTab={activeTab} 
              onChange={(tab) => setActiveTab(tab)} 
            />
          </TabsWrapper>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            {!isSelectionMode ? (
              <DropdownSelectWrapper>
                <Download size={16} className="download-icon" />
                <StyledSelect
                  value=""
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'export') setActiveTab('Download');
                    if (val === 'select') setIsSelectionMode(true);
                  }}
                >
                  <option value="" disabled hidden>Download Options</option>
                  <option value="export">Export Data (CSV/JSON)</option>
                  <option value="select" disabled={activeTab === 'Download' || activeTab === 'Biomarkers'}>
                    Select Images
                  </option>
                </StyledSelect>
              </DropdownSelectWrapper>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => { setIsSelectionMode(false); setSelectedCharts([]); }}
                >
                  Cancel
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCharts(selectedCharts.length === STANDARD_CHARTS.length ? [] : [...STANDARD_CHARTS])}
                >
                  {selectedCharts.length === STANDARD_CHARTS.length ? 'Deselect All' : 'Select All'}
                </Button>
                <Button 
                  variant="primary" 
                  leftIcon={<Download size={18} />}
                  onClick={() => { 
                    console.log('Downloading selected:', selectedCharts); 
                    setIsSelectionMode(false); 
                    setSelectedCharts([]); 
                  }}
                  disabled={selectedCharts.length === 0}
                >
                  Download ({selectedCharts.length})
                </Button>
              </>
            )}
          </div>
        </ResultsHeader>

        {activeTab === 'Cardiac' && (
          <ChartGrid>
            {STANDARD_CHARTS.map(imgName => renderChart(imgName))}
          </ChartGrid>
        )}

        {activeTab === 'Vascular' && (
          <>
            <FilterBar>
              <Filter size={18} color="#64748B" />
              <label htmlFor="artery-select">Artery of Interest:</label>
              <select 
                id="artery-select" 
                value={arteryOfInterest} 
                onChange={(e) => setArteryOfInterest(e.target.value)}
              >
                <option value="Artery A">Artery A</option>
                <option value="Artery B">Artery B</option>
                <option value="Artery C">Artery C</option>
                <option value="Artery D">Artery D</option>
              </select>
            </FilterBar>

            <ChartGrid>
              {STANDARD_CHARTS.map(imgName => renderChart(imgName))}
            </ChartGrid>
          </>
        )}

        {activeTab === 'Respiration' && (
          <ChartGrid>
            {STANDARD_CHARTS.map(imgName => renderChart(imgName))}
          </ChartGrid>
        )}

        {activeTab === 'Intracranial' && (
          <ChartGrid>
            {STANDARD_CHARTS.map(imgName => renderChart(imgName))}
          </ChartGrid>
        )}

        {activeTab === 'Biomarkers' && (
          <div>
            <Title level="h4" style={{ marginBottom: '0.5rem' }}>Comparative Analysis</Title>
            <p style={{ color: '#64748B', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Comparison between baseline healthy parameters and the submitted simulation results.
            </p>
            
            {parsedSimulationData ? (
              <TableContainer>
                <BiomarkerTable>
                  <thead>
                    <tr>
                      <th>Biomarker</th>
                      <th>Baseline</th>
                      <th>Submitted Model</th>
                      <th>Variation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BIOMARKER_MAP.map(biomarker => {
                      const submittedValue = parseFloat(parsedSimulationData[biomarker.key]);
                      const baselineValue = biomarker.baseline;

                      if (isNaN(submittedValue)) {
                        return (
                          <tr key={biomarker.key}>
                            <td>{biomarker.label}</td>
                            <td>{biomarker.format(baselineValue)} {biomarker.unit}</td>
                            <td className="baseline" colSpan="2">Data not available</td>
                          </tr>
                        );
                      }

                      const variation = submittedValue - baselineValue;
                      const diffClass = variation > 0 ? 'diff-up' : variation < 0 ? 'diff-down' : '';
                      const sign = variation > 0 ? '+' : '';

                      return (
                        <tr key={biomarker.key}>
                          <td>{biomarker.label}</td>
                          <td className="baseline">{biomarker.format(baselineValue)} {biomarker.unit}</td>
                          <td className="submitted">{biomarker.format(submittedValue)} {biomarker.unit}</td>
                          <td className={diffClass}>{sign}{biomarker.format(variation)} ({sign}{(variation / baselineValue * 100).toFixed(1)}%)</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </BiomarkerTable>
              </TableContainer>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #CBD5E1', borderRadius: '8px', marginTop: '2rem' }}>
                <p style={{ margin: 0, color: '#64748B' }}>Select a simulation from the list above to see the biomarker comparison.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'Download' && (
          <DownloadContainer>
            <DownloadIconWrapper>
              <Download size={40} />
            </DownloadIconWrapper>
            <DownloadContent>
              <Title level="h4" style={{ marginBottom: '0.6rem' }}>Export Simulation Data</Title>
              <p>Download the complete dataset of this simulation in CSV or JSON format for further external analysis.</p>
            </DownloadContent>
            <ActionGroup>
              <Button 
                variant="primary" 
                onClick={() => console.log('Download CSV')}
                style={{ backgroundColor: '#1a2b4d', borderColor: '#1a2b4d' }}
              >
                Download .CSV
              </Button>
              <Button variant="primary" onClick={() => console.log('Download JSON')}>Download .JSON</Button>
            </ActionGroup>
          </DownloadContainer>
        )}

      </Card>

      <BackToTop />

      <AnimatePresence>
        {expandedChart && (
          <ModalOverlay 
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedChart(null)}
          >
            <ModalContent 
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalHeader>
                <Title level="h3">{expandedChart}</Title>
                <CloseButton onClick={() => setExpandedChart(null)}>
                  <X size={24} />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M0,40 Q15,10 30,30 T60,20 T100,35" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                </svg>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}