import React from "react";
import "../../style.css";
import DeleteButton from "../buttons/deleteButton";

export default class Card extends React.Component {
  render() {
    return (
      <div className="flex-card">
        {this.props.card.title}
        <DeleteButton id={this.props.card.id}></DeleteButton>
      </div>
    );
  }
}
//
