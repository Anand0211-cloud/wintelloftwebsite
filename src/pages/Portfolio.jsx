import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Monitor, Camera, Zap, Code } from 'lucide-react';

// Import IT Project Images
import imgEcoNeoShield from '../assets/Images_websites/ECO_NEO_Shield.png';
import imgEeaUlm from '../assets/Images_websites/EEA_ULM.png';
import imgFyrSport from '../assets/Images_websites/FYR_Sport.png';
import imgFrontier from '../assets/Images_websites/Frontier_Immigeration.png';
import imgHairDao from '../assets/Images_websites/HairDao.png';
import imgItdcPunjab from '../assets/Images_websites/ITDC_Punjab.png';
import imgJkhanFirm from '../assets/Images_websites/Jkhan_Firm.png';
import imgKasimArts from '../assets/Images_websites/Kasim_Arts.png';
import imgLevel59 from '../assets/Images_websites/Level_59.png';
import imgMassNutrition from '../assets/Images_websites/Mass_Nutrition.png';
import imgOldWalls from '../assets/Images_websites/Old_Walls.png';
import imgSakaIndia from '../assets/Images_websites/Saka_India.png';
import imgSliceNSpice from '../assets/Images_websites/Slice_N_Spice_Pizza.png';
import imgSolar from '../assets/Images_websites/Solar.png';
import imgSolarstadtUlm from '../assets/Images_websites/Solarstadt_Ulm.png';
import imgSonnaExxport from '../assets/Images_websites/Sonna_Exxport.png';
import imgTheAdAuto from '../assets/Images_websites/The_AD_Auto.png';
import imgUlmer from '../assets/Images_websites/Ulmer.png';

// Import Marketing Images
import imgAGI from '../assets/Marketing_images/AGI.jpg';
import imgEastwood2 from '../assets/Marketing_images/Eastwood 2.jpg';
import imgEastwood from '../assets/Marketing_images/Eastwood.jpg';
import imgFrontierMkt from '../assets/Marketing_images/Frontier.jpg';
import imgGWA from '../assets/Marketing_images/GWA.jpg';
import imgHaveli1 from '../assets/Marketing_images/Haveli 1.jpg';
import imgHaveli2 from '../assets/Marketing_images/Haveli 2.jpg';
import imgJkhanFirmMkt from '../assets/Marketing_images/Jkhan Firm.jpg';
import imgLovelyMarbles1 from '../assets/Marketing_images/Lovely Marbles 1.jpg';
import imgLovelyMarbles2 from '../assets/Marketing_images/Lovely Marbles 2.jpg';
import imgShivMoksh from '../assets/Marketing_images/Shiv Moksh Icha Purti.jpg';
import imgSong1 from '../assets/Marketing_images/Song 1.jpg';
import imgTaruwar2 from '../assets/Marketing_images/Taruwar 2.jpg';
import imgTaruwarKohli from '../assets/Marketing_images/Taruwar Kohli.jpg';
import imgTyreBoutique from '../assets/Marketing_images/Tyre Boutique.jpg';
import imgVelocity2 from '../assets/Marketing_images/Velocity 2.jpeg';
import imgVelocity from '../assets/Marketing_images/Velocity.jpg';
import imgXpeed from '../assets/Marketing_images/Xpeed.jpg';
import imgZentree from '../assets/Marketing_images/Zentree.jpg';

import '../styles/Portfolio.css';

// Expanded Project Data
const itProjects = [
    { id: 1, title: 'Level 59', category: 'Gaming/E-Sports', image: imgLevel59, desc: 'High-performance interactive platform for competitive gaming communities.', link: 'https://level59.de/' },
    { id: 2, title: 'FYR Sport', category: 'Health & Fitness', image: imgFyrSport, desc: 'Dynamic e-commerce and tracking application for sports enthusiasts.', link: 'https://fyrsport.com/' },
    { id: 3, title: 'ITDC Punjab', category: 'Government IT', image: imgItdcPunjab, desc: 'Scalable portal and digital infrastructure for state development.', link: 'https://itdcpunjab.com/' },
    { id: 4, title: 'Saka India', category: 'Enterprise/B2B', image: imgSakaIndia, desc: 'Robust B2B platform streamlining operations and procurement.', link: 'https://www.sakaindia.in/' },
    { id: 5, title: 'ECO NEO Shield', category: 'Eco/Sustainability', image: imgEcoNeoShield, desc: 'Innovative eco-tracking application for corporate sustainability programs.', link: 'https://esgsolutions.in/' },
    { id: 6, title: 'EEA ULM', category: 'Education/Institutional', image: imgEeaUlm, desc: 'Comprehensive academic portal and administrative dashboard.', link: 'https://energieeffizienz-agentur.de/' },
    { id: 7, title: 'Frontier Immigration', category: 'Legal Tech', image: imgFrontier, desc: 'Secure digital portal for visa processing and document management.', link: 'https://frontierinsightimmigration.com/' },
    { id: 8, title: 'HairDao', category: 'Web3/Health', image: imgHairDao, desc: 'Decentralized autonomous organization interface for medical research.', link: 'https://www.hairdao.xyz/' },
    { id: 9, title: 'Jkhan Firm', category: 'Legal/Corporate', image: imgJkhanFirm, desc: 'Professional corporate website with client case management.', link: 'https://jkhanfirm.com/' },
    { id: 10, title: 'Kasim Arts', category: 'Creative/E-Commerce', image: imgKasimArts, desc: 'Visually stunning online gallery and art purchasing platform.', link: 'https://www.kasimarts.com/' },
    { id: 11, title: 'Mass Nutrition', category: 'E-Commerce/Health', image: imgMassNutrition, desc: 'High-conversion nutritional supplement storefront.', link: 'https://massnutrition.in/' },
    { id: 12, title: 'Old Walls', category: 'Real Estate/Heritage', image: imgOldWalls, desc: 'Interactive property viewing and historical heritage preservation platform.', link: 'https://oldwalls.in/' },
    { id: 13, title: 'Slice N Spice Pizza', category: 'Food & Beverage', image: imgSliceNSpice, desc: 'Modern restaurant application with real-time delivery tracking.', link: 'https://slicenspicepizza.com/' },
    { id: 14, title: 'Solar', category: 'Renewable Energy', image: imgSolar, desc: 'Energy consumption analytics and solar panel installation tracking.', link: 'https://solarwerkschwaben.de/' },
    { id: 15, title: 'Solarstadt Ulm', category: 'Smart City/Energy', image: imgSolarstadtUlm, desc: 'City-wide digital integration of sustainable solar initiatives.', link: 'https://solarstadt-ulm.de/' },
    { id: 16, title: 'Sonna Export', category: 'Logistics/B2B', image: imgSonnaExxport, desc: 'Global supply chain tracking and export management portal.', link: 'https://www.sonnaexxports.com/' },
    { id: 17, title: 'The AD Auto', category: 'Automotive', image: imgTheAdAuto, desc: 'Digital showroom and automated vehicle inventory management.', link: 'https://theadauto.com/' },
    { id: 18, title: 'Ulmer', category: 'Corporate Services', image: imgUlmer, desc: 'Streamlined corporate portal for efficient resource management.', link: 'https://ulmer-schanze.de/' },
];



const marketingProjects = [
    { id: 'm1', title: 'AGI', category: 'Marketing', image: imgAGI, desc: 'Strategic marketing and brand elevation for AGI.', link: 'https://www.instagram.com/reels/C4BJa0OPBay/' },
    { id: 'm2', title: 'Eastwood', category: 'Marketing', image: imgEastwood, desc: 'Comprehensive digital campaign for Eastwood.', link: 'https://www.instagram.com/p/DN28yjB2K9k/' },
    { id: 'm3', title: 'Eastwood 2', category: 'Marketing', image: imgEastwood2, desc: 'Creative marketing solutions for Eastwood.', link: 'https://www.instagram.com/p/DSMofdCiXRM/' },
    { id: 'm4', title: 'Frontier', category: 'Marketing', image: imgFrontierMkt, desc: 'Brand positioning and outreach for Frontier.', link: 'https://www.instagram.com/p/DTgDQP9Ev6a/?img_index=1' },
    { id: 'm5', title: 'GWA', category: 'Marketing', image: imgGWA, desc: 'Targeted lead generation for GWA.', link: 'https://www.youtube.com/shorts/QOK6n18_k3c' },
    { id: 'm6', title: 'Haveli', category: 'Marketing', image: imgHaveli1, desc: 'Visual identity and social media presence for Haveli.', link: 'https://www.instagram.com/reels/C5yKtG1p_Es/' },
    { id: 'm7', title: 'Haveli 2', category: 'Marketing', image: imgHaveli2, desc: 'Extended brand campaign for Haveli.', link: 'https://www.instagram.com/reels/DBEO3xTCVBs/' },
    { id: 'm8', title: 'Jkhan Firm', category: 'Marketing', image: imgJkhanFirmMkt, desc: 'Professional branding for Jkhan Firm.', link: 'https://www.instagram.com/reels/DGGCiOGPxfs/' },
    { id: 'm9', title: 'Lovely Marbles', category: 'Marketing', image: imgLovelyMarbles1, desc: 'Product showcase marketing for Lovely Marbles.', link: 'https://www.instagram.com/reels/C-UXMCGx81M/' },
    { id: 'm10', title: 'Lovely Marbles 2', category: 'Marketing', image: imgLovelyMarbles2, desc: 'Digital outreach strategy for Lovely Marbles.', link: 'https://www.instagram.com/reels/C9mmrxDSYqS/' },
    { id: 'm11', title: 'Shiv Moksh Icha Purti', category: 'Marketing', image: imgShivMoksh, desc: 'Community engagement campaign for Shiv Moksh.', link: 'https://www.instagram.com/p/DUSMi8pEgxa/' },
    { id: 'm12', title: 'Song', category: 'Marketing', image: imgSong1, desc: 'Promotional marketing for musical artist/release.', link: 'https://www.instagram.com/reels/C7l7neCAWnQ/' },
    { id: 'm13', title: 'Taruwar Kohli', category: 'Marketing', image: imgTaruwarKohli, desc: 'Personal branding and digital marketing.', link: 'https://www.instagram.com/reels/C_UwpICSAkK/' },
    { id: 'm14', title: 'Taruwar 2', category: 'Marketing', image: imgTaruwar2, desc: 'Extended digital campaign for Taruwar.', link: 'https://www.instagram.com/reels/C_IU-Fbyxck/' },
    { id: 'm15', title: 'Tyre Boutique', category: 'Marketing', image: imgTyreBoutique, desc: 'Automotive marketing strategy for Tyre Boutique.', link: 'https://www.instagram.com/reels/DL41akBISjW/' },
    { id: 'm16', title: 'Velocity', category: 'Marketing', image: imgVelocity, desc: 'High-impact branding for Velocity.', link: 'https://www.instagram.com/reels/DATkXDpSHZr/' },
    { id: 'm17', title: 'Velocity 2', category: 'Marketing', image: imgVelocity2, desc: 'Multi-channel ad campaign for Velocity.', link: 'https://www.instagram.com/reels/DA48N-byk5Z/' },
    { id: 'm18', title: 'Xpeed', category: 'Marketing', image: imgXpeed, desc: 'Growth driving campaign for Xpeed.', link: 'https://www.instagram.com/p/DRPR-MXkl8o/?img_index=1' },
    { id: 'm19', title: 'Zentree', category: 'Marketing', image: imgZentree, desc: 'Brand narrative and visual storytelling for Zentree.', link: 'https://www.instagram.com/p/DRew1fLEq8N/' },
];

// IT Portfolio Component (Horizontal Swipe)
const ITPortfolio = ({ onBack }) => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            // Scroll by card width (60vw) + gap (10vw) = 70vw
            const scrollAmount = window.innerWidth * 0.7;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.div
            className="it-portfolio-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
            <button className="back-btn" onClick={onBack}><ChevronLeft /> Back</button>


            {/* Navigation Arrows */}
            <button className="nav-arrow-btn nav-left" onClick={() => scroll('left')}>
                <ChevronLeft size={32} />
            </button>
            <button className="nav-arrow-btn nav-right" onClick={() => scroll('right')}>
                <ChevronRight size={32} />
            </button>

            <div className="it-carousel-wrapper" ref={carouselRef}>
                <div className="it-carousel">
                    {itProjects.map(project => (
                        <div className="it-card" key={project.id}>
                            <div
                                className="it-image"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="it-overlay">
                                    <div className="it-text-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-4">Visit <ArrowUpRight size={14} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// Marketing Portfolio Component (Vertical Reels - 9:16)
const MarketingPortfolio = ({ onBack }) => {
    const reelsRef = useRef(null);

    const scroll = (direction) => {
        if (reelsRef.current) {
            const { current } = reelsRef;
            const scrollAmount = window.innerHeight - 80;
            if (direction === 'up') {
                current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.div
            className="marketing-portfolio-container"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
            <button className="back-btn floating-back" onClick={onBack}><ChevronLeft /> Back</button>

            {/* Vertical Navigation Arrows */}
            <div className="vertical-nav-controls">
                <button className="nav-arrow-btn nav-up" onClick={() => scroll('up')}>
                    <ChevronUp size={28} />
                </button>
                <div className="scroll-track-line"></div>
                <button className="nav-arrow-btn nav-down" onClick={() => scroll('down')}>
                    <ChevronDown size={28} />
                </button>
            </div>

            <div className="marketing-reels" ref={reelsRef}>
                {marketingProjects.map((project, index) => (
                    <div className="reel-section snap-section" key={project.id}>
                        <div className="reel-frame">
                            <div
                                className="reel-bg"
                                style={{
                                    backgroundImage: `url("${project.image}")`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>
                            <div className="reel-content">
                                <h2>{project.title}</h2>
                                <p>{project.desc}</p>
                                <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ textDecoration: 'none' }}>Visit</a>
                            </div>
                        </div>
                        <div className="reel-number">{(index + 1).toString().padStart(2, '0')}</div>
                        <div className="reel-side-title">{project.title}</div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const view = searchParams.get('tile') || 'main'; // using 'tile' as key per standard pattern

    const handleBack = () => {
        setSearchParams({});
    };

    return (
        <main className="portfolio-page-revamp">
            <AnimatePresence mode="wait">
                {view === 'main' && (
                    <motion.div
                        className="portfolio-hero"
                        key="main-hero"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Decorative Revolving Arch (Rainbow Style) */}
                        <div className="arch-carousel-wrapper">
                            <div className="arch-wheel">
                                {/* Thumbnails on the wheel */}
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        className="arch-item"
                                        key={i}
                                        style={{
                                            transform: `rotate(${i * 30}deg) translateY(-350px)` // Radius of 350px
                                        }}
                                    >
                                        <div className={`arch-img p${(i % 6) + 1}`}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="arch-gradient-mask"></div>
                        </div>

                        <div className="portfolio-selection container">
                            <div className="selection-header">
                                <span className="section-label">Our Portfolio</span>
                                <h1>Choose Your <span className="text-accent">Reality</span></h1>
                                <p>Select a domain to explore our work.</p>
                            </div>

                            <div className="selection-cards">
                                <motion.div
                                    className="select-card it-card-select"
                                    onClick={() => setSearchParams({ tile: 'it' })}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="card-bg-icon"><Code size={120} strokeWidth={0.5} /></div>
                                    <div className="select-content">
                                        <Monitor size={32} className="select-icon" />
                                        <h2>IT Solutions</h2>
                                        <p>Software, SaaS, & Cloud Architecture</p>
                                        <span className="enter-link">Enter Hub <ArrowUpRight size={14} /></span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="select-card mkt-card-select"
                                    onClick={() => setSearchParams({ tile: 'marketing' })}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="card-bg-icon"><Camera size={120} strokeWidth={0.5} /></div>
                                    <div className="select-content">
                                        <Zap size={32} className="select-icon" />
                                        <h2>Marketing & Multimedia</h2>
                                        <p>Branding, Strategy, & Content Creation</p>
                                        <span className="enter-link">Enter Studio <ArrowUpRight size={14} /></span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {view === 'it' && (
                    <ITPortfolio key="it-view" onBack={handleBack} />
                )}

                {view === 'marketing' && (
                    <MarketingPortfolio key="mkt-view" onBack={handleBack} />
                )}
            </AnimatePresence>
        </main>
    );
};

export default Portfolio;
