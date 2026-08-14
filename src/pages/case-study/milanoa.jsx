import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const MilanoaCaseStudy = () => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/milanoa`;
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
              <div className="text-14 text-primary">[Milanoa]</div>
            </div>
            <div className="flex md:flex-col gap-3">
              <div className="text-14 mb-3">[iOS Development]</div>
              <div className="text-14 mb-3">[Android Development]</div>
              <div className="text-14 mb-3">[Web App]</div>
            </div>
          </div>

          <div className="lg:max-w-[66%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              <span className="text-primary">Milanoa </span> Success Story
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div>
          <img
            src="/img/cs/milanoa/milanoa-banner.webp"
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
              Milanoa Unisex Salon is a renowned and comprehensive beauty and
              hair care salon in Kochi, India. We provide various services such
              as Bridal make-up, Skin care, Hair care, Party make-up, Permanent
              treatments, Hair Colouring, Pedicures, Manicures, and other
              related tip beauty services in Kochi. Milanoa offers services and
              products to both males and females to help them groom and look
              their best.
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
                    src="/img/cs/milanoa/milanoa-1.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/milanoa/milanoa-2.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/milanoa/milanoa-3.webp"
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
            <div className="text-primary text-14 mb-6">
              [CHALLENGES &amp; GOALS]
            </div>

            <p className="text-18 md:text-24">
              The main challenge was letting the target audience know about the
              service and why they should use it. They had previously done no
              advertising and marketing, so there was little pre-existing data
              to work with. However, they had significant insight into the
              industry, which we incorporated in the advertising campaign
              planning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <div className="md:sticky top-10">
                <div className="text-primary text-14 mb-6 uppercase">
                  [We Build Your Website In Four Steps]
                </div>
                <h2 className="text-24 mb-16 max-w-[500px]">
                  Mariox Software is a leading WordPress development company in
                  India. We offer unmatched WordPress web development services.
                  Our dedicated team follows correct ﬁle permissions, spam
                  protection, form validations, conﬁguration settings, etc., to
                  ensure the website remains safe and secure.
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    description: (
                      <>Mariox WordPress team will establish the brand.</>
                    ),
                  },
                  {
                    description:
                      'Then, the team will design the homepage of your site.',
                  },
                  {
                    description: (
                      <>The designer installs essential themes and plugins.</>
                    ),
                  },
                  {
                    description: (
                      <>In the end, the team had a social media presence.</>
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
        <div className="container">
          <div className="grid gap-6">
            <div className="flex flex-wrap -mx-3 gap-y-6">
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/milanoa/milanoa-4.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/milanoa/milanoa-5.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <p>
                  By leveraging this knowledge, we were able to craft a targeted
                  and effective advertising strategy that resonated with the
                  audience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
              <div className="md:flex-1 md:ml-[8%] px-3">
                <div className="max-w-[490px]">
                  <div className="text-primary text-14 mb-6">[VISION]</div>
                  <p>
                    Our vision is to create an industry leader in the wellness
                    sector and bring international salon experience to every
                    neighborhood in India. We are the fastest emerging
                    full-service unisex salon in India.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/milanoa/milanoa-6.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/milanoa/milanoa-7.webp"
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
              With the help of Mariox’s dedicated WordPress development team, we
              become the most popular unisex salon in Kochi. We built an
              impressive, high-functioning website. This new site booste­d
              customer happiness.
              <br />
              <br />
              Our experts use tried-and-true techniques to improve Milanoa
              website rankings, drive traffic to your site, and increase
              qualified sales leads.
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
                    src="/img/cs/milanoa/milanoa-8.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-5/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/milanoa/milanoa-9.webp"
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

export default MilanoaCaseStudy;
