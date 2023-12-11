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
      <div className='flex items-center'>
      <div className='p-5'>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-80 h-12 mr-5 rounded-full focus:outline-none"
          />
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="text-black  text-sm rounded-2xl w-36 px-4 py-1 h-12 mr-5 border border-gray-300 focus:outline-none"
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
            className="text-black text-sm rounded-2xl w-36 px-4 py-1 h-12 border border-gray-300 focus:outline-none"
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
