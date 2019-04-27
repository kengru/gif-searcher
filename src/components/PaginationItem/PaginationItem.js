import React from 'react'

const PaginationItem = props => {
  return (
    <div onClick={props.clicked} style={{ padding: "20px" }}>
      {props.pageNumber}
    </div>
  )
}

export default PaginationItem;
