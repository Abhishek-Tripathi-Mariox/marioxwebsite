import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import { arrowLeft, arrowRight } from '@/utils/navLinks';

const serviceContent = [
  {
    serviceHeading: 'App development',
    serviceDesc:
      'As a proficient App Development Company, we are known for providing high-quality experience with our built apps on different portable devices. We understand the true potential of an app and its benefits to flourish your business. Developing an app that depicts your vision',
  },
  {
    serviceHeading: 'Web Development',
    serviceDesc:
      'Design your first impression exaltedly! What if you get a beautifully designed website that attracts clients in the first blink? Why go anywhere when Mariox is here? We are an excellent Web development company where our experts create enthralling websites for your business, ensuring your users have.',
  },
  {
    serviceHeading: 'Android App Development',
    serviceDesc:
      'Experience the true potential of an Android app with our Android app development services, where our professionals tailor the app as per your needs, delivering outstanding results that will nourish your consumers with a seamless and innovative mobile app experience.',
  },
  {
    serviceHeading: 'iOS App Development',
    serviceDesc:
      'At Mariox Software, we specialize in crafting custom mobile applications tailored to your unique vision and business needs. Our team of experienced developers works closely with you to conceptualize, design, and develop high-quality mobile apps that resonate with your target audience.',
  },
  {
    serviceHeading: 'E-commerce',
    serviceDesc:
      'Your products need to be more visible and have a better appearance on digital platforms. We secure your trust with the best e-commerce App development services, offering your consumers a thrilling and influential experience.',
  },
];
const ServiceSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const serviceMain = useRef();
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          small: '(max-width: 767px)',
          large: '(min-width: 768px)',
        },
        (ctx) => {
          const { large } = ctx.conditions;
          let serviceSection = document.querySelector('.service-block');
          if (large) {
            gsap.to('.service-block', {
              x: () => serviceSection.scrollWidth * -1,
              xPercent: 100,
              scrollTrigger: {
                trigger: '.service-block',
                start: '0% 20%',
                end: '+=2000px 10%',
                pin: true,
                scrub: 0.5,
                // invalidateOnRefresh: true,
                // markers: true,
              },
            });
          }
        }
      );
    },
    {
      scope: serviceMain,
    }
  );

  const serviceSlideRef = useRef();
  const serviceSliderContainer = useRef();

  useEffect(() => {
    if (!serviceSlideRef.current && serviceSliderContainer.current) {
      serviceSlideRef.current = tns({
        container: serviceSliderContainer.current,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: false,

        controlsPosition: 'top',
        controlsText: [arrowLeft, arrowRight],
        speed: 800,
        nav: false,
        autoplay: false,
        gutter: 24,
        controlsPosition: 'bottom',
        responsive: {
          0: {
            items: 1,
            gutter: 0,
            controls: true,
          },
          768: {
            disable: true,
          },
          1200: {
            disable: true,
          },
        },
      });
    }
  }, []);
  return (
    <section className="section-pad " ref={serviceMain}>
      <div className="container">
        <Heading className="mb-6" icon>
          Our services
        </Heading>
      </div>
      <div className="overflow-hidden">
        <div className="container">
          <div className="service-wrapper-main">
            <div className="service-wrapper slider-overflow-visible controls-center">
              <div
                className={`md:flex service-block `}
                ref={serviceSliderContainer}
              >
                {serviceContent.map(
                  ({ serviceHeading, serviceDesc }, index) => (
                    <div className="item" key={index}>
                      <div className="p-4 border border-secondary border-r-0 last:border-r-secondary last:border-r  md:min-w-[400px] md:min-h-[392px] flex service-single">
                        <div className="p-8 flex flex-col bg-secondary duration-500 ease-out group hover:bg-primary hover:translate-x-4 hover:-translate-y-4 relative">
                          <div className="mb-6 inline-block ">
                            <svg
                              width="59"
                              height="59"
                              fill="none"
                              className="elastic-transition group-hover:rotate-[360deg] origin-center"
                            >
                              <path
                                className="duration-500 ease-out group-hover:stroke-white"
                                stroke="#E43C13"
                                d="M29.25 0v58.5M58.5 29.25H0m8.567 20.683L49.933 8.567m0 41.366L8.567 8.567"
                              />
                            </svg>
                          </div>

                          <h3 className="text-20 md:text-24 mb-8 md:mb-4 duration-500 ease-out group-hover:text-white">
                            {serviceHeading}
                          </h3>

                          <div className="flex-1 flex items-end">
                            <p className="text-12 mb-0 duration-500 ease-out group-hover:text-white">
                              {serviceDesc}
                            </p>
                          </div>

                          <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary group-hover:bg-white z-0 duration-500 ease-out "></div>
                          <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary z-10 duration-500 ease-out group-hover:bg-primary group-hover:-translate-x-4 group-hover:translate-y-4"></div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
