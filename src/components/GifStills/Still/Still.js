import React from "react";

import "./Still.css";

const still = props => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className="Still"
      onClick={() => props.clicked(true)}
    />
  );
};

export default still;
