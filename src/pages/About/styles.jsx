import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 8px;
  margin-bottom: 8px;

  h3 {
    margin: 0;
    color: #1A2B4C;
    font-size: 1.25rem;
    font-weight: 700;
  }

  svg {
    color: #0369A1;
  }
`;

export const TextContent = styled.p`
  color: #4A5568;
  line-height: 1.6;
  margin: 0 0 16px 0;
  font-size: 0.95rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const MemberCard = styled.div`
  background-color: #F8F9FA;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #DBEAFE;
  color: #1E3A8A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #1A2B4C;
    font-size: 1rem;
  }

  span {
    color: #64748B;
    font-size: 0.85rem;
  }
`;

export const UpdatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UpdateItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-left: 4px solid #0369A1;
  border-radius: 8px;

  .date {
    min-width: 100px;
    color: #64748B;
    font-size: 0.85rem;
    font-weight: 600;
    padding-top: 2px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      color: #1A2B4C;
      font-size: 1rem;
    }

    p {
      margin: 0;
      color: #4A5568;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #F8F9FA;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  max-width: 600px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1A2B4C;
  }

  input, textarea {
    padding: 12px;
    border: 1px solid #CBD5E1;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.95rem;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #0369A1;
      box-shadow: 0 0 0 2px rgba(3, 105, 161, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;