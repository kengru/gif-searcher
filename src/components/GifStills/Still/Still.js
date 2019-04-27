import React from "react";

import "./Still.css";

const still = props => {
  return <img src={props.url} alt={props.alt} className="Still" onClick={() => console.log(props.url)}/>;
};

export default still;
