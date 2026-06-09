import styled from 'styled-components';

export const HistoryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.4rem;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.05);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background-color: ${(props) => {
      const s = (props.$status || '').toLowerCase();
      if (s === 'completed') return '#16A34A';   // Verde
      if (s === 'processing') return '#EAB308';  // Amarelo
      if (s === 'error') return '#DC2626';       // Vermelho
      return '#CBD5E1';                           // Cinza
    }};
  }
`;

export const HistoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const SimTitle = styled.div`
  font-size: 0.92rem;
  font-weight: 700;
  color: #1A2B4C;
  margin-bottom: 0.1rem;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: #64748B;
  margin-bottom: 0.1rem;
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 600;
  
  background: ${({ $status }) => {
    const s = ($status || '').toLowerCase();
    if (s === 'completed') return '#DCFCE7';   // Verde claro
    if (s === 'processing') return '#FEF9C3';  // Amarelo claro
    if (s === 'error') return '#FEE2E2';       // Vermelho claro
    return '#F1F5F9';
  }};
  
  color: ${({ $status }) => {
    const s = ($status || '').toLowerCase();
    if (s === 'completed') return '#16A34A';   // Verde escuro
    if (s === 'processing') return '#CA8A04';  // Amarelo escuro
    if (s === 'error') return '#DC2626';       // Vermelho escuro
    return '#64748B';
  }};
`;

export const IdPill = styled.div`
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 600;
  background-color: #F0F9FF;
  color: #0369A1;
`;

export const DateText = styled.div`
  font-size: 0.8rem;
  color: #334155;
`;

export const TimeText = styled.div`
  font-size: 0.68rem;
  color: #94A3B8;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  font-size: 0.72rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Mantido como estava */
  ${(props) => props.$variant === 'view' && `
    background-color: #DBEAFE;
    color: #1E3A8A;
    border: none;
    &:hover { background-color: #BFDBFE; }
  `}

  /* NOVO: Selected */
  ${(props) => props.$variant === 'selected' && `
    background-color: #0369A1;
    color: #FFFFFF;
    border: none;
    &:hover { background-color: #0284C7; }
  `}

  /* Mantido como estava */
  ${(props) => props.$variant === 'delete' && `
    background-color: #FFFFFF;
    color: #991B1B;
    border: 0.05rem solid #FECACA;
    &:hover { background-color: #FEF2F2; }
  `}
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background: #FFFFFF;
  border: 0.05rem solid ${(props) => (props.$isOpen ? '#1A2B4C' : '#E2E8F0')};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0.05rem 0.15rem rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background-color: ${(props) => {
      if (props.$status === 'Done' || props.$status === 'Completed') return '#22C55E';
      if (props.$status === 'Running') return '#F59E0B';
      if (props.$status === 'Submitted') return '#EF4444';
      return 'transparent';
    }};
  }

  &:hover {
    border-color: #1A2B4C;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 0.4rem;
  background: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.4rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.1);
  z-index: 10;
  max-height: 15rem;
  overflow-y: auto;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.$selected ? '#F8F9FA' : 'transparent')};
  border-bottom: 0.05rem solid #E2E8F0;
  transition: background-color 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background-color: ${(props) => {
      if (props.$status === 'Done' || props.$status === 'Completed') return '#22C55E';
      if (props.$status === 'Running') return '#F59E0B';
      if (props.$status === 'Submitted') return '#EF4444';
      return 'transparent';
    }};
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? 'transparent' : '#F1F5F9')};
  }
`;