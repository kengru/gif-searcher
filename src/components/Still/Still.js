import React from "react";

import "./Still.css";

const still = props => {
  return (
    <div className="Still">
      <img
        src={props.url}
        alt={props.alt}
        title={props.title}
        onClick={() => props.clicked(props.id)}
      />
    </div>
  );
};

export default still;
