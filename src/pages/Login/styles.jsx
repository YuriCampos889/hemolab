import styled from 'styled-components';

export const LoginWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: linear-gradient(
    135deg, 
    #949497 0%, 
    #f8f9fa 80%, 
    #484850 100%
  );  position: relative;
  overflow: hidden;

  .background-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .bg-video {
    position: absolute;
    width: 65%;
    height: 100%;
    object-fit: cover;
    transform: translateX(190px);
  }

  .blur-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 74.5%;
    z-index: 2;

    background: 
      linear-gradient(
        to top,
        rgba(120, 0, 20, 0.65) 0%,
        rgba(120, 0, 20, 0.25) 30%,
        transparent 60%
      ),
      linear-gradient(
        to right,
        rgba(5, 15, 45, 0.98) 0%,
        rgba(10, 30, 80, 0.92) 35%,
        rgba(0, 0, 0, 0) 70%
      );
  }

  .login-grid {
    display: grid;
    grid-template-columns: 55% 45%; 
    height: 100vh;
    position: relative;
    z-index: 1;
  }

  .left-panel {
    position: relative;
  }

  .left-hemolab-logo {
    position: absolute;
    top: 140px;
    left: 100px;
    width: 520px;
  }

  .brand-description-text {
    position: absolute;
    top: 440px;
    left: 100px;
    max-width: 520px;
    font-size: 1.2rem;
    color: white;
    font-weight: 300;
    line-height: 1.5;
    opacity: 0.9;
    text-align: justify;
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
  }

  .form-card.split-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 850px; 
    min-height: 550px;
    padding: 0; 
    z-index: 1;
    overflow: hidden; 
  }

  .login-side {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(255, 255, 255, 0.15); 
  }

  .register-side {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .theme-logo-small {
    width: 30px;
    height: 30px;
  }

  .form-header h2 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #fff;
    margin-top: 0;
  }

  .error-message {
    color: #ef4444;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.85rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    flex: 1; 
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
  }

  .input-group label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 0.4rem;
    display: block;
    letter-spacing: 0.05em;
  }

  .input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
  }

  .input-wrapper input {
    width: 100%;
    padding: 1rem 2.8rem;
    background-color: #f8fafc;
    border: 2px solid transparent;
    border-radius: 0.6rem;
    color: #0f172a;
    box-sizing: border-box; 
    transition: all 0.2s;
  }

  .input-wrapper input:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    outline: none;
  }

  .toggle-password {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    color: #94a3b8;
  }

  .form-footer-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e1;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .forgot-password {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s;
  }

  .forgot-password:hover {
    color: #fff;
    text-decoration: underline;
  }

  .submit-btn {
    background: #2563eb;
    color: white;
    padding: 1rem;
    border-radius: 0.6rem;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s;
    margin-top: auto;
    width: 100%;
  }

  .submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
`;