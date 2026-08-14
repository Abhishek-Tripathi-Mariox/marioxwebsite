import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const StarsTellCaseStudy = () => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/starstell`;
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
              <div className="text-14 text-primary">[Starstell]</div>
            </div>
            <div className="flex md:flex-col gap-3">
              <div className="text-14 mb-3">[iOS Development]</div>
              <div className="text-14 mb-3">[Android Development]</div>
              <div className="text-14 mb-3">[Web App]</div>
            </div>
          </div>

          <div className="lg:max-w-[66%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              Secrets Behind <span className="text-primary"> StarsTell </span>{' '}
              Growth
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div>
          <img
            src="/img/cs/starstell/starstell-banner.webp"
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
              Founded in 2005, StarsTell.com is a premium e-commerce portal for
              online Astrology consultation and Remedial products. The services
              include Janam Kundli, Gun matching services, Wedding astrology,
              Birth astrology, Muhurtha services, and remedies like Rudraksha
              Therapy, Gemstone therapy, use of Mantras and Yantras, etc. The
              company was established by Mr. Vivek Dhir.
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
                    src="/img/cs/starstell/starstell-1.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/starstell/starstell-2.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/starstell/starstell-3.webp"
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
              [The Challenges]
            </div>

            <p className="text-18 md:text-24">
              StarsTell struggled with previous digital marketing efforts that
              failed to enhance their online presence. The project required a
              deep understanding of Flutter to improve sales & create a
              user-friendly app that could integrate multiple features like
              astrology consultations, secure payments, and more.
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
                    src="/img/cs/starstell/starstell-4.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/4 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/starstell/starstell-5.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <p>
                  StarsTell.com&apos;s project is developed in a period of four
                  months. With the help of Flutter app development, you can
                  create an application that runs across multiple platforms
                  using a single codebase.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
              <div className="md:flex-1 md:ml-[8%] px-3">
                <div className="max-w-[490px]">
                  <p>
                    We provide best-in-class Flutter app development services
                    that help you establish a mobile, web, and desktop presence.
                    Our dedicated team develops user-friendly and
                    high-performing Flutter applications that align well with
                    your business and industry trends.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 self-end">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/starstell/starstell-6.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>

            <div>
              <img
                src="/img/cs/starstell/starstell-7.webp"
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
            <div className="text-primary text-14 mb-6 uppercase">[RESULTS]</div>

            <p className="text-18 md:text-24 max-w-[800px]">
              Our clients achieve tangible results with the help of an
              experienced team of mobile application developers that can include
              various services on your astrology app, like a horoscope report,
              tarot card reading, marriage horoscope report, and so on. The
              developers can use the latest technologies like Flutter, ensuring
              your app is user-friendly and highly scalable.
              <br />
              <br />
              This application can include several features in your astrology
              app, like appointment booking, a secure payment gateway, push
              notifications, a celestial calendar, and many more.
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
                    src="/img/cs/starstell/starstell-8.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
              <div className="w-full md:w-6/12 px-3">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src="/img/cs/starstell/starstell-9.webp"
                    className="w-full h-full object-cover"
                    alt="mariox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSliderSection className="mt-8 md:mt-16" />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default StarsTellCaseStudy;
