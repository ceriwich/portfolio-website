import React from 'react';
import { useState } from 'react';

function Nav(props){
    const [currNav, setCurrNav] = useState('#');
    return (
        <nav>
            <a href="#home" onClick={()=>setCurrNav('#')} className={currNav === '#' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={()=>setCurrNav('#')} className={currNav === '#about' ? 'active' : ''}>About</a>
            <a href="#experience" onClick={()=>setCurrNav('#')} className={currNav === '#expereince' ? 'active' : ''}>Expereince</a>
            <a href="#persproj" onClick={()=>setCurrNav('#')} className={currNav === '#persproj' ? 'active' : ''}>Personal Projects</a>
            <a href="#contacts" onClick={()=>setCurrNav('#')} className={currNav === '#contacts' ? 'active' : ''}>Contacts</a>
        </nav>
    );
}

export default Nav;