import React from 'react'

export default function MyButton({titre}) {
  return (
    <div>
       <button className="btn btn-outline btn-warning">{titre}</button>
    </div>
  )
}
