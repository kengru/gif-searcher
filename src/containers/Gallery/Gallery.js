import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";
import Backdrop from "../../components/Backdrop/Backdrop";
import GalleryContent from "../../components/GalleryContent/GalleryContent";

class Gallery extends Component {
  render() {
    return (
      <>
        <Backdrop
          show={this.props.galleryOpen}
          clicked={() => this.props.onSetGalleryOpen(false)}
        />
        <GalleryContent
          show={this.props.galleryOpen}
          gif={this.props.currentGif}
          gifs={this.props.gifs}
          changeGif={gif => this.props.onSetCurrentGif(gif)}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    galleryOpen: state.galleryOpen,
    currentGif: state.currentGif
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetGalleryOpen: open => dispatch(actions.setGalleryOpen(open)),
    onSetCurrentGif: gif => dispatch(actions.setCurrentGif(gif))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
