import React from 'react'
import Header from './components/Header'
import MyButton from './components/myButton'
import AboutMe from './components/AboutMe'
import Formation from './components/Formation'
import Experience from './components/Experience'
import Compétence from './components/Compétence'
import MyPortfolio from './components/MyPortfolio'
import MyServices from './components/MyServices'
import ContactMe from './components/ContactMe'
import Menu from './components/Menu'
import Footer from './components/Footer'



export default function App() {
  return (
    <div data-theme="light" className=''>
      <Menu />
      <Header />
      <AboutMe />
      <div className='flex justify-between m-auto w-full px-7 flex-col space-y-8 lg:space-y-0 lg:flex-row lg:px-0 lg:w-3/5 mt-10 text-center'>
        <Formation />
        <Experience />
      </div>
      <Compétence />
      <MyServices />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </div>
  )
}
