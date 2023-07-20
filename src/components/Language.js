import React from 'react'
import '../css/Language.css'

export default function Language({language, pourcentage, pourcentageValue}) {
  return (
    <div>
      <div className={`flex justify-between `}>
          <h1>{language}</h1>
          <h1>{pourcentage}</h1>
      </div>
      <div className="bar w-full h-2 bg-slate-400">
        <div className={`bar-inner ${pourcentageValue} h-2 bg-[#FEC544]`}>
        </div>
      </div>
    </div>
  )
}
