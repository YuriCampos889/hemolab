import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

import { LoginWrapper } from './styles'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Background from '../../assets/background.png';
import Hemolab from '../../assets/hemolab_negative 1.png';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

  return (
    <LoginWrapper>
      <Header />
      
      <div className="login-container">
        <div className="background-image" aria-hidden="true">
          <img src={Background} alt="" />
        </div>
        
        <div className="login-grid">
          
          <div className="left-panel">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={Hemolab} 
              alt="HeMoLAB" 
              className="left-hemolab-logo" 
            />
            
            <motion.p 
              className="brand-description-text"
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Pesquisa e desenvolvimento em modelagem cardiovascular multiescala. Do processamento de imagens médicas à simulação de fluxos complexos.
            </motion.p>

            <motion.div 
              className="brand-features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon-check" />
                <p><strong>Recurso 1:</strong> XXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon-check" />
                <p><strong>Recurso 2:</strong> XXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} className="feature-icon-check" />
                <p><strong>Recurso 3:</strong> XXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="form-section">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="form-card">
              
              <div className="form-header">
                <h2>Login</h2>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="error-message">
                    <AlertCircle size={20} />
                    <p>{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                  <label>EMAIL</label>
                  <div className="input-wrapper">
                    <Mail className={`input-icon ${formData.email ? 'active' : ''}`} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Senha</label>
                  <div className="input-wrapper">
                    <Lock className={`input-icon ${formData.password ? 'active' : ''}`} />
                    <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Lembrar-me</span>
                  </label>
                  <a href="#" className="forgot-password">Esqueceu a senha?</a>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} className="submit-btn">
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </motion.button>
              </form>
              
              <div className="divider">
                <span></span>
              </div>

              <p className="signup-link">
                 <a href="#">Cadastre-se</a>
              </p>
            </motion.div>
          </motion.div>
                
        </div>
      </div>
      <Footer />      
    </LoginWrapper>
  );
}