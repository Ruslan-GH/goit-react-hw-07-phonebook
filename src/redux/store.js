import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from '../redux/contactSlice';

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export { store };
