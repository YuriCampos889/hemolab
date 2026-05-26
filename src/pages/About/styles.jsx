import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.laptop} {
    gap: 1.6rem;
  }

  @media (max-width: 30rem) {
    gap: 1.2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-bottom: 0.1rem solid #E2E8F0;
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1rem;
    font-weight: 700;
  }

  svg {
    color: #0369A1;
  }
`;

export const TextContent = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0 0 0.8rem 0;
  font-size: 0.76rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.4rem, 1fr));
  gap: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const MemberCard = styled.div`
  background-color: #F8F9FA;
  border: 0.05rem solid #E2E8F0;
  border-radius: 0.4rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.2rem 0.3rem -0.05rem rgba(0, 0, 0, 0.1);
  }
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #DBEAFE;
  color: #1E3A8A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.96rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #1A2B4C;
    font-size: 0.8rem;
  }

  span {
    color: #64748B;
    font-size: 0.68rem;
  }
`;

export const UpdatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const UpdateItem = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem;
  background-color: #FFFFFF;
  border: 0.05rem solid #E2E8F0;
  border-left: 0.2rem solid #0369A1;
  border-radius: 0.4rem;

  .date {
    min-width: 5rem;
    color: #64748B;
    font-size: 0.68rem;
    font-weight: 600;
    padding-top: 0.1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    strong {
      color: #1A2B4C;
      font-size: 0.8rem;
    }

    p {
      margin: 0;
      color: #4A5568;
      font-size: 0.72rem;
      line-height: 1.5;
    }
  }

  @media ${device.laptop} {
     gap: 0.6rem;
    .date {
      min-width: 4.4rem;
    }
  }

  @media (max-width: 30rem) {
    flex-direction: column;
    gap: 0.4rem;

    .date {
      min-width: auto;
      padding-bottom: 0.4rem;
      border-bottom: 0.05rem dashed #E2E8F0;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #F8F9FA;
  padding: 1.2rem;
  border-radius: 0.4rem;
  border: 0.05rem solid #E2E8F0;
  max-width: 30rem;

  @media ${device.laptop} {
    padding: 1rem;
  }

  @media (max-width: 30rem) {
    padding: 0.8rem;
    
    button {
      width: 100% !important;
      justify-content: center;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.72rem;
    font-weight: 600;
    color: #1A2B4C;
  }

  input, textarea {
    padding: 0.6rem;
    border: 0.05rem solid #CBD5E1;
    border-radius: 0.3rem;
    font-family: inherit;
    font-size: 0.76rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #0369A1;
      box-shadow: 0 0 0 0.1rem rgba(3, 105, 161, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 5rem;
  }
`;