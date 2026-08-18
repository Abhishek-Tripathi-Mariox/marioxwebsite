import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { featuredWork } from '@/utils/workContent';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const SelectedWorkSection = ({ className, heading, data }) => {
  const workWrapper = useRef();
  const main = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          small: '(max-width: 767px)',
          large: '(min-width: 768px)',
        },
        (ctx) => {
          const { small } = ctx.conditions;
          let workSection = document.querySelector('.work-block');

          gsap.to('.work-block', {
            x: () => (small ? 0 : workSection.scrollWidth * -1),
            xPercent: small ? 0 : 100,
            scrollTrigger: {
              trigger: '.work-block',
              start: 'center center',
              start: '0% 20%',
              end: '+=2000px 10%',
              pin: small ? false : true,
              scrub: 0.5,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }
      );
    },
    {
      scope: main,
    }
  );
  return (
    <section ref={main} className={`section-pad overflow-hidden ${className}`}>
      <div className="container">
        {/* <Heading className="mb-12 " icon>
          {heading ? heading : 'Selected Work'}
        </Heading> */}

        <div className="mb-12 flex items-start sm:items-center gap-2 text-4xl sm:text-7xl font-semibold text-black">
          {/* Add icon here manually if needed */}
          <span>{heading ? heading : 'Selected Work'}</span>
        </div>

      </div>
      <div className=" ">
        <div className="container">
          <div className="work-wrapper-main ">
            <div className="work-wrapper" ref={workWrapper}>
              <div
                className={`flex h-full work-block flex-wrap md:flex-nowrap gap-8 md:gap-0`}
              >
                {(data || featuredWork).map(
                  (
                    { projectName, projectType, projectUrl, projectThumb },
                    index
                  ) => (
                    <div key={index} className="md:min-w-[50%] md:px-4 ">
                      <FeaturedWork
                        initialText={String(index + 1).padStart(2, '0')}
                        projectName={projectName}
                        projectType={projectType}
                        projectLink={projectUrl}
                        projectThumb={projectThumb}
                        movement="bottom-[500px]"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
