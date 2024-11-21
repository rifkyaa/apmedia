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
              <p className="subtitle-icon">
                Sebuah program diskusi seru yang membahas kisah horor, mitos, dan kejadian aneh dari berbagai belahan dunia.
              </p>
            </div>
            <div className="wrapper-icon">
              <BiMoviePlay className='icon-programs' />
              <h1 className="title-icon">Short Movie</h1>
              <p className="subtitle-icon">
                Koleksi film pendek bertema horor yang menampilkan kisah-kisah menegangkan, penuh kejutan, dan kadang menyeramkan
              </p>
            </div>
            <div className="wrapper-icon">
              <MdOutlineExplore className='icon-programs' />
              <h1 className="title-icon">Explore</h1>
              <p className="subtitle-icon">
                Program ini menyuguhkan kisah-kisah menyeramkan dengan gaya narasi yang dramatis dan penuh emosi.
              </p>
            </div>
            <div className="wrapper-icon">
              <RiSpeakLine className='icon-programs' />
              <h1 className="title-icon">Story Telling</h1>
              <p className="subtitle-icon">
                Petualangan langsung ke lokasi-lokasi misterius, seperti tempat angker, bangunan tua, atau situs penuh sejarah.
              </p>
            </div>
          </div>
          
          <LatestVideo />
        </div>
    </section>
  )
}

export default Programs