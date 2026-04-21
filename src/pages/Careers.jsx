import React, { useMemo } from 'react';
import { Instagram, Linkedin, ArrowRight, Sparkles, Users, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { pageSEO, createBreadcrumbSchema } from '../seo/seoData';
import '../styles/Careers.css';

const Careers = () => {
    const schemas = useMemo(() => [
        createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Careers' },
        ]),
    ], []);

    return (
        <main className="careers-page">
            <SEOHead {...pageSEO.careers} schemas={schemas} />
            <section className="page-header container">
                <h1>Join the <span className="text-accent">Intelloft</span> Team</h1>
                <p>We're building the future of digital consultancy — and we want you to be part of it.</p>
            </section>

            <section className="careers-content container">
                <div className="hiring-notice">
                    <div className="notice-glow"></div>
                    <div className="notice-icon">
                        <Sparkles size={40} />
                    </div>
                    <h2>We're Growing!</h2>
                    <p>
                        Intelloft is expanding and we'll be hiring talented individuals across IT, Marketing, and Design roles very soon. 
                        Follow us on social media to be the first to know when new positions open up.
                    </p>

                    <div className="social-cta-cards">
                        <a
                            href="https://www.instagram.com/intelloft_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-cta-card instagram-card"
                        >
                            <Instagram size={32} />
                            <div>
                                <h3>Instagram</h3>
                                <p>@intelloft_</p>
                            </div>
                            <ArrowRight size={20} className="arrow-icon" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/intelloft/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-cta-card linkedin-card"
                        >
                            <Linkedin size={32} />
                            <div>
                                <h3>LinkedIn</h3>
                                <p>Intelloft</p>
                            </div>
                            <ArrowRight size={20} className="arrow-icon" />
                        </a>
                    </div>
                </div>

                <div className="why-work-section">
                    <h2>Why Work With Us?</h2>
                    <div className="perks-grid">
                        <div className="perk-card">
                            <div className="perk-icon"><Sparkles size={24} /></div>
                            <h3>Innovation First</h3>
                            <p>Work on cutting-edge projects with modern technologies and creative strategies.</p>
                        </div>
                        <div className="perk-card">
                            <div className="perk-icon"><Users size={24} /></div>
                            <h3>Global Team</h3>
                            <p>Collaborate with talented professionals across multiple countries and time zones.</p>
                        </div>
                        <div className="perk-card">
                            <div className="perk-icon"><Heart size={24} /></div>
                            <h3>Growth Culture</h3>
                            <p>We invest in your development with mentorship, learning resources, and career advancement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
