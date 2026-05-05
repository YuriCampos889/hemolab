import styled from 'styled-components';

export const TabLayout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr; 
  gap: 3rem; /* 48px */
  align-items: start;
`;

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCard = styled.div`
  background-color: #F8F9FA;
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-radius: 0.5rem; /* 8px */
  padding: 2rem; /* 32px */
  position: sticky; 
  top: 1.5rem; /* 24px */
`;

export const InfoTitle = styled.h4`
  color: #1A2B4C;
  margin: 0 0 1rem 0; /* 16px */
  font-size: 1.2rem;
  font-weight: 800;
  border-bottom: 0.125rem solid #CBD5E1; /* 2px */
  padding-bottom: 0.5rem; /* 8px */
`;

export const InfoText = styled.p`
  color: #4A5568;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem; /* 16px */
  
  &:last-child { margin-bottom: 0; }
  strong { color: #1A2B4C; }
`;

export const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 28.125rem; /* 450px */
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 1.25rem; /* 20px */
  margin-top: 1rem; /* 16px */
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* 8px */
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  color: #1A2B4C;
  text-transform: capitalize; 
`;

const InputStyles = `
  width: 100%; 
  box-sizing: border-box; 
  padding: 0.875rem 1rem; /* 14px 16px */
  border: 0.0625rem solid #343536eb; /* 1px */
  border-radius: 0.25rem; /* 4px */
  font-family: inherit;
  font-size: 1rem;
  color: #2D3748;
  background-color: #F8F9FA; 
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1A2B4C; 
    background-color: #FFFFFF; 
    box-shadow: 0 0 0 0.125rem rgba(26, 43, 76, 0.1); /* 2px */
  }
  
  &::placeholder { color: #A0AEC0; }

  &.has-error {
    border-color: #8b2929; 
    background-color: #FFF5F5;
  }
  
  &:disabled {
    background-color: #E2E8F0;
    color: #94A3B8;
    cursor: not-allowed;
    border-color: #CBD5E1;
  }
`;

export const Input = styled.input`${InputStyles}`;

export const Select = styled.select`
  ${InputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center; /* 12px */
  background-size: 1rem; /* 16px */
  padding-right: 2.5rem; /* 40px */
`;

export const TextArea = styled.textarea`
  ${InputStyles}
  resize: vertical; 
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; 
  padding-top: 1.5rem; /* 24px */
  border-top: 0.125rem solid #E2E8F0; /* 2px */
  width: 100%;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  gap: 1rem; /* 16px */
`;

export const HistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem; /* 10px 20px */
  border: 0.0625rem solid #E2E8F0; /* 1px */
  border-radius: 0.5rem; /* 8px */
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.05); /* 1px 3px */

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.25rem; /* 4px */
    background-color: ${(props) => {
      if (props.$status === 'Done' || props.$status === 'Completed') return '#22C55E';
      if (props.$status === 'Running') return '#F59E0B';
      if (props.$status === 'Submitted') return '#EF4444';
      return '#22C55E';
    }};
  }
`;

export const HistoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem; /* 2px */
`;

export const SimTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1A2B4C;
  margin-bottom: 0.125rem; /* 2px */
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
  font-size: 0.9rem;
  color: #64748B;
  margin-bottom: 0.125rem; /* 2px */
`;

export const StatusPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* 4px */
  padding: 0.125rem 0.5rem; /* 2px 8px */
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  
  background-color: ${(props) => {
      if (props.$status === 'Done' || props.$status === 'Completed') return '#DCFCE7';
      if (props.$status === 'Running') return '#FEF3C7';
      if (props.$status === 'Submitted') return '#FEE2E2';
      return '#DCFCE7';
  }};
  color: ${(props) => {
      if (props.$status === 'Done' || props.$status === 'Completed') return '#166534';
      if (props.$status === 'Running') return '#B45309';
      if (props.$status === 'Submitted') return '#B91C1C';
      return '#166534';
  }};
`;

export const IdPill = styled.div`
  padding: 0.125rem 0.625rem; /* 2px 10px */
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #F0F9FF;
  color: #0369A1;
`;

export const DateText = styled.div`
  font-size: 1rem;
  color: #334155;
`;

export const TimeText = styled.div`
  font-size: 0.85rem;
  color: #94A3B8;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* 12px */
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem; /* 6px */
  padding: 0.375rem 0.875rem; /* 6px 14px */
  border-radius: 0.5rem; /* 8px */
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => props.$variant === 'view' && `
    background-color: #DBEAFE;
    color: #1E3A8A;
    border: none;
    &:hover { background-color: #BFDBFE; }
  `}

  ${(props) => props.$variant === 'delete' && `
    background-color: #FFFFFF;
    color: #991B1B;
    border: 0.0625rem solid #FECACA; /* 1px */
    &:hover { background-color: #FEF2F2; }
  `}
`;