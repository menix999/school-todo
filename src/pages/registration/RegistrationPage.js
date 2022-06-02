import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from 'react-line-awesome';
import {
  Wrapper,
  Mainbox,
  Title,
  LoginForm,
  SubmitButton,
  TextInput,
  InputWrapper,
  IconWrapper,
  ResponseMessage
} from '../login/LoginPage';

import { useSetDocumentTitle } from '../../hooks/useSetDocumentTitle';

const RegistrationPage = () => {
  const [isPasswordActive, setIsPasswordActive] = useState({
    pass: false,
    c_pass: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: ''
  });
  const [response, setResponse] = useState('');

  useSetDocumentTitle('Registration');

  const submitForm = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'aplication/json'
      },
      body: JSON.stringify(formData)
    };

    await fetch('http://93.91.208.217/api/register', options)
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((err) => setResponse(err.message));
  };

  const handlePasswordChange = (e) => {
    if (e.currentTarget.id === 'pass') {
      setIsPasswordActive((prev) => ({ ...prev, pass: !prev.pass }));
    } else if (e.currentTarget.id === 'c_pass') {
      setIsPasswordActive((prev) => ({ ...prev, c_pass: !prev.c_pass }));
    }
  };

  return (
    <Wrapper>
      <Mainbox>
        <Title>Registration</Title>
        <LoginForm>
          <InputWrapper>
            <TextInput
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              type="text"
              placeholder="login"
            />
          </InputWrapper>
          <InputWrapper>
            <TextInput
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, password: e.target.value }));
              }}
              type={isPasswordActive.pass ? 'text' : 'password'}
              placeholder="password"
            />
            <IconWrapper id="pass" onClick={handlePasswordChange}>
              {isPasswordActive.pass ? <EyeIcon /> : <EyeSlashIcon />}
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  c_password: e.target.value
                }));
              }}
              type={isPasswordActive.c_pass ? 'text' : 'password'}
              id="c_pass"
              placeholder="confirm password"
            />
            <IconWrapper id="c_pass" onClick={handlePasswordChange}>
              {isPasswordActive.c_pass ? <EyeIcon /> : <EyeSlashIcon />}
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
              }}
              type="email"
              placeholder="e-mail"
            />
          </InputWrapper>
        </LoginForm>
        <SubmitButton onClick={() => submitForm()}>Register</SubmitButton>
        <ResponseMessage>{response}</ResponseMessage>
      </Mainbox>
    </Wrapper>
  );
};

export default RegistrationPage;
