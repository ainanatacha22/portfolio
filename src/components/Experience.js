import React from 'react'
import Card from './Card'

export default function Experience() {
    return (
        <div className='space-y-3 w-full'>
            <h1 className='text-2xl font-bold text-[#666666;]'>EXPERIENCES</h1>
            <div className='border-r-2 px-4 space-y-3'>
                <Card className={'cardExperience lg:h-44'}
                    title={"Développeur front-end / 2022-2023"}
                    soustitle={"CSS HTML, JS, React"}
                    contenu={"Formation axée sur les langages clés du Web (HTML, CSS, JavaScript et React) et l'implication dans cinq projets pratiques."}
                />
                <Card className={'cardExperience lg:h-44'}
                    title={"Comptable / 2017-2019"}
                    soustitle={"Setex Antananarivo"}
                    contenu={"Expert comptable spécialisé en comptabilité de gestion, maîtrise parfaite des principes comptables et outils de gestion financière."}
                />
            </div>
        </div>
    )
}
