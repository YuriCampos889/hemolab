import styled from 'styled-components';

export const InfoBar = styled.div`
  background: #f8f9fa;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  color: #2d3748;
  width: 100%;
  box-sizing: border-box;
`;

export const ContainerImagemCompleta = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 600px;
  margin: 0 auto 30px auto;
  background: #000000;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;