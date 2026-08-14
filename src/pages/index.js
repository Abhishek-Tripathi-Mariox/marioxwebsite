import React, { useRef } from 'react';
import { NextSeo } from 'next-seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import HomeHeroSection from '@/components/HomeHeroSection/HomeHeroSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import Heading from '@/components/Heading/Heading';
import TechnologiesSection from '@/components/TechnologiesSection/TechnologiesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import WhyMarioxSection from '@/components/WhyMarioxSection/WhyMarioxSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import ServiceSection from '@/components/ServiceSection/ServiceSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import HomeSchema from '@/components/Schema/homeSchema';
import { logosApp } from '@/utils/clientLoos';
import Script from 'next/script';

const Homepage = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const homeMain = useRef();
  const serviceWrapper = useRef();
  const canonicalUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      <NextSeo
        title="Website And Mobile App Development Company | Web Development Services"
        description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
        canonical={canonicalUrl}
      />
      <div ref={homeMain} className="page-main">
        <HomeSchema />
        <HomeHeroSection />
        <LogoSlider logos={logosApp} whiteBg />
        <ServiceSection />
        <TechnologiesSection />
        <ProcessSection />
        <section className="relative section-pad bg-secondary achievement-block">
          <div className="container relative z-10">
            <Heading icon className="uppercase mb-[110px]">
              Our Achievements in Numbers
            </Heading>

            <div className="flex flex-wrap justify-between md:mb-13">
              <div className="w-full md:w-auto mb-12 md:mb-0">
                <div className="block md:hidden relative max-w-[240px] mx-auto mb-8">
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary"></div>
                  <img src="/img/ach-thumb.jpg" alt="mariox" />
                </div>

                <div
                  className="flex items-end gap-4 justify-center md:justify-start w-full md:w-auto"
                  data-animate
                  data-animate-y="-50"
                  data-animate-trigger=".achievement-block"
                >
                  <span className="text-primary text-48 md:text-64 lg:text-96 font-medium leading-[100%]">
                    &#123;350+&#125;
                  </span>
                  <span className="text-12 md:text-16">PROJECT DONE</span>
                </div>
              </div>
              <div className="w-full md:w-auto mb-12 md:mb-0">
                <div className="block md:hidden relative max-w-[240px] mx-auto mb-8">
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary"></div>
                  <img src="/img/ach-thumb.jpg" alt="mariox" />
                </div>
                <div
                  className="flex items-end gap-4  justify-center md:justify-start w-full md:w-auto"
                  data-animate
                  data-animate-y="-30"
                  data-animate-trigger=".achievement-block"
                >
                  <span className="text-primary text-48 md:text-64 lg:text-96 font-medium leading-[100%]">
                    &#123;4.7&#125;
                  </span>
                  <span className="text-12 md:text-16">CUSTOMER RATING</span>
                </div>
              </div>
            </div>

            <div className="md:grid grid-cols-3 mb-13 hidden ">
              {[
                {
                  achivementImg: '/img/ach-1.webp',
                  animatePos: -70,
                },
                {
                  achivementImg: '/img/ach-2.webp',
                  animatePos: -90,
                },
                {
                  achivementImg: '/img/ach-3.webp',
                  animatePos: -55,
                },
              ].map(({ achivementImg, animatePos }, index) => (
                <div
                  key={index}
                  data-animate
                  data-animate-y={animatePos}
                  data-animate-trigger=".achievement-block"
                >
                  <div className="inline-block relative max-w-[105px]">
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-secondary"></div>
                    <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-primary"></div>
                    <img src={achivementImg} alt="mariox" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center ">
              <div className="block md:hidden relative max-w-[240px] mx-auto mb-8">
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary"></div>
                <img src="/img/ach-thumb.jpg" alt="mariox" />
              </div>
              <div
                className="flex items-end gap-4"
                data-animate
                data-animate-y="-90"
                data-animate-trigger=".achievement-block"
              >
                <span className="text-primary text-48 md:text-64 lg:text-96 font-medium leading-[100%]">
                  &#123;300+&#125;
                </span>
                <span className="text-12 md:text-16">CUSTOMERS</span>
              </div>
            </div>
          </div>
        </section>
        <SelectedWorkSection />
        <IndustriesSection />
        <WhyMarioxSection />
        <TestimonialSliderSection data={[
          {
            testimonial:
              'Working with Mariox has been a transformative experience for our company. Their team, has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.',
            name: 'Abhishek Tripathi',
            profilePicture: '/img/john-smith.webp',
            designation: ''
          },
          {
            testimonial: (
              <>
                My efforts in app development have changed massively thanks
                to Mariox. They have tremendously sophisticated technologies
                that I use to streamline campaigns, analyse data, and
                improve outcomes. I&apos;ve had great growth and success in
                my business strategy because to their professional resources
                and assistance. highly advisable.{' '}
              </>
            ),
            name: 'Anil Mehta',
            profilePicture: '/img/anil-mehta.webp',
            designation: ''
          },
          {
            testimonial:
              'Mariox is a perfect place to opt for Laravel development services. Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.',
            name: 'Akhil Malhotra',
            profilePicture: '/img/akhil-manhotra.webp',
            designation: ''
          },
        ]} />
        <FaqSection />
        <ContactUsSection />
      </div>

      {/* ✅ Add chatbot Script here */}

      {/* this is previous code */}

      {/* <Script
        id="structured-data-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Service",
            "name": "IT Services",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "7245",
              "bestRating": "5",
              "worstRating": "1"
            }
          }),
        }}
      /> */}

      {/* <Script
        id="structured-data-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mariox Software",
            "url": "https://www.marioxsoftware.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "7245",
              "bestRating": "5",
              "worstRating": "1"
            },
            "serviceOffered": {
              "@type": "Service",
              "name": "IT Services"
            }
          }),
        }}
      /> */}


      {/* <Script
        id="hubspot-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var hs = document.createElement("script");
              hs.type = "text/javascript";
              hs.async = true;
              hs.defer = true;
              hs.src = "//js-na2.hs-scripts.com/243753455.js";
              hs.id = "hs-script-loader";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hs, s);
            })();
          `,
        }}
      /> */}

      {/* <Script
        id="tawkto-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/68b82b043bc2fe191afa54f2/1j47mg2hk';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      /> */}

    </>
  );
};

export default Homepage;
