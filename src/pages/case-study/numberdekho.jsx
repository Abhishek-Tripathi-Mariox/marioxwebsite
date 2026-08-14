import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const NumberDekhoCaseStudy = () => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/numberdekho`;
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
              <div className="text-14 text-primary uppercase">
                [Numberdekho]
              </div>
            </div>
            <div className="flex md:flex-col gap-3">
              <div className="text-14 mb-3">[iOS Development]</div>
              <div className="text-14 mb-3">[Android Development]</div>
              <div className="text-14 mb-3">[Web App]</div>
            </div>
          </div>

          <div className="lg:max-w-[66%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              <span className="text-primary">NumberDekho&apos;s</span> Digital
              Triumph with Mariox
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div>
          <img
            src="/img/cs/numberdekho/numberdekho-banner.webp"
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
              NumberDekho, a revolutionary startup, aims to bridge the gap
              between consumers and home services vendors across India. The
              vision is to connect consumers with vendors instantly in real-time
              to address their household needs within 30 minutes. Moreover,
              it&apos;s about creating a safe and secure platform that enhances
              local trade through efficient house services.
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
                    src="/img/cs/numberdekho/numberdekho-1.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-2.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/numberdekho/numberdekho-3.webp"
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
            <div className="text-primary text-14 mb-6">[CHALLENGES]</div>

            <p className="text-18 md:text-24">
              NumberDekho was struggling in the digital space due to extreme
              competition. The industry was incredibly challenging! Amid this,
              acquiring an efficient digital presence and priority position
              among people’s choices was the toughest part of NumberDekho’s
              journey.
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
                    src="/img/cs/numberdekho/numberdekho-4.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-5.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <p>
                  With an existing website and application, NumberDekho
                  technically decayed the impression of its success.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
              <div className="md:flex-1 md:ml-[8%] px-3">
                <div className="max-w-[490px]">
                  <p>
                    However, the constant lack of success online did not deduce
                    their journey; instead, it fueled their determination to
                    find a better solution.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-6.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/numberdekho/numberdekho-7.webp"
                className="w-full h-full object-cover"
                alt="mariox"
              />
            </div>

            <div className="flex flex-wrap -mx-3 gap-y-6 ">
              <div className="w-full md:w-5/12 px-3 ">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-8.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>

              <div className="w-full md:w-5/12 px-3 ">
                <div className="flex flex-col justify-between gap-6 h-full">
                  <div>
                    <p>
                      It made them collaborate with Mariox Software to acquire
                      fresh web and App development services and give their
                      successful journey a fresh start, hoping to redefine their
                      presence in the market.
                    </p>
                  </div>

                  <div className="aspect-square w-full overflow-hidden lg:max-w-[60%]">
                    <img
                      src="/img/cs/numberdekho/numberdekho-9.webp"
                      className="w-full h-full object-cover"
                      alt="mariox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container">
          <div className="lg:ml-[8%] ">
            <div className="text-primary text-14 mb-6 uppercase">
              [The Solutions We Curated]
            </div>

            <p className="text-18 md:text-24 max-w-[600px]">
              Mariox Software inspected NumberDekho&apos;s former position and
              collated the areas for improvement.
            </p>

            <div className="pt-10 md:pt-15">
              <div className="grid md:grid-cols-2 gap-x-[126px] gap-y-16 pr-[8%]">
                {[
                  {
                    title: 'Digital Transformation',
                    description:
                      'Following our freshly made strategy, we revolutionized the entire digital infrastructure and gave NumberDekho a new brand identity with a compelling official website and a potent mobile application.',
                  },
                  {
                    title: 'Application Development',
                    description:
                      'Utilized the best development methodologies that resonated with NumberDekho’s diverse business dimensions.',
                  },
                  {
                    title: 'distinct applications ',
                    description: (
                      <>
                        Engineered two distinct applications that catered to
                        users&apos; and vendors&apos; needs. They helped vendors
                        get onboarded quickly, with no hassle for their core
                        services and users to book their services, pay, or track
                        vendors&apos; locations.
                      </>
                    ),
                  },
                  {
                    title: 'Website Development',
                    description:
                      'We developed a user-friendly website with a compelling user interface, quick call-to-action, multiple payment options, a swift payment gateway, multiple service selections at once, an automated and manual geolocation tracker, and various other intuitive features.',
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
          <div className="grid gap-6">
            <div className="flex flex-wrap -mx-3 gap-y-6 justify-between">
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-10.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-11.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/numberdekho/numberdekho-12.webp"
                className="w-full h-full object-cover"
                alt="mariox"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <div className="md:sticky top-10">
                <div className="text-primary text-14 mb-6">[THE RESULTS]</div>
                <h2 className="text-24 mb-16">
                  With the shift in the complete digital landscape of
                  NumberDekho, Mariox web, and app development services have
                  been a drastic game changer in boosting daily bookings and
                  increasing ROI.
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    description:
                      'Previously, NumberDekho struggled to onboard vendors and acquire valuable bookings. Today, bookings for multiple services have increased by 60%, and this number is proliferating every day. ',
                  },
                  {
                    description:
                      'From 0 to a 40% increase in the conversion rate, NumberDekho has covered a measurable milestone. People enjoy using NumberDekho’s website and application due to its credibility, quick booking, and multiple payment features. ',
                  },
                  {
                    description: (
                      <>
                        Instant user-vendor connectivity enabled NumberDekho to
                        offer an exceptional user experience and increased
                        consumer satisfaction.
                      </>
                    ),
                  },
                  {
                    description: (
                      <>
                        Optimizing the vendor onboarding workflow has simplified
                        the steps for service providers to sign up for their
                        primary offerings, complete KYC, and commence operations
                        as authenticated vendors.
                      </>
                    ),
                  },
                ].map(({ description }, index) => (
                  <div className="" key={index}>
                    <TechPageCard key={index} description={description} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    src="/img/cs/numberdekho/numberdekho-13.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/numberdekho/numberdekho-14.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/numberdekho/numberdekho-15.webp"
                className="w-full h-full object-cover"
                alt="mariox"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSliderSection className="mt-16" />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default NumberDekhoCaseStudy;
