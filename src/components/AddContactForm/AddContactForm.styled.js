import styled, { css } from 'styled-components';

import {  ErrorMessage, Field } from 'formik';

export const FormContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: auto;
  margin-bottom: 20px;
`;

export const StyledField = styled(Field)`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 4px;

  ${props =>
    props.hasError &&
    css`
      border: 6px solid gold;
    `}

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const SubmitBtn = styled.button`
  background: white;
  color: #63666a;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 10px;
  height: 40px;
  border: rgba(227, 37, 26, 255);
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(227, 37, 26, 255);
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }
`;
