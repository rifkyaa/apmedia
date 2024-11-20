import { useState } from 'react'
import "./Header.css"

const Header = () => {
    
    /*=============== Change Navbar Color ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className='header'>
                <nav className='nav container'>
                    <a href="index.html" className='nav__logo'>AP<span className='text-white'>MEDIA</span></a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className='nav__item'>
                                <a href="#home"
                                    onClick={() => setActiveNav('#home')}
                                    className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    Home
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#about"
                                    onClick={() => setActiveNav('#about')}
                                    className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    About
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#programs"
                                    onClick={() => setActiveNav('#programs')}
                                    className={activeNav === "#programs" ? "nav__link active-link" : "nav__link"}>
                                    Programs
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#team "
                                    onClick={() => setActiveNav('#team')}
                                    className={activeNav === "#team" ? "nav__link active-link" : "nav__link"}>
                                    Team
                                </a>
                            </li>

                            <li className='nav__item'>
                                <a href="#contact "
                                    onClick={() => setActiveNav('#contact')}
                                    className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-toggle">
                        <input type="checkbox" onClick={() => showMenu(!Toggle)}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
    ) 
}

export default Header