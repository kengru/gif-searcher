import React, { Component } from "react";

import GifContainer from "../GifContainer/GifContainer";

class App extends Component {
  render() {
    return (
      <div>
        <p>gifs are:</p>
        <GifContainer />
      </div>
    );
  }
}

export default App;
