import React from 'react';
import Heading from '../Heading/Heading';

const ProcessSection = ({ heading, noTopBar, data }) => {
  return (
    <section className={noTopBar ? '' : 'section-pad !pb-0'}>
      {noTopBar ? (
        ''
      ) : (
        <>
          <div className="border-b border-b-black/10">
            {/* <div className="container">
              <h2 className="text-[28px] md:text-48 uppercase pb-15">
              In what ways do we deal {' '}
                <span className="text-primary">with
                Mobile </span> App Development
              </h2>
            </div> */}

            <div className="container">
              <p className="text-[28px] md:text-48 uppercase pb-15">
                In what ways do we deal {' '}
                <span className="text-primary">with
                  Mobile </span> App Development
              </p>
            </div>

          </div>
        </>
      )}

      <div className="">
        <div className="container">
          <div className="flex -mx-3 flex-wrap">
            {/* <div className="w-full md:w-[41%] px-3">
              <Heading
                className="mb-6 pt-15 md:sticky top-15 heading-medium"
                icon
              >
                {heading ? heading : 'The Process'}
              </Heading>
            </div> */}


            <div className="w-full md:w-[41%] px-3">
              <div className="mb-6 pt-15 md:sticky top-15 heading-medium flex items-center gap-2 text-3xl font-semibold text-black">
                {/* Include the icon manually here if the original Heading includes one */}
                <span>{heading ? heading : 'The Process'}</span>
              </div>
            </div>


            <div className="w-full md:w-[59%] px-3">
              {(
                data || [
                  {
                    processIcon: '/img/diamond-shape.svg',
                    processTitle: 'Client Meeting',
                    processDesc:
                      'When our clients reach out to us, we sit with them to comprehensively understand their business module and the motive behind getting an application. We understand what type of application they seek so that our team can craft aptly resonating application development services for them. We learn about their industry, competitors, challenges, market scope, and every other important information that can impact application development results.',
                  },
                  {
                    processIcon: '/img/diamond-shape.svg',
                    processTitle: 'Strategy and Prototypes',
                    processDesc:
                      'After we are done with the client, their project is our responsibility. Our team of developers uses their expertise and brainstorming to find the best application development tools and technologies. Our team prepares a prototype comprised of the complete design and development process, and with the client’s approval, we start working on it.',
                  },
                  {
                    processIcon: '/img/diamond-shape.svg',
                    processTitle: 'Development and Designing',
                    processDesc:
                      'To ensure that the complete website development process has been well-performed and does not leave with any glitches, our testers check out the application’s efficiency and overall functionality. Once everything is good, the application is suitable for delivery.',
                  },
                  {
                    processIcon: '/img/diamond-shape.svg',
                    processTitle: 'Track and Maintenance',
                    processDesc:
                      'That’s not it! Our services are beyond delivery. We support our clients with post-delivery maintenance and support services where we track application performance results and help with additional benefits.',
                  },
                ]
              ).map(({ processTitle, processDesc, processIcon }, index) => (
                <div
                  key={index}
                  className="bg-primary px-6 md:px-9 pt-10 pb-16 flex gap-15 md:gap-24 md:min-h-[35vh] lg:min-h-[50vh] text-white border-b border-b-secondary after:bg-primary after:absolute md:after:left-full after:top-0 after:bottom-0 content-[''] after:h-full after:w-[calc(100%+32px)] md:after:w-4 xl:after:w-[calc((100vw-1220px)/2)] sticky top-0 after:-left-4"
                  style={{ zIndex: index + 1 }}
                >
                  <div className="text-32 md:text-72 font-light leading-none relative z-10">
                    0{index + 1}
                  </div>

                  <div className="flex flex-col relative z-10">
                    <div className="mb-8">
                      <img src={processIcon} className="w-8 md:w-auto" alt="mariox" />
                    </div>

                    <p className="text-16 font-semibold text-white">
                      {processTitle}
                    </p>

                    <div className="flex-1 flex items-end">
                      <p className="text-12 mb-0 text-white max-w-[384px]">
                        {processDesc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
