import React from 'react';
import Swal from 'sweetalert2';

class AppInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
    this.maxLength = 50;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputValue = event.target.value.slice(0, this.maxLength);
    this.setState((prevState) => ({
      ...prevState,
      title: inputValue,
      inputLength: inputValue.length,
    }));
  }

  onContentChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.length && this.state.body.length) {
      this.props.onAdd(this.state);
      Swal.fire({
        title: 'Success!',
        text: 'Note created!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } else {
      Swal.fire({
        title: 'Oops...',
        text: 'Title and Content are required!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  }

  render() {
    return (
      <div className="note-input">
        <h2>Add Note</h2>
        <form
          className="contact-input"
          onSubmit={this.onSubmitEventHandler}
        >
          <p className="note-input__title__char-limit">
            Sisa karakter:
            {' '}
            {this.state.inputLength ? this.maxLength - this.state.inputLength : this.maxLength}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Title.."
            // required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Content.."
            // required
            spellCheck="false"
            defaultValue={this.state.body}
            onChange={this.onContentChangeEventHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default AppInput;
