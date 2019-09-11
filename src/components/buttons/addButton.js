import React from "react";
import { connect } from "react-redux";
import "../../style.css";
import { postCards } from "../../store/action/cards";

class AddButton extends React.Component {
  Add = () => {
    var cardTitle = prompt("Enter title");
    const card = {
      columnId: this.props.id,
      title: cardTitle
    };
    this.props.postCards(card);
  };

  render() {
    return (
      <div className="cardButton" onClick={this.Add}>
        +
      </div>
    );
  }
}
export default connect(
  null,
  { postCards }
)(AddButton);
//
