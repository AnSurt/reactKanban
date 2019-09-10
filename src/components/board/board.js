import React from "react";
import "../../style.css";

import Column from "../columns/index";

export default ({ column }) => {
  return (
    <div className="flex-element2">
      {this.state.columns.map(column => (
        <Column column={column}></Column>
      ))}
    </div>
  );
};
