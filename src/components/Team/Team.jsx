import React, { useRef, useState } from 'react';
import { FaTiktok, FaInstagram } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataTeam } from './dataTeam';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './Team.css';

const Team = () => {
  return (
    <section className='team section' id='team'>
      <div className="team__content container grid">
        <h1 className="team__title">Our Haunted Team</h1>
        <p className="team__subtitle">Our Line Up</p>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataTeam.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team__card">
                <img src={member.img} alt="" />
                {/* <h2 className="text-hover">Hover Me</h2> */}
                <div className="wrapper__content-card">
                  <h2 className='title__card-team'>{member.name}</h2>
                  <div className="wraper__icon-team">
                    <a
                      href={member.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <FaTiktok className='icon__card-team tiktok'/>
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <FaInstagram className='icon__card-team instagram'/>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Team