import React, { Component } from "react";

import Title from "../../components/Title/Title";
import Seeker from "../Seeker/Seeker";
import GifContainer from "../GifContainer/GifContainer";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Seeker />
        <GifContainer />
        <Gallery />
        <Pagination />
      </div>
    );
  }
}

export default App;
