import React, { useState } from "react";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Notify parent component about the search term
  };

  return (
    <div className="flex bg-light-blue w-full h-36">
      <div className="grid content-center mx-auto">
        <div className="flex p-2 text-lg">
          <h1 className="font-bold">Explore</h1>
          <h1 className="pl-56" style={{ color: '#5DB075' }}>Filter</h1>
        </div>
        
        <input
          className="rounded-full h-12 p-4"
          style={{ height: '50px', width: '343px' }}
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Header;
