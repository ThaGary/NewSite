import React from 'react'
import './Content.css';

const Content = (props) => {
    return ( 
        <div className="content">
            <div className="landing">
                <div className="left">
                    <img className="picture" src="https://i.imgur.com/d72ET64.jpg" alt=""/>
                </div>
                <div className="right">
                    <div className="name">Gary Anderson</div>
                    <div className="title">
                    <p>Web Developer</p>
                    <p>Content Moderator</p>
                    <p>Risk Analyst</p></div>
                </div>
                
            </div>
        </div>
    )
}

export default Content