import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBriefcase, faBlog, faContactBook } from '@fortawesome/free-solid-svg-icons'
import '../css/Menu.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
  const [showNavbar, setShowNavbar] = useState(false)

  // change nav color when scrolling
  const [color, setColor] = useState(false)
  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)
  
  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Ajustez cette valeur pour décaler le défilement au-dessus de la barre de navigation
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className={color ? 'Menu Menu-bg' : 'Menu'}>
      <h1 className='nata'>AINA NATACHA</h1>
      <div className={`wrapper  ${showNavbar && "active"}`}>
        <ul className={color ? 'blanc' : 'jaune'} >
          <li> <a href="#home"><FontAwesomeIcon icon={faHouse} />  accueil </a></li>
          <li><a onClick={(e) => handleLinkClick(e, '#about')} href="#about"><FontAwesomeIcon icon={faUser} />  a propos </a></li>
          <li><a onClick={(e) => handleLinkClick(e, '#service')} href="#service"><FontAwesomeIcon icon={faBlog} />  service</a></li>
          <li><a onClick={(e) => handleLinkClick(e, '#portfolio')} href="#portfolio"><FontAwesomeIcon icon={faBriefcase} />  portfolio</a></li>
          <li><a onClick={(e) => handleLinkClick(e, '#contact')} href="#contact"><FontAwesomeIcon icon={faContactBook} />  contact</a></li>
        </ul>
      </div>
      <div className='menu-icon'>
        <button onClick={() => setShowNavbar(!showNavbar)}> 
          {
            !showNavbar ?
            <FontAwesomeIcon icon={faBars} style={{fontSize:25}}/>
            :
            <FontAwesomeIcon icon={faXmark} style={{fontSize:25}} />
          }
        </button>
      </div>
    </div>
  )
}
