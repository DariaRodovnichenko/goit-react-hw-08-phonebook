import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 600px;
  max-height: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const RegisterLbl = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const RegisterInput = styled(Field)`
  width: 90%;
  height: 22px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 4px;
  transition: border 0.3s;

  &:hover {
    border: 8px solid gold;
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const RegisterBtn = styled.button`
  background: white;
  color: #63666a;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 20px;
  border: rgba(227, 37, 26, 255);
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(227, 37, 26, 255);
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }
`;
