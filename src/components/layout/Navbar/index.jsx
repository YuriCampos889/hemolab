import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Wrench, Activity, HelpCircle } from 'lucide-react';

import { NavContainer, NavItem, NavGroupCenter } from './styles';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavGroupCenter>
        <NavItem onClick={() => navigate('/viewer')}>
          <Home size={18} /> 
          Início
        </NavItem>
        
        <NavItem onClick={() => navigate('/simulator')}>
          <Wrench size={18} /> 
          Configurar Simulação
        </NavItem>
        
        <NavItem onClick={() => navigate('/results')}>
          <Activity size={18} /> 
          Resultados
        </NavItem>
        
        <NavItem onClick={() => navigate('/about')}>
          <Activity size={18} /> 
          About
        </NavItem>
      </NavGroupCenter>
    </NavContainer>
  );
}