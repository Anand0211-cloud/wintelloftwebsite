import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import lightLogo from '../assets/logo-light.png';
import darkLogo from '../assets/logo-dark.png';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine which logo to show
  const currentLogo = theme === 'dark' ? darkLogo : lightLogo;

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down > 50px, toggle scrolled state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Class for transparency: if home page AND not scrolled -> transparent
  // Otherwise -> standard (glass/solid)
  const headerClass = `header ${isHomePage && !isScrolled ? 'transparent' : 'scrolled'}`;

  return (
    <header className={headerClass}>
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <img src={currentLogo} alt="Intelloft" className="brand-logo-img" />
        </Link>

        {/* Desktop Navigation - Always Visible */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>

          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/services" className="nav-link">
              Services <ChevronDown size={14} />
            </Link>
            {activeDropdown === 'services' && (
              <div className="mega-menu">
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h3>Marketing & Multimedia</h3>
                    <ul>
                      <li>Digital Marketing</li>
                      <li>Social Media Marketing</li>
                      <li>Google & Meta Ads</li>
                      <li>Advertisement Campaigns</li>
                      <li>Infographics</li>
                      <li>Photo & Video Shoot</li>
                      <li>Editing Services</li>
                    </ul>
                    <Link to="/services/marketing" className="btn btn-outline btn-sm">View Services</Link>
                  </div>
                  <div className="mega-menu-column">
                    <h3>Information & Technology</h3>
                    <ul>
                      <li>Website & Web Apps</li>
                      <li>Software & ERP</li>
                      <li>E-Commerce</li>
                      <li>AI Integration</li>
                      <li>AI Chatbots</li>
                      <li>Automation Solutions</li>
                    </ul>
                    <Link to="/services/it" className="btn btn-outline btn-sm">View Services</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/packages" className="nav-link">Packages</Link>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-switch"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className={`toggle-track ${theme}`}>
              <Sun size={14} className="toggle-icon sun" />
              <Moon size={14} className="toggle-icon moon" />
              <div className="toggle-thumb" />
            </div>
          </button>

          <Link to="/contact" className="btn btn-primary btn-sm btn-contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
