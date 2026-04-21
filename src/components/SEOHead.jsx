import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../seo/seoData';

/**
 * SEOHead — Dynamically injects SEO meta tags, Open Graph, Twitter Cards,
 * canonical URL, and JSON-LD structured data into the document <head>.
 * 
 * This component renders NO visible UI — it only manages <head> elements.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords (comma-separated)
 * @param {string} props.canonical - Canonical path (e.g., '/about')
 * @param {string} [props.ogType='website'] - Open Graph type
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {Array} [props.schemas] - Array of JSON-LD schema objects
 */
const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  schemas = [],
}) => {
  useEffect(() => {
    // --- Title ---
    document.title = title;

    // --- Helper to set/create meta tags ---
    const setMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // --- Standard Meta ---
    setMeta('name', 'description', description);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // --- Canonical URL ---
    const canonicalUrl = `${SITE_URL}${canonical}`;
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // --- Open Graph ---
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // --- Twitter Card ---
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:site', '@intelloft');

    // --- JSON-LD Structured Data ---
    // Remove any previously injected SEO schemas
    document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', `schema-${index}`);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup on unmount (route change)
    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schemas]);

  // This component renders nothing visible
  return null;
};

export default SEOHead;
