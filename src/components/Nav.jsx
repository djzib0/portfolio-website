import React, { useState } from 'react' 
import "./nav.css"


import { FaHome } from 'react-icons/fa'
import { BsPersonFillExclamation } from 'react-icons/bs'
import { AiFillCode } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'

function Nav(props) {

  const {changeActiveSection} = props

  return (
    <nav className='navbar__container'>
        <a href='#' onClick={() => changeActiveSection("#")}
        className={props.activeSection === "#" ? "test-active" : ""}>
          <FaHome />
        </a>
        <a href='#about' onClick={() => changeActiveSection("about")}
        className={props.activeSection === "about" ? "test-active" : ""}>
          <BsPersonFillExclamation />
        </a>
        <a href='#portfolio' onClick={() => changeActiveSection("portfolio")}
        className={props.activeSection === "portfolio" ? "test-active" : ""}>
          <AiFillCode />
        </a>
        <a href='#contact' onClick={() => changeActiveSection("contact")}
        className={props.activeSection === "contact" ? "test-active" : ""}>
          <IoIosMail />
        </a>
    </nav>
  )
}

export default Nav