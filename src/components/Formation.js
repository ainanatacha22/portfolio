import React from 'react'
import Card from './Card'

export default function Formation() {
  return (
    <div className='space-y-3 w-full '>
      <h1 className='text-2xl font-bold text-[#666666;] '>FORMATION</h1>
      <div className='border-l-2 px-4 space-y-3'>
        <Card className={"cardFormation lg:h-44"}
          title={"Formation en ligne / 2022-2023"}
          soustitle={"Openclassroom et Udemy"}
          contenu={"Formation distancielle intensive sur OpenClassrooms, Udemy et tutoriels en ligne : connaissances approfondies acquises."}
        />
        <Card className={"cardFormation lg:h-44"}
          title={"MASTER 2 en Gestion / 2016"}
          soustitle={"université d'Antananarivo"}
          contenu={"Parcours Finance et Gouvernance d'entreprise"}
        />
      </div>
    </div>
  )
}
