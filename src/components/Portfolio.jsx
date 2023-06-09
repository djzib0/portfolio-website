import React, { Fragment, useState } from 'react'
import projectsData from '../data/projectsData'
import convertToIcon from '../utils/convertToIcon'
import {nanoid} from "nanoid"
import "./portfolio.css"

// import Swiper core and required modules
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'

// import icons
import { GrGithub } from "react-icons/gr"
import { TbWorldWww } from "react-icons/tb"


function Portfolio() {
  const [allProjects, setAllProjects] = useState(projectsData)

  // mapping all project to display in DOM
  const projectsArr = allProjects.map(item => {
    let technologiesArr = []
    // create array of used technologies 
    for (let technology of item.technology) {
      technologiesArr.push(<i key={nanoid()} className={convertToIcon(technology) } title={technology}></i>)
    }

    return (
      <SwiperSlide key={nanoid()} >
        <div key={item.id} className='project__container'>
          {/* if title is longer than 14 chars, change style 
          to fit title in container */}
          <h5 className={`project__title ${item.name.length > 14 ? "small-title-text" : ""}`}>{item.name}</h5>
          <div className='project__description'>
            <p>{item.description1}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>

          </div>
          <div className='project__technologies'>
            <div className='project__technologies-container'>
              <p id="powered-by-text">Powered by:</p>
              <div className='project__technologies-icons'>
                {technologiesArr}
              </div>
            </div>
            <div className='project__technologies-container'>
            <p id="powered-by-text" className='white'>Links</p>
              <div className='project__technologies-icons white'>
                {item.github && <a href={item.github} target='_blank'><GrGithub className='link-icon svg'/></a>}
                {item.website && <a href={item.website} target='_blank'><TbWorldWww className='link-icon svg'/></a>}
              </div>
            </div>

          </div>
          <img src={item.img} className='project__image' alt="project screenshot" />
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div id="portfolio" className='portfolio__container'>
      <h1 className='portfolio__header'>My <span>Piotr</span>folio</h1>
      <Swiper className='swiper__wrapper'
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
          speed={500}
          >
        {projectsArr}
      </Swiper>
    </div>

  )
}

export default Portfolio