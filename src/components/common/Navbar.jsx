import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import funProGames from '../../assets/images/logo-fun-pro-games.png'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                                    <li className="active">
                                        <NavLink to="/home">Home</NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink to="/about-us">About</NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink to="/games">Games</NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink to="/contact-us">Contact US</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile_menu">
                                <span id="menuToggle" onClick={toggleMenu}>☰ </span>
                                <div id="mySidenav" className={`sidenav ${isMenuOpen ? "open" : ""}`}>
                                    <span className="closebtn" onClick={toggleMenu}>×</span>
                                    <ul>
                                        <li className="">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="">
                                            <NavLink to="/about-us">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/games">Games</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact-us">Contact Us</NavLink>
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