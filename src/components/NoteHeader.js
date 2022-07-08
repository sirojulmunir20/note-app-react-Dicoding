import React from 'react';

import { showFormattedDate } from '../utils/index';

function NoteHeader({ title, createdAt }) {
  return (
    <>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
    </>
  );
}

export default NoteHeader;
