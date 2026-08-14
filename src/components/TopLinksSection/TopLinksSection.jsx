import React from 'react';
import Link from 'next/link';
import Heading from '../Heading/Heading';

const TopLinksSection = ({ cityLinks = [], serviceLinks = [] }) => {
  const chunkLinks = (links) => {
    const result = [];
    for (let i = 0; i < links.length; i += 5) {
      result.push(links.slice(i, i + 5));
    }
    return result;
  };

  const chunkedCityLinks = chunkLinks(cityLinks);
  const chunkedServiceLinks = chunkLinks(serviceLinks);
  const renderLinkColumns = (chunkedLinks) => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {chunkedLinks.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-6">
          {column.map((link, linkIndex) => (
            <div className="text-14" key={linkIndex}>
              <a href={`/${link.slug}`} className="hover:underline">
                {link.pageName}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="section-pad border-t border-t-black/10">
      <div className="container">
        {chunkedCityLinks && chunkedCityLinks.length > 0 && <div className="mb-10">
          {/* <Heading as="h2" className="text-xl mb-5">Top Cities</Heading> */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-semibold text-black">
            Top Cities
          </div>
          {renderLinkColumns(chunkedCityLinks)}
        </div>}
        {chunkedServiceLinks && chunkedServiceLinks.length > 0 && <div>
          {/* <Heading as="h2" className="text-xl mb-5">Top Services</Heading> */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 font-semibold text-black">
            Top Services
          </div>
          {renderLinkColumns(chunkedServiceLinks)}
        </div>}
      </div>
    </section>
  );
};

export default TopLinksSection;
