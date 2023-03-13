import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.contacts.filter);

  const onFilterChange = query => {
    dispatch(setFilter(query));
  };

  return (
    <p className={s.Filter}>
      Find contacts by name
      <input
        className={s.FilterInput}
        type="text"
        value={query}
        onChange={e => onFilterChange(e.target.value)}
      ></input>
    </p>
  );
};

export default Filter;
