import React, { Component } from "react";
import ListNotes from "./components/ListNote";
import FormRegistry from "./components/FormRegistry";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  createNote(title, text) {
    console.log("New note created " + title + " " + text);
  }

  render() {
    return (
      <section className="content">
        <FormRegistry createNote={this.createNote} />
        <ListNotes />
      </section>
    );
  }
}

export default App;
