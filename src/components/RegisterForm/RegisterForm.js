import { useDispatch } from 'react-redux';
import { register } from 'redux/authentication/authOperations';
import { Form, Formik } from 'formik';
import {
  ErrMsg,
  FormField,
  RegisterBtn,
  RegisterContainer,
  RegisterInput,
  RegisterLbl,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    dispatch(register(values));
  };

  const passwordValidation = value => {
    if (!value) {
      return 'Required';
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (!passwordRegex.test(value)) {
      return 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol (@, $, !, %, *, ?, &)';
    }

    return null;
  };

  const emailValidation = value => {
    if (!value) {
      return 'Required';
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(value)) {
      return 'Invalid email format';
    }

    return null;
  };

  return (
    <RegisterContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FormField>
            <RegisterLbl htmlFor="name">Username</RegisterLbl>
            <RegisterInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              validate={value => {
                if (!value) {
                  return 'Required';
                }
                return null;
              }}
            />
            <ErrMsg name="name" component="div" className="error" />
          </FormField>

          <FormField>
            <RegisterLbl htmlFor="email">Email</RegisterLbl>
            <RegisterInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              validate={emailValidation}
            />
            <ErrMsg name="email" component="div" />
          </FormField>

          <FormField>
            <RegisterLbl htmlFor="password">Password</RegisterLbl>
            <RegisterInput
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              validate={passwordValidation}
            />
            <ErrMsg name="password" component="div" />
          </FormField>

          <RegisterBtn type="submit">Register</RegisterBtn>
        </Form>
      </Formik>
    </RegisterContainer>
  );
};

export default RegisterForm;
