import React from 'react'
import ContactCard from './ContactCard'
import { faLocation,faEnvelope, faShare, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import '../css/ContactMe.css'



export default function ContactMe() {
    const content = {
        "facebook": faFacebook,
        "linkedin": faLinkedin,
        "github": faGithub,
    }
    return (
        <div className='ContactMe mt-14' id='contact'>
            <div className='titre my-10'>
                <h1 className='contact'>CONTACT</h1>
                <span className="ligneBas"></span>
            </div>
            <div className='space-y-4'>
                <div className='flex space-y-4 space-x-0 flex-col w-full px-7 sm:space-y-0 sm:space-x-5 sm:flex-row lg:w-3/5 lg:px-0 m-auto'>
                    <ContactCard icon={faLocation} titre='MON ADRESSE' content='Andohanimandroseza lot: vt85-HB-Bis Tana' />
                    <ContactCard icon={faShare} titre='RESEAUX SOCIAUX' content={content} />
                </div>
                <div className='flex space-y-4 space-x-0 sm:space-y-0 sm:space-x-5 w-full flex-col sm:flex-row px-7 lg:w-3/5 lg:px-0 m-auto'>
                    <ContactCard icon={faEnvelope} titre='E-MAIL' content='aina2natacha@gmail.com' />
                    <ContactCard icon={faPhone} titre='TELEPHONE' content='0347647664' />
                </div>
            </div>
        </div>

    )
}
