import React from 'react'
import "./Home.css"

const Home = () => {
    return (
      <section className='home section' id='home'>
        <div className="home__content">
          <h1 className='home__title'>APMEDIA CREATIVE</h1>
          <p className='home__subtitle'>Hiburan Untuk Para Pecinta Horror</p>
          <a href="https://api.whatsapp.com/send?phone=6281220102935&text=Halo Kak, Saya Berminat Berkolaborasi?" target="_blank" className="contact__button">{" "}
            <button className='home__btn btn1'>Hubungi Kami</button>
          </a>
        </div>
      </section>
    )
}

export default Home