import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/ContactCard.css'

export default function ContactCard({ icon, titre, content }) {
    const handleLinkClick = (event) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        window.open(href, '_blank');
      };
    return (
        <div className='flex justify-center w-full'>
            {
                (titre === "SOCIAL PROFILES") ?
                    <div className='body-contact w-full'>
                        <div className='icon-contact'>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className='content-contact'>
                            <div className='title-contact'>{titre}</div>
                            <div className='space-x-5'>
                                <a href='https://www.facebook.com/ainanatacha.vanichukii' onClick={handleLinkClick}><FontAwesomeIcon icon={content.facebook} /> </a>
                                <a href='#'>  <FontAwesomeIcon icon={content.linkedin} /></a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='body-contact w-full'>
                        <div className='icon-contact'>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className='content-contact'>
                            <div className='title-contact'>{titre}</div>
                            <div>{content}</div>
                        </div>
                    </div>
            }
        </div>

    )
}
