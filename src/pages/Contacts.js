import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Contacts.styled';

function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AddContactForm /> {}
      <div>{isLoading && <Loader />}</div> {}
      <Title>Contacts</Title>
      <Filter />
      <ContactList /> {}
    </>
  );
}

export default Contacts;
