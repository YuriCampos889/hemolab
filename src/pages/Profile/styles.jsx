import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 1.2rem;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 30rem) {
    gap: 1.5rem;
    margin-top: 1rem;
  }
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 12.8rem; 
  height: 12.8rem;
  background-color: #F8F9FA;
  border: 0.1rem solid #E2E8F0;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  svg {
    color: #CBD5E1;
  }

  @media (max-width: 30rem) {
    width: 9.6rem;
    height: 9.6rem;
  }
`;

export const EditBadge = styled.button`
  position: absolute;
  bottom: -0.4rem;
  right: -0.4rem;
  background-color: #0369A1;
  color: #FFFFFF;
  border: 0.15rem solid #FFFFFF;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #0284C7;
    transform: scale(1.05);
  }
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const SettingsBlock = styled.div`
  background: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,0.02);
  
  @media (max-width: 30rem) {
    padding: 1rem;
  }
`;

export const SettingsHeader = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.$danger ? '#DC2626' : '#1A2B4C'};
  margin: 0 0 1.2rem 0;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.4rem;

  @media (max-width: 30rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NameEmailGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1.2rem;
    font-weight: 800;

    @media (max-width: 30rem) {
      font-size: 1.1rem;
    }
  }

  button {
    background: transparent;
    border: none;
    color: #64748B;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #F1F5F9;
      color: #0369A1;
    }
  }
`;

export const UserEmail = styled.span`
  color: #64748B;
  font-size: 0.76rem;
  margin-top: 0.2rem;
`;

export const JoinDate = styled.div`
  font-size: 0.68rem;
  color: #64748B;
  font-weight: 600;
  background-color: #F8F9FA;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
  border: 0.05rem solid #E2E8F0;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  max-width: 12.5rem;

  label {
    font-size: 0.68rem;
    font-weight: 700;
    color: #1A2B4C;
    text-transform: uppercase;
  }

  select {
    width: 100%;
    padding: 0.7rem 0.8rem;
    border: 0.05rem solid #CBD5E1;
    border-radius: 0.3rem;
    background-color: #F8F9FA;
    color: #2D3748;
    font-size: 0.76rem;
    font-family: inherit;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.6rem center;
    background-size: 0.8rem;
    padding-right: 2rem;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #1A2B4C;
      background-color: #FFFFFF;
      box-shadow: 0 0 0 0.15rem rgba(26, 43, 76, 0.1);
    }
  }
`;