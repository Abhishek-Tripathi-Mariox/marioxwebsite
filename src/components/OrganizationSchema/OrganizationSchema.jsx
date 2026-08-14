import Script from 'next/script'
export default function OrganizationSchema({
                                               name,
                                               url,
                                               logo,
                                               telephone,
                                               contactType,
                                               areaServed,
                                               availableLanguage,
                                               socialLinks,
                                               streetAddress,
                                               addressLocality,
                                               addressRegion,
                                               postalCode,
                                               addressCountry
                                           }) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        url,
        logo,
        contactPoint: {
            "@type": "ContactPoint",
            telephone,
            contactType,
            areaServed,
            availableLanguage
        },
        sameAs: socialLinks,
        address: {
            "@type": "PostalAddress",
            streetAddress,
            addressLocality,
            addressRegion,
            postalCode,
            addressCountry
        }
    }

    return (
        <Script id="organization-schema" type="application/ld+json">
            {JSON.stringify(schemaData)}
        </Script>
    )
}
