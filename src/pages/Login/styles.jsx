import styled from 'styled-components';

export const LoginWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #949497 0%, #f8f9fa 80%, #484850 100%);
  position: relative;
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
      linear-gradient(to top, rgba(120, 0, 20, 0.65) 0%, rgba(120, 0, 20, 0.25) 30%, transparent 60%),
      linear-gradient(to right, rgba(5, 15, 45, 0.98) 0%, rgba(10, 30, 80, 0.92) 35%, rgba(0, 0, 0, 0) 70%);
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
    width: 100%;
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
    gap: 1.5rem;
  }

  .form-footer-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
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
`;