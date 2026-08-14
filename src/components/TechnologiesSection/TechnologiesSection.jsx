import React, { useEffect, useState } from 'react';
import TechCard from '../techCard/techCard';
import Heading from '../Heading/Heading';
import gsap from 'gsap';
import { mobileTech, backend, cms, frontend } from '@/utils/techContent';
import TabControls from '../TabControls/TabControls';
import TabButton from '../TabControls/TabButton';

const TechnologiesSection = ({ className }) => {
  const [filterTech, setfilterTech] = useState(0);

  function handleTechFilter(value) {
    return () => {
      // Update active filter state
      setfilterTech((state) => (state === value ? value : value));
    };
  }

  useEffect(() => {
    // Select all elements with class '.featured-work-col' under the active tab
    const featuredWorkCols = document.querySelectorAll('.tech-card');

    // Animate only the selected elements
    gsap.fromTo(
      featuredWorkCols,
      {
        y: 20,
        autoAlpha: 0,
        duration: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
      }
    );
    // ScrollTrigger.refresh();
  }, [filterTech]);
  return (
    <section className={`bg-black section-pad ${className}`}>
      <div className="container">
        {/* <Heading className="text-white mb-14" icon>
          Technologies
        </Heading> */}

        <div className="text-white mb-14 flex items-center gap-2 text-3xl font-semibold">
          {/* Manually insert icon here if needed */}
          <span>Technologies</span>
        </div>

        <TabControls>
          {[
            {
              tabLink: 'Mobile',
            },
            {
              tabLink: 'Frontend',
            },

            {
              tabLink: 'Backend',
            },
            {
              tabLink: 'CMS',
            },
          ].map(({ tabLink }, index) => (
            <TabButton
              key={index}
              onClick={handleTechFilter(index)}
              className={filterTech === index ? '!text-primary active' : ''}
            >
              {tabLink}
            </TabButton>
          ))}
        </TabControls>

        <div className="pt-11 md:pt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filterTech === 0 ? (
              <>
                {mobileTech.map(({ techName, techImage, link }, index) => (
                  <TechCard
                    key={index}
                    techName={techName}
                    techImage={techImage}
                    link={link}
                  />
                ))}
              </>
            ) : (
              ''
            )}
            {filterTech === 1 ? (
              <>
                {frontend.map(({ techName, techImage }, index) => (
                  <TechCard
                    key={index}
                    techName={techName}
                    techImage={techImage}
                  />
                ))}
              </>
            ) : (
              ''
            )}
            {filterTech === 2 ? (
              <>
                {backend.map(({ techName, techImage, link }, index) => (
                  <TechCard
                    key={index}
                    techName={techName}
                    techImage={techImage}
                    link={link}
                  />
                ))}
              </>
            ) : (
              ''
            )}
            {filterTech === 3 ? (
              <>
                {cms.map(({ techName, techImage, link }, index) => (
                  <TechCard
                    key={index}
                    techName={techName}
                    techImage={techImage}
                    link={link}
                  />
                ))}
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
