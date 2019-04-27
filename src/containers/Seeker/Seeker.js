import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";

class Seeker extends Component {
  state = {
    param: ""
  };

  handleChange = event => {
    if (!event.target.value) {
      this.props.onFetchGifs(0);
    }
    this.setState({ param: event.target.value });
  };

  submitSearch = event => {
    event.preventDefault();
    this.props.onSearchGifs(this.state.param, 0);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input
            type="text"
            name="search"
            value={this.state.param}
            onChange={this.handleChange}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

const mapDipatchToProps = dispatch => {
  return {
    onSearchGifs: (search, offset) =>
      dispatch(actions.fetchSearchAsync(search, offset)),
    onFetchGifs: offset => dispatch(actions.fetchTrendingAsync(offset))
  };
};

export default connect(
  null,
  mapDipatchToProps
)(Seeker);
