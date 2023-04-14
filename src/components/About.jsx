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
            <h5>My name is Piotr. I'm {calculateAge()} years old and I live and work in Gdańsk. I work as a Sales Engineer in a company related with the maritime industry.
            </h5>
            <h5>
              Few months ago I decided to start learning programming because I wanted to automate repeatable job in my office. This is how I discovered beauty of coding.
            </h5>
            <h5>
            For me, coding is not only writing lines of codes, but it's like a solving riddles or puzzles, and satisfaction from finding solution is the best prize I can imagine.
            </h5>
            <h5>
            I'm looking  for an after-hours internship (doesn't have to be paid) or junior dev job because I want to develop my skills in front- and back-end.
            </h5>
            <h5>
            I know how to work in team and I'm open for other people ideas.
            </h5>
            <h5>
            In my spare time I meet with my closest friends, play video games or take care of my parrots (Pablo, Kuba and Młody). I also like to take a walk, especially in nature where I can relax from noisy city.
            </h5>
          </div>
          <div>
            <img src={ PORTRAIT } className='about__image'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About