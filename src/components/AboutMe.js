import React from 'react'
import '../css/AboutMe.css'
import resume from '../resume/CV-NATA.pdf'


export default function AboutMe() {
    return (
        <div className='aboutMe mt-14' id='about'>
            <div className='titre my-10'>
                <h1 className='about'>A PROPOS</h1>
                <span className="ligneBas"></span>
            </div>
            <div className='space-y-5 px-7 lg:px-0'>
                <div className='aboutme m-auto w-full lg:w-3/5 p-6 rounded-2xl text-center'>
                    <h1>Bonjour, je suis Natacha</h1>
                    <p className='mb-4'> Développeuse passionnée dans le domaine du web. Après une formation dans le Web, j'ai acquis de nombreuses compétences et connaissances grâce à des projets réalisés dans différents langages de programmation. J'ai quelques projets intéressants <a href='#' style={{ color: '#862B0D' }}>à voir</a>.  </p>
                    <a className="btn btn-outline btn-warning hover:bg-tertiary hover:text-primary text-slate-300" href={resume} download="Mon CV">TELECHARGER MON CV</a>
                </div>
                <div className='aboutme p-6 rounded-2xl flex justify-between text-center m-auto w-full flex-col space-y-4 sm:flex-row sm:space-y-0 lg:w-3/5 '>
                    <div className='w-full'>
                        <p><span className='font-semibold'>Nom</span>: RAKOTONDRASOA</p>
                        <p><span className='font-semibold'>Prénoms</span>: Aina Natacha</p>
                        <p><span className='font-semibold'>Adresse</span>: Andohanimandroseza Tanà</p>

                    </div>
                    <div className='w-full'>
                        <p><span className='font-semibold'>Numéro tel</span>: 0347647664</p>
                        <p><span className='font-semibold'>E-mail</span>: aina2natacha@gmail.com</p>
                        <p><span className='font-semibold'>Languages</span>: Francais, Anglais, Malagasy</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
