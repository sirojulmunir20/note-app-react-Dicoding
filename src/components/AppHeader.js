import React from 'react';
import AppSearch from './AppSearch';

function AppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>NotesApp</h1>
      <AppSearch onSearch={onSearch} />
    </div>
  );
}

export default AppHeader;
