import React from 'react'
import './Content.css';
import Landing from './Landing.js';
import Bio from './Bio.js';
import Technologies from './Technologies.js';

const Content = (props) => {
    return ( 
        <div className="content">
            <Landing />
            <Technologies />
            <Bio />
        </div>
    )
}

export default Content