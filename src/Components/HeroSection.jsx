import React from 'react'
import '../Sass/hero_section.scss'
import ListItem from './resuables/ListItem'
import { nanoid } from 'nanoid'

export default function HeroSection({ currPage, handleClick }) {
  return (
    <header>
      <ul className="step-container">
        {[
          [1, 'Your Info'],
          [2, 'Select Plan'],
          [3, 'Add-ons'],
          [4, 'Summary'],
        ].map(([page, title]) => (
          <ListItem
            pageNumber={page}
            key={nanoid()}
            currPage={currPage}
            handleClick={handleClick}
            title={title}
          />
        ))}
      </ul>
    </header>
  )
}
