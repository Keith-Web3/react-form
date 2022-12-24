import React from 'react'

export default function ListItem({ pageNumber, currPage, handleClick, title }) {
  return (
    <li
      className={currPage === pageNumber ? 'currPage' : null}
      onClick={handleClick(pageNumber)}
    >
      <p className="page">{pageNumber}</p>
      <div className="steps">
        <p className="step">STEP {pageNumber}</p>
        <p className="title">{title}</p>
      </div>
    </li>
  )
}
