import React from 'react';

function Header({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari..." onChange={onSearch}></input>
      </div>
    </div>
  );
}

export default Header;
