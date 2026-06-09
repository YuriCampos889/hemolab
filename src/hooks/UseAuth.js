import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login, cadastroUsuario } from '../services/api';

export default function useAuth() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ nome: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    if (error) setError(''); 
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email');
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }
    
    try {
      // CORREÇÃO: Chamando a função login do seu api.js
      const data = await login(formData.email, formData.password);

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('@HeMoLAB:userEmail', formData.email);
        navigate('/Home'); 
      } else {
        setError('Token not received from server.');
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message || 'Connection error with the server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!registerData.nome || !registerData.email || !registerData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      // CORREÇÃO: Chamando a função cadastroUsuario do seu api.js
      await cadastroUsuario(registerData);

      alert("Registration successful! You can now log in.");
      setRegisterData({ nome: '', email: '', password: '' });

    } catch (err) {
      console.error("Registration Error:", err);
      setError(err.message || 'Error creating account.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login: { data: formData, handleChange: handleLoginChange, handleSubmit: handleLoginSubmit },
    register: { data: registerData, handleChange: handleRegisterChange, handleSubmit: handleRegisterSubmit },
    status: { isLoading, error }
  };
}