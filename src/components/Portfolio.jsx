import React, { Fragment, useState } from 'react'
import projectsData from '../data/projectsData'
import convertToIcon from '../utils/convertToIcon'
import {nanoid} from "nanoid"
import "./portfolio.css"

import { GrGithub } from "react-icons/gr"
import { TbWorldWww } from "react-icons/tb"



function Portfolio() {
  const [allProjects, setAllProjects] = useState(projectsData)

  // mapping all project to display in DOM
  const projectsArr = allProjects.map(item => {
    let technologiesArr = []
    // create array of used technologies 
    for (let technology of item.technology) {
      technologiesArr.push(<i key={nanoid()} className={convertToIcon(technology)} title={technology}></i>)
    }

    return (
      <div className='portfolio__container'>
        <h1 className='portfolio__header'>My <span>Piotr</span>folio</h1>
        <div key={item.id} className='project__container'>
          <h5 className='project__title'>{item.name}</h5>
          <div className='project__description'>
            {item.description1}
            <br />
            {item.description2}
          </div>
          <div className='project__technologies'>
            <div className='project__technologies-icons'>
              {technologiesArr}
            </div>
            <div className='project__links'>
              <GrGithub className='link-icon svg'/>
              <TbWorldWww className='link-icon svg'/>
            </div>
          </div>
          <img src={item.img} className='project__image' alt="prject screenshot" />
        </div>
      </div>
    )
  })

  return (
    <section id="portfolio">
      {projectsArr}
    </section>
  )
}

export default Portfolio