import React from "react";
import { connect } from "react-redux";
import "../style.css";
import Card from "./cards.js";
import AddButton from "./addButton";

export default class Column extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8089/api/card")
      .then(response => response.json())
      .then(json => {
        this.setState({ cards: json });
      });
  }
  state = {
    cards: []
  };
  render() {
    console.log(this.state);
    return (
      <div className="flex-columns">
        {this.props.column.title}
        {this.state.cards
          .filter(card => card.columnId == this.props.column.id)
          .map(card => (
            <Card card={card}></Card>
          ))}
        <AddButton id={this.props.column.id}></AddButton>
      </div>
    );
  }
}
