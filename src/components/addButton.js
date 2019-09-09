import React from "react";
import { connect } from "react-redux";
import "../style.css";

export default class AddButton extends React.Component {
  Add = () => {
    var cardTitle = prompt("Enter title");
    const card = {
      columnId: this.props.id,
      title: cardTitle
    };
    fetch("http://localhost:8089/api/card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    });
  };

  render() {
    return (
      <div className="cardButton" onClick={this.Add}>
        +
      </div>
    );
  }
}
