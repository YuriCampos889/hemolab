import React, { useState } from 'react';
import { Mail, Lock, User, AlertCircle, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginWrapper } from './styles';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import BackgroundVideo from '../../assets/video_entire_ADAN.mp4';
import AdavnLogo from '../../assets/Group 10.png';

import useAuth from '../../hooks/useAuth';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function Login() {
  const { login, register, status } = useAuth();
  const [activeTab, setActiveTab] = useState('login');

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
          {/* Info Section on the Left */}
          <div className="left-panel">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={AdavnLogo} 
              alt="HeMoLAB" 
              className="left-hemolab-logo" 
            />
            
            <motion.p 
              className="brand-description-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA TEXT AREA 
            </motion.p>
          </div>

          {/* Card Section on the Right */}
          <motion.div className="form-section">
            <Card variant="glass" className="auth-card">
              <div className="tabs-container">
                <button 
                  className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
                  type="button"
                >
                  LOGIN
                </button>
                <button 
                  className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => setActiveTab('register')}
                  type="button"
                >
                  SIGN UP
                </button>
              </div>

              <div className="form-content">
                <AnimatePresence mode="wait">
                  {activeTab === 'login' ? (
                    <motion.div 
                      key="login"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="tab-content"
                    >
                      <div className="form-header">
                        <h2>WELCOME BACK</h2>
                      </div>

                      {status.error && (
                        <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <AlertCircle size={18} />
                          <p>{status.error}</p>
                        </motion.div>
                      )}

                      <form onSubmit={login.handleSubmit} className="login-form">
                        <div className="inputs-container">
                          <Input 
                            label="Email" 
                            type="email" 
                            name="email" 
                            value={login.data.email} 
                            onChange={login.handleChange} 
                            placeholder="example@email.com" 
                            leftIcon={<Mail size={18} />} 
                            required 
                          />
                          
                          <Input 
                            label="Password" 
                            type="password" 
                            name="password" 
                            value={login.data.password} 
                            onChange={login.handleChange} 
                            placeholder="••••••••" 
                            leftIcon={<Lock size={18} />} 
                            rightIcon={<EyeOff size={18} />}
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

                        <Button type="submit" variant="secondary" fullWidth isLoading={status.isLoading} className="submit-btn">
                          SIGN IN
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="register"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="tab-content"
                    >
                      <div className="form-header">
                        <h2>CREATE ACCOUNT</h2>
                      </div>

                      <form onSubmit={register.handleSubmit} className="login-form">
                        <div className="inputs-container">
                          <Input 
                            label="First Name" 
                            type="text" 
                            name="name" 
                            value={register.data.name} 
                            onChange={register.handleChange} 
                            placeholder="Your Name" 
                            leftIcon={<User size={18} />} 
                            required 
                          />
                          
                          <Input 
                            label="Email" 
                            type="email" 
                            name="email" 
                            value={register.data.email} 
                            onChange={register.handleChange} 
                            placeholder="example@email.com" 
                            leftIcon={<Mail size={18} />} 
                            required 
                          />
                          
                          <Input 
                            label="Create Password" 
                            type="password" 
                            name="password" 
                            value={register.data.password} 
                            onChange={register.handleChange} 
                            placeholder="••••••••" 
                            leftIcon={<Lock size={18} />} 
                            required 
                          />
                        </div>

                        <Button type="submit" variant="primary" fullWidth className="submit-btn" style={{ marginTop: '2rem' }}>
                          SIGN UP
                        </Button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />      
    </LoginWrapper>
  );
}