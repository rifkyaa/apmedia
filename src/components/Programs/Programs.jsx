import React from 'react';
import "./Programs.css"
import LatestVideo from "./LatestVideo";
import { FaPodcast } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";


const Programs = () => {
  return (
    <section className='programs section' id='programs'>
        <div className="programs__content container">
          <h1 className="programs__title">Our Programs</h1>
          <p className="programs__subtitle">Pilihan program yang mendebarkan bagi penggemar horor! Nikmati film pendek, podcast, eksplorasi misteri, dan sejarah yang akan membuat Anda terus penasaran.</p>
          <div className="wrapper__programs grid">
            <div className="wrapper-icon">
              <FaPodcast className='icon-programs' />
              <h1 className="title-icon">Podcast</h1>
            </div>
            <div className="wrapper-icon">
              <BiMoviePlay className='icon-programs' />
              <h1 className="title-icon">Short Movie</h1>
            </div>
            <div className="wrapper-icon">
              <MdOutlineExplore className='icon-programs' />
              <h1 className="title-icon">Explore</h1>
            </div>
            <div className="wrapper-icon">
              <RiSpeakLine className='icon-programs' />
              <h1 className="title-icon">Story Telling</h1>
            </div>
          </div>
          
          <LatestVideo />
        </div>
    </section>
  )
}

export default Programs