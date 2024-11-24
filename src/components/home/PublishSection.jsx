import React from 'react'

import publishImage from '../../assets/images/publish.jpg'
import iconMarketing from '../../assets/img/icon-marketing.jpg'
import iconStrategy from '../../assets/img/icon-strategy.jpg'
import iconManagement from '../../assets/img/icon-management.jpg'

// import bullion from '../../assets/img/bullion.png'
// import iconPublishedGame from '../../assets/img/icon-published-game.jpg'
// import iconStrongTeam from '../../assets/img/icon-strong-team.jpg'
// import iconProjectsDelivered from '../../assets/img/icon-projects-delivered.jpg'
// import iconFortune from '../../assets/img/icon-fortune.jpg'
// import iconRaisad from '../../assets/img/icon-raisad.jpg'

import bestClanLeft from '../../assets/img/best-clan-left.jpg'
import bestClanRight from '../../assets/img/best-clan-right.jpg'

function PublishSection() {
    return (
        <>
            <div className="fullpage">
                <div className="home_section_publish">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>We Empower <span>Small Startups</span></h3>
                                <h3 className="wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>To Turn Into <span className="bg">Big Enterprises.</span></h3>
                                <p className="wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>Our app solutions mutiply your ROI, enhance brand visibilty, and delight your customers.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7">
                                <img className="wow slideInLeft" alt="" src={publishImage} style={{ visibility: 'visible', animationName: 'slideInLeft' }} />
                                <a href="/publishing" className="wow slideOutUp learn_more" style={{ visibility: 'visible', animationName: 'slideOutUp' }}>Publish with Us</a>
                            </div>
                            <div className="col-lg-5">
                                <div className="wow slideInRight services_publish" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img alt="icon-marketing" src={iconMarketing} />
                                    <h4>Marketing Expertise</h4>
                                    <p>Turn a great idea into a product concept that is ready to start development</p>
                                </div>
                                <div className="wow slideInRight services_publish" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img alt="icon-strategy" src={iconStrategy} />
                                    <h4>Release Strategy</h4>
                                    <p>Features enough to satisfy early customers &amp; provide feedback for future development.</p>
                                </div>
                                <div className="wow slideInRight services_publish" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                    <img alt="icon-management" src={iconManagement} />
                                    <h4>Community Management</h4>
                                    <p>Answer critical queries through research, design, prototyping, interviews &amp; testing.</p>
                                </div>
                            </div>
                            <div className="clr"></div>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
                {/* <div className="home_our_journey">
                    <div className="container">
                        <div className="row">
                            <div className="wow slideInDown col-lg-12" style={{ visibility: 'visible', animationName: 'slideInDown' }}>
                                <h1>Our Journey  So Far</h1>
                                <p>Since 2015, we have helped a number of start-ups<br />and big brands convert their digital ideas into engaging, feature rich apps &amp; games.</p>
                                <div className="trending_mobile_games">
                                    <span>Building</span> <b>trending mobile games</b> <span>with</span>
                                </div>
                                <img className="mplus" alt="bullion" src={bullion} />
                            </div>
                            <div className="clr"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wow rollIn journey_plus" style={{ visibility: 'visible', animationName: 'rollIn' }}>
                                    <img alt="icon-published-game" src={iconPublishedGame} />
                                    <h5>345<span>+</span></h5>
                                    <p>Published Games</p>
                                </div>
                                <div className="wow rollIn journey_plus" style={{ visibility: 'visible', animationName: 'rollIn' }}>
                                    <img alt="icon-strong-team" src={iconStrongTeam} />
                                    <h5>350<span>+</span></h5>
                                    <p>Strong Team</p>
                                </div>
                                <div className="wow rollIn journey_plus" style={{ visibility: 'visible', animationName: 'rollIn' }}>
                                    <img alt="icon-projects-delivered" src={iconProjectsDelivered} />
                                    <h5>56K<span>+</span></h5>
                                    <p>Projects Delivered</p>
                                </div>
                                <div className="wow rollIn journey_plus" style={{ visibility: 'visible', animationName: 'rollIn' }}>
                                    <img alt="icon-fortune.jpg" src={iconFortune} />
                                    <h5>6</h5>
                                    <p>Fortune 500 Clients</p>
                                </div>
                                <div className="wow rollIn journey_plus" style={{ visibility: 'visible', animationName: 'rollIn' }}>
                                    <img alt="icon-raisad" src={iconRaisad} />
                                    <h5>$150<span>M</span></h5>
                                    <p>Raised by Clients</p>
                                </div>
                                <div className="learn_morearea">
                                    <a className="learn_more" href="#home">Learn More</a>
                                </div>
                            </div>
                            <div className="clr"></div>
                        </div>
                    </div>
                </div> */}
                <div className="home_best_clan">
                    <div className="container">
                        <div className="row">
                            <div className="wow slideInLeft col-lg-4 col-sm-12" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
                                <img alt="best-clan-left" src={bestClanLeft} />
                            </div>
                            <div className="wow slideInDown col-lg-4 col-sm-12" style={{ visibility: 'visible', animationName: 'slideInDown' }}>
                                <h1>It’s the best clan you can find online</h1>
                                <p>Fun Pro Games longs for fresh &amp; young minds who can mould their approaches with the changing challenges of the digital industry. A growing mind is one of the cherished sights for us as it’s a proof of growth &amp; success in the right direction.</p>
                                <a className="learn_more" href="/about">About Us</a>
                            </div>
                            <div className="wow slideInRight col-lg-4 col-sm-12" style={{ visibility: 'visible', animationName: 'slideInRight' }}>
                                <img className="margin_top" alt="best-clan-right" src={bestClanRight} />
                            </div>
                            <div className="clr"></div>
                        </div>
                    </div>
                </div>
                <div className="clr"></div>
            </div>
        </>
    )
}

export default PublishSection