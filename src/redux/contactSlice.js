import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactSlice.actions;

export default contactSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   filter: '',
// };

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = contactSlice.actions;

// export default contactSlice.reducer;
