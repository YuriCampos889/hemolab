import styled from 'styled-components';

export const BackToTopButton = styled.button`
  display: block;
  background-color: #273e6b;
  color: #FFF;
  padding: 8px 0;
  text-align: center;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;
  width: 100%;
  
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: -2rem;
  
  height: 35px;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-weight: 400;
  position: static;
  border: none;
  outline: none;
  margin-top: 2rem;

  transition: all 0.2s ease;

  &:hover {
    background-color: #385185;
  }
`;