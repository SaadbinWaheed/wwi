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
                <img  className="image" src={topLeftLogo} alt="logo" />
            </div>
        </div>
    ): null
}