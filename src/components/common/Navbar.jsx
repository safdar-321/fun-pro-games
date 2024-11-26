import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import funProGames from '../../assets/images/logo-fun-pro-games.png'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [active, setActive] = useState('/home');
    const location = useLocation();

    // Update active state based on current location
    React.useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo">
                                <NavLink to="/home">
                                    <img alt="Game District" src={funProGames} />
                                </NavLink>
                            </div>
                            <div className="main_menu">
                                <ul>
                                    <li className={active === '/home' ? 'active' : ''}>
                                        <NavLink to="/home" onClick={() => setActive('/home')}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={active === '/about-us' ? 'active' : ''}>
                                        <NavLink to="/about-us" onClick={() => setActive('/about-us')}>
                                            About
                                        </NavLink>
                                    </li>
                                    <li className={active === '/games' ? 'active' : ''}>
                                        <NavLink to="/games" onClick={() => setActive('/games')}>
                                            Games
                                        </NavLink>
                                    </li>
                                    <li className={active === '/contact-us' ? 'active' : ''}>
                                        <NavLink to="/contact-us" onClick={() => setActive('/contact-us')}>
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile_menu">
                                <span id="menuToggle" onClick={toggleMenu}>☰ </span>
                                <div id="mySidenav" className={`sidenav ${isMenuOpen ? "open" : ""}`}>
                                    <span className="closebtn" onClick={toggleMenu}>×</span>
                                    <ul>
                                        <li className={active === '/home' ? 'active' : ''}>
                                            <NavLink to="/home" onClick={() => setActive('/home')}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className={active === '/about-us' ? 'active' : ''}>
                                            <NavLink to="/about-us" onClick={() => setActive('/about-us')}>
                                                About
                                            </NavLink>
                                        </li>
                                        <li className={active === '/games' ? 'active' : ''}>
                                            <NavLink to="/games" onClick={() => setActive('/games')}>
                                                Games
                                            </NavLink>
                                        </li>
                                        <li className={active === '/contact-us' ? 'active' : ''}>
                                            <NavLink to="/contact-us" onClick={() => setActive('/contact-us')}>
                                                Contact Us
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clr"> </div>
            </div>
        </>
    )
}

export default Navbar