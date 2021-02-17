import React, { Component } from "react";
import "./style.css";

class FormRegistry extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
    console.log(this.title);
  }

  _handleChangeText(event){
    event.stopPropagation();
    this.text = event.target.value;
    console.log(this.text);
  }

  _createNote(event){
    event.preventDefault();
    event.stopPropagation();
    console.log('New note created ' + this.title + ' ' + this.text)
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form className="form-registry " onSubmit={this._createNote.bind(this)}>
        
        <input
          type="text"
          placeholder="Title"
          className="form-registry_input"
          // bind is an association
          // this is javascript is dynamic
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Enter your note..."
          className="form-registry_input"
          onChange = {this._handleChangeText.bind(this)}
        />
        <button className="form-registry_input form-registry_submit">
          Create Note
        </button>
      </form>
    );
  }
}

export default FormRegistry;
