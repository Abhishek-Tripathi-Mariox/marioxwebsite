import Button from '@/components/Button/Button';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import JobBar from '@/components/JobBar/JobBar';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import WhyMarioxSection from '@/components/WhyMarioxSection/WhyMarioxSection';
import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { NextSeo } from 'next-seo';

const Career = () => {
  const lenis = useLenis();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/career`;
  return (
    <>
      <NextSeo
        // title="Website And Mobile App Development Company | Web Development Services"
        // description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
        canonical={canonicalUrl}
      />
      <div className="page-main">
        <section className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom relative">
          <div className="bg-secondary pt-30  overflow-hidden relative">
            <div className="container">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full md:w-2/3 px-4">
                  <h1 className="text-48 lg:text-[95px] uppercase mb-7 md:mb-10">
                    Join Our Team at <span className="font-bold">Mariox</span>
                  </h1>

                  <p>
                    Be a Part of Our Innovative Journey and Shape the Future of
                    Technology with Us.
                  </p>
                </div>
                <div className="w-full md:w-1/3 px-4">
                  <div className="">
                    <Button href="#jobs" onclick={lenis?.scrollTo('#jobs')}>
                      See job openings
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 pt-12">
                <div className="col-span-2">
                  <img src="/img/career-1.webp" alt="mariox" />
                </div>
                <div>
                  <img src="/img/career-2.webp" alt="mariox" />
                </div>
                <div>
                  <img src="/img/career-3.webp" alt="mariox" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad !pb-0">
          <div className="container">
            <Heading className="mb-18" icon>
              Life at Mariox
            </Heading>

            <div className="grid md:grid-cols-2 gap-6 items-end mb-12">
              <div>
                <h3 className="text-24 md:text-32 uppercase">
                  Making Your Dreams Work with Our Team Work!
                </h3>
              </div>

              <div>
                <p className="mb-0">
                  The digital world is vague and wide. Our team of professionals
                  working on different industry projects helps your business
                  acquire a visible presence online. Our services are not just
                  restricted to web and app development services
                </p>
              </div>
            </div>

            <div>
              <img src="/img/career-4.webp" alt="mariox" />
            </div>
          </div>
        </section>

        <WhyMarioxSection />

        <section className="section-pad bg-black" id="jobs">
          <div className="container">
            <Heading icon className="text-white mb-16">
              Available Roles
            </Heading>

            {/* <div className="mb-16">
              <div className="text-primary uppercase">[Tech in careers]</div>

              <JobBar
                jobRole="TEch lead"
                roleArray={[
                  {
                    roleRequirement: 'Full time',
                  },
                  {
                    roleRequirement: 'Hyderabad',
                  },
                  {
                    roleRequirement: 'Full time',
                  },
                ]}
              />
              <JobBar
                jobRole="Full stack developer"
                roleArray={[
                  {
                    roleRequirement: 'Full time',
                  },
                  {
                    roleRequirement: 'Noida',
                  },
                  {
                    roleRequirement: 'Hybrid',
                  },
                ]}
              />
            </div> */}
            <div className="mb-16">
              <div className="text-primary uppercase">[Sales]</div>
              <JobBar
                jobRole="IT sales Executive"
                roleArray={[
                  {
                    roleRequirement: 'Full time',
                  },
                  {
                    roleRequirement: 'Noida',
                  },
                  // {
                  //   roleRequirement: 'Hybrid',
                  // },
                ]}
              />
            </div>

            {/* <div className="mb-16">
              <div className="text-primary uppercase">[Marketing]</div>

              <JobBar
                jobRole="Content Writer"
                roleArray={[
                  {
                    roleRequirement: 'Full time',
                  },
                  {
                    roleRequirement: 'Noida',
                  },
                  {
                    roleRequirement: 'Hybrid',
                  },
                ]}
              />
            </div> */}
          </div>
        </section>

        <TestimonialSliderSection />

        <FaqSection />
      </div>
    </>
  );
};

export default Career;
