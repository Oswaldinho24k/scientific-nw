import React from 'react';
import './home.css';

const Background = ({video}) => {
    return (
        <div>
            <div className="video-cover">
                <div>
                    <h1>Scientific NW</h1>
                    <h3>You smart?, this for you</h3>
                </div>
            </div>
            <div className="video-cont">
                <video  className="video" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="image-bg"></div>
        </div>
    )
};

export default Background;