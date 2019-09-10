import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCards } from "../../store/selectors/card";
import { loadCards } from "../../store/action/cards";

const ColumnContainer = Component =>
  class ColumnContainer extends React.Component {
    render() {
      const { cards } = this.props;

      return cards.length > 0 ? <Component {...this.props} /> : null;
    }
  };

function mapStateToProps(state) {
  return { cards: getCards(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { loadCards }
  ),
  ColumnContainer
);
