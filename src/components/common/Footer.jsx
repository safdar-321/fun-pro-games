import React from 'react'

import footerLogo from '../../assets/images/footer_logo.png'
import icons from '../../assets/images/icons.jpg'

import iconPhone from '../../assets/images/icon_phone.jpg'
import iconEmail from '../../assets/images/icon_email.jpg'
import iconFacebook from '../../assets/images/icon_facebook.jpg'
import iconInstagram from '../../assets/images/icon_instagram.jpg'
import iconLinkedin from '../../assets/images/icon_linkedin.jpg'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget">
                                <img className="footer_logonew" src={footerLogo} alt="Game District" title="Game District" />
                                <p>Making you realize the power of Digital Intelligence.</p>
                                <img className="copy_right_icon" alt="icon" src={icons} />
                                <div className="copy_right">
                                    © Copyright Game District 2019,<br /> All Rights Reserved.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3 className="widget_title">company</h3>
                                <ul className="menu">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="/solutions">Solutions</a>
                                    </li>
                                    <li>
                                        <a href="/publishing">Publishing</a>
                                    </li>
                                    <li>
                                        <a href="/whygames">Why Games</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3 className="widget_title">Get on board</h3>
                                <ul className="menu">
                                    <li>
                                        <a href="#careers">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#term">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget">
                                <h3 className="widget_title">Get in touch</h3>
                                <p>
                                    <img className="footer-icon" alt="" src={iconPhone} />
                                    <a href="tel:+923104053811">+92-310-4053-811</a>
                                </p>
                                <p>
                                    <img className="footer-icon" alt="" src={iconEmail} />
                                    <a href="mailto:hello@gamedistrict.co">hello@gamedistrict.co</a>
                                </p>
                                <p>
                                    <img className="footer-icon" alt="Facebook" src={iconFacebook} />
                                    <a href="https://www.facebook.com/gamedistrict1/"> Facebook</a>
                                </p>
                                <p>
                                    <img className="footer-icon" alt="Instagram" src={iconInstagram} />
                                    <a href="https://www.instagram.com/gamedistrict.co/"> Instagram</a>
                                </p>
                                <p>
                                    <img className="footer-icon" alt="Linked In" src={iconLinkedin} />
                                    <a href="https://www.linkedin.com/company/game-district/about/">Linked In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clr"></div>
                </div>
            </div>
        </>
    )
}

export default Footer