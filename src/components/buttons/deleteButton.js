import React from "react";
import { connect } from "react-redux";
import "../../style.css";
import { deleteCards } from "../../store/action/cards";
class DeleteButton extends React.Component {
  delete = () => {
    this.props.deleteCards(this.props.id);
    console.log("card deleted");
  };

  render() {
    return (
      <div className="cardButton" onClick={this.delete}>
        Delete
      </div>
    );
  }
}
export default connect(
  null,
  { deleteCards }
)(DeleteButton);
//
