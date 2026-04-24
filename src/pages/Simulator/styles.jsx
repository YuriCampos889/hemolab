import styled from 'styled-components';

/* ==========================================
   ESTILOS DO LAYOUT DIVIDIDO (FORM / TEXTO)
   ========================================== */
export const TabLayout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr; 
  gap: 48px; 
  align-items: start;
`;

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCard = styled.div`
  background-color: #F8F9FA;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 32px;
  position: sticky; 
  top: 24px; 
`;

export const InfoTitle = styled.h4`
  color: #1A2B4C;
  margin: 0 0 16px 0;
  font-size: 1.2rem;
  font-weight: 800;
  border-bottom: 2px solid #CBD5E1;
  padding-bottom: 8px;
`;

export const InfoText = styled.p`
  color: #4A5568;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 16px;
  
  &:last-child { margin-bottom: 0; }
  strong { color: #1A2B4C; }
`;

/* ==========================================
   ESTILOS DOS INPUTS E FORMS
   (Mantidos aqui temporariamente para não quebrar 
   os componentes internos das suas Abas)
   ========================================== */
export const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 20px; 
  margin-top: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
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
  padding: 14px 16px; 
  border: 1px solid #343536eb;
  border-radius: 4px; 
  font-family: inherit;
  font-size: 1rem;
  color: #2D3748;
  background-color: #F8F9FA; 
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1A2B4C; 
    background-color: #FFFFFF; 
    box-shadow: 0 0 0 2px rgba(26, 43, 76, 0.1); 
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
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
`;

export const TextArea = styled.textarea`
  ${InputStyles}
  resize: vertical; 
`;

/* ==========================================
   NAVEGAÇÃO INFERIOR DO WIZARD
   ========================================== */
export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 2px solid #E2E8F0;
  width: 100%;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;


/* ==========================================
   ESTILOS DO HISTÓRICO E MODAL (DESATIVADOS)
   ==========================================

export const HistorySection = styled(Card)`
  padding: 32px 32px 16px 32px; 
`;

export const TableScrollContainer = styled.div`
  max-height: 450px; 
  overflow-y: auto; 
  padding-right: 8px; 

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: #F8F9FA; border-radius: 4px; }
  &::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
  &::-webkit-scrollbar-thumb:hover { background: #A0AEC0; }
`;

export const EmptyHistoryMessage = styled.div`
  padding: 60px 40px;
  text-align: center;
  color: #1A2B4C;
  font-size: 1rem;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 2px dashed #CBD5E1; 
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.6;
`;

export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: separate; 
  border-spacing: 0;
  text-align: left;

  th {
    padding: 16px;
    background-color: #1A2B4C; 
    color: #FFFFFF; 
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: sticky;
    top: 0;
    z-index: 10;
    
    &:first-child { border-top-left-radius: 6px; border-bottom-left-radius: 6px; }
    &:last-child { border-top-right-radius: 6px; border-bottom-right-radius: 6px; }
  }

  td {
    padding: 16px;
    border-bottom: 1px solid #E2E8F0; 
    color: #4A5568;
    font-size: 0.9rem;
    vertical-align: middle;
  }

  tbody tr:hover {
    background-color: #F8F9FA; 
  }
`;

export const StatusBadge = styled.span`
  padding: 6px 16px;
  border-radius: 20px; 
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${(props) => props.$status === 'Concluído' ? '#749d83' : '#EBF8FF'};
  color: ${(props) => props.$status === 'Concluído' ? '#FFFFFF' : '#265179'};
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const ActionButton = styled.button`
  background: transparent; 
  border: 1px solid #CBD5E1; 
  cursor: pointer;
  color: #4A5568; 
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #F4F6F8; 
    color: #1A2B4C;
    border-color: #1A2B4C;
  }

  &.delete:hover {
    background-color: #FFF5F5; 
    color: #8b2929;
    border-color: #8b2929;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(3px);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 550px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border-bottom: 2px solid #F1F5F9;
  padding-bottom: 16px;

  h3 { 
    color: #1A2B4C; 
    margin: 0; 
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #F1F5F9;
  
  span:first-child { 
    font-weight: 700; 
    color: #64748B; 
    font-size: 0.85rem;
    text-transform: uppercase;
  }
  span:last-child { 
    color: #1A2B4C; 
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const DownloadButton = styled(SubmitButton)`
  margin-top: 0;
  background-color: #1A2B4C;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover:not(:disabled) {
    background-color: #0d1729;
    box-shadow: 0 10px 15px -3px rgba(26, 43, 76, 0.3);
  }
`;

export const CloseButton = styled.button`
  background: #F1F5F9;
  border: none;
  cursor: pointer;
  color: #64748B;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover { 
    background-color: #E2E8F0;
    color: #8b2929; 
  }
`;
*/