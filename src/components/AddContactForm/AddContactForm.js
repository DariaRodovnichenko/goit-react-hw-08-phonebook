import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  ErrorMsg,
  SubmitBtn,
  StyledField,
  FormContainer,
} from './AddContactForm.styled';
import toast from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string().required('Required'),
});

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    if (
      contacts.length !== 0 &&
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === values.name.toLowerCase().trim()
      )
    ) {
      toast.error(`${values.name} is already in contacts`);
      actions.setSubmitting(false);
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={FormSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Label>
              <StyledField
                name="name"
                type="text"
                placeholder="Name"
                hasError={touched.name && errors.name}
              />
              <ErrorMsg name="name" component="div" />
            </Label>
            <Label>
              <StyledField
                name="number"
                type="tel"
                placeholder="Number"
                hasError={touched.number && errors.number}
              />
              <ErrorMsg name="number" component="div" />
            </Label>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default AddContactForm;
