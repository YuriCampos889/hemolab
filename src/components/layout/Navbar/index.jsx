import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Box, Wrench, Activity, HelpCircle } from 'lucide-react';

import { NavContainer, NavItem, NavGroupCenter } from './styles';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavGroupCenter>
        <NavItem onClick={() => navigate('/Home')}>
          <Home size={18} /> 
          Home
        </NavItem>

        <NavItem onClick={() => navigate('/viewer')}>
          <Box size={18} /> 
          3D Viewer
        </NavItem>
        
        <NavItem onClick={() => navigate('/simulator')}>
          <Wrench size={18} /> 
          Configure Simulation
        </NavItem>
        
        <NavItem onClick={() => navigate('/results')}>
          <Activity size={18} /> 
          Results
        </NavItem>
        
        <NavItem onClick={() => navigate('/about')}>
          <HelpCircle size={18} /> 
          About
        </NavItem>
      </NavGroupCenter>
    </NavContainer>
  );
}