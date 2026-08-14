import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import { ScrollSpeedMarquee } from '../Marquee/ScrollSpeedMarquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

const csThumbs = [
  {
    csThumb: '/img/home-hero-numberdekho.jpg',
  },
  {
    csThumb: '/img/home-hero-numberdekho-2.jpg',
  },
];

const HomeHeroSection = () => {
  const container = useRef();
  const placeholderContainer = useRef();
  const videoContainer = useRef();
  const finalPosition = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width:768px)', () => {

        const videoheight =
          placeholderContainer.current.getBoundingClientRect().height;

        // gsap.set(videoContainer.current, {
        //   x: placeholderContainer.current.getBoundingClientRect().left,
        //   width: placeholderContainer.current.getBoundingClientRect().width,
        //   y: placeholderContainer.current.offsetTop - videoheight,
        // });
        gsap.fromTo(
          videoContainer.current,
          {
            x: placeholderContainer.current.getBoundingClientRect().left,
            width: placeholderContainer.current.getBoundingClientRect().width,
            y:
              placeholderContainer.current.getBoundingClientRect().top +
              window.scrollY -
              10,
          },

          {
            x: finalPosition.current.getBoundingClientRect().left,
            width: finalPosition.current.getBoundingClientRect().width,
            y: finalPosition.current.offsetTop,
            scrollTrigger: {
              trigger: '.hero-area',
              start: '0% 0%',
              end: '100% 10%',
              scrub: 0.5,
              // markers: true,
            },
          }
        );
      });
      return () => {
        mm.kill();
      };
    },
    { scope: container.current }
  );

  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of active slide index

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % csThumbs.length); // Increment active index cyclically
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);
  return (
    <section
      className="bg-secondary relative overflow-hidden pt-18"
      ref={container}
    >
      <div className="absolute inset-0 z-0 flex justify-center">
        <svg width="1202" height="721" fill="none">
          <path
            stroke="#E1D8CE"
            d="M1201 0v721M817 0v721M283 0v721M589 0v721M1 0v721"
          />
        </svg>
      </div>
      <div className="border-y border-y-black py-3 relative z-10">
        <ScrollSpeedMarquee duration={30} elementSpacing="gap-3">
          <div>
            <p className="mb-0 text-12">
              Mariox Software Pvt. Ltd: Where Innovation Meets Expertise -
              Crafting Stellar Websites and Mobile Apps.
            </p>
          </div>
          <div>
            <p className="mb-0 text-12">
              Mariox Software Pvt. Ltd: Where Innovation Meets Expertise -
              Crafting Stellar Websites and Mobile Apps.
            </p>
          </div>
          <div>
            <p className="mb-0 text-12">
              Mariox Software Pvt. Ltd: Where Innovation Meets Expertise -
              Crafting Stellar Websites and Mobile Apps.
            </p>
          </div>
        </ScrollSpeedMarquee>
      </div>
      <div className="hero-area">
        <div className="container relative z-10">
          <h1 className="py-8 md:py-19 uppercase text-[44px] lg:text-[90px] ">
            Transforming{' '}
            <div
              className="aspect-[2/0.8] w-[200px] md:inline-block align-middle hidden "
              ref={placeholderContainer}
            ></div>
            Ideas{' '}
            <div className="md:block inline textContainer">
              into <span className="font-bold">Digital Reality</span>
            </div>
          </h1>

          <p className="block md:hidden">
            Discover Unmatched Excellence in Web and Mobile Development
          </p>
          <Button href="/contact">CONTACT US</Button>

          <div className="md:flex justify-between pb-8 items-end hidden ">
            <div>
              Discover Unmatched Excellence in Web and Mobile Development
            </div>

            <div>
              <div className="relative aspect-square w-[180px]">
                <Link href="/case-study/numberdekho">
                  {csThumbs.map(({ csThumb }, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 duration-300 ease ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={csThumb}
                        className="w-full h-full object-cover"
                        alt="mariox"
                      />
                    </div>
                  ))}
                </Link>
              </div>
              <div className="text-primary pt-4">
                &#123; Check latest case study &#125;
              </div>
            </div>

            <div className="text-primary">&#123; SCROLL DOWN &#125;</div>
          </div>
        </div>
      </div>

      <div
        className="origin-top overflow-hidden absolute top-0 hidden md:block aspect-[2/0.8]"
        ref={videoContainer}
      >
        <video
          src="/img/hero-video.mp4"
          className="w-full"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className="origin-top overflow-hidden md:opacity-0  aspect-[2/0.8] mt-9 md:mt-0 relative z-20 "
        ref={finalPosition}
      >
        <video
          className="w-full h-full object-cover"
          src="/img/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default HomeHeroSection;
