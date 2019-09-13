import React from "react";

import { connect } from "react-redux";
import { getCards } from "../../store/selectors/selectors";
import { loadCards, putCards } from "../../store/action/cards";
import "../../style.css";
import Card from "../cards/cards.js";
import AddButton from "../buttons/addButton";

class Column extends React.Component {
  onDragOver(event) {
    console.log("onDragover");
    event.preventDefault();
  }

  onDrop = event => {
    try {
      event.preventDefault();
      console.log("onDrop");
      const blockId = event.dataTransfer.getData("blockId");
      const card = this.props.cards.find(card => blockId == card.id);
      this.props.putCards({ ...card, columnId: this.props.column.id });
    } catch (ex) {
      console.log("error", ex);
    }
  };

  render() {
    return this.props.cards.length > 0 ? (
      <div
        className="flex-columns"
        key={this.props.column.id}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {this.props.column.title}
        {this.props.cards
          .filter(card => card.columnId == this.props.column.id)
          .map(card => (
            <Card card={card}></Card>
          ))}
        <AddButton id={this.props.column.id}></AddButton>
      </div>
    ) : null;
  }
}
function mapStateToProps(state) {
  return { cards: getCards(state) };
}
export default connect(
  mapStateToProps,
  { loadCards, putCards }
)(Column);
//
