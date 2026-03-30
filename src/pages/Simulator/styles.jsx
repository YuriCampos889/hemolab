import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400; 
  color: #2d3748; 
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased; 
`;

export const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 40px; 
  flex: 1; 
  background-color: #f0f2f5; 
`;

export const MainContent = styled.main`
  display: grid; 
  grid-template-columns: 450px 1fr; 
  gap: 24px; 
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto;
  align-items: start;
`;

export const Card = styled.div`
  background-color: #ffffff; 
  border-radius: 8px; 
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); 
  display: flex;
  flex-direction: column;
  padding: 32px; 
  width: 100%;
  border: 1px solid #E2E8F0; 
`;

export const CenterColumn = styled(Card)``;

/* =========================================================
   ESTILOS DO FORMULÁRIO
   ========================================================= */

export const FormTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 1.8rem; 
  color: #1A2B4C; 
  font-weight: 800; 
  border-bottom: 2px solid #8b2929; 
  padding-bottom: 12px;
  width: 100%;
  display: block;
`;

export const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 16px; 
  margin-top: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; 
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: #1A2B4C;
  text-transform: capitalize; 
`;

const InputStyles = `
  width: 100%; 
  box-sizing: border-box; 
  padding: 12px 16px; 
  border: 1px solid #343536eb;
  border-radius: 4px; 
  font-family: inherit;
  font-size: 0.95rem;
  color: #2D3748;
  background-color: #F8F9FA; 
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1A2B4C; 
    background-color: #FFFFFF; 
    box-shadow: 0 0 0 2px rgba(26, 43, 76, 0.1); 
  }
  
  &::placeholder {
    color: #A0AEC0; 
  }

  &.has-error {
    border-color: #8b2929; 
    background-color: #FFF5F5;
  }
`;

export const Input = styled.input`
  ${InputStyles}
`;

export const TextArea = styled.textarea`
  ${InputStyles}
  resize: vertical; 
`;

export const ErrorMessage = styled.span`
  color: #8b2929;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 2px;
  text-transform: uppercase;
`;

export const SubmitButton = styled.button`
  margin-top: 32px;
  padding: 16px;
  width: 100%; 
  background-color: #8b2929; 
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #6d1f1f; 
    transform: translateY(-1px); 
    box-shadow: 0 4px 12px rgba(139, 41, 41, 0.2); 
  }
  
  &:active:not(:disabled) {
    transform: translateY(0); 
  }

  &:disabled {
    background-color: #c97a7a; 
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  & > svg {
    animation: ${rotate} 1.2s linear infinite;
  }
`;

/* =========================================================
   ESTILOS DO HISTÓRICO E TABELA
   ========================================================= */

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
  /* O pulo do gato aqui: usamos $status */
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

/* =========================================================
   ESTILOS DO MODAL DE DETALHES
   ========================================================= */

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