import React from 'react';
import { nanoid } from 'nanoid';
import s from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';

// import { deleteContact } from 'redux/contactSlice';
import selectedFilteredContacts from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectedFilteredContacts);

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map(contact => (
        <li key={nanoid()} className={s.ContactList__item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={s.ContactList__deleteBtn}
            // onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
