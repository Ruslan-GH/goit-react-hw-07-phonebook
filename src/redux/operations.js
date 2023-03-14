import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactSlice';

axios.defaults.baseURL = 'https://640f78194ed25579dc4fc83f.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');

    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
