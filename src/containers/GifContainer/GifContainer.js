import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";
import GifStills from "../../components/GifStills/GifStills";

class GifContainer extends PureComponent {
  componentDidMount() {
    this.props.onFetchGifs();
  }

  componentDidUpdate(prevProps) {
    console.log();
    if (
      this.props.offset !== prevProps.offset &&
      !this.props.inSearch &&
      this.props.offset
    ) {
      this.props.onFetchGifs();
    } else if (this.props.inSearch && this.props.offset !== prevProps.offset) {
      this.props.onSearchGifs(this.props.query, this.props.offset);
    }
  }

  render() {
    return (
      <div>
        <GifStills gifs={this.props.gifs} />
        {/* <Pagination /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    offset: state.offset,
    query: state.query,
    inSearch: state.inSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGifs: offset => dispatch(actions.fetchTrendingAsync(offset)),
    onSearchGifs: (search, offset) =>
      dispatch(actions.fetchSearchAsync(search, offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifContainer);
