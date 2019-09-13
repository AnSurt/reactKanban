import React from "react";
import "../../style.css";
import { connect } from "react-redux";
import { getColumns } from "../../store/selectors/selectors";
import { loadCards, loadColumns } from "../../store/action/cards";

import Column from "../columns/columns";

class Board extends React.Component {
  componentDidMount() {
    this.props.loadCards();
    this.props.loadColumns();
  }
  render() {
    return this.props.columns.length > 0 ? (
      <div className="flex-element2">
        {this.props.columns.map(column => (
          <Column column={column}></Column>
        ))}
      </div>
    ) : null;
  }
}
function mapStateToProps(state) {
  return { columns: getColumns(state) };
}

export default connect(
  mapStateToProps,
  { loadColumns, loadCards }
)(Board);
//
