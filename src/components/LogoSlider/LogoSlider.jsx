import React from 'react';
import { ScrollSpeedMarquee } from '../Marquee/ScrollSpeedMarquee';

const sliderDummyLogos = [
  {
    logoName: '/img/logo-1.png',
  },
  {
    logoName: '/img/logo-2.png',
  },
  {
    logoName: '/img/logo-3.png',
  },
  {
    logoName: '/img/logo-4.png',
  },
  {
    logoName: '/img/logo-5.png',
  },
  {
    logoName: '/img/logo-6.png',
  },
  {
    logoName: '/img/logo-7.png',
  },
];

const LogoSlider = ({ whiteBg, logos }) => {
  return (
    <section
      className={`pb-9 bg-repeat-x bg-left-bottom ${
        whiteBg
          ? 'bg-[url(/img/black-squares-pattern-2.svg)]'
          : 'bg-[url(/img/orange-squares-pattern.svg)]'
      }`}
    >
      <div className={` py-9 ${whiteBg ? '' : 'bg-primary'}`}>
        <ScrollSpeedMarquee
          duration={30}
          elementSpacing="gap-10 md:gap-[136px]"
        >
          {(logos || sliderDummyLogos).map(({ logoName }, index) => (
            <div key={index} className="">
              <img src={logoName} alt="mariox" />
            </div>
          ))}
        </ScrollSpeedMarquee>
      </div>
    </section>
  );
};

export default LogoSlider;
