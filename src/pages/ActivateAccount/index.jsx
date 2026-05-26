import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ativarConta } from '../../services/api'; // CORRIGIDO: era 'service/Api'
import { Wrapper, Container, Title, SuccessMessage, ErrorMessage, LoadingMessage, RedirectText, Spinner } from './styles';

const REDIRECT_DELAY_SUCCESS = 3000;
const REDIRECT_DELAY_ERROR   = 4000;

export default function ActiveAccountPage() {
  const navigate    = useNavigate();
  const { token }   = useParams();

  const [status, setStatus] = useState({ 
    message: 'Ativando conta...',
    error:   null,
  });

  const disparado = useRef(false);

  useEffect(() => {
    if (disparado.current) return;
    disparado.current = true;

    async function handleAtivacao() {
      if (!token) {
        setStatus({ message: null, error: 'Token inválido.' });
        setTimeout(() => navigate('/'), REDIRECT_DELAY_ERROR);
        return;
      }

      try {
        const data = await ativarConta(token);
        setStatus({ message: data.message || 'Conta ativada com sucesso!', error: null });
        setTimeout(() => navigate('/'), REDIRECT_DELAY_SUCCESS);
      } catch (err) {
        setStatus({ message: null, error: err.message || 'Erro ao ativar conta.' });
        setTimeout(() => navigate('/'), REDIRECT_DELAY_ERROR);
      }
    }

    handleAtivacao();
  }, [token]); // ADICIONADO: dependência token

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Ativação de Conta</h2>

        {status.message && (
          <p style={{ color: '#16A34A', fontSize: '14px', marginTop: '16px' }}>{status.message}</p>
        )}
        {status.error && (
          <p style={{ color: '#DC2626', fontSize: '14px', marginTop: '16px' }}>{status.error}</p>
        )}

        <p style={{ marginTop: '15px', fontSize: '12px', color: '#64748B' }}>
          Você será redirecionado para o login em instantes...
        </p>
      </div>
    </div>
  );
}