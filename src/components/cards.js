import React from "react";
import { connect } from "react-redux";
import "../style.css";
import DeleteButton from "./deleteButton";

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
