import React, { useState, useEffect } from 'react';
import "./About.css"
import imgAbout from "../../assets/imgAbout.png"
import { LiaBullhornSolid } from "react-icons/lia";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { getChannelStatistics, getTotalPlaylists } from '../../api/YoutubeData';
import { formatNumber } from '../../utils/formatNumber';

const About = () => {
  const [stats, setStats] = useState(null);
  const [playlistCount, setPlaylistCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statistics, playlists] = await Promise.all([
          getChannelStatistics(),
          getTotalPlaylists(),
        ]);
        setStats(statistics);
        setPlaylistCount(playlists);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className='about' id='about'>
        <div className="about__content">
          <div className="about__section-first container">
            <h1 className="about__title">About Us</h1>
            <div className='wrapper__subImg grid'>
              <p className='about__subtitle'>Selamat datang di APMedia! Didirikan pada tahun 2021, kami adalah platform inovatif yang menggabungkan dunia hiburan horor dengan keahlian digital marketing. Kami menyajikan konten horor yang mendebarkan dan menarik, sekaligus menawarkan strategi pemasaran digital yang efektif untuk membantu merek Anda bersinar.
              Dengan tim yang penuh semangat dan kreatif, kami berkomitmen untuk menciptakan pengalaman tak terlupakan bagi audiens kami.</p>
              <img src={imgAbout} alt="imgTeam" className='about__img'/>
            </div>
          </div> 
          <div className="about__section-second container grid">
            <div className="about__card">
              <LiaBullhornSolid className='about__icon'/>
              <h3 className='title__card'>DIGITAL MARKETING</h3>
              <p className='subtitle__card'>Tingkatkan merek Anda dengan strategi pemasaran yang menarik dan pendekatan cerdas untuk menjangkau audiens yang lebih luas.</p>
            </div> 
            <div className="about__card">
              <PiFilmSlateDuotone className='about__icon'/>
              <h3 className='title__card'>ENTERTAIMENT</h3>
              <p className='subtitle__card'>Rasakan pengalaman horor mendebarkan yang memikat dan membuat Anda ingin kembali lagi</p>
            </div> 
          </div>
          {stats ? (
            <div className="about__section-third grid">
              <div className="content-third">
                <FaYoutube className='icon-third'/>
                <h1 className="title-third">{formatNumber(stats.subscriberCount)}</h1>
                <p className="subtitle-third">Subscriber</p>
              </div>
              <div className="content-third">
                <FaUsersViewfinder className='icon-third'/>
                <h1 className="title-third">{formatNumber(stats.viewCount)}</h1>
                <p className="subtitle-third">Total View</p>
              </div>
              <div className="content-third">
                <MdOutlineOndemandVideo className='icon-third'/>
                <h1 className="title-third">{formatNumber(stats.videoCount)}</h1>
                <p className="subtitle-third">Total Video</p>
              </div>
              <div className="content-third">
                <RiPlayList2Fill className='icon-third'/>
                <h1 className="title-third">{playlistCount}</h1>
                <p className="subtitle-third">Playlist</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
    </section>
  )
}

export default About