import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/gifs";

import PaginationItem from "../../components/PaginationItem/PaginationItem";

class Pagination extends Component {
  render() {
    let result = [];
    let range = [];
    let current = (this.props.offset + 12) / 12;
    let last = this.props.totalPages;
    let delta = 2;
    let left = current - delta;
    let right = current + delta + 1;
    let l;
    let pagination = [];
    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          pagination.push(l + 1);
        } else if (i - l !== 1) {
          pagination.push("...");
        }
      }
      pagination.push(i);
      l = i;
    }

    console.log(pagination);

    if (pagination.length) {
      result = pagination.map(pageNumber => {
        if (typeof pageNumber === "number") {
          return (
            <PaginationItem
              key={pageNumber}
              pageNumber={pageNumber}
              clicked={() => this.props.onSetOffset(pageNumber * 12 - 12)}
            />
          );
        } else {
          return (
            <PaginationItem key={pageNumber} pageNumber="..." clicked={null} />
          );
        }
      });
    }
    // // let firstPage = null;
    // // let previousPage = null;
    // // let nextPage = null;
    // // let lastPage = null;
    // // if (this.props.totalPages > 0) {
    // //   firstPage = (
    // //     <PaginationItem
    // //       pageNumber={1}
    // //       clicked={() => this.props.onSetOffset(0)}
    // //     > first</PaginationItem>
    // //   );
    // //   let newOffset = this.props.offset + 12;
    // //   if (this.props.totalPages > 1) {
    // //     if (this.props.offset < Math.trunc(this.props.totalPages) * 12) {
    // //       nextPage = (
    // //         <PaginationItem
    // //           pageNumber={newOffset / 12 + 1}
    // //           clicked={() => this.props.onSetOffset(newOffset)}
    // //           > next </PaginationItem>
    // //       );
    // //     }
    // //     if (this.props.totalPages > 2) {
    // //       lastPage = (
    // //         <PaginationItem
    // //           pageNumber={this.props.totalPages}
    // //           clicked={() =>
    // //             this.props.onSetOffset(Math.ceil(this.props.totalPages) * 12)
    // //           }
    // //           > last</PaginationItem>
    // //       );
    // //       if (this.props.offset >= 12) {
    // //         previousPage = (
    // //           <PaginationItem
    // //             pageNumber={newOffset / 12}
    // //             clicked={() => this.props.onSetOffset(this.props.offset - 12)}
    // //             > prev</PaginationItem>
    // //         );
    // //       }
    // //     }
    // //   }
    // }
    return (
      <div>
        {/* {firstPage}
        {previousPage}
        {nextPage}
        {lastPage} */}
        {result}
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
