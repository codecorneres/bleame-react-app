import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/image/Bleame-Logo.jpg';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
  <section className='site-header'>
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
        <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" aria-current="page" to="/bleame-react-app">
          <img onClick={() => handleLinkClick('home')} src={logo} alt="" width="100" height="auto" className="d-inline-block align-text-top"></img>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link onClick={() => handleLinkClick('home')} className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} aria-current="page" to="/bleame-react-app">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => handleLinkClick('product')} className={`nav-link ${activeLink === 'product' ? 'active' : ''}`} to="/bleame-react-app/product">Product</Link>
          </li>
        </ul>
      </header>
    </div>
   </section>
  )
}
