import React from 'react';

const serviceDefault = [
  {
    heading: 'iOS application development',
    description:
      'Design your first impression exaltedly! What if you get a beautifully designed website. Design your first impression exaltedly! What if you get a beautifully designed website.',
    image: '/img/ios-app-dev.webp',
    features: [
      {
        featureSingle: '[iOS app development]',
      },
      {
        featureSingle: '[iOS Software testing]',
      },
      {
        featureSingle: '[Enterprise ios Apps]',
      },
      {
        featureSingle: '[Fluter app development]',
      },
    ],
  },
];

const ServiceDetailCard = ({
  serviceData,
  cardBg,
  imageBg,
  sideSquareBg,
  whiteContent,
  serviceIcon,
}) => {
  return (
    <>
      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`flex flex-wrap gap-6 relative ${
            cardBg ? cardBg : 'bg-secondary'
          }`}
        >
          <div
            className={`absolute w-5 h-5 bottom-0 left-0 ${
              sideSquareBg ? sideSquareBg : 'bg-primary'
            }`}
          ></div>
          <div className="flex-1">
            <div className="p-6 md:p-8 lg:p-16 relative">
              <div className="mb-8">
                {serviceIcon ? (
                  <img src={serviceIcon} alt="mariox" />
                ) : (
                  <svg
                    className="duration-700 ease-elastic group-hover:rotate-180 origin-center w-[58px] h-auto"
                    width="59"
                    height="59"
                    fill="none"
                    viewBox="0 0 59 59"
                  >
                    <path
                      stroke={whiteContent ? '#fff' : '#E43C13'}
                      d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                    />
                  </svg>
                )}
              </div>

              <h2
                className={`text-24 mb-6 ${whiteContent ? 'text-white' : ''}`}
              >
                {service.heading}{' '}
              </h2>

              <p className={`text-12 mb-7 ${whiteContent ? 'text-white' : ''}`}>
                {service.description}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {service.features?.map((serviceFeature, index) => (
                  <div
                    key={index}
                    className={` text-12 uppercase ${
                      whiteContent ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {serviceFeature.featureSingle}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {service.image ? (
            <div className="w-full md:w-1/3">
              <div
                className={`p-6 lg:px-11 lg:py-10 grid place-content-center h-full ${
                  imageBg ? imageBg : 'bg-black'
                }`}
              >
                <img src={service.image} alt="mariox" />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </>
  );
};

export default ServiceDetailCard;
