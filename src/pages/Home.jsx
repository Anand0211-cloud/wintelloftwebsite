import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Server, Zap, Shield, Users, Layers, ExternalLink, Mail, Phone, MapPin, Send } from 'lucide-react';
import TrustedBy from '../components/TrustedBy';
import SEOHead from '../components/SEOHead';
import { pageSEO, organizationSchema, websiteSchema, createBreadcrumbSchema, packagesFaqSchema } from '../seo/seoData';
import heroBg from '../assets/hero_bg.png';
import officeImg from '../assets/office_meeting.png';
import hairDaoImg from '../assets/hairdao_preview.png';
import level59Img from '../assets/level59_preview.png';
import '../styles/Home.css';

const StatItem = ({ number, label, suffix = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, number, {
                duration: 2.5,
                ease: "easeOut",
                delay: delay
            });
            return animation.stop;
        }
    }, [isInView, number, count, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay }}
            className="stat-card"
        >
            <div className="stat-number">
                <motion.span>{rounded}</motion.span>{suffix}
            </div>
            <span className="stat-label">{label}</span>
        </motion.div>
    );
};

const Home = () => {
    const schemas = useMemo(() => [
        organizationSchema,
        websiteSchema,
        createBreadcrumbSchema([{ name: 'Home' }]),
        packagesFaqSchema,
    ], []);

    return (
        <div className="home-page">
            <SEOHead {...pageSEO.home} schemas={schemas} />
            {/* Background with Generated Asset */}
            <div className="hero-background-img" style={{ backgroundImage: `url(${heroBg})` }}></div>

            {/* HERO SECTION */}
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>
                        Your Vision. <br />
                        <span className="text-accent">Engineered to Reality.</span>
                    </h1>
                    <p>
                        Intelloft delivers premium IT consultancy and creative marketing strategies for forward-thinking enterprises.
                    </p>
                    <div className="hero-actions">
                        <a href="mailto:contact@intelloft.com?subject=Start%20My%20Digital%20Transformation&body=Hi%20Intelloft%2C%0A%0AI'm%20interested%20in%20starting%20a%20digital%20transformation%20for%20my%20business.%20Please%20get%20in%20touch%20to%20discuss%20further.%0A%0AThank%20you." className="btn btn-primary" style={{ textDecoration: 'none' }}>Start Transformation <ArrowRight size={18} /></a>
                        <Link to="/portfolio" className="btn btn-outline" style={{ background: 'var(--glass-bg)', textDecoration: 'none' }}>View Work</Link>
                    </div>
                </motion.div>
            </section>

            {/* TRUSTED BY */}
            <TrustedBy />

            {/* CORE EXPERTISE */}
            <section className="service-blocks container">
                <div className="section-header-center">
                    <h2>Core <span className="text-accent">Expertise</span></h2>
                </div>

                <div className="services-grid-horizontal">
                    <div className="service-card">
                        <div className="icon-box"><BarChart size={32} /></div>
                        <h2>Marketing & Multimedia</h2>
                        <p>Brand-defining campaigns and visual storytelling.</p>
                        <ul className="service-list">
                            <li>Performance Marketing</li>
                            <li>Video Production</li>
                            <li>Brand Strategy</li>
                        </ul>
                        <div className="card-actions">
                            <Link to="/services/marketing" className="btn btn-outline btn-sm">View <ArrowRight size={14} /></Link>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="icon-box"><Server size={32} /></div>
                        <h2>Information & Technology</h2>
                        <p>Robust software engineering and cloud architecture.</p>
                        <ul className="service-list">
                            <li>Web & App Development</li>
                            <li>Cloud Infrastructure</li>
                            <li>AI & Automation</li>
                        </ul>
                        <div className="card-actions">
                            <Link to="/services/it" className="btn btn-outline btn-sm">View <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US (Bento Grid) */}
            <section className="why-us container">
                <div className="section-header-center">
                    <h2>Why <span className="text-accent">Intelloft?</span></h2>
                    <p className="subtitle-text">Engineered for the future.</p>
                </div>

                <div className="bento-grid">
                    {/* Main Feature - Tech */}
                    <div className="bento-card bento-large">
                        <div className="card-bg-glow"></div>
                        <div className="visual-circuit"></div> {/* New Visual */}
                        <div className="bento-content">
                            <div className="icon-box-glow"><Zap size={32} /></div>
                            <h3>Next-Gen Technology</h3>
                            <p>We don't just use tools; we forge them. Leveraging the bleeding edge of React, Node.js, and AI to build systems that feel alive.</p>
                        </div>
                    </div>

                    {/* Scale */}
                    <div className="bento-card bento-medium">
                        <div className="visual-data"></div> {/* New Visual */}
                        <div className="bento-content">
                            <div className="icon-box-glow"><BarChart size={28} /></div>
                            <h3>Data-Driven Core</h3>
                            <p>Every decision backed by real-time analytics and predictive modeling.</p>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="bento-medium card-security-outer">
                        <div className="bento-card">
                            <div className="visual-security-ring"></div> {/* New Visual */}
                            <div className="bento-content">
                                <div className="icon-box-glow"><Shield size={28} /></div>
                                <h3>Enterprise Security</h3>
                                <p>Fortress-level protection for your data and your users.</p>
                            </div>
                        </div>
                        <div className="card-watermark-outside">INTELLOFT</div>
                    </div>

                    {/* Global (Full Width) */}
                    <div className="bento-card bento-wide">
                        <div className="card-bg-mesh"></div>
                        <div className="bento-content-row">
                            <div className="bento-text">
                                <div className="icon-box-glow"><Users size={28} /></div>
                                <h3>Global Scalability</h3>
                                <p>Architected to serve millions, from day one. Seamless performance across borders.</p>
                            </div>
                            <div className="bento-visual-right">
                                {/* Abstract Globe or Mesh visual */}
                                <div className="tech-globe"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats-bar">
                <div className="container">
                    <div className="section-header-center">
                        <h2>Intelloft <span className="text-accent">Statistics</span></h2>
                    </div>
                    <div className="stats-grid">
                        <StatItem number={100} label="Clients Served" suffix="+" delay={0} />
                        <StatItem number={5} label="Regions Served" suffix="" delay={0.1} />
                        <StatItem number={200} label="Projects Completed" suffix="+" delay={0.2} />
                        <StatItem number={30} label="Types of Services" suffix="+" delay={0.3} />
                    </div>
                </div>
            </section>

            {/* LATEST WORK */}
            <section className="latest-work container">
                <div className="work-header">
                    <div className="section-header-left">
                        <h2>Our Latest <span className="text-accent">Work</span></h2>
                        <p>A glimpse into what we create.</p>
                    </div>
                    <Link to="/portfolio" className="btn btn-outline">View Full Portfolio <ArrowRight size={16} /></Link>
                </div>

                <div className="work-grid">
                    {/* HairDao Work */}
                    <div className="work-card">
                        <div className="work-image-window">
                            <img src={hairDaoImg} alt="HairDao" className="work-image" />
                            <div className="work-overlay">
                                <a href="https://www.hairdao.xyz/" target="_blank" rel="noopener noreferrer" className="work-action-btn" style={{ textDecoration: 'none' }}>Visit <ArrowRight size={16} /></a>
                            </div>
                        </div>
                        <div className="work-info">
                            <div className="work-tags">
                                <span className="work-tag">Blockchain</span>
                                <span className="work-tag">Web3</span>
                                <span className="work-tag">DAO</span>
                            </div>
                            <h3>HairDao Research</h3>
                            <p>A decentralized autonomous organization advancing hair loss solutions through community-driven data and funding.</p>
                        </div>
                    </div>

                    {/* Level 59 Work */}
                    <div className="work-card">
                        <div className="work-image-window">
                            <img src={level59Img} alt="Level 59" className="work-image" />
                            <div className="work-overlay">
                                <a href="https://level59.de/" target="_blank" rel="noopener noreferrer" className="work-action-btn" style={{ textDecoration: 'none' }}>Visit <ArrowRight size={16} /></a>
                            </div>
                        </div>
                        <div className="work-info">
                            <div className="work-tags">
                                <span className="work-tag">Web Development</span>
                                <span className="work-tag">AI Solutions</span>
                                <span className="work-tag">Consulting</span>
                            </div>
                            <h3>Level59 — Intelligent Web & AI-Driven Solutions</h3>
                            <p>Level 59 is a digital presence for a Germany-based web development and consulting service, offering tailored solutions like landing pages, e-commerce sites, and an intelligent AI chatbot for seamless communication.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PREMIUM CONTACT SECTION */}
            <section className="home-contact-section">
                <div className="container">
                    <div className="home-contact-grid">
                        <div className="home-contact-info">
                            <h2>Let's build the <br /><span className="text-accent">future</span> together.</h2>
                            <p>Ready to transform your digital presence? We are ready to help.</p>

                            <div className="contact-methods">
                                <div className="method-item">
                                    <div className="icon-circle"><Mail size={20} /></div>
                                    <span>
                                        <a href="mailto:info@intelloft.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@intelloft.com</a><br />
                                        <a href="mailto:support@intelloft.com" style={{ color: 'inherit', textDecoration: 'none' }}>support@intelloft.com</a>
                                    </span>
                                </div>
                                <div className="method-item">
                                    <div className="icon-circle"><Phone size={20} /></div>
                                    <span>
                                        <a href="tel:+447344239927" style={{ color: 'inherit', textDecoration: 'none' }}>+44 7344 239927</a><br />
                                        <a href="tel:+918699911812" style={{ color: 'inherit', textDecoration: 'none' }}>+91 86999 11812</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="home-contact-form-wrapper">
                            <form className="home-contact-form" onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const name = formData.get('name');
                                const email = formData.get('email');
                                const service = formData.get('service');
                                const message = formData.get('message');

                                const subject = encodeURIComponent(`New Inquiry from ${name} - ${service}`);
                                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);

                                window.location.href = `mailto:info@intelloft.com?subject=${subject}&body=${body}`;
                            }}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Service</label>
                                    <select name="service" required>
                                        <option value="">Select a service</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Consulting">Consulting</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary full-width">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESTORED CTA with GRAPHICAL ANIMATION */}
            <section className="cta-section">
                <div className="cta-background-anim">
                    <div className="cta-grid-lines"></div>
                    <div className="cta-glow-orb"></div>
                </div>
                <div className="container cta-content">
                    <h2 className="cta-title">Ready to <span className="text-accent">scale?</span></h2>
                    <p className="cta-subtitle">Join the ranks of digital pioneers.</p>
                    <div className="cta-buttons">
                        <a href="mailto:contact@intelloft.com?subject=Free%20Quote%20Request&body=Hi%20Intelloft%2C%0A%0AI'd%20like%20to%20request%20a%20free%20quote%20for%20my%20project.%20Please%20reach%20out%20to%20discuss%20my%20requirements.%0A%0AThank%20you." className="btn btn-primary" style={{ textDecoration: 'none' }}>Get a Free Quote</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
