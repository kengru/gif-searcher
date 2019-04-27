import React, { Component } from "react";

import GifContainer from "../GifContainer/GifContainer";
import Seeker from "../Seeker/Seeker";

class App extends Component {
  render() {
    return (
      <div>
        <Seeker />
        <p>gifs are:</p>
        <GifContainer />
      </div>
    );
  }
}

export default App;
