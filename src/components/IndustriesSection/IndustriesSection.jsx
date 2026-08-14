import React from 'react';
import Heading from '../Heading/Heading';

const IndustriesSection = ({ heading, data }) => {
  return (
    <section className="pt-9 bg-[url(/img/black-squares-pattern.svg)] bg-repeat-x bg-left-top">
      <div className="bg-black section-pad">
        <div className="container">
          {/* <Heading icon className=" mb-12 text-white ">
            {heading ? heading : 'Industries we Serve'}
          </Heading> */}

          <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-4xl sm:text-7xl font-semibold text-white">
            {/* Insert icon here manually if needed */}
            <span>{heading ? heading : 'Industries we Serve'}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4  border border-[#1C1C1B]">
            {(
              data || [
                {
                  industryName: 'Healthcare',
                  link: '/',
                },
                {
                  industryName: 'Finance',
                  link: '/',
                },
                {
                  industryName: 'Ed-Tech',
                  link: '/',
                },
                {
                  industryName: 'Manufacturing',
                  link: '/',
                },
                {
                  industryName: 'Technology & Telecom',
                  link: '/',
                },
                {
                  industryName: 'Real Estate',
                  link: '/',
                },
                {
                  industryName: 'E-Commerce',
                  link: '/',
                },
                {
                  industryName: 'Logistics',
                  link: '/',
                },
                {
                  industryName: 'Fin-Tech',
                  link: '/',
                },
                {
                  industryName: 'Gov & Non profit',
                  link: '/',
                },
                {
                  industryName: 'Travel & Toursim',
                  link: '/',
                },
                {
                  industryName: 'Media Sport',
                  link: '/',
                },
              ]
            ).map(({ industryName, link }, index) => (
              <div
                key={index}
                className="group relative before:absolute before:z-10 before:bg-[#1C1C1B] before:w-[1px] before:h-full before:top-0 before:left-[-1px] after:absolute after:z-10 after:bg-[#1C1C1B] after:h-[1px] after:w-full after:left-0 after:top-[-1px]"
              >
                <a href={link} className="overflow-hidden p-5 md:p-8 block">
                  <div className="mb-8 md:mb-20 inline-block w-10 md:w-auto">
                    <svg
                      className="duration-700 ease-elastic group-hover:rotate-180 origin-center w-full h-auto"
                      width="59"
                      height="59"
                      fill="none"
                      viewBox="0 0 59 59"
                    >
                      <path
                        stroke="#E43C13"
                        d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                      />
                    </svg>
                  </div>

                  <div className="text-12 md:text-16 text-white uppercase duration-700 ease-elastic group-hover:translate-x-20 group-hover:text-primary">
                    &#123;{industryName}&#125;
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
