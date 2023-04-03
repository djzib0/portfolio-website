import React from 'react'
import "./about.css"

import PORTRAIT from "../assets/images/portrait2.jpg"

function About() {
  return (
    <section className='test-class' id="about">
      <div className='about__container'>
        <h1 className='about__header'>About <span className='border'>Me</span></h1>
        <div className='about__container-description'>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet earum cupiditate qui nihil quis. Provident doloribus reiciendis veritatis unde, nobis nam, quis beatae recusandae expedita, quod molestias neque ullam?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet earum cupiditate qui nihil quis. Provident doloribus reiciendis veritatis unde, nobis nam, quis beatae recusandae expedita, quod molestias neque ullam?
          </h5>
          <img src={ PORTRAIT } className='about__image'/>
        </div>
      </div>

    </section>
  )
}

export default About