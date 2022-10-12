import React from 'react';

import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NotesItemBody';

function NotesItem({ note, onDelete, archiveNote }) {
  return (
    <>
      <div className="note-item">
        <NoteItemBody title={note.title} createdAt={note.createdAt} body={note.body} />

        <div className="note-item__action">
          <DeleteButton onClick={() => onDelete(note.id)} />
          <ArchiveButton archived={note.archived} onClick={() => archiveNote(note.id)} />
        </div>
      </div>
    </>
  );
}

export default NotesItem;
