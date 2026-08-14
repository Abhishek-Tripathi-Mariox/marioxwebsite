import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React, { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const About = () => {
  const typeSection = useRef();
  const timeline = useRef();

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

          let heroHeading = new SplitText('.type-effect', {
            type: 'words',
          });
          let heroHeadingText = heroHeading.words;

          gsap.set(heroHeadingText, { autoAlpha: 0.2 });

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: typeSection.current,
              // markers: true,
              start: '10% 45%',
              end: '55% 30%',
              scrub: 0.6,
            },
          });

          tl.to(
            heroHeadingText,

            {
              stagger: 0.1,
              autoAlpha: 1,
            }
          );
        }
      );
    },
    {
      scope: typeSection,
    }
  );

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
          let workSection = document.querySelector('.timeline-block');

          gsap.to('.timeline-block', {
            x: () => workSection.scrollWidth * -1,
            xPercent: 100,
            scrollTrigger: {
              trigger: '.timeline-block',
              start: 'center center',
              start: '0% 15%',
              end: '+=1200px 10%',
              pin: timeline.current,
              scrub: 0.5,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }
      );
    },
    {
      scope: timeline,
    }
  );
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/about`;
  return (
    <>
      <NextSeo
        // title="Website And Mobile App Development Company | Web Development Services"
        // description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
        canonical={canonicalUrl}
      />
      <section className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
        <div className="pt-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 z-0 flex justify-center">
            <svg width="1202" height="1042" fill="none">
              <path
                stroke="#E1D8CE"
                d="M1201 0v1042M817 0v1042M283 0v1042M589 0v1042M1 0v1042"
              />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="pt-10 md:pt-[150px] pb-23">
              <div className="flex -mx-3 items-end flex-wrap">
                <div className="w-full md:w-2/3 px-3">
                  <div>
                    <h1 className="uppercase text-48 md:text-64 lg:text-[95px] leading-none mb-6">
                      Innovation, Excellence, &{' '}
                      <span className="font-bold">Commitment</span>
                    </h1>

                    <p>
                      Discover Unmatched Excellence in Web and Mobile
                      Development
                    </p>

                    <div className="pt-1 md:pt-30 flex justify-between md:items-end lg:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                      <div className="text-primary uppercase">
                        [Data visualisation]
                      </div>
                      <div className="text-primary uppercase">
                        [Mobile development]
                      </div>
                      <div className="text-primary uppercase">
                        [Web development]
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 px-3">
                  <div className="pt-12 md:pt-0">
                    <img src="/img/about-thumb.webp" alt="mariox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" ref={typeSection}>
        <div className="container">
          <div className="flex -mx-3 flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-2/3 px-3">
              <h2 className="text-32 md:text-48 uppercase type-effect">
                We synergize cutting-edge technology, strategic insights,
                captivating design, and compelling content to propel brands to
                new heights in the digital landscape.
              </h2>
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <p className="text-primary uppercase">[mission & Vision]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0 overflow-hidden" ref={timeline}>
        <div className="container">
          <Heading icon className="mb-10">
            Backend story
          </Heading>
        </div>

        <div className="border-t border-t-primary">
          <div className="container">
            <div className="flex h-full timeline-block gap-6">
              {[
                {
                  title: '[Founded]',
                  description:
                    'Founded by Mr Mohit Garg & Rahul Garg with an aim to fill the gaps between business needs and the digital world',
                  image: '/img/founded.webp',
                },
                {
                  title: '[Our vision]',
                  description:
                    'Mariox Software Pvt. Ltd. envisions a better tomorrow where innovation extends beyond boundaries.',
                  image: '/img/our-vision.webp',
                },
                {
                  title: '[Our Mission]',
                  description:
                    'At Mariox Software Pvt. Ltd., we aspire to empower businesses with evolving technological solutions that improve ',
                  image: '/img/our-mission.webp',
                },
              ].map(({ title, description, image }, index) => (
                <div key={index} className="min-w-full md:min-w-[41%] -mt-2">
                  <div className="w-4 h-4 mb-4 bg-primary" />

                  <div className="text-primary text-12 mb-4 uppercase">
                    {title}
                  </div>
                  <p className="mb-12 max-w-[282px]">{description}</p>

                  <div className="w-[180px] aspect-square overflow-hidden">
                    <img src={image} alt="mariox" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-0 relative">
        <div className="container">
          <div className="flex -mx-3 flex-wrap items-end mb-12 gap-8 md:gap-0">
            <div className="w-full md:w-2/3 px-3">
              <div className="xl:w-[calc(100%+(100vw-1200px)/2)] xl:translate-x-[calc((-100vw+1200px)/2)]">
                <img
                  src="/img/team-group-image.webp"
                  className="w-full"
                  alt="mariox"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <div>
                <img src="/img/about-thumb-3.webp" alt="mariox" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-32 md:text-48 uppercase">
              Crafting Technology with Purpose, Unveiling Our Philosophical
              Foundations and Guiding Principles
            </h2>
          </div>
        </div>
      </section>

      <section className="border-t border-t-secondary">
        <div className="container ">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-r border-r-secondary pointer-events-none hidden md:grid">
              <div className="h-full w-[1px] bg-secondary"></div>
              <div className="h-full w-[1px] bg-secondary"></div>
              <div className="h-full w-[1px] bg-secondary "></div>
              <div className="h-full w-[1px] bg-secondary hidden lg:block"></div>
            </div>
            <div className="text-primary text-12 uppercase">[Our Team]</div>

            <div className="py-15 md:pt-[220px] md:pb-[150px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14 md:gap-y-[120px] relative z-10">
              {[
                {
                  memberName: 'Rahul Garg',
                  memeberDesignation: 'CEO',
                  memberImg: '/img/rahul-garg.webp',
                },
                {
                  memberName: 'Mohit Garg',
                  memeberDesignation: 'MANAGING DIRECTOR',
                  memberImg: '/img/mohit-garg.webp',
                },
                {
                  memberName: 'Akash Bhardwaj',
                  memeberDesignation: 'SALES HEAD',
                  memberImg: '/img/akash-bhardwaj.webp',
                  typeTwo: true,
                },
                {
                  memberName: 'Parveen Jakhar',
                  memeberDesignation: 'SR. DEVELOPER',
                  memberImg: '/img/parveen-jakhar.webp',
                  typeThree: true,
                },
                {
                  memberName: 'Rahul Tiwari',
                  memeberDesignation: 'SEO TEAM LEAD',
                  memberImg: '/img/rahul-tiwari.webp',
                  typeThree: true,
                },
                {
                  memberName: 'Ishant Sharma',
                  memeberDesignation: 'SR SEO SPECIALIST',
                  memberImg: '/img/ishant-sharma.webp',
                  typeThree: true,
                },
                {
                  memberName: 'Akshay',
                  memeberDesignation: 'SEO OUTREACH SPECIALIST',
                  memberImg: '/img/akshay.webp',
                  typeTwo: true,
                },
                {
                  memberName: 'Trisha',
                  memeberDesignation: 'CONTENT WRITER',
                  memberImg: '/img/akshay-2.webp',
                  typeTwo: true,
                },
                {
                  memberName: 'Ekta',
                  memeberDesignation: 'HUMAN RESOURCES',
                  memberImg: '/img/ekta.webp',
                  typeThree: true,
                },
                {
                  memberName: 'Saurabh Sharma',
                  memeberDesignation: 'SUPPLY AND OPS LEAD',
                  memberImg: '/img/saurabh-sharma.webp',
                  typeTwo: true,
                },
                {
                  memberName: 'Tulsi',
                  memeberDesignation: 'CUSTOMER SUPPORT',
                  memberImg: '/img/tulsi.webp',
                  typeThree: true,
                },
                {
                  memberName: 'Laxmi',
                  memeberDesignation: 'CUSTOMER SUPPORT',
                  memberImg: '/img/laxmi.webp',
                  typeThree: true,
                },
              ].map(
                (
                  {
                    memberName,
                    memeberDesignation,
                    memberImg,
                    typeTwo,
                    typeThree,
                  },
                  index
                ) => (
                  <div key={index} className={typeThree ? 'md:text-right' : ''}>
                    <div
                      className={`group inline-block text-left ${typeTwo ? 'md:pl-6' : ''
                        } `}
                    >
                      <div className="w-[180px] aspect-square overflow-hidden relative  mb-4">
                        <img
                          src={memberImg}
                          className="grayscale"
                          fill
                          alt="mariox"
                        />

                        <div className="absolute inset-0 w-full h-full bg-primary/30 group-hover:opacity-0 duration-500 ease-out"></div>
                      </div>

                      <div>
                        <div className="text-16 uppercase mb-2">
                          {memberName}
                        </div>
                        <div className="text-14 uppercase">
                          {memeberDesignation}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-black">
        <div className="container">
          <Heading icon className="mb-25 text-white">
            Core values
          </Heading>

          <div className="grid md:grid-cols-2 gap-x-[126px] gap-y-16 pr-[8%]">
            {[
              {
                title: 'Innovation',
                description:
                  'We embrace innovation as a driving force behind everything we do. We continuously seek new ideas, technologies, and approaches to solve complex problems and deliver cutting-edge solutions to our clients. Innovation fuels our creativity and propels us forward in a rapidly evolving industry.',
              },
              {
                title: 'Integrity',
                description:
                  'We uphold the highest standards of integrity in all aspects of our business. Honesty, transparency, and ethical behavior are non-negotiable principles that govern our interactions with clients, partners, and colleagues. We believe that integrity builds trust and fosters strong, long-lasting relationships.',
              },
              {
                title: 'Collaboration',
                description:
                  'Collaboration is at the heart of our success. We believe in the power of teamwork and leverage the diverse skills and perspectives of our team members to achieve common goals. By fostering an environment of trust, respect, and open communication.',
              },
              {
                title: 'Excellence',
                description:
                  'We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for excellence in every aspect of our business. We set high standards for ourselves and continuously raise the bar to exceed expectations and deliver exceptional results for our clients.',
              },
            ].map(({ title, description }, index) => (
              <div key={index}>
                <div className="flex justify-between gap-4 items-center mb-8">
                  <h3 className="text-24 uppercase text-white">{title}</h3>

                  <span className="text-primary text-14">
                    {`0${index + 1}`}
                  </span>
                </div>

                <p className="text-white text-14 leading-[140%]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default About;
