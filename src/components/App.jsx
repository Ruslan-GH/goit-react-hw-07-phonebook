import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

import { fetchContacts } from '../redux/operations';
import PhonebookForm from '../components/PhonebookForm';
import Filter from './Filter';
import Contacts from './Contacts/Contacts';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoading && (
        <div>
          Loading contacts...
          <Loader />
        </div>
      )}
      {error && { error }}
      <Contacts />
    </div>
  );
};

export default App;
