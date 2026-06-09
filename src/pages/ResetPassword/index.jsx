import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Circle, KeyRound, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Footer from '../../components/layout/Footer';

import { ResetContainer, ContentWrapper, SuccessMessage, HeaderContainer, IconWrapper, ImagePanel, FormPanel } from './styles';

import ResetBg from '../../assets/backgroundresetpassword.png';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({ newPassword: '', confirmPassword: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    }, 1500);
  };

  const password = passwords.newPassword;
  const requirements = [
    { id: 'length', text: 'Min. 8 characters', met: password.length >= 8 },
    { id: 'upper', text: 'Uppercase letter', met: /[A-Z]/.test(password) },
    { id: 'lower', text: 'Lowercase letter', met: /[a-z]/.test(password) },
    { id: 'special', text: 'Special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];
  const allMet = requirements.every(req => req.met);
  const hasConfirmText = passwords.confirmPassword.length > 0;
  const passwordsMatch = passwords.newPassword === passwords.confirmPassword;

  const isValid = allMet && passwords.newPassword === passwords.confirmPassword;

  return (
    <ResetContainer>
      <ContentWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ width: '100%', maxWidth: '60rem', margin: '0 auto' }}
      >
        <Card padding="0" style={{ width: '100%', borderTop: '0.4rem solid #1A2B4C', borderRadius: '0.6rem', boxShadow: '0 1rem 2.5rem rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'row', overflow: 'hidden', minHeight: '38rem' }}>
          
          <ImagePanel $bg={ResetBg} />

          <FormPanel>
            <HeaderContainer>
              <IconWrapper>
                <KeyRound size={28} strokeWidth={1.5} />
              </IconWrapper>
              <h2 style={{ color: '#1A2B4C', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '800' }}>Set New Password</h2>
              <p style={{ color: '#64748B', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                Your new password must be different from previously used passwords.
              </p>
            </HeaderContainer>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <Input
                  label="New Password"
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  leftIcon={<Lock size={18} />}
                  rightIcon={
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#64748B' }}
                      tabIndex="-1"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  }
                  required
                />

                {/* PASSWORD REQUIREMENTS */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.4rem',
                      marginTop: '-0.3rem',
                      marginBottom: '0.3rem'
                    }}
                  >
                    {requirements.map(req => (
                      <div
                        key={req.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.68rem',
                          color: req.met ? '#059669' : '#64748b'
                        }}
                      >
                        {req.met ? <CheckCircle size={14} /> : <Circle size={14} />}
                        <span>{req.text}</span>
                      </div>
                    ))}
                  </div>

                <Input
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  leftIcon={<Lock size={18} />}
                  rightIcon={
                    <button 
                      type="button" 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#64748B' }}
                      tabIndex="-1"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  }
                  required
                />
                
                {hasConfirmText && (
                  <p style={{ margin: '-0.8rem 0 0 0', fontSize: '0.7rem', color: passwordsMatch ? '#059669' : '#DC2626', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    {passwordsMatch ? <CheckCircle size={12} /> : <Circle size={12} />}
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </p>
                )}
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  isLoading={isLoading}
                  disabled={!isValid || isLoading}
                  style={{ marginTop: '0.5rem', backgroundColor: '#1a2b4d', borderColor: '#1a2b4d' }}
                >
                  Reset Password
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  fullWidth
                  onClick={() => navigate('/')}
                  disabled={isLoading}
                  leftIcon={<ArrowLeft size={16} />}
                >
                  Back to Login
                </Button>
              </form>
            ) : (
              <SuccessMessage
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#1A2B4C', margin: '0 0 0.5rem 0' }}>Password Reset Successfully!</h3>
                <p style={{ color: '#64748B', margin: 0, fontSize: '0.9rem' }}>
                  Redirecting you to the login screen...
                </p>
              </SuccessMessage>
            )}
          </FormPanel>
        </Card>
      </motion.div>
      </ContentWrapper>
      <Footer variant="dark" align="flex-start" />
    </ResetContainer>
  );
}