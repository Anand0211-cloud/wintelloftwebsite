import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import '../styles/ServiceLayout.css';

const ServiceLayout = ({ title, subtitle, tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const contentRef = useRef(null);

    const activeContent = tabs.find(t => t.id === activeTab);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        // On mobile, scroll to content area so user sees the change
        if (window.innerWidth <= 768 && contentRef.current) {
            // Add a slight delay to allow the animation to start/content to update
            setTimeout(() => {
                contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    return (
        <div className="service-layout-page">
            <section className="service-header-mini container">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </section>

            <section className="service-content-wrapper container">
                {/* Left Sidebar tabs */}
                <div className="service-sidebar">
                    <h3 className="sidebar-title">Services</h3>
                    <div className="vertical-tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`v-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span className="tab-label">{tab.label}</span>
                                {activeTab === tab.id && <ArrowRight size={16} className="tab-arrow" />}
                            </button>
                        ))}
                    </div>

                    <div className="sidebar-cta glass-card pc-only">
                        <h4>Need a custom solution?</h4>
                        <p>We tailor our strategies to your specific business goals.</p>
                        <button className="btn btn-primary full-width">Contact Us</button>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="service-main-content glass-card" ref={contentRef}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="tab-content"
                        >
                            <div className="content-header">
                                <h2>{activeContent.title}</h2>
                                <div className="title-underline"></div>
                            </div>

                            <div className="content-hero-image" style={{ backgroundImage: `url(${activeContent.image || 'https://via.placeholder.com/800x400'})` }}></div>

                            <div className="content-body">
                                <p className="lead-text">{activeContent.description}</p>

                                <h3 className="section-heading">Key Features</h3>
                                <div className="features-grid-small">
                                    {activeContent.features.map((feature, idx) => (
                                        <div key={idx} className="feature-item-small">
                                            <div className="check-icon"><Check size={14} /></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {activeContent.content && (
                                    <div className="extended-content">
                                        {activeContent.content}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile CTA (shown at bottom) */}
                <div className="sidebar-cta glass-card mobile-only">
                    <h4>Need a custom solution?</h4>
                    <p>We tailor our strategies to your specific business goals.</p>
                    <button className="btn btn-primary full-width">Contact Us</button>
                </div>
            </section>
        </div>
    );
};

export default ServiceLayout;
