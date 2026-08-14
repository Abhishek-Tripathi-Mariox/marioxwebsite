import Link from 'next/link';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';

const FeaturedWork = ({
  initialText,
  projectType,
  projectLink,
  projectName,
  projectThumb,
}) => {
  const workSingle = useRef();

  console.log("projectThumb",projectThumb)

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

          // const workWrapper = workSingle.current;

          if (window.innerWidth > 1200) {
            workSingle.current
              .querySelectorAll('.work-text-anim')
              .forEach((line) => {
                let text = new SplitText(line, { type: 'words' });
                let letters = text.words; //an array of all the divs that wrap each character

                var action = gsap
                  .timeline({ paused: true, overwrite: true })
                  .from(letters, {
                    duration: 0.5,
                    autoAlpha: 0,
                    y: 20,
                    ease: 'power2.out',
                    stagger: 0.05,
                  });

                workSingle.current.addEventListener('mouseenter', () => {
                  action.timeScale(1).play();
                });
                workSingle.current.addEventListener('mouseleave', () => {
                  action.timeScale(2).reverse();
                });
              });
          }
        }
      );
    },
    {
      scope: workSingle,
    }
  );
  return (
    <div className="work-single" ref={workSingle}>
      <div className="w-full aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden relative group">
        <img src={projectThumb} alt="mariox" className="w-full h-full object-cover" />

        <div className="absolute bottom-6 left-6 bg-primary w-[212px] h-[212px] xl:grid place-content-center duration-1000 ease-elastic group-hover:w-23 group-hover:h-23 group-hover:bottom-[270px] group-hover:left-[270px] hidden">
          <span className="text-white text-48 ">
            {' '}
            &#123;{initialText}&#125;{' '}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 bg-primary w-6 h-6 duration-1000 ease-elastic group-hover:w-[270px] group-hover:h-[270px] hidden xl:block"></div>
        <div className="absolute bottom-0 left-0 w-[180px]  md:w-[270px] aspect-square p-4 md:p-10 flex flex-col bg-primary xl:bg-transparent">
          <div className="text-12 mb-4 text-white work-text-anim">
            {projectName}
          </div>
          <div className="text-14 mb-4 text-white work-text-anim">
            &#123;{projectType}&#125;
          </div>
          <Link
            href={projectLink}
            className="text-14 mb-4 flex-1 flex items-end text-white work-text-anim"
          >
            &#123; VIEW&nbsp;PROJECT&#125;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
