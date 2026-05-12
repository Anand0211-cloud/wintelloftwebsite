import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import ServiceMarketing from './pages/ServiceMarketing';
import ServiceIT from './pages/ServiceIT';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import './index.css';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper that conditionally hides footer on portfolio sub-views
function AppLayout({ theme, toggleTheme }) {
  const { pathname, search } = useLocation();
  // Hide footer when inside IT or Marketing portfolio sub-views
  const isPortfolioSubView = pathname === '/portfolio' && search.includes('tile=');

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/marketing" element={<ServiceMarketing />} />
        <Route path="/services/it" element={<ServiceIT />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {!isPortfolioSubView && <Footer theme={theme} />}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <ScrollToTop />
      <AppLayout theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
