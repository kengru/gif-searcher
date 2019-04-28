import React from "react";

import "./Still.css";

const still = props => {
  return (
    <div className="Still">
      <img
        src={props.url}
        alt={props.alt}
        onClick={() => props.clicked(true)}
      />
    </div>
  );
};

export default still;
