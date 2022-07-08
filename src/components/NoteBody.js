import React from 'react';

function NoteBody({ body }) {
  return (
    <p className="note-item__body">
      {body}
    </p>
  );
}

export default NoteBody;
