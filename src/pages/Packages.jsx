import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import '../styles/Packages.css';

const Packages = () => {
    const [activeTab, setActiveTab] = useState('marketing');

    return (
        <main className="packages-page">
            <section className="page-header container">
                <h1>Tailored Solutions for <span className="text-accent">Digital Excellence</span></h1>
                <p>Transparent pricing designed to scale with your business. Choose the perfect package for your marketing or IT infrastructure needs.</p>

                <div className="pricing-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`}
                        onClick={() => setActiveTab('marketing')}
                    >
                        Marketing Packages
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'it' ? 'active' : ''}`}
                        onClick={() => setActiveTab('it')}
                    >
                        IT Solutions
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'digital-growth' ? 'active' : ''}`}
                        onClick={() => setActiveTab('digital-growth')}
                    >
                        Digital Growth Suites
                    </button>
                </div>
            </section>

            <section className="pricing-grid container">
                {activeTab === 'marketing' && (
                    <>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>STARTER</h3>
                                <div className="price">$250<span>/ month</span></div>
                                <p>Best for startups & local businesses starting their digital presence.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Social media management (2 platforms)</li>
                                <li><CheckCircle size={16} /> Basic SEO (on-page + keywords)</li>
                                <li><CheckCircle size={16} /> 15 branded posts/month</li>
                                <li><CheckCircle size={16} /> Monthly performance report</li>
                                <li><CheckCircle size={16} /> Email & WhatsApp support</li>
                            </ul>
                            <button className="btn btn-primary full-width">Get Started</button>
                        </div>
                        <div className="pricing-card popular">
                            <div className="badge">Most Popular</div>
                            <div className="card-header">
                                <h3>GROWTH</h3>
                                <div className="price">$399<span>/ month</span></div>
                                <p>For brands ready to scale visibility and leads.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Everything in Starter, plus:</li>
                                <li><CheckCircle size={16} /> Advanced content strategy</li>
                                <li><CheckCircle size={16} /> Paid ads (Google / Meta – management only)</li>
                                <li><CheckCircle size={16} /> Conversion-focused creatives</li>
                                <li><CheckCircle size={16} /> Advanced analytics dashboard</li>
                                <li><CheckCircle size={16} /> Priority support</li>
                            </ul>
                            <button className="btn btn-primary full-width">Select Growth</button>
                        </div>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>SCALE</h3>
                                <div className="price">$599<span>/ month</span></div>
                                <p>For brands aiming for market leadership.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Everything in Growth, plus:</li>
                                <li><CheckCircle size={16} /> Full-service brand marketing</li>
                                <li><CheckCircle size={16} /> High-quality video & reel strategy</li>
                                <li><CheckCircle size={16} /> Funnel & retargeting setup</li>
                                <li><CheckCircle size={16} /> Dedicated marketing manager</li>
                                <li><CheckCircle size={16} /> 24/7 priority access</li>
                            </ul>
                            <button className="btn btn-outline full-width">Contact Sales</button>
                        </div>
                    </>
                )}

                {activeTab === 'it' && (
                    <>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>BUSINESS WEBSITE</h3>
                                <div className="price">$499<span>/ one time</span></div>
                                <p>Perfect for professionals & small businesses needing a strong online presence.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Premium static website design</li>
                                <li><CheckCircle size={16} /> Fully responsive (mobile, tablet, desktop)</li>
                                <li><CheckCircle size={16} /> Helpdesk support</li>
                                <li><CheckCircle size={16} /> Daily cloud backup</li>
                                <li><CheckCircle size={16} /> SEO-friendly structure</li>
                                <li><CheckCircle size={16} /> Maintenance & support available as an add-on</li>
                            </ul>
                            <button className="btn btn-primary full-width">Select Business</button>
                        </div>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>E-COMMERCE WEBSITE</h3>
                                <div className="price">$720<span>/ one time</span></div>
                                <p className="text-sm opacity-80" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>(Up to 100 products · 50 variations)</p>
                                <p>Built for selling with performance and scalability.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Fully responsive eCommerce website</li>
                                <li><CheckCircle size={16} /> Shopify / WooCommerce development</li>
                                <li><CheckCircle size={16} /> Payment gateway integration</li>
                                <li><CheckCircle size={16} /> Product & variation setup</li>
                                <li><CheckCircle size={16} /> Speed & performance optimization</li>
                                <li><CheckCircle size={16} /> Basic security & backup setup</li>
                                <li><CheckCircle size={16} /> Maintenance & support available as an add-on</li>
                            </ul>
                            <button className="btn btn-primary full-width">Select E-commerce</button>
                        </div>
                        <div className="pricing-card highlight">
                            <div className="card-header">
                                <h3>ENTERPRISE SOLUTIONS</h3>
                                <div className="price">Custom</div>
                                <p>Engineered for complex and large-scale requirements.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Custom web & software development</li>
                                <li><CheckCircle size={16} /> Advanced API integrations</li>
                                <li><CheckCircle size={16} /> Legacy system migration</li>
                                <li><CheckCircle size={16} /> Dedicated development team</li>
                            </ul>
                            <button className="btn btn-primary full-width">Get a Quote</button>
                        </div>
                    </>
                )}

                {activeTab === 'digital-growth' && (
                    <>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>LAUNCHPAD</h3>
                                <div className="price">$299<span>/ month</span></div>
                                <p>For new businesses launching online.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Business website (up to 5 pages)</li>
                                <li><CheckCircle size={16} /> SEO-ready structure</li>
                                <li><CheckCircle size={16} /> Basic branding & UI</li>
                                <li><CheckCircle size={16} /> Social media setup + 15 posts/month</li>
                                <li><CheckCircle size={16} /> Website maintenance & security</li>
                            </ul>
                            <button className="btn btn-primary full-width">Get Started</button>
                        </div>
                        <div className="pricing-card popular">
                            <div className="badge">Most Popular</div>
                            <div className="card-header">
                                <h3>ACCELERATOR</h3>
                                <div className="price">$599<span>/ month</span></div>
                                <p>For businesses focused on growth & conversions.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Conversion-optimized website</li>
                                <li><CheckCircle size={16} /> Speed & SEO optimization</li>
                                <li><CheckCircle size={16} /> Content + social media marketing</li>
                                <li><CheckCircle size={16} /> Lead capture & analytics setup</li>
                                <li><CheckCircle size={16} /> Paid ads setup (management included)</li>
                            </ul>
                            <button className="btn btn-primary full-width">Select Accelerator</button>
                        </div>
                        <div className="pricing-card">
                            <div className="card-header">
                                <h3>DOMINATOR</h3>
                                <div className="price">Custom</div>
                                <p>For brands that want authority, scale & dominance.</p>
                            </div>
                            <ul className="features-list">
                                <li><CheckCircle size={16} /> Premium custom website / web app</li>
                                <li><CheckCircle size={16} /> Full branding & UI/UX</li>
                                <li><CheckCircle size={16} /> Performance marketing funnels</li>
                                <li><CheckCircle size={16} /> Advanced SEO + retargeting</li>
                                <li><CheckCircle size={16} /> Dedicated marketing & tech manager</li>
                            </ul>
                            <button className="btn btn-primary full-width">Get a Quote</button>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
};

export default Packages;
