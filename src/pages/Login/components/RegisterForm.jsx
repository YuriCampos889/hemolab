import React, { useState } from 'react';
import { Mail, Lock, User, CheckCircle, Circle, AlertCircle } from 'lucide-react';

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

import AuthFormShell from './AuthFormShell';

export default function RegisterForm({ register, status }) {
  const [showRequirements, setShowRequirements] = useState(false);

  const password = register.data.password || '';

  const requirements = [
    { id: 'length', text: 'Min. 8 characters', met: password.length >= 8 },
    { id: 'upper', text: 'Uppercase letter', met: /[A-Z]/.test(password) },
    { id: 'lower', text: 'Lowercase letter', met: /[a-z]/.test(password) },
    { id: 'special', text: 'Special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(password) }
  ];

  const allMet = requirements.every(req => req.met);

  return (
    <AuthFormShell
      motionKey="register"
      title="Create Account"
      direction="right"
      onSubmit={register.handleSubmit}
      actions={
        <>
          {/* ERROR */}
          {status?.error && (
            <div
              style={{
                display: 'flex',
                gap: '0.3rem',
                color: '#ef4444',
                fontSize: '0.7rem',
                fontWeight: 500,
                marginBottom: '0.5rem'
              }}
            >
              <AlertCircle size={16} />
              <p style={{ margin: 0 }}>{status.error}</p>
            </div>
          )}

          {/* BUTTON */}
          <Button
            type="submit"
            variant="secondary"
            fullWidth
            isLoading={status?.isLoading}
            disabled={!allMet || status?.isLoading}
          >
            SIGN UP
          </Button>
        </>
      }
    >
      <Input
        label="First Name"
        type="text"
        name="name"
        value={register.data.name}
        onChange={register.handleChange}
        placeholder="Your Name"
        leftIcon={<User size={18} />}
        required
        disabled={status?.isLoading}
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
        disabled={status?.isLoading}
      />

      <Input
        label="Create Password"
        type="password"
        name="password"
        value={register.data.password}
        onChange={register.handleChange}
        onFocus={() => setShowRequirements(true)}
        placeholder="••••••••"
        leftIcon={<Lock size={18} />}
        required
        disabled={status?.isLoading}
      />

      {/* PASSWORD REQUIREMENTS */}
      {showRequirements && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.4rem',
            marginTop: '-0.3rem'
          }}
        >
          {requirements.map(req => (
            <div
              key={req.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.60rem',
                color: req.met ? '#059669' : '#64748b'
              }}
            >
              {req.met ? (
                <CheckCircle size={14} />
              ) : (
                <Circle size={14} />
              )}
              <span>{req.text}</span>
            </div>
          ))}
        </div>
      )}
    </AuthFormShell>
  );
}