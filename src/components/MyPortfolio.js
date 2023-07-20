import React from 'react'
import '../css/MyPortfolio.css'
import Projet from './Projet'
import Image from '../assets/huile.jpg'


export default function MyPortfolio() {
    return (
        <div className='myPortfolio mt-14' id='portfolio'>
            <div className='titre my-10'>
                <h1 className='my'> MY <span> PORTFOLIO</span></h1>
                <span className="ligneBas"></span>
            </div>
            <div className='flex m-auto justify-center'>
                <div className='flex space-x-0 space-y-6 flex-col px-7 w-full sm:space-y-0 sm:space-x-4 sm:flex-row lg:w-3/5 lx:px-0 text-center text-xl '>
                    <Projet image={Image} text='HUILE ESSENTIELLE' />
                    <Projet image={Image} text='EAU VIVE' />
                    <Projet image={Image} text='EAU VIVE' />
                </div>
            </div>
        </div>

    )
}
