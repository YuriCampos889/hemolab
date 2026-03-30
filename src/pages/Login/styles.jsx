import styled from 'styled-components';

export const LoginWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  min-height: 100vh;
  background: #f4f6f8;
  position: relative; 
  overflow: hidden; 
  font-family: 'Poppins', sans-serif; 
  color: #374151; 
  display: flex;
  flex-direction: column; /* Permite empilhar Header -> Container -> Footer */
  -webkit-font-smoothing: antialiased;

  .background-image {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 1;
    pointer-events: none;
  }

  .background-image img {
    width: 70%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }

  .background-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.75) 80%,
      rgba(255, 255, 255, 0.95) 95%
    );
  }

  .background-image::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(97, 92, 92, 0.42) 5%,
      rgba(1, 44, 80, 0.2) 16%,
      rgba(1, 44, 80, 0.08) none,
      rgba(1, 44, 80, 0) 92%
    );
    z-index: 1;
  }

  .login-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1; /* SOLUÇÃO MÁGICA: Ocupa só o espaço que sobra entre o Header e o Footer */
    width: 100%;
  }
  
  /* GRID FORÇADO PARA DESKTOP */
  .login-grid {
    width: 100%;
    height: 100%; /* Adapta ao pai (.login-container) em vez de forçar 100vh */
    display: grid;
    grid-template-columns: 70% 30%; 
    position: relative;
    z-index: 1;
  }

  /* PAINEL ESQUERDO FORÇADO PARA SEMPRE APARECER */
  .left-panel {
    position: relative;
    display: block; 
    height: 100%; /* Adapta ao pai em vez de forçar 100vh */
    overflow: hidden;
  }

  .left-hemolab-logo {
    position: absolute;
    top: 60px; 
    left: 128px;
    width: 700px;
    height: auto;
    z-index: 3;
    object-fit: contain;
  }

  .brand-description-text {
    position: absolute;
    top: 240px; 
    left: 128px; 
    font-size: 1.5rem; 
    line-height: 1.6; 
    color: #F8F9FA; 
    max-width: 600px; 
    font-weight: 400; 
    letter-spacing: 0.3px; 
    z-index: 3;
  }

  .brand-features {
    position: absolute;
    top: 410px; 
    left: 128px; 
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 26px; 
    max-width: 600px; 
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 18px; 
  }

  .feature-icon-check {
    color: #ef4444; 
    flex-shrink: 0;
    margin-top: 4px; 
    width: 28px; 
    height: 28px;
  }

  .feature-item p {
    margin: 0;
    font-size: 1.25rem; 
    line-height: 1.5;
    color: #E2E8F0; 
  }

  .feature-item strong {
    color: #FFFFFF; 
    font-weight: 600; 
    font-size: 1.35rem; 
  }

  .form-section {
    background: transparent;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .form-card {
    background: #ffffff; 
    border-radius: 0.75rem; 
    padding: 3rem; 
    box-shadow: 0 24px 60px -16px rgba(2, 12, 27, 0.32), 0 8px 18px rgba(2, 12, 27, 0.18); 
    border: 1px solid #f3f4f6;
    width: 100%;
    /* ---> AQUI ESTÁ A MUDANÇA: Empurrando o card pra baixo <--- */
    margin-top: 40px; 
  }
  
  .form-header { margin-bottom: 2.5rem; }
  .form-header h2 { font-size: 2.25rem; font-weight: 700; color: #030712; margin: 0 0 0.5rem 0; letter-spacing: -0.5px; }
  .form-header p { margin: 0; color: #4b5563; font-size: 1.125rem; }

  .error-message {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #fef2f2;
    border: 2px solid #fecaca;
    padding: 1rem;
    border-radius: 0.75rem;
    color: #b91c1c; 
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .login-form { display: flex; flex-direction: column; gap: 1.5rem; }
  .input-group label { display: block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; color: #374151; letter-spacing: 0.05em; }
  .input-wrapper { position: relative; }
  
  .input-icon {
    position: absolute; 
    left: 1rem;
    top: 50%;
    transform: translateY(-50%); 
    color: #9ca3af;
    transition: color 0.2s; 
  }
  .input-icon.active, .input-wrapper:focus-within .input-icon { color: #ef4444; } 
  
  .input-wrapper input {
    width: 100%;
    padding: 1rem 3rem; 
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    transition: all 0.2s;
    box-sizing: border-box;
  }
  .input-wrapper input:focus { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1); } 
  
  .toggle-password {
    position: absolute;
    right: 1rem; 
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
  }

  .form-options { display: flex; justify-content: space-between; align-items: center; } 
  .checkbox-label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
  .forgot-password { color: #ef4444; font-size: 0.875rem; font-weight: 500; text-decoration: none; }
  
  .submit-btn {
    background: linear-gradient(to right, #044fda, #1406da); 
    color: white; 
    padding: 1.1rem;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    font-family: inherit;
  }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; } 

  .divider { text-align: center; position: relative; margin: 2.5rem 0; }
  .divider::before { content: ""; position: absolute; top: 50%; left: 0; right: 0; border-top: 2px solid #e5e7eb; z-index: 1; } 
  .divider span { background: white; padding: 0 1rem; position: relative; z-index: 2; color: #6b7280; font-size: 0.875rem; } 
  
  .signup-link { text-align: center; font-size: 0.875rem; color: #4b5563; margin: 0; }
  .signup-link a { color: #000000; font-weight: 600; text-decoration: none; transition: color 0.2s; }
  .signup-link a:hover { color: #ef4444; text-decoration: underline; }
`;