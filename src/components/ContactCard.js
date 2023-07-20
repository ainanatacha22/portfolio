import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/ContactCard.css'

export default function ContactCard({ icon, titre, content }) {
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
                                <FontAwesomeIcon icon={content.facebook} />
                                <FontAwesomeIcon icon={content.linkedin} />
                                <FontAwesomeIcon icon={content.github} />
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
