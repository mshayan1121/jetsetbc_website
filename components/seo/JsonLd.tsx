import React from "react";

type JsonLdSchema = Record<string, unknown>;

type JsonLdProps = {
  includeLocalBusiness?: boolean;
  schemas?: JsonLdSchema | JsonLdSchema[];
};

const BASE_URL = "https://jetsetbc.com";

const LOCAL_BUSINESS_SCHEMA: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jetset Business Center",
  image: `${BASE_URL}/images/hero-bg.png`,
  "@id": `${BASE_URL}#localbusiness`,
  url: BASE_URL,
  telephone: "+971585779312",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prime Tower, Level 20, Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1861,
    longitude: 55.2696,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/jetsetbc",
    "https://www.instagram.com/jetsetbc_dxb/?igsh=dTE0Z2djM3F0MHIy#",
  ],
  priceRange: "$$$",
};

const JsonLd = ({ includeLocalBusiness = true, schemas }: JsonLdProps) => {
  const extraSchemas = schemas ? (Array.isArray(schemas) ? schemas : [schemas]) : [];
  const payload = includeLocalBusiness ? [LOCAL_BUSINESS_SCHEMA, ...extraSchemas] : extraSchemas;

  if (payload.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
};

export default JsonLd;
