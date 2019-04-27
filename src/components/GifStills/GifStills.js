import React from "react";

import Still from "./Still/Still";

import "./GifStills.css";

const gifStills = props => {
  let gifs = null;
  if (props.gifs.length) {
    gifs = props.gifs.map(gif => (
      // <Still key={gif.id} url={gif.images.original_still.url} alt={gif.id} />
      // <Still key={gif.id} url={gif.images.original.webp} alt={gif.id} />
      <Still key={gif.id} url={gif.images.downsized_still.url} alt={gif.id} />
    ));
  }

  return <div className="GifStills">{gifs}</div>;
};

export default gifStills;
