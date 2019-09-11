import React from "react";
import "../../style.css";

import Column from "../columns/index";

export default ({ columns }) => {
  return (
    <div className="flex-element2">
      {columns.map(column => (
        <Column column={column}></Column>
      ))}
    </div>
  );
};
//
