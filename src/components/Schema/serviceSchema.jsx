import Head from 'next/head';

const ServiceSchema = ({ slug }) => {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `https://www.marioxsoftware.com/${slug}#webpage`,
        "url": `https://www.marioxsoftware.com/${slug}`,
        "name": "Mariox Software",
        "isPartOf": {
            "@type": "WebSite",
            "@id": `https://www.marioxsoftware.com${slug}/#website`,
            "url": `https://www.marioxsoftware.com${slug}`,
            "name": "Mariox Software",
            "publisher": {
                "@id": `https://www.marioxsoftware.com/${slug}#organization`
            },
            "inLanguage": "en-US"
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "@id": `https://www.marioxsoftware.com/${slug}#primaryimage`,
            "url": "https://www.marioxsoftware.com/wp-content/uploads/2023/11/Android-App-development-1.png",
            "caption": "Mariox Software"
        },
        "about": {
            "@type": "Organization",
            "@id": `https://www.marioxsoftware.com/${slug}#organization`,
            "name": "Mariox Software",
            "url": "https://www.marioxsoftware.com",
            "logo": {
                "@type": "ImageObject",
                "@id": `https://www.marioxsoftware.com/${slug}#logo`,
                "url": "https://www.marioxsoftware.com/wp-content/uploads/2023/05/cropped-340120-mariox-logo-1.png",
                "caption": "Mariox Software"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9599287045",
                "contactType": "Customer Service",
                "email": "admin@marioxsoftware.com"
            },
            "sameAs": [
                "https://www.facebook.com/MarioxSoftware",
                "https://twitter.com/MarioxSoftware",
                "https://www.instagram.com/MarioxSoftware",
                "https://www.linkedin.com/company/MarioxSoftware"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "202, Assotech Business Cresterra, Tower-4, Sector 135",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
            }
        },
        "inLanguage": "en-US"
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mariox Software",
        "image": "https://www.marioxsoftware.com/wp-content/uploads/2023/11/Android-App-development-1.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "202, Assotech Business Cresterra, Tower-4, Sector 135",
            "addressLocality": "Noida",
            "addressRegion": "UP",
            "postalCode": "201301",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5355,
            "longitude": 77.3910
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "07:00",
                "closes": "23:00"
            }
        ],
        // "aggregateRating": {
        //     "@type": "AggregateRating",
        //     "ratingValue": "4.5",
        //     "reviewCount": "24"
        // },

        // "telephone": "+91 9599287045",
        // "url": `https://www.marioxsoftware.com/${slug}`,
        // "priceRange": "$$"
    };

    // this is previous code

    // const serviceSchema = {
    //     "@context": "https://schema.org",
    //     "@type": "Service",
    //     "name": "IT Services",
    //     "provider": {
    //         "@type": "Organization",
    //         "name": "Mariox Software"
    //     },
    //     "aggregateRating": {
    //         "@type": "AggregateRating",
    //         "ratingValue": "5.0",
    //         "ratingCount": "7245",
    //         "bestRating": "5",
    //         "worstRating": "1"
    //     }
    // };


    // const serviceSchema = {
    //     "@context": "https://schema.org",
    //     "@type": "Service",
    //     "name": "IT Services",
    //     "provider": {
    //         "@type": "Organization",
    //         "name": "Mariox Software",
    //         "url": "https://www.marioxsoftware.com"
    //     },
    //     "aggregateRating": {
    //         "@type": "AggregateRating",
    //         "ratingValue": "5.0",
    //         "ratingCount": "7245",
    //         "bestRating": "5",
    //         "worstRating": "1"
    //     }
    // };


    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            /> */}
        </Head>
    );
};

export default ServiceSchema;
