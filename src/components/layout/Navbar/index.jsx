import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ClipboardList, BarChart2, User, Info, LogOut } from 'lucide-react';
import { handleLogout } from './utils/Logout';
import { NavContainer, NavGroupCenter, NavGroup, NavItem } from './styles';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <NavGroupCenter>
        <NavGroup>
          <NavItem onClick={() => navigate('/Home')}><Home size={16} /> Home</NavItem>
          <NavItem onClick={() => navigate('/simulator')}><ClipboardList size={16} /> Configure Simulation</NavItem>
          <NavItem onClick={() => navigate('/results')}><BarChart2 size={16} /> Results</NavItem>
          <NavItem onClick={() => navigate('/about')}><Info size={16} /> About</NavItem>
        </NavGroup>
   
        
        <NavGroup>
          <NavItem onClick={() => navigate('/profile')}><User size={16} /> Profile</NavItem>
          <NavItem onClick={() => handleLogout(navigate)} style={{ color: '#DC2626' }}>
            <LogOut size={18} /> 
            Logout
          </NavItem>
        </NavGroup>
      </NavGroupCenter>
    </NavContainer>
  );
}