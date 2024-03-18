import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationMenu = ({ isOpen, closeMenu }) => {
  const [activeLink, setActiveLink] = useState('/');

  const location = useLocation();
  

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const menuClassName = isOpen ? 'nav-menu open' : 'nav-menu';

  const handleLinkClick = (path) => {
    closeMenu();
    setActiveLink(path);
  };

  return (
    <nav className={`nav-menu ${menuClassName}`}>
      <div className="close-nav-menu outer-shadow hover-in-shadow" onClick={closeMenu}>&times;</div>
      <div className="nav-menu-inner">
        <ul>
          <li>
            <Link
              to="/"
              className={`link-item ${activeLink === '/' ? 'active inner-shadow' : 'outer-shadow hover-in-shadow'}`}
              onClick={() => handleLinkClick('/')}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link-item ${activeLink === '/about' ? 'active inner-shadow' : 'outer-shadow hover-in-shadow'}`}
              onClick={() => handleLinkClick('/about')}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`link-item ${activeLink === '/services' ? 'active inner-shadow' : 'outer-shadow hover-in-shadow'}`}
              onClick={() => handleLinkClick('/services')}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`link-item ${activeLink === '/portfolio' || location.pathname.includes('/portfolio') ? 'active inner-shadow' : 'outer-shadow hover-in-shadow'}`}
              onClick={() => handleLinkClick('/portfolio')}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`link-item ${activeLink === '/contact' ? 'active inner-shadow' : 'outer-shadow hover-in-shadow'}`}
              onClick={() => handleLinkClick('/contact')}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="fade-out-effect"></div>
    </nav>
  );
};

export default NavigationMenu;