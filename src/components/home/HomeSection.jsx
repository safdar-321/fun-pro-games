import React from 'react'
// import gameImage from '../'
import gameIcon1 from '../../assets/img/game-icon-1.jpg'
import gameIcons1 from '../../assets/img/game-icon-s-1.jpg'
import gameIcons2 from '../../assets/img/game-icon-s-2.jpg'
import gameIcons3 from '../../assets/img/game-icon-s-3.jpg'
import gameIcons4 from '../../assets/img/game-icon-s-4.jpg'
import gameIcons5 from '../../assets/img/game-icon-s-5.jpg'
import gameIcon2 from '../../assets/img/game-icon-2.jpg'
import gameIcon3 from '../../assets/img/game-icon-3.jpg'
import gameIcon4 from '../../assets/img/game-icon-4.jpg'
import gameIcon5 from '../../assets/img/game-icon-5.jpg'
function HomeSection() {
    return (
        <>
            <div className="fullpage">
                <div className="home_section_gamesicon">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="wow slideInLeft game_icon_1" src={gameIcon1} alt="game-icon-1" style={{ visibility: 'visible', animationName: 'slideInLeft', }} />
                                <img className="wow slideInDown game-icon-s-1" src={gameIcons1} alt="game-icon-s-1" style={{ visibility: 'visible', animationName: 'slideInDown' }} />
                                <img className="wow slideInDown game-icon-s-1" src={gameIcons2} alt="game-icon-s-2" style={{ visibility: 'visible', animationName: 'slideInDown' }} />
                                <img className="wow slideInDown game-icon-s-1" src={gameIcons3} alt="game-icon-s-3" style={{ visibility: 'visible', animationName: 'slideInDown' }} />
                                <img className="wow slideInDown game-icon-s-1" src={gameIcons4} alt="game-icon-s-4" style={{ visibility: 'visible', animationName: 'slideInDown' }} />
                                <img className="wow slideInDown game-icon-s-2" src={gameIcons5} alt="game-icon-s-5" style={{ visibility: 'visible', animationName: 'slideInDown' }} />
                                <img className="wow slideInRight game_icon_2" src={gameIcon2} alt="game-icon-2" style={{ visibility: 'visible', animationName: 'slideInRight' }} />
                                <div className="clr"></div>
                                <img className="wow slideOutUp game_icon_3" src={gameIcon3} alt="game-icon-3" style={{ visibility: 'visible', animationName: 'slideOutUp' }} />
                                <img className="wow slideOutUp game_icon_4" src={gameIcon4} alt="game-icon-4" style={{ visibility: 'visible', animationName: 'slideOutUp' }} />
                                <img className="wow slideOutUp game_icon_5" src={gameIcon5} alt="game-icon-5" style={{ visibility: 'visible', animationName: 'slideOutUp' }} />
                            </div>
                        </div>
                        <div className="clr"></div>
                    </div>
                </div>
                <div className="clr"></div>
            </div>
        </>
    )
}

export default HomeSection