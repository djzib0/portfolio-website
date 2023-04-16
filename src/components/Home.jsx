import React from 'react'
import "./home.css"

import PORTRAIT from "../assets/images/portraitok.jpg"
import { GrFacebook } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"

function Home(props) {

  const { changeActiveSection } = props

  return (
      <header>
        <div className='container header__container'>
          <div className='header__description'>
            <h1>Hi, I'm <span >Piotr</span></h1>
            <h5 className='weight-500'>Frontend <span>&</span> backend developer</h5>
            <h4>Open minded for a new 
            <span> challenges </span>and prepared for the never ending 
            <span> learning </span>journey.</h4>
            <a className='btn btn-primary' href="#contact" 
               onClick={() => changeActiveSection("contact")}>
                CONTACT ME</a>
          </div>

          <div className='header__image'>
            <img src={PORTRAIT} alt="portrait picture" />
          </div>
          <div className="header__socials">
            <a href='http://www.facebook.com/piotr.sabatura' target='_blank'><GrFacebook /></a>
            <a href='https://www.linkedin.com/in/piotr-sabatura-6016ba8b/' target='_blank'><GrLinkedin /></a>
            <a href='https://github.com/djzib0' target='_blank'><GrGithub /></a>
          </div>
        </div>
      </header>
  )
}

export default Home
