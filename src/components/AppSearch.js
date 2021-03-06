import React from 'react';

function AppSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input
        type="search"
        placeholder="Search.."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default AppSearch;
