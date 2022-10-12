import React from 'react';
import NotesItem from './NotesItem';

function NoteList({ list, onDelete, archiveNote }) {
  if (list.length) {
    return (
      <div className="notes-list ">
        {list.map((item) => (
          <NotesItem note={item} key={item.id} onDelete={onDelete} archiveNote={archiveNote} />
        ))}
      </div>
    );
  }

  return <p className="cttn">Tidak ada catatan</p>;
}

export default NoteList;
