import React from "react";
import "../style.css";
import { connect } from "react-redux";
import Column from "./columns.js";
import Card from "./cards.js";

export default class Board extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8089/api/column")
      .then(response => response.json())
      .then(json => {
        this.setState({ columns: json });
      });
  }
  state = {
    columns: []
  };
  render() {
    console.log(this.state);
    return (
      <div className="flex-element2">
        {this.state.columns.map(column => (
          <Column column={column}></Column>
        ))}
      </div>
    );
  }
}
