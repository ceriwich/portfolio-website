import React from 'react';
import { useState } from 'react';

import "./Nav.css";



function Nav(props){
    function handleClick(){
        setCurrNav('#');
        setBurgMenu('');
    }
    const [currNav, setCurrNav] = useState('#');
    const [burgMenu, setBurgMenu] = useState('');
    return (
        <nav>
            <ul className={burgMenu === '' ? '' : "show"}>
                <li><a href="#home" onClick={handleClick} className={currNav === '#' ? 'active' : ''}>Home</a></li>
                <li><a href="#about" onClick={handleClick} className={currNav === '#about' ? 'active' : ''}>About</a></li>
                <li><a href="#experience" onClick={handleClick} className={currNav === '#expereince' ? 'active' : ''}>Expereince</a></li>
                <li><a href="#persproj" onClick={handleClick} className={currNav === '#persproj' ? 'active' : ''}>Personal Projects</a></li>
                <li><a href="#contacts" onClick={handleClick} className={currNav === '#contacts' ? 'active' : ''}>Contacts</a></li>
            </ul>
            <button className="burger-menu" id="burger-menu" onClick={()=>setBurgMenu(burgMenu===''?'show':'')} >
                <ion-icon className="bars" name="menu-online"></ion-icon>
            </button>
        </nav>
    );
}

export default Nav;

