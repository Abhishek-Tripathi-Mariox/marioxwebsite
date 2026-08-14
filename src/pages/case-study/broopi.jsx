import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import TechCard from '@/components/techCard/techCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const BroopiCaseStudy = () => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/broopi`;
  return (
    <>
      <NextSeo
        // title="Website And Mobile App Development Company | Web Development Services"
        // description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
        canonical={canonicalUrl}
      />
      <section className="pt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 md:pt-15 md:pb-24 py-10">
            <div>
              <div className="text-14 text-primary">[Broopi]</div>
            </div>
            <div className="flex md:flex-col gap-3">
              <div className="text-14 mb-3">[iOS Development]</div>
              <div className="text-14 mb-3">[Android Development]</div>
              <div className="text-14 mb-3">[Web App]</div>
            </div>
          </div>

          <div className="lg:max-w-[66%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              Drive through{' '}
              <span className="text-primary"> Broopi Success</span> Journey
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div>
          <img
            src="/img/cs/broopi/broopi-banner.webp"
            alt="mariox"
            className="w-full"
          />
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="lg:ml-[8%] lg:max-w-[690px]">
            <div className="text-primary text-14 mb-6">[ABOUT]</div>

            <p>
              Broopi is a versatile service provider that meets the requirements
              of companies and individuals for home services, roadside
              assistance, and relocation, with additional interior design on the
              horizon. Broopi&apos;s diverse portfolio includes packers and
              movers, home maintenance, and emergency roadside assistance. Their
              clientele is vast and loyal!
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-wrap -mx-3 items-end gap-y-6">
              <div className="md:flex-1 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-1.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-2.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/broopi/broopi-3.webp"
                className="w-full h-full object-cover"
                alt="mariox"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="lg:ml-[8%] lg:max-w-[796px]">
            <div className="text-primary text-14 mb-6 uppercase">
              [Business Challenges Faced]
            </div>

            <p className="text-18 md:text-24">
              Meeting the high demand for immediate service without compromising
              quality posed a challenge. Ensuring quick response times while
              maintaining service excellence was crucial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-wrap -mx-3 gap-y-6">
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-4.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-5.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <p>
                  Ensuring round-the-clock availability and prompt response
                  across various service categories to cater to customers
                  seeking immediate assistance.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
              <div className="md:flex-1 md:ml-[8%] px-3">
                <div className="max-w-[490px]">
                  <p>
                    Efficiently allocating resources to handle immediate service
                    requests without affecting ongoing tasks or commitments.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-6.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/broopi/broopi-7.webp"
                className="w-full h-full object-cover"
                alt="mariox"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="lg:ml-[8%] ">
            <div className="text-primary text-14 mb-6 uppercase">
              [Strategies Implemented]
            </div>

            <p className="text-18 md:text-24 max-w-[600px]">
              The strategies were designed to ensure quick response times, and
              provide tailored solutions that align with the needs of different
              customer segments.
            </p>

            <div className="pt-10 md:pt-15">
              <div className="grid md:grid-cols-2 gap-x-[126px] gap-y-16 pr-[8%]">
                {[
                  {
                    title: 'Priority Service Tiers',
                    description:
                      'Introduced premium package plans offering prioritized services for customers requiring instant assistance. These plans ensured immediate attention to their requests without delay.',
                  },
                  {
                    title: 'Dedicated Rapid Response Teams',
                    description:
                      'Established specialized teams capable of handling immediate service requests across different service categories, ensuring quick resolution without compromising quality.',
                  },
                  {
                    title: 'Streamlined Operations',
                    description: (
                      <>
                        Implemented streamlined processes and optimized
                        workflows to efficiently manage resources and respond
                        promptly to premium package subscribers&apos; needs.
                      </>
                    ),
                  },
                  {
                    title: 'Customization and Scalability',
                    description:
                      'Developed adaptable solutions that could be tailored to meet specific needs while ensuring scalability for future enhancements or increased user volume.',
                  },
                ].map(({ title, description }, index) => (
                  <div key={index}>
                    <div className="flex justify-between gap-4 items-center mb-8">
                      <h3 className="text-24 uppercase ">{title}</h3>

                      <span className="text-primary text-14">
                        {`0${index + 1}`}
                      </span>
                    </div>

                    <p className=" text-14 leading-[140%]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="w-full overflow-hidden">
            <img
              src="/img/cs/broopi/broopi-8.webp"
              className="w-full h-full object-cover"
              alt="mariox"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-2/3 px-3">
              <div className="md:sticky top-10">
                <div className="text-primary text-14 mb-6 uppercase">
                  [Results Garnered]
                </div>
                <h2 className="text-24 mb-16 max-w-[550px]">
                  This highlights the tangible outcomes achieved through the
                  implemented strategies. It showcases the positive impacts on
                  various aspects of the business, including improved customer
                  satisfaction, enhanced service quality, and operational
                  efficiency.
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <div className="grid gap-8">
                {[
                  {
                    description: 'Improved Customer Satisfaction Rate',
                  },
                  {
                    description: 'Enhanced Service Quality',
                  },
                  {
                    description: 'Expanded Customer Base',
                  },
                  {
                    description: 'Upgraded Operational Efficiency',
                  },
                  {
                    description: 'Optimized Scheduling Process',
                  },
                  {
                    description: 'Increase in Customer Engagement',
                  },
                  {
                    description: 'Reduced Average Response Time',
                  },
                  {
                    description: 'Instant Service Delivery',
                  },
                  {
                    description: 'Enhanced Security Measures',
                  },
                  {
                    description: 'Increased Subscription Rates',
                  },
                  {
                    description: 'Tailored Solutions',
                  },
                  {
                    description: 'Elevated Creativity and Innovation',
                  },
                  {
                    description: 'Improved User Experience',
                  },
                ].map(({ description }, index) => (
                  <div className="" key={index}>
                    <p key={index} className="mb-0">
                      {description}{' '}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-8 md:pb-16">
        <section className={`bg-black section-pad`}>
          <div className="container">
            <Heading className="heading-medium text-white mb-14" icon>
              Language We Primarily Rely Upon
            </Heading>

            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  {
                    techName: 'CSS3',
                    techIcon: '/img/css3.png',
                  },
                  {
                    techName: 'HTML5',
                    techIcon: '/img/react.png',
                  },
                  {
                    techName: 'Python',
                    techIcon: '/img/python.png',
                  },
                  {
                    techName: 'php',
                    techIcon: '/img/php.png',
                  },
                  {
                    techName: 'WordPress',
                    techIcon: '/img/wordpress.png',
                  },
                  {
                    techName: 'Laravel',
                    techIcon: '/img/laravel.png',
                  },
                  {
                    techName: 'My SQL',
                    techIcon: '/img/my-sql.png',
                  },
                ].map(({ techName, techIcon }, index) => (
                  <TechCard
                    key={index}
                    techName={techName}
                    techImage={techIcon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-8 md:py-16">
        <div className="small-container">
          <div className="lg:max-w-[700px]">
            <div className="text-primary text-14 mb-6">[IMPACT]</div>

            <p className="text-18 md:text-24">
              Over the course of our partnership, we helped ship hundreds of UX
              improvements to numberdekho.com, impacting millions of monthly
              visitors and facilitating billions in revenue.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-6 pt-10">
            <div>
              <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                &#123;350+&#125;
              </div>

              <div className="text-16">PROJECT DONE</div>
            </div>
            <div>
              <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                &#123;4.7&#125;
              </div>

              <div className="text-16">CUSTOMER RATING</div>
            </div>
            <div>
              <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                &#123;300&#125;
              </div>

              <div className="text-16">HAPPY CUSTOMER</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-wrap -mx-3 gap-y-6 justify-between items-end">
              <div className="w-full md:w-1/4 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-9.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/broopi/broopi-10.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection
        data={[
          {
            industryName: 'Comprehensive Solutions',
          },
          {
            industryName: 'Expertise & Professionalism',
          },
          {
            industryName: 'Convenience',
          },
          {
            industryName: 'Customer-Centric Approach',
          },
          {
            industryName: 'Safety and Security',
          },
          {
            industryName: 'Time and Cost Efficiency',
          },
          {
            industryName: 'Technology Integration',
          },
          {
            industryName: 'Trust and Reliability',
          },
        ]}
      />

      <TestimonialSliderSection />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default BroopiCaseStudy;
