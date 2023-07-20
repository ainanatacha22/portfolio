import React from 'react'
import MyButton from './myButton'
import '../css/AboutMe.css'


export default function AboutMe() {
    return (
        <div className='aboutMe mt-14' id='about'>
            <div className='titre my-10'>
                <h1 className='about'>ABOUT  <span> ME</span></h1>
                <span className="ligneBas"></span>
            </div>
            <div className='space-y-5 px-7 lg:px-0'>
                <div className='aboutme m-auto w-full lg:w-3/5 p-6 rounded-2xl text-center'>
                    <h1>Bonjour, je suis Natacha</h1>
                    <p className='mb-4'> Développeuse passionnée dans le domaine du web. Après une formation dans le Web, j'ai acquis de nombreuses compétences et connaissances grâce à des projets réalisés dans différents langages de programmation. J'ai quelques projets intéressants <a href='' style={{ color: '#862B0D' }}>à voir</a>.  </p>
                    <MyButton titre="TELECHARGER MON CV" />
                </div>
                <div className='aboutme p-6 rounded-2xl flex justify-between text-center m-auto w-full flex-col space-y-4 sm:flex-row sm:space-y-0 lg:w-3/5 '>
                    <div className='w-full'>
                        <p>Prénom: Natacha</p>
                        <p>Date de naissance: 13 Août 1991</p>
                        <p>Adresse: Mahazoarivo Nord</p>

                    </div>
                    <div className='w-full'>
                        <p>Numéro tel: 0347647664</p>
                        <p>E-mail: aina2natacha@gmail.com</p>
                        <p>skype: Rakotondrasoa aina</p>
                        <p>Languages: Francais, Malagasy</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
