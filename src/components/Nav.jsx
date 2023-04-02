import React, { useState } from 'react' 
import "./nav.css"

import { FaHome } from 'react-icons/fa'
import { BsPersonFillExclamation } from 'react-icons/bs'
import { AiFillCode } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'

function Nav() {
  const [activeSection, setActiveSection] = useState("#")

  function setActive(section) {
    setActiveSection(section)
  }

  console.log("current active section is", activeSection)

  return (
    <nav className='navbar__container'>
        <a href='#' onClick={() => setActive("#")}
        className={activeSection === "#" ? "test-active" : ""}>
          <FaHome />
        </a>
        <a href='#about' onClick={() => setActive("about")}
        className={activeSection === "about" ? "test-active" : ""}>
          <BsPersonFillExclamation />
        </a>
        <a href='#portfolio' onClick={() => setActive("portfolio")}
        className={activeSection === "portfolio" ? "test-active" : ""}>
          <AiFillCode />
        </a>
        <a href='#contact' onClick={() => setActive("contact")}
        className={activeSection === "contact" ? "test-active" : ""}>
          <IoIosMail />
        </a>
    </nav>
  )
}

export default Nav