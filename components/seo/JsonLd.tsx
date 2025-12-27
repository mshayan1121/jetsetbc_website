import React from 'react';

const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Jetset Business Center",
        "image": "https://jetsetbusinesscenter.com/images/hero-bg.png",
        "@id": "https://jetsetbusinesscenter.com",
        "url": "https://jetsetbusinesscenter.com",
        "telephone": "+97145555555",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Burj Khalifa Blvd, Business Bay",
            "addressLocality": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.1972,
            "longitude": 55.2744
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/jetsetbc",
            "https://www.instagram.com/jetsetbc_dxb/?igsh=dTE0Z2djM3F0MHIy#"
        ],
        "priceRange": "$$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
