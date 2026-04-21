import React, { useMemo } from 'react';
import { Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { pageSEO, createBreadcrumbSchema } from '../seo/seoData';
import '../styles/Privacy.css';

const Privacy = () => {
    const schemas = useMemo(() => [
        createBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy' },
        ]),
    ], []);

    return (
        <main className="privacy-page">
            <SEOHead {...pageSEO.privacy} schemas={schemas} />
            <section className="page-header container">
                <h1>Privacy <span className="text-accent">Policy</span></h1>
                <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
            </section>

            <section className="privacy-content container">
                <div className="privacy-card">
                    <div className="privacy-section">
                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following types of information when you interact with our website and services:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided through contact forms.</li>
                            <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our site collected through analytics tools.</li>
                            <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>Your information is used to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide requested services.</li>
                            <li>Improve our website, products, and user experience.</li>
                            <li>Send relevant updates about our services (only with your consent).</li>
                            <li>Comply with legal obligations and protect our rights.</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>3. Data Protection</h2>
                        <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include:</p>
                        <ul>
                            <li>SSL/TLS encryption for data transmission.</li>
                            <li>Secure server infrastructure with regular security audits.</li>
                            <li>Restricted access to personal data within our organization.</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>4. Third-Party Services</h2>
                        <p>We may use third-party services for analytics (such as Google Analytics), payment processing, and communication tools. These services have their own privacy policies, and we encourage you to review them.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Withdraw consent for data processing at any time.</li>
                            <li>Request a copy of the data we hold about you.</li>
                            <li>Lodge a complaint with a data protection authority.</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>6. Cookies Policy</h2>
                        <p>Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>8. Contact Us</h2>
                        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
                        <ul>
                            <li><strong>Email:</strong> <a href="mailto:info@intelloft.com" className="text-accent">info@intelloft.com</a></li>
                            <li><strong>Phone:</strong> <a href="tel:+447344239927" className="text-accent">+44 7344 239927</a></li>
                            <li><strong>Address:</strong> 63-B Sector 51-A, Chandigarh 160047</li>
                        </ul>
                    </div>

                    <div className="privacy-footer-note">
                        <Shield size={20} className="text-accent" />
                        <p>Last updated: April 2026 | Intelloft Consultancy</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Privacy;
