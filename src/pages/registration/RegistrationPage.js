import React from 'react';
import {
  Wrapper,
  Mainbox,
  Title,
  LoginForm,
  SubmitButton,
  TextInput
} from '../login/LoginPage';

const RegistrationPage = () => {
  return (
    <Wrapper>
      <Mainbox>
        <Title>Rejestracja</Title>
        <LoginForm>
          <TextInput type="text" placeholder="login" />
          <TextInput type="text" placeholder="password" />
          <TextInput type="text" placeholder="confirm password" />
          <TextInput type="text" placeholder="e-mail" />
        </LoginForm>
        <SubmitButton>Zarejestruj się</SubmitButton>
      </Mainbox>
    </Wrapper>
  );
};

export default RegistrationPage;
