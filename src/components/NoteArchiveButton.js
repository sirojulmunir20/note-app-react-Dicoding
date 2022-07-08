import React from 'react';

function NoteArchiveButton({ id, onArchive }) {
  return (
    <button
      type="button"
      className="note-item__archive-button"
      onClick={() => onArchive(id)}
    >
      Archive
    </button>
  );
}

export default NoteArchiveButton;
