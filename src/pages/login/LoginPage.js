import React from 'react';
import styled from 'styled-components';
// import { emailReg } from '../../utils/emailReg';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Mainbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 400px;
  padding: 24px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 12px;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 25px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px black;
  box-shadow: 0 0 0.5em black;

  transition: 0.2s;
  :hover {
    transform: scale(1.04);
  }
`;

export const TextInput = styled.input`
  width: 300px;
  height: 25px;

  padding: 4px 8px;
  margin: 16px 0;
  border-radius: 8px;
  border: 1px black;
  box-shadow: 0 0 0.5em black;
  outline: none;

  transition: 0.2s;
  :hover {
    transform: scale(1.02);
  }
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <Mainbox>
        <Title>Logowanie</Title>
        <LoginForm>
          <TextInput type="text" placeholder="login" />
          <TextInput type="text" placeholder="password" />
        </LoginForm>
        <SubmitButton>Zaloguj się</SubmitButton>
      </Mainbox>
    </Wrapper>
  );
};

export default LoginPage;
