import { Mail, Lock, User, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginWrapper } from './styles';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import BackgroundVideo from '../../assets/video_entire_ADAN.mp4';
import Hemolab from '../../assets/hemolab_negative 1.png';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function Login() {
  const { login, register, status } = useAuth();

  return (
    <LoginWrapper>
      <Header />
      
      <div className="login-container">
        <div className="background-wrapper" aria-hidden="true">
          <video autoPlay loop muted playsInline className="bg-video">
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
            <Card 
              variant="glass" 
              style={{ flexDirection: 'row', padding: 0, maxWidth: '850px', minHeight: '550px', overflow: 'hidden' }}
            >
              <div className="login-side">
                <div className="form-header">
                  <h2>Login</h2>
                </div>

                <AnimatePresence>
                  {status.error && (
                    <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <AlertCircle size={18} />
                      <p>{status.error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={login.handleSubmit} className="login-form">
                  <div className="inputs-container">
                    <Input 
                      label="EMAIL" 
                      uppercaseLabel 
                      type="email" 
                      name="email" 
                      value={login.data.email} 
                      onChange={login.handleChange} 
                      placeholder="Email address" 
                      leftIcon={<Mail size={18} />} 
                      required 
                    />
                    
                    <Input 
                      label="PASSWORD" 
                      uppercaseLabel 
                      type="password" 
                      name="password" 
                      value={login.data.password} 
                      onChange={login.handleChange} 
                      placeholder="••••••••" 
                      leftIcon={<Lock size={18} />} 
                      required 
                    />
                  </div>

                  <div className="form-footer-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                  </div>

                  <Button type="submit" variant="secondary" fullWidth isLoading={status.isLoading} style={{ marginTop: 'auto' }}>
                    Login
                  </Button>
                </form>
              </div>

              <div className="register-side">
                <div className="form-header">
                  <h2>Sign up</h2>
                </div>

                <form onSubmit={register.handleSubmit} className="login-form">
                  <div className="inputs-container">
                    <Input 
                      label="YOUR NAME" 
                      uppercaseLabel 
                      type="text" 
                      name="name" 
                      value={register.data.name} 
                      onChange={register.handleChange} 
                      placeholder="Your Name" 
                      leftIcon={<User size={18} />} 
                      required 
                    />
                    
                    <Input 
                      label="EMAIL" 
                      uppercaseLabel 
                      type="email" 
                      name="email" 
                      value={register.data.email} 
                      onChange={register.handleChange} 
                      placeholder="example@email.com" 
                      leftIcon={<Mail size={18} />} 
                      required 
                    />
                    
                    <Input 
                      label="CREATE PASSWORD" 
                      uppercaseLabel 
                      type="password" 
                      name="password" 
                      value={register.data.password} 
                      onChange={register.handleChange} 
                      placeholder="••••••••" 
                      leftIcon={<Lock size={18} />} 
                      required 
                    />
                  </div>

                  <Button type="submit" variant="primary" fullWidth style={{ marginTop: 'auto' }}>
                    Sign Up
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />      
    </LoginWrapper>
  );
}