import PhonebookForm from '../components/PhonebookForm';
// import Filter from './Filter';
// import Contacts from './Contacts/Contacts';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h1>Contacts</h1>
      {isLoading && <p>Loading contacts...</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>{' '}
      {/* <Filter /> */}
      {/* <Contacts /> */}
    </div>
  );
};

export default App;
