import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const TabLayout = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3rem;
  align-items: start;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoCard = styled.div`
  background-color: #F8F9FA;
  border: 0.0625rem solid #E2E8F0;
  border-radius: 0.5rem;
  padding: 2rem;
  position: sticky; 
  top: 1.5rem;
`;

export const InfoTitle = styled.h4`
  color: #1A2B4C;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 800;
  border-bottom: 0.125rem solid #CBD5E1;
  padding-bottom: 0.5rem;
`;

export const InfoText = styled.p`
  color: #4A5568;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  
  &:last-child { margin-bottom: 0; }
  strong { color: #1A2B4C; }
`;

export const SimulationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 1rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  padding: 0.875rem 1rem;
  border: 0.0625rem solid #343536eb;
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1rem;
  color: #2D3748;
  background-color: #F8F9FA; 
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1A2B4C; 
    background-color: #FFFFFF; 
    box-shadow: 0 0 0 0.125rem rgba(26, 43, 76, 0.1);
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
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
`;

export const TextArea = styled.textarea`
  ${InputStyles}
  resize: vertical; 
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto; 
  padding-top: 1.5rem;
  border-top: 0.125rem solid #E2E8F0;
  width: 100%;
  gap: 1rem;

  .nav-btn {
    min-width: 13.75rem;
  }

  @media (max-width: 37.5rem) {
    flex-direction: column;
    align-items: stretch;
    
    .nav-btn {
      min-width: 100%;
    }
  }
`;