import React, { Component } from "react";

import Seeker from "../Seeker/Seeker";
import GifContainer from "../GifContainer/GifContainer";
import Pagination from "../Pagination/Pagination";

class App extends Component {
  render() {
    return (
      <div>
        <Seeker />
        <p>gifs are:</p>
        <GifContainer />
        <Pagination />
      </div>
    );
  }
}

export default App;
