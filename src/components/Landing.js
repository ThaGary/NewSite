import React from 'react'
import './Landing.css';

const Landing = (props) => {
    return ( 
        <div className="content">
            <div className="landing">
                <div className="right">
                    <div className="name">Gary Anderson</div>
                    <div className="title">
                    <p>Web Developer</p>
                    </div>
                </div>
                <div className="left">
                    <img className="picture" src="https://i.imgur.com/d72ET64.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Landing