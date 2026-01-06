import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMeta = ({ title, description, keywords, image, url }) => {
    const siteTitle = "JS Luxe Aarnam –  Jewellery & Fashion";
    const fullTitle = title ? `${title} | JS Luxe Aarnam` : siteTitle;
    const defaultDesc = "Premium  jewellery and fashion products from JS Luxe Aarnam. High-quality designs at  prices.";
    const defaultKeywords = "JS Luxe Aarnam,  jewellery, fashion , premium jewellery, bridal jewellery";
    const siteUrl = "https://jsluxeaarnam.com"; // Placeholder

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="JS Luxe Aarnam" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content={image || "/LogonameLS.jpeg"} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDesc} />
            <meta property="twitter:image" content={image || "/LogonameLS.jpeg"} />
        </Helmet>
    );
};

export default SEOMeta;
