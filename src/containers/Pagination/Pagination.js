import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";

import PaginationItem from "../../components/PaginationItem/PaginationItem";

class Pagination extends Component {
  render() {
    let firstPage = null;
    let previousPage = null;
    let nextPage = null;
    let lastPage = null;
    if (this.props.totalPages > 0) {
      firstPage = (
        <PaginationItem
          pageNumber={1}
          clicked={() => this.props.onSetOffset(0)}
        />
      );
      let newOffset = this.props.offset + 12;
      if (this.props.totalPages > 1) {
        if (this.props.offset < this.props.totalPages * 12) {
          nextPage = (
            <PaginationItem
              pageNumber={newOffset / 12 + 1}
              clicked={() => this.props.onSetOffset(newOffset)}
            />
          );
        }
        lastPage = (
          <PaginationItem
            pageNumber={this.props.totalPages}
            clicked={() =>
              this.props.onSetOffset(Math.trunc(this.props.totalPages) * 12)
            }
          />
        );
        if (this.props.totalPages > 2) {
          if (this.props.offset >= 12) {
            previousPage = (
              <PaginationItem
                pageNumber={newOffset / 12}
                clicked={() => this.props.onSetOffset(this.props.offset - 12)}
              />
            );
          }
        }
      }
    }
    return (
      <div>
        {firstPage}
        {previousPage}
        {nextPage}
        {lastPage}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalPages: state.pages,
    offset: state.offset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetOffset: offset => dispatch(actions.setOffset(offset))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
