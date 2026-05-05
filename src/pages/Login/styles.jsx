import styled from 'styled-components';

export const LoginWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e2e8f0; 
  position: relative;
  overflow: visible;

  .login-form label {
    color: #1e293b; 
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: block;
    text-transform: none; 
  }

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
    transform: translateX(11.875rem); /* 190px */
    opacity: 1;
  }

  .blur-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 74.5%;
    z-index: 2;
    background: linear-gradient(to right, 
      #0b3361 15%, 
      transparent 80%
    );
  }

  .login-grid {
    display: grid;
    grid-template-columns: 72% 28%; 
    min-height: calc(100vh - 7.5rem); /* 120px */
    position: relative;
    z-index: 1;
    align-items: center;
  }

  .left-panel {
    position: relative;
    padding-left: 6.25rem; /* 100px */
  }

  .left-hemolab-logo {
    width: 32.5rem; /* 520px */
    margin-bottom: 2rem;
  }

  .brand-description-text {
    max-width: 30rem; /* 480px */
    font-size: 1.1rem;
    color: #f8fafc;
    font-weight: 300;
    line-height: 1.6;
    opacity: 0.9;
    text-align: left;
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 2rem; /* 32px */
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  .auth-card {
    width: 100%;
    max-width: 26.25rem; /* 420px */
    height: 37.5rem; /* 600px */
    background: rgba(248, 250, 252, 0.75);
    backdrop-filter: blur(1.5rem); /* 24px */
    -webkit-backdrop-filter: blur(1.5rem); /* 24px */
    border: 0.0625rem solid rgba(255, 255, 255, 0.5); /* 1px */
    border-radius: 1rem; /* 16px */
    box-shadow: 0 0.625rem 2.5rem rgba(0, 0, 0, 0.1); /* 10px 40px */
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }

  .tabs-container {
    display: flex;
    width: 100%;
    border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08); /* 1px */
    margin-bottom: 1.5rem;
  }

  .tab-button {
    flex: 1;
    background: transparent !important;
    color: #64748b !important;
    border: none;
    padding: 1.5rem 1rem;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
    border-radius: 0;

    &:hover {
      color: #1e293b !important;
      filter: none;
    }

    &.active {
      color: #000000 !important;
    }

    &.active::after {
      content: '';
      position: absolute;
      bottom: -0.0625rem; /* -1px */
      left: 15%;
      width: 70%;
      height: 0.1875rem; /* 3px */
      background-color: #000000;
      border-radius: 0.1875rem 0.1875rem 0 0; /* 3px 3px 0 0 */
    }
  }

  .form-content {
    padding: 0 2.5rem 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .tab-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .form-header h2 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #0f172a;
    margin-top: 0;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    flex: 1; 
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .form-footer-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #1e293b;
    font-size: 0.85rem;
    cursor: pointer;
  }

  .forgot-password {
    color: #000000;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .forgot-password:hover {
    opacity: 0.7;
    text-decoration: underline;
  }

  button.submit-btn {
    background: #000000 !important;
    color: white !important;
    border-radius: 0.5rem;
    padding: 0.9rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    box-shadow: 0 0.375rem 0.9375rem rgba(0, 0, 0, 0.2); /* 6px 15px */
    margin-top: auto;
    transition: all 0.2s ease;

    &:hover {
      background: #1a1a1a !important;
      transform: translateY(-0.125rem); /* -2px */
      box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.3); /* 8px 20px */
    }
  }
`;