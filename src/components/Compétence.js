import React from 'react'
import Language from './Language'
import '../css/Language.css'

export default function Compétence() {
    return (
        <div className='text-center py-10'>
            <h1 className='text-2xl font-bold '> COMPETENCES</h1>
            <div className='flex justify-between w-full flex-col space-x-0 sm:space-x-5   sm:flex-row lg:w-3/5 px-7 lg:px-0 m-auto py-10'>
                <div className='w-full'>
                    <Language pourcentageValue={'w-10/12'}
                        language={'HTML'}
                        pourcentage={'90%'} />
                    <Language pourcentageValue={'w-9/12'}
                        language={'CSS'}
                        pourcentage={'80%'} />
                    <Language pourcentageValue={'w-8/12'}
                        language={'Javascript'}
                        pourcentage={'70%'} />
                </div>
                <div className='w-full'>
                    <Language pourcentageValue={'w-7/12'}
                        language={'JQuery'}
                        pourcentage={'60%'} />
                    <Language pourcentageValue={'w-7/12'}
                        language={'REACT'}
                        pourcentage={'60%'} />
                    <Language pourcentageValue={'w-6/12'}
                        language={'WordPress'}
                        pourcentage={'50%'} />
                </div>

            </div>



        </div>
    )
}
