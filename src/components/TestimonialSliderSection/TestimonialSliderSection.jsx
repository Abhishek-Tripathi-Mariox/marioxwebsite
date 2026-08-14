import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import { arrowLeft, arrowRight } from '@/utils/navLinks';

const TestimonialSliderSection = ({ className, data }) => {
  const testimonialSlideRef = useRef();
  const testimonialSliderContainer = useRef();
  useEffect(() => {
    const mobile = window.innerWidth < 768;

    if (!testimonialSlideRef.current && testimonialSliderContainer.current) {
      testimonialSlideRef.current = tns({
        container: testimonialSliderContainer.current,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: false,

        controlsPosition: 'bottom',
        controlsText: [arrowLeft, arrowRight],
        speed: 800,
        nav: false,
        autoplay: false,
        gutter: 24,
        responsive: {
          0: {
            items: 1,
            gutter: 0,
            controls: true,
          },
          768: {
            items: 1,
            controls: true,
          },
          1200: {
            items: 2,
            controls: true,
          },
        },
      });
    }
  }, []);

  return (
    <section className={`bg-secondary section-pad ${className}`}>
      <div className="container">
        {/* <Heading icon className="mb-16">
          Our Clients <span className="text-primary">&#123;Love&#125;</span> us
        </Heading> */}

        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-4xl sm:text-7xl font-semibold text-black">
          {/* Insert icon here manually if needed */}
          <span>
            Our Clients <span className="text-primary">{'{Love}'}</span> us
          </span>
        </div>

        <div className="top-controls border-controls tns-arrows-mobile testimonial-controls">
          <div
            className="blog-slider border border-secondary"
            ref={testimonialSliderContainer}
          >
            {data && data.map(({ profilePicture, name, testimonial, designation }, index) => (
              <div key={index} className="item">
                <div className="flex flex-wrap md:flex-nowrap gap-6 mb-6 justify-center md:justify-start">
                  {profilePicture && <div className="w-[110px] md:w-[180px] relative flex mb-5 md:mb-0">
                    <div className="absolute w-6 h-6 bg-primary translate-x-full translate-y-full bottom-0 right-0"></div>

                    <div className="w-full aspect-square overflow-hidden  relative">
                      <img
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}${profilePicture}`}
                        className="w-ful h-full object-cover"
                        alt={name}
                      />
                    </div>
                  </div>}
                  <div className="w-full md:flex-1 text-center md:text-left">
                    <p className="text-14 mb-5 md:pr-15">{testimonial}</p>
                    <div className="text-14 text-primary leading-[150%]">
                      {name}
                      <br />
                      <span className="text-black">{designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderSection;
