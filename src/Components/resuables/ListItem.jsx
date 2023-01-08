import React from 'react'

export default function ListItem({ pageNumber, currPage, handleClick, title }) {
  return (
    <li className={currPage === pageNumber ? 'currPage' : null}>
      <p className="page">{pageNumber}</p>
      <div className="steps">
        <p className="step">STEP {pageNumber}</p>
        <p className="title">{title}</p>
      </div>
    </li>
  )
}
