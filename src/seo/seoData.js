/**
 * Centralized SEO Configuration for Intelloft Website
 * Contains per-page meta tags, structured data schemas, and keyword targeting.
 * 
 * IMPORTANT: Update SITE_URL when deploying to production domain.
 */

export const SITE_URL = 'https://intelloft.com';
export const SITE_NAME = 'Intelloft';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.jpg`;

// ============================================================
// ORGANIZATION SCHEMA (Global — appears on every page)
// ============================================================
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Intelloft',
  alternateName: 'Intelloft Consultancy',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon.jpg`,
    width: 512,
    height: 512,
  },
  description:
    'Intelloft is a premium IT consultancy and digital marketing agency delivering web development, ecommerce solutions, AI integration, and creative marketing strategies for businesses worldwide.',
  foundingDate: '2022',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44-7344-239927',
      contactType: 'sales',
      areaServed: ['GB', 'IN', 'DE', 'US', 'AU', 'CA'],
      availableLanguage: ['English', 'Hindi', 'German'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-86999-11812',
      contactType: 'customer support',
      areaServed: ['IN', 'GB'],
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  email: 'info@intelloft.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '63-B Sector 51-A',
    addressLocality: 'Chandigarh',
    postalCode: '160047',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/intelloft/',
    'https://x.com/intelloft',
    'https://www.instagram.com/intelloft_/',
  ],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  knowsAbout: [
    'Web Development',
    'Digital Marketing',
    'E-Commerce Development',
    'Search Engine Optimization',
    'Social Media Marketing',
    'AI Chatbot Development',
    'Cloud Infrastructure',
    'Enterprise Software',
    'Performance Marketing',
    'UI/UX Design',
  ],
};

// ============================================================
// WEBSITE SCHEMA (Global — homepage)
// ============================================================
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Intelloft',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ============================================================
// LOCAL BUSINESS SCHEMA (Contact page)
// ============================================================
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Intelloft Consultancy',
  image: `${SITE_URL}/favicon.jpg`,
  url: SITE_URL,
  telephone: '+44-7344-239927',
  email: 'info@intelloft.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '63-B Sector 51-A',
    addressLocality: 'Chandigarh',
    addressRegion: 'Punjab',
    postalCode: '160047',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.7053,
    longitude: 76.7321,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT & Marketing Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Web Development',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Progressive Web App Development' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google & Meta Ads Management' } },
        ],
      },
    ],
  },
};

// ============================================================
// BREADCRUMB HELPER
// ============================================================
export function createBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

// ============================================================
// SERVICE SCHEMAS
// ============================================================
export const marketingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services/marketing#service`,
  name: 'Digital Marketing & Multimedia Services',
  provider: { '@id': `${SITE_URL}/#organization` },
  description:
    'Comprehensive digital marketing services including SEO, social media marketing, Google & Meta Ads, content marketing, video production, and brand strategy to scale your business online.',
  url: `${SITE_URL}/services/marketing`,
  serviceType: 'Digital Marketing',
  areaServed: ['Worldwide'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Audit & Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC & SEM Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google & Meta Ads Campaigns' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing Strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Production & Editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infographic Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy & Identity' } },
    ],
  },
};

export const itServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services/it#service`,
  name: 'IT Solutions & Web Development Services',
  provider: { '@id': `${SITE_URL}/#organization` },
  description:
    'Enterprise-grade IT solutions including custom web development, e-commerce engineering, ERP/CRM systems, AI chatbot development, business process automation, and cloud infrastructure.',
  url: `${SITE_URL}/services/it`,
  serviceType: 'Information Technology',
  areaServed: ['Worldwide'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Software & ERP Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration & Chatbot Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Process Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Development & Integration' } },
    ],
  },
};

// ============================================================
// FAQ SCHEMA (for Packages/Services)
// ============================================================
export const packagesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does website development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intelloft offers business website packages starting at $499 (one-time), e-commerce websites from $720, and custom enterprise solutions with tailored pricing. Monthly digital growth plans start from $299/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'What digital marketing services does Intelloft provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intelloft provides comprehensive digital marketing services including SEO optimization, social media marketing and management, Google & Meta Ads campaigns, content marketing, video production, and performance advertising with packages starting from $250/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Intelloft build e-commerce websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Intelloft specializes in e-commerce website development using Shopify, WooCommerce, and headless commerce architectures. Our e-commerce package includes up to 100 products, payment gateway integration, speed optimization, and responsive design starting at $720.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Intelloft use for web development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intelloft builds web applications using modern technologies including React, Next.js, Node.js, Flutter for mobile apps, and integrates AI solutions using GPT, Claude, and custom-trained models. We also work with Shopify, WooCommerce, and custom CMS platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Intelloft serve clients internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Intelloft serves clients across 5+ countries including India, United Kingdom, Germany, United States, Australia, and Canada. We have completed 200+ projects for 100+ clients globally.',
      },
    },
  ],
};

// ============================================================
// PER-PAGE SEO META CONFIGURATION
// ============================================================
export const pageSEO = {
  home: {
    title: 'Intelloft — Premium Web Development & Digital Marketing Agency',
    description:
      'Intelloft delivers premium web development, e-commerce solutions, digital marketing, SEO, and AI-powered IT consultancy for businesses worldwide. 200+ projects delivered across 5+ countries.',
    keywords:
      'web development company, digital marketing agency, ecommerce website development, IT consultancy, custom web application, SEO services, social media marketing, AI chatbot development, website development services, best web development company',
    canonical: '/',
    ogType: 'website',
  },
  about: {
    title: 'About Intelloft | Leading IT & Digital Marketing Consultancy',
    description:
      'Learn about Intelloft — a global digital transformation agency combining deep technical expertise with creative innovation. Serving 100+ clients across 5+ countries with 99.9% uptime.',
    keywords:
      'about intelloft, IT consultancy company, digital transformation agency, web development agency, technology company, marketing agency about us',
    canonical: '/about',
    ogType: 'website',
  },
  services: {
    title: 'Our Services | Web Development, Marketing & IT Solutions | Intelloft',
    description:
      'Explore Intelloft\'s comprehensive services: custom web development, e-commerce engineering, digital marketing, SEO, social media management, AI integration, and enterprise software solutions.',
    keywords:
      'web development services, digital marketing services, IT solutions, ecommerce development, SEO services, social media marketing, custom software development, AI integration services',
    canonical: '/services',
    ogType: 'website',
  },
  serviceMarketing: {
    title: 'Digital Marketing Services | SEO, Social Media, PPC Ads | Intelloft',
    description:
      'Boost your brand with Intelloft\'s data-driven digital marketing: SEO optimization, social media marketing, Google & Meta Ads, content marketing, video production, and performance advertising.',
    keywords:
      'digital marketing services, SEO services, social media marketing agency, Google Ads management, Meta Ads agency, PPC management, content marketing, video production, performance marketing, brand strategy',
    canonical: '/services/marketing',
    ogType: 'website',
  },
  serviceIT: {
    title: 'IT Solutions | Web Development, E-Commerce, AI Integration | Intelloft',
    description:
      'Build scalable digital products with Intelloft: custom web & mobile app development, e-commerce websites, ERP solutions, AI chatbot development, and business process automation.',
    keywords:
      'web development company, custom web application development, ecommerce website development, mobile app development, AI chatbot development, ERP solutions, business automation, API development, Shopify development, WooCommerce development',
    canonical: '/services/it',
    ogType: 'website',
  },
  portfolio: {
    title: 'Portfolio | Web Development & Marketing Case Studies | Intelloft',
    description:
      'Browse 200+ successful projects by Intelloft: web development, e-commerce stores, marketing campaigns, and brand solutions for clients in USA, UK, Germany, India, Australia, and Canada.',
    keywords:
      'web development portfolio, marketing case studies, ecommerce website examples, IT project portfolio, website design portfolio, digital marketing results',
    canonical: '/portfolio',
    ogType: 'website',
  },
  packages: {
    title: 'Pricing Packages | Affordable Web Development & Marketing Plans | Intelloft',
    description:
      'Transparent pricing for web development, digital marketing, and IT solutions. Business websites from $499, e-commerce from $720, marketing packages from $250/month. Get your free quote today.',
    keywords:
      'web development pricing, website development cost, digital marketing packages, affordable web development, ecommerce website price, marketing agency pricing, IT solutions cost',
    canonical: '/packages',
    ogType: 'website',
  },
  contact: {
    title: 'Contact Intelloft | Get a Free Quote for Web Development & Marketing',
    description:
      'Get in touch with Intelloft for a free project consultation. Contact us for web development, digital marketing, e-commerce solutions, and IT consultancy. Available globally with offices in Chandigarh, India.',
    keywords:
      'contact web development company, free website quote, digital marketing consultation, IT consultancy contact, hire web developer, hire marketing agency',
    canonical: '/contact',
    ogType: 'website',
  },
  careers: {
    title: 'Careers at Intelloft | Join Our IT & Marketing Team',
    description:
      'Join Intelloft\'s growing team of developers, marketers, and designers. Explore career opportunities in web development, digital marketing, AI engineering, and more.',
    keywords:
      'careers at intelloft, web development jobs, digital marketing jobs, IT company careers, software developer jobs, marketing agency careers',
    canonical: '/careers',
    ogType: 'website',
  },
  privacy: {
    title: 'Privacy Policy | Intelloft Consultancy',
    description:
      'Read Intelloft\'s privacy policy to understand how we collect, use, and protect your personal information when you use our web development and digital marketing services.',
    keywords: 'privacy policy, data protection, intelloft privacy',
    canonical: '/privacy',
    ogType: 'website',
  },
};
