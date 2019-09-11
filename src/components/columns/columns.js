import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "../../style.css";
import Card from "../cards/cards.js";
import AddButton from "../buttons/addButton";

export default ({ cards, column }) => {
  return (
    <div className="flex-columns">
      {column.title}
      {cards
        .filter(card => card.columnId == column.id)
        .map(card => (
          <Card card={card}></Card>
        ))}
      <AddButton id={column.id}></AddButton>
    </div>
  );
};
//
