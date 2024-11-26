import React from 'react'
import main1 from '../../assets/img/main1.jpg'
import main2 from '../../assets/img/main2.jpg'
import main3 from '../../assets/img/main3.jpg'

function CaseStudy() {
    return (
        <>
            <section class="case-study-area pt-100 pb-70">
                <div class="container">
                    <div class="section-title">
                        <h2>Our Services</h2>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos architecto nisi quisquam eos sed voluptas excepturi assumenda perspiciatis</p> */}
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-lg-3">
                            <div class="case-study-item">
                                <img src={main1} alt=" Case Study" />
                                <div class="inner">
                                    <span>Games Development</span>
                                    <h3>
                                        <a href="#">We are games developement Company that help you to transfer your idea into a game</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="case-study-item">
                                <img src={main2} alt=" Case Study" />
                                <div class="inner">
                                    <span>Graphic Designing</span>
                                    <h3>
                                        <a href="#">We provide designs for your brand which will improve brand perceptipon and value</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="case-study-item">
                                <img src={main3} alt=" Case Study" />
                                <div class="inner">
                                    <span>ASO Marketing</span>
                                    <h3>
                                        <a href="#">Rank your App heigher with the help of our ASO Expert, Contact now for growth.</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="case-study-item">
                                <img src={main1} alt=" Case Study" />
                                <div class="inner">
                                    <span>QA & Deployment</span>
                                    <h3>
                                        <a href="#">Our team gives you the best testing & gives you the best Quality Assurance.</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudy