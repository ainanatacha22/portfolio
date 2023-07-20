import React from 'react'
import '../css/MyServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
export default function MySerices() {
    return (
        <div className='myServices mt-14' id='service'>
            <div className='titre my-10'>
                <h1 className='my'>MY  <span> SERVICES</span></h1>
                <span className="ligneBas"></span>
            </div>
            <div className='flex space-x-0 space-y-4 sm:space-y-0 sm:space-x-5  w-full flex-col sm:flex-row lg:w-3/5 px-7 lg:px-0 m-auto text-center'>
                <div className='card flex flex-col items-center justify-center p-10'>
                    <FontAwesomeIcon className='text-5xl text-[#fbbd23]' icon={faCode}> </FontAwesomeIcon>
                    <h1 className='text-2xl font-semibold mt-4'>WEB INTEGRATEUR</h1>
                    <p>I am a web integrator, responsible for merging various components to develop and maintain websites.</p>
                </div>
                <div className='card flex flex-col items-center justify-center p-10'>
                    <FontAwesomeIcon className='text-5xl text-[#fbbd23]' icon={faCode}> </FontAwesomeIcon>
                    <h1 className='text-2xl font-semibold mt-4'>WEB DEVELOPMENT</h1>
                    <p>I am a web developer responsible for building and maintaining websites and web applications.</p>
                </div>
            </div>
        </div>
    )
}
