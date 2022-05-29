import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  Mainbox,
  Title,
  LoginForm,
  SubmitButton,
  TextInput
} from '../login/LoginPage';

export const ResponseMessage = styled.h3`
  color: red;
  font-size: 1rem;
  padding-top: 2rem;
  text-align: center;
`;
const RegistrationPage = () => {
  const [response, setResponse] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: ''
  });

  const submitForm = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'aplication/json'
      },
      body: JSON.stringify(formData)
    };
    fetch('http://93.91.208.217/api/register', options)
      .then((res) => res.json())
      .then((data) => setResponse(data.message));

    console.log(options);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const data =
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <Wrapper>
      <Mainbox>
        <Title>Rejestracja</Title>
        <LoginForm>
          <TextInput
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
            type="text"
            placeholder="login"
          />
          <TextInput
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }));
            }}
            type="text"
            placeholder="password"
          />
          <TextInput
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, c_password: e.target.value }));
            }}
            type="text"
            placeholder="confirm password"
          />
          <TextInput
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
            type="email"
            placeholder="e-mail"
          />
        </LoginForm>
        <SubmitButton onClick={() => submitForm()}>
          Zarejestruj się
        </SubmitButton>
        <ResponseMessage>{response}</ResponseMessage>
      </Mainbox>
    </Wrapper>
  );
};

export default RegistrationPage;
