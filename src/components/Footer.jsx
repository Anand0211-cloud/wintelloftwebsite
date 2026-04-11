import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import lightLogo from '../assets/logo-light.png';
import darkLogo from '../assets/logo-dark.png';
import './Footer.css';

const Footer = ({ theme }) => {
    // Default to dark logo (white text) if theme is undefined, or match theme
    // usually footer is dark, so if theme is 'light', footer might still be dark?
    // Let's assume footer background matches theme or is always dark.
    // User said "change logo in footer too", implying it should match.
    const currentLogo = theme === 'light' ? lightLogo : darkLogo;

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <img src={currentLogo} alt="Intelloft" className="brand-logo-img" style={{ height: '40px' }} />
                    </Link>
                    <p>
                        Premium IT consultancy and Multimedia solutions for businesses that demand excellence.
                    </p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/intelloft/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://x.com/intelloft" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="https://www.instagram.com/intelloft_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services/marketing">Marketing & Multimedia</Link></li>
                        <li><Link to="/services/it">IT Solutions</Link></li>
                        <li><Link to="/portfolio">Case Studies</Link></li>
                        <li><Link to="/packages">Pricing Packages</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h3>Get in Touch</h3>
                    <ul>
                        <li><Mail size={16} /> info@intelloft.com</li>
                        <li><Phone size={16} /> +44 7344 239927</li>
                        <li><MapPin size={16} /> 63-B Sector 51-A, Chandigarh 160047</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom container">
                <p>&copy; {new Date().getFullYear()} Intelloft Consultancy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
