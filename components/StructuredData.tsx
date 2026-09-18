import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Torkk",
    "legalName": "BlackOriginX Private Limited",
    "url": "https://torkk.in",
    "logo": "https://torkk.in/images/Frame 6.png",
    "foundingDate": "2024",
    "description": "Torkk is a technology-driven mobility platform by BlackOriginX Private Limited, building safer, simpler, and more accessible urban transportation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://x.com/torkkofficial",
      "https://instagram.com/torkkapp",
      "https://linkedin.com/company/torkkride"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@torkk.in",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Torkk",
    "url": "https://torkk.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://torkk.in/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
