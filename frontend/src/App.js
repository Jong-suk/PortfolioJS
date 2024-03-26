import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/style.css'
import './css/font-awesome.css'
import './css/responsive.css'
import './css/style-switcher.css'

import Header from './components/Header'
import NavigationMenu from './components/NavigationMenu'

import Home from './screens/Home';
import About from './screens/About';
import Services from './screens/Services';
import Portfolio from './screens/Portfolio';
import PortfolioItem from './screens/PortfolioItem';
import Contact from './screens/Contact';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Router>
        <Header openMenu={toggleMenu}/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/:id" element={<PortfolioItem />} />
          </Routes>
        </Container>
        <NavigationMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
      </Router>
    </>
  )
}

export default App