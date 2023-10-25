import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/authentication/authOperations';
import {
  Error,
  FormGroup,
  LogInBtn,
  LogInContainer,
  LogInInput,
  LogInLbl,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Please input your Email';
      }

      if (!values.password) {
        errors.password = 'Please input your Password';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  return (
    <LogInContainer>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <LogInLbl htmlFor="email">Email</LogInLbl>
          <LogInInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <Error>{formik.errors.email}</Error>}
        </FormGroup>
        <FormGroup>
          <LogInLbl htmlFor="password">Password</LogInLbl>
          <LogInInput
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && <Error>{formik.errors.password}</Error>}
        </FormGroup>
        <LogInBtn type="submit">Log in</LogInBtn>
      </form>
    </LogInContainer>
  );
};

export default LoginForm;
