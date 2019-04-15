import React from 'react'
import './Nav.css';

const Nav = (props) => {
    return ( 
        <div className="nav">
            <div className="nav__links">
                <a href="google.com">Home </a>
                <a href="google.com">Bio </a>
                <a href="google.com">Contact </a>
            </div>
            <div className="nav__line"></div>
        </div>
    )
}

export default Nav