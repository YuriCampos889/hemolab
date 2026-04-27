import React from 'react';
import styled from 'styled-components';

import Header from '../layout/Header';
import BackgroundTopbar from '../layout/Backgroundtopbar';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #2d3748;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  flex: 1;
  background-color: #f0f2f5;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
`;

export default function PageLayout({ children, showNavbar = true }) {
  return (
    <Container>
      <Header />
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