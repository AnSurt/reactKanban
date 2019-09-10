import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCards } from "../../store/selectors/card";
import { loadColumns } from "../../store/action/cards";

const BoardContainer = Component =>
  class BoardContainer extends React.Component {
    render() {
      const { column } = this.props;

      return column.length > 0 ? <Component {...this.props} /> : null;
    }
  };

function mapStateToProps(state) {
  return { column: getCards(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { loadColumns }
  ),
  BoardContainer
);
