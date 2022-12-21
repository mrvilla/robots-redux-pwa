import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <>
      <div  className='tc mb4'>
        <input
          type='search'
          placeholder='Search robot'
          className='pa2 ba'
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
