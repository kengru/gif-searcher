import React from "react";

import "./GalleryContent.css";

const GalleryContent = props => {
  return (
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="slide">
        <img
          src="https://media0.giphy.com/media/e7PTB8Yksi9CqTNqnH/giphy.webp"
          alt="2"
        />
      </div>
      <button className="previous" onClick={() => console.log("previous")}>
        &#10094;
      </button>
      <button className="next" onClick={() => console.log("next")}>
        &#10095;
      </button>
    </div>
  );
};

export default GalleryContent;
