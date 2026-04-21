import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Server, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { pageSEO, createBreadcrumbSchema } from '../seo/seoData';
import '../styles/Services.css';

const Services = () => {
    const schemas = useMemo(() => [
        createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services' },
        ]),
    ], []);

    return (
        <main className="services-overview-page">
            <SEOHead {...pageSEO.services} schemas={schemas} />
            <section className="page-header container">
                <h1>Our <span className="text-accent">Services</span></h1>
                <p>Comprehensive solutions for the digital age. Choose your path to growth.</p>
            </section>

            <div className="services-split container">
                {/* Marketing Section */}
                <div className="service-category-card marketing">
                    <div className="cat-icon-wrapper">
                        <Megaphone size={48} />
                    </div>
                    <h2>Marketing & Multimedia</h2>
                    <p>Elevate your brand with data-driven strategies and stunning creatives.</p>
                    <ul className="cat-features">
                        <li>Digital Marketing</li>
                        <li>Social Media Management</li>
                        <li>SEO & SEM</li>
                        <li>Video Production</li>
                    </ul>
                    <Link to="/services/marketing" className="btn btn-primary">
                        Explore Marketing <ArrowRight size={16} />
                    </Link>
                </div>

                {/* IT Section */}
                <div className="service-category-card it">
                    <div className="cat-icon-wrapper">
                        <Server size={48} />
                    </div>
                    <h2>Information & Technology</h2>
                    <p>Build robust, scalable software and infrastructure for your enterprise.</p>
                    <ul className="cat-features">
                        <li>Web & App Development</li>
                        <li>ERP Solutions</li>
                        <li>Cybersecurity</li>
                        <li>AI Integration</li>
                    </ul>
                    <Link to="/services/it" className="btn btn-primary">
                        Explore IT Solutions <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Services;
