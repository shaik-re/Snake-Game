import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 150); // Set to the distance you want the navbar to become sticky
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${isSticky ? 'sticky' : ''}`}>
            <div className="nav-logo">GK-Evaluations</div>
            <ul className='nav-Menu'>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contract'>Contract</li>
            </ul>
        </div>
    );
};

export default Navbar;
