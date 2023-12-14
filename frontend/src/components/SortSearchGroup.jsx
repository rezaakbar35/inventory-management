import React from 'react';
import './SortSearchGroup.css';

const SortSearchGroup = ({ onSearchChange }) => {

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className='flex items-center'>
      <div className='p-5'>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-80 h-12 mr-5 rounded-full focus:outline-none text-black"
          onChange={handleSearchChange}
        />
        <button className="bg-tertiary px-2 py-2 w-40 h-12 rounded-full">Search</button>
      </div>
    </div>
  );
};

export default SortSearchGroup;
