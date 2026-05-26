import styled from 'styled-components';

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid #E2E8F0;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    > div:last-child {
      flex-wrap: wrap;
      button {
        flex: 1;
      }
    }
  }
`;

export const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-right: 1rem;
  
  > * {
    margin-bottom: 0 !important;
  }

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TopControlsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;

  .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 37.5rem) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  .small-search {
    width: 15rem;
    height: 1.8rem;
    background: #FFFFFF;
    
    input {
      font-size: 0.72rem;
      padding: 0.3rem;
    }

    @media (max-width: 37.5rem) {
      width: 100%;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #1A2B4C;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 0.05rem solid #CBD5E1;
  border-radius: 0.4rem;
  padding: 0 0.5rem;
  color: #64748B;

  input {
    border: none;
    outline: none;
    width: 100%;
    color: #1A2B4C;
  }
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  min-height: 20rem;

  @media (max-width: 60rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: #FFFFFF;
  border: 0.05rem solid ${(props) => (props.$isSelected ? '#0369A1' : '#E2E8F0')};
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: ${(props) => (props.$isSelectable ? 'pointer' : 'default')};
  box-shadow: ${(props) => (props.$isSelected ? '0 0 0 0.1rem #0369A1' : '0 0.1rem 0.3rem rgba(0,0,0,0.02)')};
  transition: all 0.2s ease;

  .chart-header {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.05rem solid #E2E8F0;
    font-size: 0.85rem;
    font-weight: 600;
    color: #1A2B4C;
    background: #F8FAFC;
  }

  .chart-placeholder {
    height: 12rem;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SelectionIndicator = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.2rem;
  border: 0.1rem solid ${(props) => (props.$isSelected ? '#0369A1' : '#CBD5E1')};
  background: ${(props) => (props.$isSelected ? '#0369A1' : '#FFFFFF')};
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: #F8FAFC;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1A2B4C;
  }

  select {
    padding: 0.4rem 0.8rem;
    border-radius: 0.3rem;
    border: 0.05rem solid #CBD5E1;
    font-size: 0.85rem;
    outline: none;
    background: #FFFFFF;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const BiomarkerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.8rem 1rem;
    text-align: left;
    font-size: 0.85rem;
    border-bottom: 0.05rem solid #E2E8F0;
  }

  th {
    background: #F8FAFC;
    font-weight: 600;
    color: #1A2B4C;
  }

  td.baseline { color: #64748B; }
  td.submitted { font-weight: 600; color: #1A2B4C; }
  td.diff-up { color: #059669; }
  td.diff-down { color: #DC2626; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
  backdrop-filter: blur(0.25rem);
`;

export const ModalContent = styled.div`
  background: #FFFFFF;
  border-radius: 0.6rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 0.05rem solid #E2E8F0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0.3rem;
  transition: background-color 0.2s;

  &:hover {
    background: #F1F5F9;
    color: #1A2B4C;
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8FAFC;
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
`;

export const DownloadIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #F1F5F9;
  color: #0369A1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const DownloadContent = styled.div`
  max-width: 25rem;
  margin-bottom: 2rem;
  
  p {
    color: #64748B;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 0.4rem;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 30rem) {
    flex-direction: column;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
`;

export const DropdownSelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 15rem;

  @media (max-width: 37.5rem) {
    width: 100%;
  }

  .download-icon {
    position: absolute;
    left: 0.8rem;
    pointer-events: none;
    color: #FFFFFF;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.6rem 2.2rem 0.6rem 2.4rem;
  border-radius: 0.4rem;
  border: 0.05rem solid #8c2929;
  background-color: #8c2929;
  color: #FFFFFF;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #7a2323;
    border-color: #7a2323;
  }

  option {
    background-color: #FFFFFF;
    color: #1A2B4C;
    font-weight: 500;
  }

  option:disabled {
    color: #94A3B8;
    background-color: #F8FAFC;
  }
`;