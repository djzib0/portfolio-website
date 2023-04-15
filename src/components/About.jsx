import React from 'react'
import "./about.css"
import calculateAge from '../utils/calculateAge.js'

import PORTRAIT from "../assets/images/portrait2.jpg"

function About() {
  return (
    <section className='test-class' id="about">
      <div className='about__container'>
        <h1 className='about__header'>About <span className='border'>Me</span></h1>
        <div className='about__container-description'>
          <div>
            <p>My name is Piotr. I'm {calculateAge()} years old and I live and work in Gdańsk. I work as a Sales Engineer in a company related with the maritime industry.
            </p>
            <p>
              I decided to start learning programming because I wanted to automate repeatable job in my office. This is how I discovered beauty of coding.
            </p>
            <p>
            Coding is not only writing lines of codes, it's like solving riddles, and the satisfaction from finding solution is the best prize I can imagine.
            </p>
            <p>
            I'm looking  for an after-hours internship  or junior dev job because I want to develop my skills in front-end as well as back-end.
            </p>
            <p>
            In my spare time I meet with my closest friends, play video games or take care of my parrots - Pablo, Kuba and Młody. I also like to take a walk, especially in nature where I can relax from noisy city.
            </p>
          </div>
          <div className='image__container'>
            <img src={ PORTRAIT } className='about__image'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About