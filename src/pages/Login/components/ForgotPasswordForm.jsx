import React, { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

import AuthFormShell from './AuthFormShell';

export default function ForgotPasswordForm({ onBack }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormShell
      motionKey="forgot"
      title="Recover Password"
      subtitle="Enter your email to receive reset instructions."
      onSubmit={handleForgotPassword}
      actions={
        <>
          <Button
            type="submit"
            variant="secondary"
            fullWidth
            isLoading={isLoading}
            disabled={isSubmitted}
          >
            {isSubmitted ? 'LINK SENT' : 'SEND RESET LINK'}
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            disabled={isLoading}
            leftIcon={<ArrowLeft size={15} />}
          >
            Back to Login
          </Button>
        </>
      }
    >
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
        leftIcon={<Mail size={18} />}
        required
        disabled={isSubmitted || isLoading}
      />

      {isSubmitted && (
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            padding: '1rem',
            backgroundColor: '#ecfdf5',
            border: '1px solid #10b981',
            borderRadius: '0.5rem',
            color: '#059669',
            marginTop: '0.5rem'
          }}
        >
          <CheckCircle size={20} />
          <p style={{ margin: 0, fontSize: '0.85rem' }}>
            Check your inbox, if this email is registered, you will receive a reset link shortly.
          </p>
        </div>
      )}
    </AuthFormShell>
  );
}