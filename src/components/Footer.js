import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className='mt-20'>
      <div className='w-full bg-[#FEC544] h-24 flex justify-around items-center'>
        <div className='text-xl font-bold'>
            Aina Natacha
        </div>
        <div className='space-x-5'>
            <FontAwesomeIcon icon={faFacebook} className='text-2xl cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-2xl cursor-pointer'/>
            <FontAwesomeIcon icon={faGithub} className='text-2xl cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}
