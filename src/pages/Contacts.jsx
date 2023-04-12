import { FormContact } from '../components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactFilter } from '../components/ContactFilter/ContactFilter';
import { fetchContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <FormContact />
      <ContactFilter />
      <ContactsList />
    </>
  );
};

export default Contacts;
