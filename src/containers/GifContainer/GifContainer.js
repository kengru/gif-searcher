import React, { PureComponent } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";
import Still from "../../components/Still/Still";

import "./GifContainer.css";

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

  openGallery(gifId) {
    // Get gif.
    const index = this.props.gifs.findIndex(gif => gif.id === gifId);
    this.props.onSetCurrentGif(this.props.gifs[index]);
    this.props.onSetGalleryOpen(true);
  }

  render() {
    let gifs = null;
    if (this.props.gifs.length) {
      gifs = this.props.gifs.map(gif => (
        // <Still key={gif.id} url={gif.images.original_still.url} alt={gif.id} />
        // <Still key={gif.id} url={gif.images.original.webp} alt={gif.id} />
        // <Still key={gif.id} url={gif.images.downsized_still.url} alt={gif.id} />
        <Still
          key={gif.id}
          url={gif.images.fixed_height_still.url}
          id={gif.id}
          alt={gif.title}
          title={gif.title}
          clicked={value => this.openGallery(value)}
        />
      ));
    }
    return (
      <div className="GifContainer">
        {gifs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    offset: state.offset,
    query: state.query,
    inSearch: state.inSearch,
    currentGif: state.currentGif
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGifs: offset => dispatch(actions.fetchTrendingAsync(offset)),
    onSearchGifs: (search, offset) =>
      dispatch(actions.fetchSearchAsync(search, offset)),
    onSetGalleryOpen: open => dispatch(actions.setGalleryOpen(open)),
    onSetCurrentGif: gif => dispatch(actions.setCurrentGif(gif))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GifContainer);
