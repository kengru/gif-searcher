import React from "react";

import "./PaginationItem.css";

const PaginationItem = props => {
  let item = null;
  if (props.pageNumber === "...") {
    item = <div className="NotPaginationItem">{props.pageNumber}</div>;
  } else {
    let active = props.active ? "Active" : "";
    item = (
      <div
        onClick={props.clicked}
        className={`PaginationItem ${active}`}
      >
        {props.pageNumber}
      </div>
    );
  }
  return item;
};

export default PaginationItem;
