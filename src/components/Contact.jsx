import React from 'react'
import "./contact.css"

import { GrLinkedin } from "react-icons/gr"
import { BsMessenger } from "react-icons/bs"

function Contact() {
  return (
    <section id='contact'>
      <div className='contact__container'>
        <h1 className='contact__header'>Contact <span> Me </span></h1>

        <div className='contact__description'>
          <p>
            If you would like to contact me, please write me an email -
            <a href='mailto:piotrsabatura@gmail.com'><span> piotrsabatura@gmail.com </span></a>
          </p>
          <p>
            Or catch me via other platforms
          </p>
          <div className="icons__container">
            <div className='icon__container'>
              <h5 className='gold-text'>LinkedIn</h5>
              <a target='_blank' className='icon-medium gold-text' href='https://www.linkedin.com/in/piotr-sabatura-6016ba8b/' >
                <GrLinkedin />
              </a>
            </div>
            <div className="icon__container">
              <h5 className='gold-text'>Messeneger</h5>
              <a target='_blank' className='icon-medium gold-text'  href='https://m.me/piotr.sabatura' >
                  <BsMessenger className=''/>
                </a>
            </div>
          </div>
          
        </div>
        <p>Or just leave me a message via form</p>
        <form action=''>
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-secondary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact