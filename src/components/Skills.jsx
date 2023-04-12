import React from 'react'
import "./skills.css"
import educationData from '../data/educationData';
import { nanoid } from 'nanoid';

import { IoSchool } from 'react-icons/io5'
import { BsFillEyeFill } from 'react-icons/bs'
import { BiListCheck } from 'react-icons/bi'

// import Swiper core and required modules
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'

export default function Skills() {
    const educationArray = educationData.map(item => {
        const {name, type, schoolName, yearStart, yearEnd, file } = item
        return (
            <div key={nanoid()} className='skill-item__container'>
                <h3>{schoolName}</h3>
                <div className='education-title__container'>
                    <p className='gold-text'>{name}</p>
                    {file ? <BsFillEyeFill className='icon-small' /> : ""}
                </div>
                <p className='small-text'>{type} {yearStart} - {yearEnd} </p>
            </div>
        )
    })

    return (
        <section className='skills__container' id="skills">
            <h1 className='skills__header'>Education <span className='border'>& </span>Skills</h1>
            {/* same section as below, but this is only for
            small screens and this one is swipeable */}

            <Swiper className='swiper__wrapper swipeable'
                      modules={[Navigation]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={{ clickable: true}}
                      speed={500}>
                <SwiperSlide className='skills-items__container'>
                    <div className='skills-items__header'>
                        <IoSchool className='skills__icon icon-big' />
                        <h1>Education</h1>
                    </div>
                    <div className='skills-content__container'>
                        {educationArray}
                    </div>
                </SwiperSlide>
                <SwiperSlide className='skills-items__container'>
                    <div className='skills-items__header'>
                        <BiListCheck className='skills__icon icon-big' />
                        <h1>Skills</h1>
                    </div>
                    <div className='skills-content__container'>
                        {educationArray}
                    </div>
                </SwiperSlide>

            </Swiper>

            {/* same section as above, but will 
            e displayed only on wider screens */}
            <div className='not-swipeable'>
                <div className='skills-items__container'>
                    <div className='skills-items__header'>
                        <IoSchool className='skills__icon icon-big' />
                        <h1>Education</h1>
                    </div>
                    <div className='skills-content__container'>
                        {educationArray}
                    </div>
                </div>

                <div className='skills-items__container'>
                    <div className='skills-items__header'>
                        <BiListCheck className='skills__icon icon-big' />
                        <h1>Skills</h1>
                    </div>
                    <div className='skills-content__container'>
                        {educationArray}
                    </div>

                </div>
            </div>
        </section>
    )
}