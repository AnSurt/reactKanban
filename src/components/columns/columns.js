import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "../../style.css";
import Card from "../cards/cards.js";
import AddButton from "../buttons/addButton";

export default ({ card }) => {
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
};
