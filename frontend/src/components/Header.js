import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ openMenu }) => {
  const [scrollBackground, setScrollBackground] = useState(false);

  const toggleHeaderBackground = () => {
      if (window.scrollY > 100) {
          setScrollBackground(true);
      } else {
          setScrollBackground(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', toggleHeaderBackground);

      return () => {
          window.removeEventListener('scroll', toggleHeaderBackground);
      };
  }, []);

  useEffect(() => {
      toggleHeaderBackground(); // Initial check on mount
  }, []); 

  const headerClass = scrollBackground ? 'scroll-background' : '';
  
  return (
    <header className={`header ${headerClass}`} id="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
           <Link to="/">A</Link>
          </div>
          <div className="hamburger-btn outer-shadow hover-in-shadow" onClick={openMenu}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
