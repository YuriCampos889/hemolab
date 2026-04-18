import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

import { LoginWrapper } from './styles'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import BackgroundVideo from '../../assets/video_entire_ADAN.mp4'; 
import Hemolab from '../../assets/hemolab_negative 1.png';
import ThemeLogo from '../../assets/adansign.png'; 

export default function Login() {
  const navigate = useNavigate();
  
  // Estados do Login
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Estados do Cadastro
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Submit do Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (formData.email && formData.password) {
        if (!validateEmail(formData.email)) {
          setError('Por favor, insira um email válido');
          setIsLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError('A senha deve ter pelo menos 6 caracteres');
          setIsLoading(false);
          return;
        }
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        navigate('/');
      } else {
        setError('Por favor, preencha todos os campos');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // Funções do Cadastro
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de cadastro:", registerData);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <LoginWrapper>
      <Header/>
      
      <div className="login-container">
        
        <div className="background-wrapper" aria-hidden="true">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bg-video"
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          
          <div className="blur-left"></div>
          <div className="blur-bottom"></div>
        </div>
        
        <div className="login-grid">
          
          <div className="left-panel">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={Hemolab} 
              alt="HeMoLAB" 
              className="left-hemolab-logo" 
            />
            
            <motion.p 
              className="brand-description-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT.
            </motion.p>
          </div>

          <motion.div className="form-section">

            <div className="form-card split-card">
              
              <div className="login-side">
                <div className="form-header">
                  <h2>Login</h2>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <AlertCircle size={18} />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="login-form">
                  <div className="inputs-container">
                    <div className="input-group">
                      <label>EMAIL</label>
                      <div className="input-wrapper">
                        <Mail className={`input-icon ${formData.email ? 'active' : ''}`} />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
                      </div>
                    </div>

                    <div className="input-group" style={{ marginTop: '1.5rem' }}>
                      <label>SENHA</label>
                      <div className="input-wrapper">
                        <Lock className={`input-icon ${formData.password ? 'active' : ''}`} />
                        <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="form-footer-options">
                      <label className="checkbox-label">
                        <input type="checkbox" />
                        <span>Lembrar-me</span>
                      </label>
                      <a href="#" className="forgot-password">Esqueceu a senha?</a>
                    </div>
                  </div>

                  <button type="submit" disabled={isLoading} className="submit-btn">
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </button>
                </form>
              </div>

              <div className="register-side">
                <div className="form-header">
                  <div className="title-wrapper">
                    <img src={ThemeLogo} alt="Logo" className="theme-logo-small" />
                    <h2>Criar Conta</h2>
                  </div>
                </div>

                <form onSubmit={handleRegisterSubmit} className="login-form">
                  <div className="inputs-container">
                    <div className="input-group">
                      <label>NOME COMPLETO</label>
                      <div className="input-wrapper">
                        <User className={`input-icon ${registerData.name ? 'active' : ''}`} />
                        <input type="text" name="name" value={registerData.name} onChange={handleRegisterChange} placeholder="Seu nome" required />
                      </div>
                    </div>

                    <div className="input-group" style={{ marginTop: '1.5rem' }}>
                      <label>EMAIL</label>
                      <div className="input-wrapper">
                        <Mail className={`input-icon ${registerData.email ? 'active' : ''}`} />
                        <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="seu@email.com" required />
                      </div>
                    </div>

                    <div className="input-group" style={{ marginTop: '1.5rem' }}>
                      <label>SENHA</label>
                      <div className="input-wrapper">
                        <Lock className={`input-icon ${registerData.password ? 'active' : ''}`} />
                        <input type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="••••••••" required />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">
                    Cadastrar
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
                
        </div>
      </div>

      <Footer />      
    </LoginWrapper>
  );
}