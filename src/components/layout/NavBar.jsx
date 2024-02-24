import React, { useState, useEffect } from 'react';
import './navBar.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { Link } from 'react-router-dom';

function Navbar() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            setHidden(currentScroll > lastScrollTop && currentScroll > 0);
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);
    return (

        <div className='nav-bar'>
            <nav className={hidden ? 'navbar-top' : 'navbar-hidden'}>
                <div className='navbar-container'>
                    <div className='nav-leftside'>
                        <Link to={'https://www.arduino.cc/pro/'}>
                            <a className='web-links'>professional</a>
                        </Link>
                        <Link to={'https://www.arduino.cc/education'}>
                            <a className='web-links'>education</a>
                        </Link>
                        <Link to={'https://store.arduino.cc/'}>
                            <a className='web-links'>store</a>
                        </Link>
                    </div>
                    <div className='nav-rightside'>
                        <div className='search-box'>
                            <div className='input-icon'>
                                <SearchIcon />
                            </div>
                            <input type="text" placeholder="Search on Arduino.cc" />
                        </div>
                        <a className='application-list'><FilterDramaIcon /></a>
                        <a className='sign-button'>sign in</a>

                    </div>

                </div>
            </nav>
            <nav className='navbar-bot'>
                <div className='menu-container'>
                    <div className='logo-section'>
                        <a className='logo-link'>
                            <img src="./pictures/arduino-logo-white.png" alt="" />
                        </a>
                    </div>
                    <div className='pages'>
                        <Link to={'hardware'}>
                            <a className='pages-link'>hardware</a>
                        </Link>
                        <Link to={'software'}>
                            <a className='pages-link'>software</a>
                        </Link>
                        <Link to={'cloud'}>
                            <a className='pages-link' >cloud</a>
                        </Link>
                        <Link to={'documentation'}>
                            <a className='pages-link'>documentation</a>
                        </Link>
                        <Link>
                            <a className='pages-link' >community
                                <div className='drop-down'>
                                    <a>forum</a>
                                    <a>discord</a>
                                    <a>project hub</a>
                                    <a>arduino day</a>
                                    <a>user groups</a>
                                </div>
                            </a>
                        </Link>
                        <Link to={'blog'}>
                            <a className='pages-link' >blog</a>
                        </Link>
                        <Link to={'about'}>
                            <a className='pages-link'>about</a>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;