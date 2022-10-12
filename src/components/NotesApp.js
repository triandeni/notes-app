import React from 'react';
import Header from './Header';
import NotesInput from './NotesInput';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import Footer from './Footer';

class NotesApp extends React.Component {
  constructor() {
    super();

    this.state = {
      searchNotes: '',
      notes: getInitialData(),
    };
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.searchTypingHandler = this.searchTypingHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  archiveNoteHandler(id) {
    const { notes } = this.state;
    notes.forEach((note) => {
      if (note.id === id) note.archived = !note.archived;
    });
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  searchTypingHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchNotes: event.target.value,
      };
    });
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  noteList() {
    const { searchNotes, notes } = this.state;

    const list = searchNotes.trim().length ? notes.filter((note) => note.title.toLowerCase().includes(searchNotes.toLowerCase())) : notes;

    return list.sort((a, b) => a.date - b.date).reverse();
  }

  render() {
    return (
      <div className="app">
        <Header onSearch={this.searchTypingHandler} />
        <div className="note-app__body">
          <NotesInput addNote={this.addNoteHandler} />
        </div>
        <hr />

        <h2 className="judul">Catatan</h2>

        <NoteList list={this.noteList().filter((note) => !note.archived)} onDelete={this.onDeleteHandler} archiveNote={this.archiveNoteHandler} />
        <hr />
        <h2 className="judul">Arsip</h2>

        <NoteList list={this.noteList().filter((note) => note.archived)} onDelete={this.onDeleteHandler} archiveNote={this.archiveNoteHandler} />

        <Footer />
      </div>
    );
  }
}

export default NotesApp;
