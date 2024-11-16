import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/media/transparent_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container h-screen">
      <div className="header flex justify-between items-center p-4">
        <div className="logo">
          <img className="w-40" src={Logo} alt="logo" />
        </div>
        <div className="menu hidden md:flex list-none text-white gap-4 text-xl uppercase font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Photography">Photography</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <ul className="list-none text-white text-xl uppercase font-bold">
          <li className="py-2">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2">
            <Link to="/Photography" onClick={toggleMenu}>Photography</Link>
          </li>
          <li className="py-2">
            <Link to="/films" onClick={toggleMenu}>Films</Link>
          </li>
          <li className="py-2">
            <Link to="/faq" onClick={toggleMenu}>Faq</Link>
          </li>
          <li className="py-2">
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
