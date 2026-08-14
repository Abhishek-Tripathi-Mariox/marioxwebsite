import Link from 'next/link';
import Head from 'next/head';

export default function Breadcrumb({ items }) {
  const hasValidItems = items && items.length > 0;
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const schemaData = hasValidItems
    ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${pageUrl}${item.slug}`,
      })),
    }
    : null;

  if (!hasValidItems) {
    return null; // Don't render anything if there are no valid items
  }

  return (
    <>
      {schemaData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
      )}
      <nav className="flex mb-4 pt-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center gap-3">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center gap-3">
              {index > 0 && (
                <span className="" aria-hidden="true">
                  <svg width="7" height="10" fill="none" viewBox="0 0 7 10">
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M1.043.543a1 1 0 0 0 0 1.414L3.836 4.75 1.043 7.543a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-500" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.slug}
                  className="text-gray-700 hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
