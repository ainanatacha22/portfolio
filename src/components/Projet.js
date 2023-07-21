import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import '../css/Projet.css'

export default function Projet({image,text,url}) {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    window.open(href, '_blank');
  };
  return (
    <div className='projet relative'>
        <img src={image} alt='image'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 text-white  projectinfos hover:opacity-100  flex flex-col items-center justify-center'>
            <div className=''>
                <h4 className='mb-3'>{text}</h4>
                <a href={url} className='hover:text-[#fbbd23]' onClick={handleLinkClick}><FontAwesomeIcon icon={faLink} style={{fontSize:35}}/> </a>
            </div>
        </div>
    </div>
  )
}
