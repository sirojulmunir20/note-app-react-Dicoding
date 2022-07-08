import React from 'react';

import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';
import NoteUnarchiveButton from './NoteUnarchiveButton';

function NoteItem({
  id, title, body, createdAt, archived, onDelete, onArchive, onUnarchive,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NoteHeader
          title={title}
          createdAt={createdAt}
        />
        <NoteBody
          body={body}
        />
      </div>
      <div className="note-item__action">
        <NoteDeleteButton
          id={id}
          onDelete={onDelete}
        />
        {archived
          ? (
            <NoteUnarchiveButton
              id={id}
              onUnarchive={onUnarchive}
            />
          )
          : (
            <NoteArchiveButton
              id={id}
              onArchive={onArchive}
            />
          )}
      </div>
    </div>
  );
}

export default NoteItem;
