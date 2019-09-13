import React from "react";
import { connect } from "react-redux";
import { getCards } from "../../store/selectors/selectors";
import { putCards } from "../../store/action/cards";
import "../../style.css";
import DeleteButton from "../buttons/deleteButton";

class Card extends React.Component {
  onDragOver(event) {
    console.log("onDragover");
    event.preventDefault();
  }

  onDrop = event => {
    try {
      event.preventDefault();
      event.stopPropagation();
      console.log("onDrop");
      const blockId = event.dataTransfer.getData("blockId");
      const card = this.props.cards.find(card => blockId == card.id);
      this.props.putCards(
        { ...card, columnId: this.props.card.columnId },
        this.props.card.id
      );
    } catch (ex) {
      console.log("error", ex);
    }
  };
  onDragStart(event) {
    console.log("onDragStart", event);
    event.dataTransfer.setData("blockId", event.target.dataset.blockId);
  }
  render() {
    return (
      <div
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        data-block-id={this.props.card.id}
        onDragStart={this.onDragStart}
        key={this.props.card.id}
        className="flex-card"
        draggable="true"
      >
        {this.props.card.title}
        <DeleteButton id={this.props.card.id}></DeleteButton>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { cards: getCards(state) };
}
export default connect(
  mapStateToProps,
  { putCards }
)(Card);
//
//
