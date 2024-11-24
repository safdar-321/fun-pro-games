import React from 'react'

function ContactUs() {
    return (
        <>
            <div class="fullpage">
                <div class="contactcontent">
                    <div class="contact_section_1">
                        <div class="container">
                            <div class="row">
                                <p>it’s not hard to find your</p>
                                <h1>partners</h1>
                                <div class="wow slideInLeft col-lg-5" style="visibility: visible; animation-name: slideInLeft;">
                                    <div class="social_icons_contact">
                                        <a href="https://www.facebook.com/gamedistrict1/">
                                            <img src="./assets/img/facebook_icon.png" alt="" />
                                        </a>
                                        <a href="https://www.instagram.com/gamedistrict.co/">
                                            <img src="./assets/img/insta_icon.png" alt="" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/game-district/about/">
                                            <img src="./assets/img/inn_icon.png" alt="" />
                                        </a>
                                        <a href="#youtube">
                                            <img src="./assets/img/youtube_icon.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="wow slideInRight col-lg-7" style="visibility: visible; animation-name: slideInRight;">
                                    <div class="contact_section_2_right">
                                        <div class="contact_form_partners">
                                            <h4>Write something about your project so we can get back to you with a proposal in 24hours.</h4>
                                            <p>
                                                <img class="mail_icon" src="./assets/img/mail_icon.png" alt="" />
                                            </p>
                                            <div class="clr"></div>
                                            <div role="form" class="wpcf7" id="wpcf7-f71-p37-o1" dir="ltr" lang="en-US">
                                                <form action="" method="post" class="wpcf7-form">
                                                    <p>
                                                        <span class="wpcf7-form-control-wrap Name">
                                                            <input type="text" name="Name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Name*" />
                                                        </span>
                                                        <span class="wpcf7-form-control-wrap EmailId">
                                                            <input type="email" name="EmailId" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" placeholder="Email Id*" data-temp-mail-org="0" />
                                                        </span>
                                                        <span class="wpcf7-form-control-wrap CompanyName">
                                                            <input type="text" name="CompanyName" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Company Name*" />
                                                        </span>
                                                        <span class="wpcf7-form-control-wrap ApproxBudget">
                                                            <input type="text" name="ApproxBudget" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Approx Budget" />
                                                        </span>
                                                    </p>
                                                    <p><b>Optional</b></p>
                                                    <p>
                                                        <span class="wpcf7-form-control-wrap ProjectDetails">
                                                            <textarea name="ProjectDetails" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Project Details"></textarea>
                                                        </span>
                                                    </p>
                                                    <div class="file">
                                                        <span class="wpcf7-form-control-wrap Dropitlikeitshot">
                                                            <input type="file" name="Dropitlikeitshot" size="40" class="wpcf7-form-control wpcf7-file drop_it" aria-invalid="false" />
                                                        </span>
                                                        <label>Drop it like it’s hot</label>
                                                    </div>
                                                    <p>
                                                        <input type="submit" class="wpcf7-form-control wpcf7-submit" value="submit your project" />
                                                    </p>
                                                    <div class="wpcf7-response-output wpcf7-display-none"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clr"></div>
                        </div>
                    </div>
                </div>
                <div class="about_section_7" style="background-color: rgb(248, 248, 248);">
                    <div class="container">
                        <div class="row">
                            <div class="wow slideInDown col-lg-12" style="visibility: hidden; animation-name: none;">
                                <img alt="" src="./assets/img/game-district2.jpg" />
                                <p>Dubai<span>-</span>SanFrancisco<span>-</span>Manama<span>-</span>Lahore</p>
                            </div>
                            <div class="dots">
                                <img alt="" src="./assets/img/dots2.jpg" />
                            </div>
                            <div class="col-lg-12">
                                <div class="global_icon">
                                    <img alt="" src="./assets/img/global_icon_contact_1.jpg" />
                                    <img alt="" src="./assets/img/global_icon_contact_2.jpg" />
                                    <img alt="" src="./assets/img/global_icon_contact_3.jpg" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="global_icon">
                                    <img alt="" src="./assets/img/global_icon_contact_4.jpg" />
                                    <img alt="" src="./assets/img/global_icon_contact_5.jpg" />
                                    <img alt="" src="./assets/img/global_icon_contact_6.jpg" />
                                </div>
                            </div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs