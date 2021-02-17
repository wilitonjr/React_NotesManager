import React, { Component } from "react";
import CardNote from "../CardNote";
import "./style.css";

class ListNote extends Component {
  render() {
    return (
      <ul className="list-note">
        {Array.of("Work", "Work", "School").map((category, index) => {
          return (
            <li className="list-note_item" key={index}>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNote;
