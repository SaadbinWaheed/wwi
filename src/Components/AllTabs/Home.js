import React from 'react'
import '../../Styles/Home.css'
import topLeftLogo from '../../Assets/Home_topLeft.png'
import bottomLeftLogo from '../../Assets/Home_bottomLeft.png'
export const Home = ({id, currentTab}) =>{

    return id === currentTab? (
        <div className="imageGrid">
            <div className="imageRow">
                <img  className="image" src={topLeftLogo} alt="logo" />
                <img  className="image" src={bottomLeftLogo} alt="logo" />
            </div>
            <div className="imageRow">
                <img  className="image" src={bottomLeftLogo} alt="logo" />
                <div className='textTile'>
                    <div className='textContent'>
                        <p className='textSection'>
                            It really is not about us, it is about YOU.
                        </p>
                        <p className='textSection'>
                            We believe that you as a woman should be able to excel in your career and be a wife, mother, daughter or any other roles you desire. Having a career should not get in the way of you being you.
                        </p>
                        <button className='readMoreBtn' title='Read More'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    ): null
}