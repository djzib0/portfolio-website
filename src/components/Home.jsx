import React from 'react'
import "./home.css"
import PORTRAIT from "../assets/images/portrait.jpg"

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
        </div>
      </header>
  )
}

export default Home
