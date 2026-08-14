import React from 'react';

const AnimatedCards = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start pt-0 md:pt-10">
      {(
        data || [
          {
            whyTitle: 'Certified Professional & Experts',
            whyContent:
              'Being a certified and experienced Mobile App and Website Development agency in India, we have a team of certified experts who are highly skilled in their league.',
            animatePos: -10,
          },
          {
            whyTitle: <>We&apos;re fast, Accurate & Reliable</>,
            whyContent:
              'Investing in a company to maximize a business’s growth is one of the huge intangible decisions one can make. But Mariox Software Pvt. Ltd. has been a trustworthy destination for all its consumers',
            animatePos: -25,
          },
          {
            whyTitle: 'We support you round the clock',
            whyContent:
              'We understand you might have doubts while investing in a company handing over your brand harness to maximize its worth. As a responsible Mobile App and Website Development Company in Noida',
            animatePos: -40,
          },
        ]
      ).map(({ whyTitle, whyContent, animatePos }, index) => (
        <div
          key={index}
          className={`bg-primary p-9 min-h-[388px] md:min-h-[440px] flex flex-col why-mariox-card`}
          style={{ marginTop: index * 95 + 'px' }}
          data-animate
          data-animate-y={animatePos}
          data-animate-trigger=".why-mariox-section"
        >
          <h3 className="text-24 max-w-[80%] text-white">{whyTitle}</h3>

          <div className="flex-1 flex items-end">
            <p className="mb-0 text-14 md:text-16 text-white">{whyContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCards;
