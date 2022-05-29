import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeIcon, EyeSlashIcon } from 'react-line-awesome';
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
  const [isPasswordActive, setIsPasswordActive] = useState(false);
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

  const handlePasswordChange = () => {
    setIsPasswordActive((prevValue) => !prevValue);
  };

  return (
    <Wrapper>
      <Mainbox>
        <Title>Registration</Title>
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
            type="password"
            placeholder="password"
          />
          <TextInput
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, c_password: e.target.value }));
            }}
            type="password"
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
        <SubmitButton onClick={() => submitForm()}>Register</SubmitButton>
        <ResponseMessage>{response}</ResponseMessage>
      </Mainbox>
    </Wrapper>
  );
};

export default RegistrationPage;
