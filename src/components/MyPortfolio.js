import React from 'react'
import '../css/MyPortfolio.css'
import Projet from './Projet'
import ravimaintso from '../assets/ravimaintso.jpg'
import blog from '../assets/blog.jpg'
import todo from '../assets/todo.png'
import pizza from '../assets/pizza.png'


export default function MyPortfolio() {
    return (
        <div className='myPortfolio mt-14' id='portfolio'>
            <div className='titre my-10'>
                <h1 className='my'> MES <span> PORTFOLIO</span></h1>
                <span className="ligneBas"></span>
            </div>
            <div className='flex m-auto justify-center'>
                <div className='flex space-x-0 space-y-6 flex-col px-7 w-full sm:space-y-0 sm:space-x-4 sm:flex-row lg:w-3/5 lx:px-0 text-center text-xl '>
                    <Projet image={ravimaintso} text='HUILE ESSENTIELLE' url="https://ainanatacha22.github.io/ravitsara/"/>
                    <Projet image={blog} text='BLOG' url="https://myblognat.netlify.app/"/>
                    <Projet image={todo} text='TODO LIST' url=" https://todolist-nat.netlify.app/"/>
                    <Projet image={pizza} text='PIZZA' url="https://ainanatacha22.github.io/ventepizza/" />
                </div>
            </div>
        </div>

    )
}
