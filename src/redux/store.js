import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from '../redux/contactSlice';

const store = configureStore({
  reducer: { contacts: contactSlice.reducer },
});

export { store };
