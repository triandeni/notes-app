import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.OnBodyChange = this.OnBodyChange.bind(this);
    this.onSubmitListener = this.onSubmitListener.bind(this);
  }

  onTitleChange(event) {
    const { value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: value.length > 50 ? value.slice(0, 50) : value,
      };
    });
  }

  OnBodyChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitListener(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitListener}>
          <p className="note-input__title__char-limit">{this.state.title.length}/50</p>
          <input className="note-input__title" type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="Judul.." required></input>
          <textarea className="note-input__body" type="text" value={this.state.body} onChange={this.OnBodyChange} placeholder="Isi Catatan.." required></textarea>
          <button type="submit">Tambahkan</button>
        </form>
      </div>
    );
  }
}
export default NotesInput;
