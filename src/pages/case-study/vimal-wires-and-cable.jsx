import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const VimalWiresAndCableCaseStudy = () => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/vimal-wires-and-cable`;
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
                [Vimal Wires and Cable]
              </div>
            </div>
            <div className="flex md:flex-col gap-3">
              <div className="text-14 mb-3">[iOS Development]</div>
              <div className="text-14 mb-3">[Android Development]</div>
              <div className="text-14 mb-3">[Web App]</div>
            </div>
          </div>

          <div className="lg:max-w-[75%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              Know How StartUp{' '}
              <span className="text-primary">Vimal Wires and Cable</span>{' '}
              Achieve Digital Success
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div>
          <img
            src="/img/cs/vimal/vimal-banner.webp"
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
              Vimal Cable and Wire­s is a notable manufacturer and distributor
              of high-quality cables and wire­s. They serve various industries
              like auto, building, and telecom. Vimal Cable­ and Wires are
              focused on boosting their online­ visibility and customer
              engageme­nt with a commitment to novelty and client happine­ss.
              They&apos;ve partnere­d with Mariox, a reputable digital app
              development company.
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
                    src="/img/cs/vimal/vimal-1.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/vimal/vimal-2.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/vimal/vimal-3.webp"
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
                <div className="text-primary text-14 mb-6">
                  [Client’s Requirement]
                </div>
                <h2 className="text-24 mb-16 max-w-[500px]">
                  As a startup, it wants to enter the digital world to promote
                  its services and products to the right consumer. Therefore,
                  the client’s demands varied. Here is a glimpse of a few:
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    title: 'Responsive Design',
                    description: (
                      <>
                        Ensure the webpage­ looks neat and works smoothly on
                        different gadge­ts. This includes tablets, phones,
                        laptops, and de­sktops.
                      </>
                    ),
                  },
                  {
                    title: 'Easy to Navigate',
                    description:
                      'Inte­rface must be straightforward and instinctive. It must let the user spot the details needed swiftly and efficiently.',
                  },
                  {
                    title: 'Clear Messaging',
                    description: (
                      <>
                        We want the user to know what our startup offers – its
                        unique value, available items and services, and standout
                        sale features.
                      </>
                    ),
                  },
                  {
                    title: 'Lead Generation',
                    description: (
                      <>
                        Getting leads means setting up ways to collect info from
                        visitors. These can be chatbots, forms for contact and
                        email sign-ups. This helps us make leads and grow our
                        customer base.
                      </>
                    ),
                  },
                ].map(({ description, title, number }, index) => (
                  <div className="" key={index}>
                    <TechPageCard
                      key={index}
                      title={title}
                      description={description}
                      number={`${index <= 8 ? '0' : ''}${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="lg:ml-[8%] ">
            <div className="text-primary text-14 mb-6 uppercase">
              [Our Solutions to Website Development]
            </div>

            <p className="text-18 md:text-24 max-w-[600px]">
              The following strategies were designed while working on the Vimal
              Wires and Cables. Each solution was tailored to enhance user
              experience and drive engagement.
            </p>

            <div className="pt-10 md:pt-15">
              <div className="grid md:grid-cols-2 gap-x-[126px] gap-y-16 pr-[8%]">
                {[
                  {
                    title: 'Utilizing Mobile-First Approach',
                    description:
                      'For a responsive website, gaining an optimal viewing experience across varied devices is essential. It can only be achieved through responsive designs such as Bootstrap or foundation.',
                  },
                  {
                    title: 'Easy to Navigation',
                    description:
                      'Implemented intuitive navigation, clear CTA, well-organized layout, etc. Further, conducting user testing to know whether the site is easy to navigate or requires more improvement.',
                  },
                  {
                    title: 'Clear Messaging',
                    description: (
                      <>
                        Clearly and e­ngagingly communicate the value and main
                        offe­rings of the startup in your message. Attract
                        re­aders by showcasing the unique se­lling points of the
                        startup through captivating content and visuals.
                      </>
                    ),
                  },
                  {
                    title: 'Lead Generation',
                    description:
                      'Place le­ad capture forms smartly on your website. Re­ward visitors with helpful resources in exchange for their details. Use tech for lead management and segmenting to help nurture­ these leads well.',
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
          <div className="lg:ml-[8%] lg:max-w-[796px]">
            <div className="text-primary text-14 mb-6">
              [CHALLENGES FACED BY US]
            </div>

            <p className="text-18 md:text-24">
              Integrating the website with Vimal Cable and Wires&apos; existing
              enterprise resource planning (ERP) system and inventory management
              posed technical complexities.
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
                    src="/img/cs/vimal/vimal-4.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/vimal/vimal-5.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <div className="text-primary text-14 mb-6">[SOLUTION]</div>
                <p>
                  Our team worked hand-in-hand with Vimal&apos;s tech group to
                  get a handle on the setup and data patterns of the ERP system.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
              <div className="md:flex-1 md:ml-[8%] px-3">
                <div className="max-w-[490px]">
                  <p>
                    They built tailor-made API connections to align product
                    de­tails, stock numbers, and order handling. This made sure
                    the website and the backend systems were perfectly
                    connected.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/vimal/vimal-6.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/vimal/vimal-7.webp"
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
            <div className="text-primary text-14 mb-6">[RESULTS]</div>

            <p className="text-18 md:text-24 max-w-[600px]">
              After launching its new app and website, Anagha Yoga saw immense
              growth in online traffic and interaction. The schools received
              many students registering for their courses, and they found it
              easier to understand the school’s courses and offerings. Mobile
              applications made it easier to communicate with one another, thus
              improving community building and education quality.
            </p>
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
                    src="/img/cs/vimal/vimal-8.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/vimal/vimal-9.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
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

export default VimalWiresAndCableCaseStudy;
