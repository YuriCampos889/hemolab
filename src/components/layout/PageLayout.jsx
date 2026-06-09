import React from 'react';
import styled from 'styled-components';

import BackgroundTopbar from '../layout/Backgroundtopbar';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #2d3748;
  background-color: #ffffff;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex: 1;
  background-color: #f0f2f5;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  align-items: start;
`;

export default function PageLayout({ children, showNavbar = true }) {
  return (
    <Container>
      <BackgroundTopbar />
      {showNavbar && <Navbar />}

      <GrayWrapper>
        <MainContent>
          {children}
        </MainContent>
      </GrayWrapper>
      
      <Footer />
    </Container>
  );
}