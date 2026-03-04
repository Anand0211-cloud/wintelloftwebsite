import React from 'react';
import '../styles/TrustedBy.css';

const LOGOS = [
    'Slice n Spice Pizza (USA)',
    'Van Valkenburg GmbH',
    'leve59 (Germany)',
    'M1 Transport (Australia)',
    'Frontier Immigration (Canada)',
    'Autocaravana (Maldova)',
    'ESG Solutions (India)',
    'TrustedStak (Canada)',
    'JKhan Firm (India)',
    'Energieeffizienz Agentur (Germany)',
    'FYR Sport (India)',
    'Old Walls (India)',
    'Solarwerk Schwaben (Germany)',
    'Mass Nutrition (USA)'
];

const TrustedBy = () => {
    return (
        <div className="trusted-by-section">
            <p className="trusted-label">Trusted by industry leaders</p>
            <div className="marquee-container">
                <div className="marquee-track">
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
                        <div key={idx} className="brand-logo">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
