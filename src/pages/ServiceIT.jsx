import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const itTabs = [
    {
        id: 'web',
        label: 'Website & Web Apps',
        title: 'Web & Mobile Application Development',
        description: 'We build scalable, high-performance web and mobile applications using modern technologies like React, Node.js, and Flutter.',
        features: ['Custom Web Applications', 'Progressive Web Apps (PWA)', 'iOS & Android Hybrid Apps', 'API Development & Integration'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'software',
        label: 'Software & ERP',
        title: 'Enterprise Software Solutions',
        description: 'Streamline your business operations with custom ERPs, CRMs, and automation tools designed for your specific workflows.',
        features: ['Custom ERP Development', 'CRM Integration', 'Inventory Management Systems', 'Workflow Automation'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'ecommerce',
        label: 'E-Commerce',
        title: 'E-Commerce Engineering',
        description: 'Create robust online stores that drive sales. We specialize in Shopify, WooCommerce, and headless commerce architectures.',
        features: ['Platform Migration', 'Custom Checkout Flows', 'Payment Gateway Integration', 'High-Performance Storefronts'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'ai-integration',
        label: 'AI Integration',
        title: 'Artificial Intelligence Ecosystems',
        description: 'Seamlessly integrate cutting-edge AI technologies into your existing business systems to unlock new capabilities.',
        features: ['LLM Integration (GPT, Claude)', 'Custom Model Fine-tuning', 'Data Processing Pipelines', 'Predictive Analytics'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'ai-chatbots',
        label: 'AI Chatbots',
        title: 'Intelligent Conversational Agents',
        description: 'Automate customer support, lead generation, and internal processes using advanced custom-trained AI chatbots.',
        features: ['24/7 Automated Support', 'Natural Language Processing', 'Knowledge Base Training', 'Omnichannel Deployment'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 'automation',
        label: 'Automation Solutions',
        title: 'Business Process Automation',
        description: 'Eliminate manual work and scale fast by automating complex multi-step workflows across your software stack.',
        features: ['Workflow Optimization', 'Zapier/Make Integrations', 'RPA (Robotic Process Automation)', 'Custom API Syncs'],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'
    }
];

const ServiceIT = () => {
    return (
        <ServiceLayout
            title={<>Information & <span className="text-accent">Technology</span></>}
            subtitle="Engineering the future of your business with scalable, secure solutions."
            tabs={itTabs}
        />
    );
};

export default ServiceIT;
