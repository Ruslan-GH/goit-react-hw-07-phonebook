import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Rings
      height="80"
      width="80"
      color="#0e20e6"
      radius="6"
      wrapperStyle={{ justifyContent: '' }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Loader;
