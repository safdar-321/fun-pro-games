import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


import globalContactOne from "../../assets/img/global_icon_1.jpg";
import globalContactTwo from "../../assets/img/global_icon_2.jpg";
import globalContactThree from "../../assets/img/global_icon_3.jpg";
import globalContactFour from "../../assets/img/global_icon_4.jpg";
import globalContactFive from "../../assets/img/global_icon_5.jpg";
import globalContactSix from "../../assets/img/global_icon_6.jpg";
import mailIcon from "../../assets/img/mail_icon.png";
import gameDistrict from "../../assets/img/logo-games2.jpg";
import dots2 from "../../assets/img/dots.jpg";


function ContactUs() {
    return (
        <>
            <div className="fullpage">
                <div className="contactcontent">
                    <div className="contact_section_1">
                        <div className="container">
                            <div className="row">
                                <p>it’s not hard to find your</p>
                                <h1>partners</h1>
                                <div className="wow slideInLeft col-lg-5" style={{ visibility: 'visible' }}>
                                    <div className="social_icons_contact">
                                        {/* <a href="https://facebook.com" target="_blank">
                                            <FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: '#fff', width: '25px', height: '25px' }} />
                                        </a>
                                        <a href="https://instagram.com" target="_blank">
                                            <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: '#fff', width: '25px', height: '25px' }} />
                                        </a>
                                        <a href="https://linkedin.com" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ color: '#fff', width: '25px', height: '25px' }} />
                                        </a>
                                        <a href="https://youtube.com" target="_blank">
                                            <FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: '#fff', width: '25px', height: '25px' }} />
                                        </a> */}
                                    </div>
                                </div>
                                <div className="wow slideInRight col-lg-7" style={{ visibility: 'visible' }}>
                                    <div className="contact_section_2_right">
                                        <div className="contact_form_partners">
                                            <h4>Write something about your project so we can get back to you with a proposal in 24hours.</h4>
                                            <p>
                                                <img className="mail_icon" src={mailIcon} alt="" />
                                            </p>
                                            <div className="clr"></div>
                                            <div role="form" className="wpcf7" id="wpcf7-f71-p37-o1" dir="ltr" lang="en-US">
                                                <form action="" method="post" className="wpcf7-form">
                                                    <p>
                                                        <span className="wpcf7-form-control-wrap Name">
                                                            <input type="text" name="Name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Name*" />
                                                        </span>
                                                        <span className="wpcf7-form-control-wrap EmailId">
                                                            <input type="email" name="EmailId" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" placeholder="Email Id*" data-temp-mail-org="0" />
                                                        </span>
                                                        <span className="wpcf7-form-control-wrap CompanyName">
                                                            <input type="text" name="CompanyName" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Company Name*" />
                                                        </span>
                                                        <span className="wpcf7-form-control-wrap ApproxBudget">
                                                            <input type="text" name="ApproxBudget" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Approx Budget" />
                                                        </span>
                                                    </p>
                                                    <p><b>Optional</b></p>
                                                    <p>
                                                        <span className="wpcf7-form-control-wrap ProjectDetails">
                                                            <textarea name="ProjectDetails" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Project Details"></textarea>
                                                        </span>
                                                    </p>
                                                    <div className="file">
                                                        <span className="wpcf7-form-control-wrap Dropitlikeitshot">
                                                            <input type="file" name="Dropitlikeitshot" size="40" className="wpcf7-form-control wpcf7-file drop_it" aria-invalid="false" />
                                                        </span>
                                                        <label>Drop it like it’s hot</label>
                                                    </div>
                                                    <p>
                                                        <input type="submit" className="wpcf7-form-control wpcf7-submit" value="submit your project" />
                                                    </p>
                                                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clr"></div>
                        </div>
                    </div>
                </div>
                <div className="about_section_7" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="wow slideInDown col-lg-12">
                                <img alt="" src={gameDistrict} />
                                <p>Dubai<span>-</span>SanFrancisco<span>-</span>Manama<span>-</span>Lahore</p>
                            </div>
                            <div className="dots">
                                <img alt="" src={dots2} />
                            </div>
                            <div className="col-lg-12">
                                <div className="global_icon">
                                    <img alt="" src={globalContactOne} />
                                    <img alt="" src={globalContactTwo} />
                                    <img alt="" src={globalContactThree} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="global_icon">
                                    <img alt="" src={globalContactFour} />
                                    <img alt="" src={globalContactFive} />
                                    <img alt="" src={globalContactSix} />
                                </div>
                            </div>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs