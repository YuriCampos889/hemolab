import styled from 'styled-components';

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  flex-wrap: wrap;
  gap: 1rem; /* 16px */
  margin-bottom: 1.5rem; /* 24px */
  padding-bottom: 1.5rem; /* 24px */
  border-bottom: 0.125rem solid #E2E8F0; /* 2px */
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: flex-end; 
  gap: 1.25rem; /* 20px */
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* 6px */
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
  border: 0.0625rem solid #CBD5E1; /* 1px */
  border-radius: 0.5rem; /* 8px */
  padding: 0 0.75rem; /* 12px */
  width: 15.625rem; /* 250px */
  height: 2.5rem; /* 40px */

  input {
    border: none;
    background: transparent;
    padding: 0.625rem; /* 10px */
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
  gap: 0.75rem; /* 12px */
  margin-bottom: 1.5rem; /* 24px */
  padding-bottom: 0.5rem; /* 8px */
  overflow-x: auto;
`;

export const TabButton = styled.button`
  padding: 0.625rem 1.5rem; /* 10px 24px */
  border-radius: 0.375rem; /* 6px */
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${(props) => props.$active ? `
    background-color: #1A2B4C;
    color: #FFFFFF;
    border: 0.0625rem solid #1A2B4C; /* 1px */
  ` : `
    background-color: #FFFFFF;
    color: #1A2B4C;
    border: 0.0625rem solid #E2E8F0; /* 1px */
  `}

  &:hover {
    border-color: #1A2B4C;
  }
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem; /* 20px */
  min-height: 25rem; /* 400px */
  
  @media (max-width: 64rem) { /* 1024px */
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 48rem) { /* 768px */
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #FFFFFF;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-radius: 0.5rem; /* 8px */
  padding: 1rem; /* 16px */
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.05); /* 1px 3px */
  min-height: 15.625rem; /* 250px */

  .chart-header {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1A2B4C;
    margin-bottom: 1rem; /* 16px */
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
    border: 0.0625rem dashed #CBD5E1; /* 1px */
    border-radius: 0.375rem; /* 6px */
    color: #94A3B8;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
  margin-bottom: 1.25rem; /* 20px */
  padding: 0.75rem 1rem; /* 12px 16px */
  background-color: #F8F9FA;
  border-radius: 0.5rem; /* 8px */
  border: 0.0625rem solid #E2E8F0; /* 1px */

  label {
    font-weight: 600;
    color: #1A2B4C;
    font-size: 0.9rem;
  }

  select {
    padding: 0.5rem 0.75rem; /* 8px 12px */
    border: 0.0625rem solid #CBD5E1; /* 1px */
    border-radius: 0.25rem; /* 4px */
    outline: none;
    font-size: 0.9rem;
    min-width: 12.5rem; /* 200px */
  }
`;

export const BiomarkerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem; /* 16px */

  th, td {
    padding: 1rem; /* 16px */
    text-align: left;
    border-bottom: 0.0625rem solid #E2E8F0; /* 1px */
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
  padding: 5rem 1.25rem; /* 80px 20px */
  gap: 1.5rem; /* 24px */
`;

export const DownloadIconWrapper = styled.div`
  background: #F0F9FF;
  padding: 1.5rem; /* 24px */
  border-radius: 50%;
  color: #0369A1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.25rem 0.375rem rgba(3, 105, 161, 0.1); /* 4px 6px */
`;

export const DownloadContent = styled.div`
  text-align: center;
  
  h3 {
    color: #1A2B4C;
    font-size: 1.5rem;
    margin-bottom: 0.75rem; /* 12px */
  }

  p {
    color: #64748B;
    max-width: 25rem; /* 400px */
    line-height: 1.6;
    margin: 0 auto;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 1rem; /* 16px */
  margin-top: 1rem; /* 16px */
`;