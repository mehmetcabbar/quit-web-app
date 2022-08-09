import React, { useEffect, useState } from 'react';
import './navbar.css';



function Navbar() {

    const [className, setClassName] = useState('')
    const [navMenu, setNavMenu] = useState('')

    const handleMenu = (e) => {
        if (className === 'hamburger') {
            setClassName('hamburger active')
        } else {
            setClassName('hamburger')
        }

        if (navMenu === 'nav-menu') {
            setNavMenu('nav-menu active')
        } else {
            setNavMenu('nav-menu')
        }
    }

    useEffect(() => {
        setNavMenu('nav-menu')
        setClassName('hamburger')
    }, []);
    return (

        <div className='navbar'>
            <a href='/' className='nav-branding'> Quit Buddy </a>

            <ul onClick={handleMenu} className={navMenu}>
                <li className='nav-item'>
                    <a href='/' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/#calculation' className='nav-link'>Why Us?</a>
                </li>
                {/* <li className='nav-item'>
                    <a href='/#' className='nav-link'>FAQ</a>
                </li> */}
                <li className='nav-item'>
                    <a href='mailto:support@quitbuddy.app?subject=About contact"' className='nav-link'>Contact</a>
                </li>
            </ul>
            <div onClick={handleMenu} className={className}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>
    )
}

export default Navbar;