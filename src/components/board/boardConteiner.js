import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getColumns } from "../../store/selectors/card";
import { loadCards, loadColumns } from "../../store/action/cards";

const BoardContainer = Component =>
  class BoardContainer extends React.Component {
    componentDidMount() {
      this.props.loadCards();
      this.props.loadColumns();
    }
    render() {
      const { columns } = this.props;

      return columns.length > 0 ? <Component {...this.props} /> : null;
    }
  };

function mapStateToProps(state) {
  return { columns: getColumns(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { loadColumns, loadCards }
  ),
  BoardContainer
);
