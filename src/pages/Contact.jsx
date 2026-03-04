import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service || 'General'}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);

        window.location.href = `mailto:info@intelloft.com?subject=${subject}&body=${body}`;

        // Reset form or show success feedback optionally
        alert('Opening your email client to send the message...');
    };

    return (
        <main className="contact-page">
            <section className="contact-hero container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h1>Let’s build the <span className="text-accent">future</span> together.</h1>
                        <p>Start your digital transformation today. Reach out for IT consultancy, marketing strategies, or multimedia solutions.</p>

                        <div className="info-cards">
                            <div className="info-card">
                                <Mail className="icon" />
                                <div>
                                    <h3>Emails</h3>
                                    <p>
                                        <a href="mailto:info@intelloft.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@intelloft.com</a><br />
                                        <a href="mailto:support@intelloft.com" style={{ color: 'inherit', textDecoration: 'none' }}>support@intelloft.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="info-card">
                                <Phone className="icon" />
                                <div>
                                    <h3>Call Us</h3>
                                    <p>
                                        <a href="tel:+447344239927" style={{ color: 'inherit', textDecoration: 'none' }}>+44 7344 239927</a><br />
                                        <a href="tel:+918699911812" style={{ color: 'inherit', textDecoration: 'none' }}>+91 86999 11812</a>
                                    </p>
                                </div>
                            </div>
                            <div className="info-card">
                                <MapPin className="icon" />
                                <div>
                                    <h3>Visit Us</h3>
                                    <p>63-B Sector 51-A, Chandigarh 160047</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Send a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Business Email</label>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group full">
                                <label>Service Required</label>
                                <select
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select a service</option>
                                    <option value="marketing">Marketing & Multimedia</option>
                                    <option value="it">IT Solutions</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group full">
                                <label>Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary full">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="map-section">
                {/* Placeholder Map */}
                <div className="map-placeholder">
                    <MapPin size={48} className="text-accent" />
                    <p>Map Location Placeholder</p>
                </div>
            </section>
        </main>
    );
};

export default Contact;
