import React, { useState } from 'react';
import './nav.css';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'



const Nav = ({className}) => {
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
                        <Link to='/' className={`${className}`} onClick={toggle}>
                            Home
                        </Link>
                        <Link to='/' onClick={toggle}>
                            About Us
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Events
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Join Our Community
                        </Link>
                    </ul>
                    <ul className={open ? "links1 " : "none"}>
                        <Link to='/' className={`${className} top`} onClick={toggle}>
                            Home
                        </Link>
                        <Link to='/' onClick={toggle}>
                            About Us
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Events
                        </Link>
                        <Link to='/' onClick={toggle}>
                            Join Our Community
                        </Link>
                    </ul>
                    <div id="menu" onClick={toggle}><FontAwesomeIcon icon={open ? faClose : faBars} size="lg"  /></div>
                </div>
            </nav>
        </>
    )
}

export default Nav
