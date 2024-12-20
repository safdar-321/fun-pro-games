import React from "react";
import CaseStudy from '../home/CaseStudy'


import LeftIcon from "../../assets/img/left-icon.jpg";
import IconG from "../../assets/img/icon-g.jpg";
import RightIcon from "../../assets/img/right-icon.jpg";
import WhyClient1 from "../../assets/img/why-client-1.jpg";
import WhyClient2 from "../../assets/img/why-client-2.jpg";
import WhyClient3 from "../../assets/img/why-client-3.jpg";
import WhyClient4 from "../../assets/img/why-client-4.jpg";

import Ring from "../../assets/img/ring.png";
import Era from "../../assets/img/era.jpg";
import Acquisition from "../../assets/img/icon-user-acquisition.jpg";
import Engagement from "../../assets/img/icon-engagement.jpg";
import Monetization from "../../assets/img/icon-monetization.jpg";
import Venture1 from "../../assets/img/venture-icon-1.jpg";
import Venture2 from "../../assets/img/venture-icon-2.jpg";
import Venture3 from "../../assets/img/venture-icon-3.jpg";
import Inside from "../../assets/img/inside.jpg";
import InsideG1 from "../../assets/img/inside-g-1.jpg";
import InsideG2 from "../../assets/img/inside-g-2.jpg";
import InsideG3 from "../../assets/img/inside-g-3.jpg";
import InsideG4 from "../../assets/img/inside-g-4.jpg";
import InsideG5 from "../../assets/img/inside-g-5.jpg";
import InsideG6 from "../../assets/img/inside-g-6.jpg";
import InsideG7 from "../../assets/img/inside-g-7.jpg";
import InsideG8 from "../../assets/img/inside-g-8.jpg";
import InsideG9 from "../../assets/img/inside-g-9.jpg";
import InsideG10 from "../../assets/img/inside-g-10.jpg";

function GameSection() {
  return (
    <>
      <div>
        <div className="fullpage"></div>
        <div className="whygames_section_1">
          <div className="container">
            <div className="whygames_section_inner">
              <div className="row">
                <div className="wow fadeInDown col-lg-12" style={{ visibility: "visible", animationName: "fadeInDown" }} >
                  <div className="whyicons">
                    <img className="whyleft-icon" src={LeftIcon} alt="" />
                    <img className="whycenter-icon" src={IconG} alt="" />
                    <img className="whyright-icon" src={RightIcon} alt="" />
                  </div>
                  <p>Emerging mobile game leaders </p>
                </div>
              </div>
              <div className="clr"></div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="whygamesbg"></div>
        </div>
        <div className="whygames_section_2">
          <div className="container">
            <div className="row">
              <div className="wow slideInLeft col-lg-3" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <img src={WhyClient1} alt="" />
              </div>
              <div className="wow slideInLeft col-lg-3" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <img src={WhyClient2} alt="" />
              </div>
              <div className="wow slideInLeft col-lg-3" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <img src={WhyClient3} alt="" />
              </div>
              <div className="wow slideInLeft col-lg-3" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <img src={WhyClient4} alt="" />
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>

        <div className="whygames_section_4">
          <img src={Ring} alt="" className="ring_whygames" />
          <div className="container">
            <div className="row">
              <div className="wow slideInLeft col-lg-6" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <div className="era_img">
                  <img src={Era} alt="" />
                </div>
              </div>
              <div className="wow slideInRight col-lg-6" style={{ visibility: "visible", animationName: "slideInRight" }} >
                <div className="text_area">
                  <h4>the era of</h4>
                  <h2>Mobile Games</h2>
                  <p>
                    With 2 Billion smartphone users around the world, App Store
                    &amp; Google Play revenues are expected to reach tens of
                    billions of dollars in the next couple of years. Clearly,
                    mobile is taking over a big part of the entertainment
                    business traditionally generated by PCs &amp; games console.
                  </p>
                  <p>
                    This makes game app development a tremendous opportunity in
                    the consumer technology revolution we are experiencing now.
                    Not surprisingly, game apps represent the majority of
                    revenues out of developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <CaseStudy />
        <div className="whygames_section_5">
          <div className="container">
            <div className="row">
              <div className="wow slideInLeft col-lg-6" style={{ visibility: "visible", animationName: "slideInLeft" }} >
                <div className="text_2ndarea">
                  <h4>the challenge of</h4>
                  <h2>Delivering The Best</h2>
                  <p>
                    The rising numbers of mobile users &amp; digital opinions
                    has made game development a crucial &amp; challenging task.
                    But our team at Fun Pro Games counters all the hurdles with
                    professional approach &amp; tactics.
                  </p>
                  <p>
                    Separating the venture into Deisgn, Development &amp;
                    Publishing allows us to cater the various aspects of the
                    game properly.{" "}
                  </p>
                </div>
              </div>
              <div className="wow slideInRight col-lg-6" style={{ visibility: "visible", animationName: "slideInRight" }} >
                <div className="services_delivering_raw">
                  <div className="services_delivering margintop">
                    <img src={Acquisition} alt="" />
                    <h5>User Acquisition</h5>
                    <p>
                      If your customer acquisition costs are too high, you may
                      not be able to sustain your business. Most successful game
                      apps, such as Candy Crush or QuizUp, have hacked their
                      growth by implementing smart referral and viral features.
                    </p>
                  </div>
                </div>
                <div className="services_delivering_raw">
                  <div className="services_delivering">
                    <img src={Engagement} alt="" />
                    <h5>Engagement</h5>
                    <p>
                      Cryptocurrencies are no longer unregulated. Depending on
                      their status and location, digital currency apps may have
                      to comply with rules such as Anti-Money Laundering
                      Programs, Suspicious Activity Reports etc.
                    </p>
                  </div>
                  <div className="services_delivering">
                    <img src={Monetization} alt="" />
                    <h5>Monetization</h5>
                    <p>
                      How to monetize users is another frequent challenge game
                      developers face. The industry has shifted from ads to
                      in-app purchases, but building an efficient and
                      sustainable business is not easy at all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="whygames_section_6">
          <div className="container">
            <div className="row">
              <div className="wow slideInDown col-lg-12" style={{ visibility: "visible", animationName: "slideInDown" }}  >
                <div className="text_3rdarea">
                  <h4>How can we help in</h4>
                  <h2>Your Venture</h2>
                  <p>
                    In Game Development, achieving greatness is about turning
                    your creative vision into a seamless and engaging player
                    experience. That’s what makes a difference between
                    awesomeness and mediocrity when it comes to engagement.
                  </p>
                  <p>
                    However, your overall strategy should go way beyond
                    development aspect. Although your product strategy should be
                    about crafting an amazing user experience, it needs to think
                    about implementing an effective monetization and business
                    strategy.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="venture_icon">
                  <img className="margin_icon_1 wow rollIn" src={Venture1} alt="" style={{ visibility: "visible", animationName: "rollIn" }} />
                  <img className="margin_icon_2 wow rollIn" src={Venture2} alt="" style={{ visibility: "visible", animationName: "rollIn" }}/>
                  <img className="margin_icon_3 wow rollIn" src={Venture3} alt="" style={{ visibility: "visible", animationName: "rollIn" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
        <div className="whygames_section_7">
          <div className="whygames_section_7inner">
            <div className="container">
              <div className="row">
                <div className="wow slideInLeft col-lg-12" style={{ visibility: "visible", animationName: "slideInLeft", }} >
                  <div className="text_4tharea">
                    <h4>It all starts with</h4>
                    <h2>The Right Strategy</h2>
                    <p>
                      The quality of game design ultimately depends on creativty
                      and vision. But that represents only part of the story.
                      Tranforming this creative vision into an engaging and
                      semaless user experience, while building a viable business
                      model on top of it, is what separates mediocrity from
                      greatness.
                    </p>
                    <p>
                      At Fun Pro Games, we undrestand this. Our product managers
                      worked on a wide range of top selling game apps, which
                      cumulatively achieved tens of millions of downloads.{" "}
                    </p>
                    <p>
                      From fleshing out the initial creative idea, building an
                      exciting storyboard and crafting an amazing user
                      epxerience to building a viable monetization energy, our
                      product manager will work with you on every aspect of your
                      game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clr"></div>
          </div>
          <div className="clr"></div>
        </div>
       
      </div>
    </>
  );
}

export default GameSection;
