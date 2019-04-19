import React from 'react'
import './Nav.css';

const Nav = (props) => {

    return ( 
        <div className="nav">
            <div className="nav__links">
                <a onClick={props.handleClickHome} href="#Home">Home </a>
                <a onClick={props.handleClickBio} href="#Bio" >Bio </a>
                <a href="google.com">Contact </a>
            </div>
            <div className="nav__line"></div>
        </div>
    )
}

export default Nav