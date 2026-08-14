import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import FeaturedWork from '@/components/FeaturedWork/FeaturedWork';
import { ScrollSpeedMarquee } from '@/components/Marquee/ScrollSpeedMarquee';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import { workContent } from '@/utils/workContent';
import Link from 'next/link';
import FeaturedWorkSmall from '@/components/FeaturedWork/FeaturedWorkSmall';
import { NextSeo } from 'next-seo';

const CaseStudy = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Select all elements with class '.featured-work-col' under the active tab
    const featuredWorkCols = document.querySelectorAll('.single-cs');

    // Animate only the selected elements
    gsap.fromTo(
      featuredWorkCols,
      {
        y: 50,
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
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'App Dev', value: 'app-dev' },
    { label: 'FinTech', value: 'fintech' },
    { label: 'EdTech', value: 'edtech' },
    { label: 'E-Commerce', value: 'e-comm' },
    { label: 'SaaS', value: 'sass' },
    { label: 'CMS', value: 'cms' },
  ];

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study`;
  return (
    <>
      <NextSeo
        // title="Website And Mobile App Development Company | Web Development Services"
        // description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
        canonical={canonicalUrl}
      />
      <section className="pt-20">
        <ScrollSpeedMarquee duration={90} elementSpacing="">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="max-w-[900px] md:max-w-full">
              <img src={`/img/projects-slider.webp`} alt="mariox" />
            </div>
          ))}
        </ScrollSpeedMarquee>

        <div className="container">
          <div className="pt-18 text-center">
            <h1 className="text-48 md:text-[80px] uppercase mb-4">
              See Our <span className="font-bold">Projects</span>
            </h1>

            <p className="mb-8">
              Experience Our Commitment to Excellence and Innovation.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-secondary relative pt-8 overflow-hidden ">
        <div className="absolute inset-0 z-0 flex justify-center">
          <svg width="1203" height="722" fill="none">
            <path
              stroke="#E1D8CE"
              d="M1 0v722M290 0v722M581 0v722M880 0v722M1202 0v722"
            />
          </svg>
        </div>
        <div className="container">
          <p className="text-primary uppercase">[Latest projects]</p>

          <div className="xl:ml-[25%] gap-10 xl:gap-[200px] flex flex-wrap">
            {[
              {
                projectName: 'Numberdekho',
                projectType: 'On demand service',
                projectUrl: '/',
                projectType: 'WEB & APP DEVELOPMENT',
                projectUrl: '/case-study/numberdekho',
                projectThumb: '/img/numberdekho.webp',
              },
              {
                projectName: 'Broopi',
                projectType: 'On demand service',
                projectUrl: '/',
                projectType: 'WEB & APP DEVELOPMENT',
                projectUrl: '/case-study/broopi',
                projectThumb: '/img/broopi-thumb.webp',
              },
            ].map(
              (
                { projectName, projectType, projectUrl, projectThumb },
                index
              ) => (
                <FeaturedWorkSmall
                  key={index}
                  initialText="NEW"
                  projectType={projectType}
                  projectLink={projectUrl}
                  projectName={projectName}
                  projectThumb={projectThumb}
                  className="flex-1"
                />
              )
            )}
          </div>
        </div>
      </section> */}

      <section className="pt-8 md:pt-12 pb-18 md:pb-[160px]">
        <div className="container">
          <div className="mb-12 flex flex-wrap gap-2 md:gap-3">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => handleFilterClick(value)}
                className={`relative text-12 md:text-14 font-normal uppercase tracking-wide px-4 md:px-5 py-2 md:py-2.5 border transition-all duration-300 hover:-translate-y-0.5 ${
                  activeFilter === value
                    ? 'bg-primary text-white border-primary shadow-[3px_3px_0_0_#000]'
                    : 'bg-transparent text-black border-black/15 hover:border-primary hover:text-primary'
                }`}
              >
                &#123;{label}&#125;
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 cs-list-main">
            {workContent.map(
              (work, index) =>
                // Render each work item based on active filter
                (activeFilter === 'all' ||
                  work.filterTags.includes(activeFilter)) && (
                  <div key={index} className={`single-cs ${work.filterTags}`}>
                    <FeaturedWork
                      initialText={String(index + 1).padStart(2, '0')}
                      projectName={work.projectName}
                      projectType={work.projectType}
                      projectLink={work.projectUrl}
                      projectThumb={work.projectThumb}
                      movement="bottom-[500px]"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      <TestimonialSliderSection />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default CaseStudy;
