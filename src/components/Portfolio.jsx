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
      technologiesArr.push(<i key={nanoid()} className={convertToIcon(technology)} title={technology}></i>)
    }

    return (
      <SwiperSlide key={nanoid()} >
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
      </SwiperSlide>
    )
  })

  return (
    <div id="portfolio" className='portfolio__container'>
      <h1 className='portfolio__header'>My <span>Piotr</span>folio</h1>
      <Swiper className='swiper__wrapper'
          modules={[Pagination, Navigation, EffectFade]}
          spaceBetween={5}
          slidesPerView={1}
          navigation={{ clickable: true}}
          // effect={'fade'}
          speed={800}
          // pagination={{ clickable: false }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
        {projectsArr}
      </Swiper>
    </div>

  )
}

export default Portfolio