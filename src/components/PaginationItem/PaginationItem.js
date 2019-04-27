import React from 'react'

const PaginationItem = props => {
  return (
    <div onClick={props.clicked}>
      {Math.trunc(props.pageNumber)}
    </div>
  )
}

export default PaginationItem;
