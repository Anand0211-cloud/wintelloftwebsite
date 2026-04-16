import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import mktSocialD from '../assets/Services/Marketing/Social Media.png';
import mktSocialM from '../assets/Services/Marketing/social media mobile.jpeg';
import mktAdsD from '../assets/Services/Marketing/Google and Meta Ads D.jpeg';
import mktAdsM from '../assets/Services/Marketing/Google and Meta Ads M.jpeg';
import mktCampaignD from '../assets/Services/Marketing/advertisement campaign d.jpeg';
import mktCampaignM from '../assets/Services/Marketing/advertisement campaign m.jpeg';
import mktEditingD from '../assets/Services/Marketing/Editing desktop.jpeg';
import mktEditingM from '../assets/Services/Marketing/Editing mobile.jpeg';

const marketingTabs = [
    {
        id: 'digital',
        label: 'Digital Marketing',
        title: 'Comprehensive Digital Marketing',
        description: 'Dominate the search results and social feeds. Our data-driven approach ensures your brand reaches the right audience at the right time.',
        features: ['SEO Audit & Optimization', 'PPC & SEM Management', 'Content Marketing Strategy', 'Email Marketing Automation'],
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'social',
        label: 'Social Media Marketing',
        title: 'Social Media Management',
        description: 'Building communities, not just followers. We create engaging content that sparks conversations and builds brand loyalty.',
        features: ['Platform Strategy (LinkedIn, IG, Twitter)', 'Community Management', 'Influencer Partnerships', 'Social Listening & Analytics'],
        imageD: mktSocialD,
        imageM: mktSocialM,
        image: mktSocialD
    },
    {
        id: 'ads',
        label: 'Google & Meta Ads',
        title: 'Performance Advertising',
        description: 'Maximize your ROAS with precision targeting. We design high-converting ad campaigns across Google, Facebook, Instagram, and LinkedIn.',
        features: ['A/B Testing Creatives', 'Retargeting Campaigns', 'Funnel Optimization', 'Detailed Performance Reporting'],
        imageD: mktAdsD,
        imageM: mktAdsM,
        image: mktAdsD
    },
    {
        id: 'campaigns',
        label: 'Advertisement Campaigns',
        title: 'Strategic Advertisement Campaigns',
        description: 'End-to-end campaign management that delivers measurable results. From concept to execution, we craft campaigns that resonate.',
        features: ['Multi-Channel Strategy', 'Creative Concept Development', 'Media Buying & Planning', 'Campaign Performance Tracking'],
        imageD: mktCampaignD,
        imageM: mktCampaignM,
        image: mktCampaignD
    },
    {
        id: 'infographics',
        label: 'Infographics',
        title: 'Compelling Visual Data',
        description: 'Transform complex information into engaging visual stories. Our infographics combine striking design with clear data visualization.',
        features: ['Data Visualization', 'Custom Illustration', 'Brand-Aligned Design', 'Interactive Formats'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'shoot',
        label: 'Photo & Video Shoot',
        title: 'Professional Production Shoots',
        description: 'High-quality visual content creation. We manage every aspect of the shoot from pre-production to the final wrap.',
        features: ['Location Scouting', 'Professional Lighting & Audio', 'Directing & Talent Management', 'Product & Lifestyle Photography'],
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'editing',
        label: 'Editing Services',
        title: 'Expert Post-Production Editing',
        description: 'Refining raw footage into polished masterpieces. Our editing services ensure your content is crisp, engaging, and professional.',
        features: ['Color Grading & Correction', 'Audio Mixing & Mastering', 'VFX & Motion Graphics', 'Format Optimization'],
        imageD: mktEditingD,
        imageM: mktEditingM,
        image: mktEditingD
    }
];

const ServiceMarketing = () => {
    return (
        <ServiceLayout
            title={<>Marketing & <span className="text-accent">Multimedia</span></>}
            subtitle="Data-driven strategies meets creative excellence to scale your brand."
            tabs={marketingTabs}
        />
    );
};

export default ServiceMarketing;
