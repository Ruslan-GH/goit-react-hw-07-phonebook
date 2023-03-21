import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const onFilterChange = e => {
    setQuery(e.currentTarget.value);
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

  return (
    <p className={s.Filter}>
      Find contacts by name
      <input
        className={s.FilterInput}
        type="text"
        value={query}
        onChange={onFilterChange}
      ></input>
    </p>
  );
};

export default Filter;
