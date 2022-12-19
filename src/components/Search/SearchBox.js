import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <input
        type='search'
        placeholder='Search robot'
        className='pa2 ba'
        onChange={searchChange}
      />
    </>
  );
};

export default SearchBox;
