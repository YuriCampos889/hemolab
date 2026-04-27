import styled from 'styled-components';

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid #E2E8F0;
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: flex-end; 
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: #1A2B4C;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #F8F9FA;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  padding: 0 12px;
  width: 250px;
  height: 40px; 

  input {
    border: none;
    background: transparent;
    padding: 10px;
    width: 100%;
    outline: none;
    font-size: 0.95rem;
    color: #1A2B4C;
  }

  svg {
    color: #64748B;
  }
`;

export const CustomTabsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 8px;
  overflow-x: auto;
`;

export const TabButton = styled.button`
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${(props) => props.$active ? `
    background-color: #1A2B4C;
    color: #FFFFFF;
    border: 1px solid #1A2B4C;
  ` : `
    background-color: #FFFFFF;
    color: #1A2B4C;
    border: 1px solid #E2E8F0;
  `}

  &:hover {
    border-color: #1A2B4C;
  }
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-height: 400px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  min-height: 250px; 

  .chart-header {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1A2B4C;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chart-placeholder {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F9FA;
    border: 1px dashed #CBD5E1;
    border-radius: 6px;
    color: #94A3B8;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding: 12px 16px;
  background-color: #F8F9FA;
  border-radius: 8px;
  border: 1px solid #E2E8F0;

  label {
    font-weight: 600;
    color: #1A2B4C;
    font-size: 0.9rem;
  }

  select {
    padding: 8px 12px;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
    outline: none;
    font-size: 0.9rem;
    min-width: 200px;
  }
`;

export const BiomarkerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #E2E8F0;
  }

  th {
    background-color: #F8F9FA;
    font-weight: 700;
    color: #1A2B4C;
    font-size: 0.95rem;
  }

  td {
    color: #4A5568;
    font-size: 0.95rem;
  }

  .baseline { color: #64748B; }
  .submitted { font-weight: 600; color: #0369A1; }
  .diff-up { color: #B91C1C; font-weight: 600; }
  .diff-down { color: #166534; font-weight: 600; }
`;


export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 24px;
`;

export const DownloadIconWrapper = styled.div`
  background: #F0F9FF;
  padding: 24px;
  border-radius: 50%;
  color: #0369A1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(3, 105, 161, 0.1);
`;

export const DownloadContent = styled.div`
  text-align: center;
  
  h3 {
    color: #1A2B4C;
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  p {
    color: #64748B;
    max-width: 400px;
    line-height: 1.6;
    margin: 0 auto;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;