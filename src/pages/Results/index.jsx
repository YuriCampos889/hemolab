import React, { useState } from 'react';
import { Search, Download, Activity, Filter } from 'lucide-react';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';

import {
  ResultsHeader,
  ControlGroup,
  InputWrapper,
  InputLabel,
  SearchBox,
  CustomTabsContainer,
  TabButton,
  ChartGrid,
  ChartCard,
  FilterBar,
  BiomarkerTable,
  // Novos componentes importados:
  DownloadContainer,
  DownloadIconWrapper,
  DownloadContent,
  ActionGroup
} from './styles';

const RESULT_TABS = ['Cardiac', 'Vascular', 'Respiration', 'Intracranial', 'Biomarkers', 'Download'];

const STANDARD_CHARTS = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9'];

export default function ResultadosScreen() {
  const [activeTab, setActiveTab] = useState('Cardiac');
  const [arteryOfInterest, setArteryOfInterest] = useState('Artery A');

  const renderChart = (title) => (
    <ChartCard key={title}>
      <div className="chart-header">
        {title}
        <Activity size={16} color="#64748B" />
      </div>
      <div className="chart-placeholder">
        <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path d="M0,40 Q15,10 30,30 T60,20 T100,35" fill="none" stroke="#CBD5E1" strokeWidth="2" />
        </svg>
      </div>
    </ChartCard>
  );

  return (
    <PageLayout>
      <Card padding="40px" style={{ minHeight: '800px' }}>
        
        <ResultsHeader>
          <ControlGroup>
            <InputWrapper>
              <InputLabel>SimID:</InputLabel>
              <SearchBox>
                <Search size={18} />
                <input type="text" placeholder="Enter SimID..." defaultValue="3Q3EML" />
              </SearchBox>
            </InputWrapper>
          </ControlGroup>
        </ResultsHeader>

        <CustomTabsContainer>
          {RESULT_TABS.map((tab) => (
            <TabButton 
              key={tab} 
              $active={activeTab === tab} 
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </CustomTabsContainer>
        
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
            <Title level="h4" style={{ marginBottom: '8px' }}>Comparative Analysis</Title>
            <p style={{ color: '#64748B', marginBottom: '24px', fontSize: '0.95rem' }}>
              Comparison between baseline healthy parameters and the submitted simulation results.
            </p>
            
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
                <tr>
                  <td>Cardiac EX</td>
                  <td className="baseline">00</td>
                  <td className="submitted">00</td>
                  <td className="diff-up">+ 00</td>
                </tr>
                <tr>
                  <td>Vascular EX</td>
                  <td className="baseline">00</td>
                  <td className="submitted">00</td>
                  <td className="diff-up">+ 00</td>
                </tr>
                <tr>
                  <td>Respiratory EX</td>
                  <td className="baseline">00</td>
                  <td className="submitted">00</td>
                  <td className="diff-down">- 00</td>
                </tr>
                <tr>
                  <td>Intracranial EX</td>
                  <td className="baseline">00</td>
                  <td className="submitted">00</td>
                  <td className="diff-up">+ 00</td>
                </tr>
              </tbody>
            </BiomarkerTable>
          </div>
        )}

        {/* Bloco de Download Refatorado */}
        {activeTab === 'Download' && (
          <DownloadContainer>
            <DownloadIconWrapper>
              <Download size={40} />
            </DownloadIconWrapper>
            <DownloadContent>
              <Title level="h4">Export Simulation Data</Title>
              <p>Download the complete dataset of this simulation in CSV or JSON format for further external analysis.</p>
            </DownloadContent>
            <ActionGroup>
              <Button variant="outline">Download .CSV</Button>
              <Button variant="primary">Download .JSON</Button>
            </ActionGroup>
          </DownloadContainer>
        )}

      </Card>
    </PageLayout>
  );
}