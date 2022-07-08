import React from 'react';

function NoteUnarchiveButton({ id, onUnarchive }) {
  return (
    <button
      type="button"
      className="note-item__archive-button"
      onClick={() => onUnarchive(id)}
    >
      Unarchive
    </button>
  );
}

export default NoteUnarchiveButton;
