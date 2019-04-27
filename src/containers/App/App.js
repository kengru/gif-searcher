import React, { Component } from "react";
import axios from "../../axiosGiphy";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      giphyKey: process.env.REACT_APP_GIPHY_KEY,
      gifs: []
    };
  }

  componentDidMount() {
    axios
      .get(`/gifs/trending?api_key=${this.state.giphyKey}`)
      .then(response => {
        this.setState({ gifs: response.data.data });
        console.log(response.data.data);
      });
  }

  render() {
    let gifs = null;
    if (this.state.gifs.length) {
      gifs = this.state.gifs.map(gif => (
        <img src={gif.images.original_still.url} key={gif.id} alt={gif.id}/>
      ));
    }
    return (
      <div>
        {" "}
        <p>gifs are:</p>
        {gifs}
      </div>
    );
  }
}
