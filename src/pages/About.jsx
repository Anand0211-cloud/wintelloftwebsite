import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Users } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <main className="about-page">
            <section className="page-header container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="text-accent">Intelloft</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    We are navigators of technology, combining deep technical expertise with creative innovation to steer your business toward exponential growth.
                </motion.p>
            </section>

            <section className="vision-mission container">
                <div className="vm-card">
                    <h2>Our Vision</h2>
                    <p>To be the global catalyst for digital transformation, empowering businesses to achieve their full potential through intelligent technology and compelling storytelling.</p>
                </div>
                <div className="vm-card">
                    <h2>Our Mission</h2>
                    <p>We deliver premium, scalable, and results-driven solutions that bridge the gap between complex technology and human-centric experiences.</p>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="core-values container">
                <div className="section-header-center">
                    <h2>Our Core <span className="text-accent">Values</span></h2>
                    <p className="subtitle-text">The principles that guide our innovation.</p>
                </div>
                <div className="values-grid">
                    <motion.div
                        className="value-card"
                        whileHover={{ y: -10 }}
                    >
                        <div className="value-icon"><Zap size={32} /></div>
                        <h3>Innovation</h3>
                        <p>We relentlessly pursue the new, the better, and the breakthrough.</p>
                    </motion.div>
                    <motion.div
                        className="value-card"
                        whileHover={{ y: -10 }}
                    >
                        <div className="value-icon"><Shield size={32} /></div>
                        <h3>Integrity</h3>
                        <p>Transparent communication and rock-solid security are our non-negotiables.</p>
                    </motion.div>
                    <motion.div
                        className="value-card"
                        whileHover={{ y: -10 }}
                    >
                        <div className="value-icon"><Users size={32} /></div>
                        <h3>Collaboration</h3>
                        <p>We build with you, not just for you. Your vision is our blueprint.</p>
                    </motion.div>
                </div>
            </section>

            {/* GLOBAL FOOTPRINT */}
            <section className="global-footprint">
                <div className="footprint-bg-anim"></div>
                <div className="container">
                    <div className="footprint-content">
                        <div className="footprint-text">
                            <h2>Global Digital <span className="text-accent">Footprint</span></h2>
                            <p>From local startups to international enterprises, Intelloft's solutions power growth across the globe.</p>
                            <div className="footprint-stats">
                                <div className="fp-stat">
                                    <span className="fp-number">5+</span>
                                    <span className="fp-label">Countries</span>
                                </div>
                                <div className="fp-stat">
                                    <span className="fp-number">50M+</span>
                                    <span className="fp-label">Users Impacted</span>
                                </div>
                                <div className="fp-stat">
                                    <span className="fp-number">99.9%</span>
                                    <span className="fp-label">Uptime</span>
                                </div>
                            </div>
                        </div>
                        <div className="footprint-visual">
                            <div className="world-map-abstract">
                                <div className="map-point p1"></div>
                                <div className="map-point p2"></div>
                                <div className="map-point p3"></div>
                                <div className="map-connection c1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="approach-section container">
                <h2 className="section-title">Our Approach</h2>
                <div className="approach-steps">
                    <div className="step">
                        <span className="step-number">01</span>
                        <h3>Discover</h3>
                        <p>We analyze your business, market, and competitors to build a solid foundation.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">02</span>
                        <h3>Strategize</h3>
                        <p>We design a roadmap tailored to your specific goals and budget.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">03</span>
                        <h3>Execute</h3>
                        <p>Our expert team implements the solution with precision and agility.</p>
                    </div>
                    <div className="step">
                        <span className="step-number">04</span>
                        <h3>Optimize</h3>
                        <p>We continuously monitor and refine performance to ensure long-term success.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
