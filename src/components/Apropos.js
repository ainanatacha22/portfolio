import Image from '../image/nata.jpg'

import React from 'react'
import '../css/Apropos.css'

export const Apropos = () => {
    return (
        <div className='apropos flex-col justify-center'>
            <img className='image' src={Image} alt='img'/>
            <div className='container'>
                <h2 className='title text-xl mt-8 sm:text-3xl sm:mt-5'>
                    <span className='title-word title-word-1'>je </span>
                    <span className='title-word title-word-2'>suis </span>
                    <span className='title-word title-word-3'>développeuse</span>
                </h2>
            </div>
        </div>
    )
}
