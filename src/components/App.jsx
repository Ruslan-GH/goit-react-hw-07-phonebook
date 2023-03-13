import PhonebookForm from '../components/PhonebookForm';
import Filter from './Filter';
import Contacts from './Contacts/Contacts';

const App = () => {
  return (
    <div style={{ marginLeft: '40px' }}>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h1>Contacts</h1>
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;
