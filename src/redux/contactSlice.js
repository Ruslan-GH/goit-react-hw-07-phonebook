import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.contacts.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
      }),
});

export const { setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.fulfilled](state, action) {
//     state.contacts.isLoading = false;
//     state.contacts.error = null;
//     state.contacts.items = action.payload;
//   },
//   [fetchContacts.rejected]: handleRejected,
//   [addContact.pending]: handlePending,
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.contacts.items.push(action.payload);
//   },
//   [addContact.rejected]: handleRejected,
//   [deleteContact.pending]: handlePending,
//   [deleteContact.fulfilled](state, action) {
//     state.contacts.isLoading = false;
//     state.contacts.error = null;
//     const index = state.contacts.items.findIndex(
//       contact => contact.id === action.payload.id
//     );
//     state.contacts.items.splice(index, 1);
//   },
//   [deleteContact.rejected]: handleRejected,
// },
