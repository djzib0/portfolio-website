import React from 'react'
import "./home.css"
import PORTRAIT from "../assets/images/portrait.jpg"
import { GrFacebook } from "react-icons/gr"

function Home() {
  return (
      <header>
        <div className='container header__container'>
          <div className='header__description'>
            <h1>Hi, I'm <span >Piotr</span></h1>
            <h5 className='weight-500'>Frontend <span>&</span> backend developer</h5>
            <h4>Open minded for a new 
            <span> challenges </span>and prepared for the never ending 
            <span> learning </span>journey.</h4>
          </div>

          <div className='header__image'>
            <img src={PORTRAIT} alt="portrait picture" />
          </div>
          {/* dodać boczne odnośniki do social medias */}

          <div className="container socials__container">
            <a href='https://facebook.com' target="_blank"><GrFacebook /></a>
          </div>
        </div>
      </header>
  )
}

export default Home
