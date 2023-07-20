import React from 'react'
import '../css/Card.css'

export default function Card({title, soustitle, contenu, className}) {
  return (
    <div className={className}>
      <h1 className='font-bold'>{title}</h1>
      <div>
        <h2 className='font-semibold'>{soustitle}</h2>
      </div>
      <div>
        <p>{contenu}</p>
      </div>
    </div>

  )
}
