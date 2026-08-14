import React, { useEffect, useRef } from 'react';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { arrowLeft, arrowRight } from '@/utils/navLinks';

const BlogSliderSection = () => {
  const blogSliderRef = useRef();
  const blogSliderContainer = useRef();
  useEffect(() => {
    if (!blogSliderRef.current && blogSliderContainer.current) {
      blogSliderRef.current = tns({
        container: blogSliderContainer.current,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: false,

        controlsPosition: 'top',
        controlsText: [arrowLeft, arrowRight],
        speed: 800,
        nav: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
            gutter: 0,
            controls: true,
          },
          768: {
            items: 2,
            gutter: 0,
            controls: true,
          },
          1200: {
            items: 2,
            gutter: 0,
            controls: true,
          },
        },
      });
    }
  }, []);

  return (
    <section className="section-pad !pt-8 overflow-hidden">
      <div className="container">
        <Heading icon className=" mb-5 md:mb-2">
          Blogs
        </Heading>

        <div className="slider-overflow-visible top-controls">
          <div
            className="blog-slider border border-secondary"
            ref={blogSliderContainer}
          >
            {[...Array(7)].map((_, index) => (
              <div key={index} className="item">
                <div className="p-5 md:p-8 border-r border-secondary overflow-hidden group">
                  <div className="duration-500 ease-out xl:group-hover:h-[250px] h-[180px] md:h-[302px] flex">
                    <div className="overflow-hidden">
                      <img
                        src="/img/blog-thumb.webp"
                        className="w-full h-full md:h-[302px] object-cover xl:group-hover:-translate-y-10 duration-500 ease-out"
                        alt="mariox"
                      />
                    </div>
                  </div>
                  <div className="bg-white relative overflow-hidden xl:group-hover:pb-16 duration-500 ease-out">
                    <div className="pt-4 pb-4 md:pb-6 text-12">
                      Dec 22, 2023
                    </div>

                    <div className="text-16 md:text-24 max-w-[90%] leading-[130%] mb-0">
                      What is the Difference Between SEO and SEM, you need to
                      know everything?
                    </div>

                    <div className="xl:absolute -bottom-20 left-0 duration-700 ease-out xl:group-hover:bottom-0 pt-5 xl:pt-0">
                      <Button href="/">READ MORE</Button>
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

export default BlogSliderSection;
