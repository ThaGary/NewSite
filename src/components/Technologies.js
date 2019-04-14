import React from 'react'
import './Technologies.css';
import ReactSVG from './SVGs/React.js';
import VueSVG from './SVGs/Vue.js';
import NodejsSVG from './SVGs/Nodejs.js';
import JavaScriptSVG from './SVGs/JavaScript.js';
import CSSSVG from './SVGs/CSS.js';
import HTMLSVG from './SVGs/HTML.js';
import ExpressSVG from './SVGs/Express.js';

const Technologies = (props) => {
    return ( 
        <div className="content">
            <div className="technologies">
                <div className="technologies__title">Favorite Technologies</div>
                <div className="technologies__line"></div>
                <div className="technologies__subtitle">My current favorite technologies. These are what I believe are my strongest skills.</div>
                <div className="techbox">
                    <ReactSVG />
                    <VueSVG />
                    <NodejsSVG />
                    <ExpressSVG />
                    <HTMLSVG />
                    <CSSSVG />
                    <JavaScriptSVG />
                </div>
            </div>
        </div>
    )
}

export default Technologies