import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";
import GifStills from "../../components/GifStills/GifStills";

class GifContainer extends Component {
  componentDidMount() {
    this.props.onFetchGifs(0);
  }
  render() {
    return (
      <div>
        <GifStills gifs={this.props.gifs}/>
        {/* <Pagination /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGifs: offset => dispatch(actions.fetchTrendingAsync(offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifContainer);
