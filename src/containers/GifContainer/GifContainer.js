import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";
import GifStills from "../../components/GifStills/GifStills";

class GifContainer extends PureComponent {
  componentDidMount() {
    this.props.onFetchGifs(this.props.offset);
  }

  componentDidUpdate(prevProps) {
    if (this.props.offset !== prevProps.offset) {
      this.props.onFetchGifs(this.props.offset);
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
    offset: state.offset
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
