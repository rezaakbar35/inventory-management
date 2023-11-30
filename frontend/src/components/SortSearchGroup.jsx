import React, {useState} from 'react'
import './SortSearchGroup.css'

const SortSearchGroup = () => {
    const [sortBy, setSortBy] = useState(''); // State for sort option
    const [groupBy, setGroupBy] = useState(''); // State for group option
  
    const handleSortChange = (e) => {
      setSortBy(e.target.value);
      // You can add logic here to handle sorting functionality
    };
  
    const handleGroupChange = (e) => {
      setGroupBy(e.target.value);
      // You can add logic here to handle grouping functionality
    };
  
    return (
      <div className='searchSortContainer flex flex-wrap items-center'>
        <div className="flex rounded-full w-96 h-[50px] border border-gray-300 overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-96 mb-[10px] h-[50px] rounded-full focus:outline-none"
          />
        </div>
        <div className="flex">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="rounded-full w-48 px-4 py-2 my-[10px] h-[50px] border border-gray-300 focus:outline-none"
          >
            <option value="">Sort By</option>
            {/* Add sort options here */}
            <option value="name">Name</option>
            <option value="date">Date</option>
            {/* Add more options as needed */}
          </select>
          <select
            value={groupBy}
            onChange={handleGroupChange}
            className="rounded-full w-48 px-4 py-2 my-[10px] h-[50px] border border-gray-300 focus:outline-none"
          >
            <option value="">Group By</option>
            {/* Add group options here */}
            <option value="category">Category</option>
            <option value="type">Type</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    );
  };

export default SortSearchGroup
