import React from "react";
import { connect } from "react-redux";
import "../../style.css";

export default class DeleteButton extends React.Component {
  delete = () =>
    fetch("http://localhost:8089/api/card/" + this.props.id, {
      method: "DELETE"
    });
  render() {
    return (
      <div className="cardButton" onClick={this.delete}>
        Delete
      </div>
    );
  }
}
