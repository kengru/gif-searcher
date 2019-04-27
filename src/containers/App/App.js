import React, { Component } from "react";

import Seeker from "../Seeker/Seeker";
import GifContainer from "../GifContainer/GifContainer";
import Pagination from "../Pagination/Pagination";
import Title from "../../components/Title/Title";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Seeker />
        <GifContainer />
        <Pagination />
      </div>
    );
  }
}

export default App;
