import React, { useState } from 'react';
import './nav.css';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'



const Nav = ({home, about}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <>
            <nav>
                <div className="nav-content">
                    <Link to='/' className="logo">
                        <img src={logo} alt="logo" className='logo1' />
                        <img src={logo2} alt="logo" className='logo2' />
                    </Link>
                    <ul className='links1 false'>
                        <Link to='/' className={`${home}`} onClick={toggle}>
                            Home
                        </Link>
                        <Link to='/about' className={`${about}`} onClick={toggle}>
                            About Us
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Events
                        </Link>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc5jAgSXzPiyoVU5H0vt2D6cjZ8loSrSJ2QXP6n0mE8NmeS-g/viewform' onClick={toggle}>
                            Join Our Community
                        </a>
                    </ul>
                    <ul className={open ? "links1 " : "none"}>
                        <Link to='/' className={`${home} top`} onClick={toggle}>
                            Home
                        </Link>
                        <Link to='/about' className={`${about} top`} onClick={toggle}>
                            About Us
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Events
                        </Link>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc5jAgSXzPiyoVU5H0vt2D6cjZ8loSrSJ2QXP6n0mE8NmeS-g/viewform' onClick={toggle}>
                            Join Our Community
                        </a>
                    </ul>
                    <div id="menu" onClick={toggle}><FontAwesomeIcon icon={open ? faClose : faBars} size="lg"  /></div>
                </div>
            </nav>
        </>
    )
}

export default Nav
