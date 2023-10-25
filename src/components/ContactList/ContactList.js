import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  ContactInfo,
  ContactItem,
  DeleteBtn,
  ListOfContacts,
  TrashIcon,
  WatchWord,
} from './ContactList.styled';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id)).then(() => {
      dispatch(fetchContacts());
    });
  };

  return (
    <ListOfContacts>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <WatchWord>The Phonebook is empty 🫤. Add your first contact.</WatchWord>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactInfo>{name + ': ' + number}</ContactInfo>
            <DeleteBtn
              type="button"
              name="deleteBtn"
              onClick={() => handleDelete(id)}
            >
              <TrashIcon />
              Delete
            </DeleteBtn>
          </ContactItem>
        ))
      )}
    </ListOfContacts>
  );
}

export default ContactList;
