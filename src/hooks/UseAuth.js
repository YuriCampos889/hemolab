import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function useAuth() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
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
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        setIsLoading(false);
        return;
      }
      
      // Sucesso
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      navigate('/');
    }, 1500);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", registerData);
    alert("Registration successful!");
  };

  return {
    login: { data: formData, handleChange: handleLoginChange, handleSubmit: handleLoginSubmit },
    register: { data: registerData, handleChange: handleRegisterChange, handleSubmit: handleRegisterSubmit },
    status: { isLoading, error }
  };
}