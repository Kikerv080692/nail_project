


import React, { useState } from 'react';
import './navToggle.scss'; 
const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="viewport">
      <header className="header" role="banner">
        <nav id="nav" className="nav" role="navigation">
          {/* ACTUAL NAVIGATION MENU */}
          <ul
            className={`nav__menu${isOpen ? ' open' : ''}`}
            id="menu"
            tabIndex="-1"
            aria-label="main navigation"
            hidden={!isOpen}
          >
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Shop</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
            <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
          </ul>

          {/* MENU TOGGLE BUTTON */}
          <a
            href="#nav"
            className="nav__toggle"
            role="button"
            aria-expanded={isOpen}
            aria-controls="menu"
            onClick={handleToggle}
          >
            <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
              <title>Toggle Menu</title>
              <g>
                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                <circle className="menuicon__circle" r="23" cx="25" cy="25" />
              </g>
            </svg>
          </a>
          <div className="splash"></div>
        </nav>
      </header>
    </div>
  );
};

export default NavToggle;

