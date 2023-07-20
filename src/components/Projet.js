import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faLink } from '@fortawesome/free-solid-svg-icons'
import '../css/Projet.css'

export default function Projet({image}) {
  return (
    <div className='projet relative'>
        <img src={image} alt='image'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 text-white  projectinfos hover:opacity-100  flex flex-col items-center justify-center'>
            <div className=''>
                <h4>PROJECT DETAIL</h4>
                <a href="Image" className='hover:text-[#fbbd23]'><FontAwesomeIcon icon={faImage} /> </a>
                <a href="Image" className='hover:text-[#fbbd23]'><FontAwesomeIcon icon={faLink} /> </a>
            </div>
        </div>

    </div>
  )
}
