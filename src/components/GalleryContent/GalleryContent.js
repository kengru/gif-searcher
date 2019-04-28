import React from "react";

import "./GalleryContent.css";

const GalleryContent = props => {
  let gif = "";
  let link = "";
  let previous = 0;
  let next = 1;
  if (props.gif.hasOwnProperty("images")) {
    gif = props.gif.images.downsized_large.url;
    // gif = props.gif.images.original.url;
    link = props.gif.images.original.url;
    let index = props.gifs.findIndex(x => x.id === props.gif.id);
    if (index > 0) {
      previous = index - 1;
      if (index !== props.gifs.length - 1) {
        next = index + 1;
      } else {
        next = -1;
      }
    } else {
      previous = -1;
    }
  }

  console.log(`previous: ${previous}, next: ${next}`);
  return (
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="slide">
        <img src={gif} alt="2" />
        <p>{link ? link : ""}</p> <span>(copy link)</span>
      </div>
      {previous >= 0 ? (
        <button
          className="previous"
          onClick={() => props.changeGif(props.gifs[previous])}
        >
          &#10094;
        </button>
      ) : null}
      {next >= 0 ? (
        <button
          className="next"
          onClick={() => props.changeGif(props.gifs[next])}
        >
          &#10095;
        </button>
      ) : null}
    </div>
  );
};

export default GalleryContent;
