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
        <GalleryContent show={this.props.galleryOpen} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    galleryOpen: state.galleryOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetGalleryOpen: open => dispatch(actions.setGalleryOpen(open))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
