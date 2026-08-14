import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';

import TechCard from '@/components/techCard/techCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
  {
    carddata: [
      {
        heading: 'Consultation and Assessment',
        description:
          'We start the process once any client comes to us by understanding their business model, requirements, areas of improvement, and expectations of the website. Basically, in this step, we try to sync with the client’s idea of getting e-commerce website services so that we can deliver them exceptional services.',
        image: '/img/ios-app-dev.webp',
      },
    ],
    serviceIcon: '/img/consultation-assesment.svg',
  },
  {
    carddata: [
      {
        heading: 'Design and Development',
        description:
          'Once the complete process is clear to us, we proceed with strategizing the complete process to take the project forward. Our team of developers curates compelling UI/UX designs for the website. Then, the backend development team ensures the smooth functioning of the app to serve a seamless experience to the app users.',
        image: '/img/ios-app-dev.webp',
      },
    ],
    serviceIcon: '/img/development.svg',
    cardBg: 'bg-white',
    imageBg: 'bg-secondary',
    sideSquareBg: 'bg-black',
  },
  {
    carddata: [
      {
        heading: 'Testing',
        description:
          'Upon completing the website, it becomes essential to check whether it is ready to be delivered and has no bugs, for which our testing team inspects the website and ensures that there are no bugs left. We rigorously validate every feature and functionality to ensure a seamless user experience.',
        image: '/img/ios-app-dev.webp',
      },
    ],
    serviceIcon: '/img/testing.svg',
    cardBg: 'bg-primary',
    imageBg: 'bg-white"',
    sideSquareBg: 'bg-white',
    whiteContent: true,
  },
  {
    carddata: [
      {
        heading: 'Delivery and Post Service Support',
        description:
          'The website is ready to be delivered after the team is completely satisfied and the client approves. We make the website live and offer our post-service maintenance support to the client, which entirely depends on the package chosen by the client. Our team keeps the success track of your application and work on maintaining its efficiency.',
        image: '/img/ios-app-dev.webp',
      },
    ],
    serviceIcon: '/img/delivery-2.svg',
  },
];

const FlutterAppDev = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/flutter-app.webp"} />
      <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
        <section className="bg-secondary pt-20 pb-22.5">
          <div className="container">
            <Breadcrumb items={data?.breadcrumb} />
            <div className="flex items-end gap-6 flex-wrap md:pt-[120px]">
              <div className="w-full md:w-7/12">
                <div className="py-10 md:py-0">
                  <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                    {data?.h1Text}
                  </h1>

                  <p className="max-w-[510px]">{data?.h1Desc}</p>

                  <div className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                    <Button href="/contact">CONTACT US</Button>

                    <div className="text-primary uppercase">
                      [Flutter app development]
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center relative">
                <div className="absolute top-0 left-0">
                  <svg width="8" height="8" fill="none">
                    <path
                      fill="#19232F"
                      fillRule="evenodd"
                      d="M8 2V0H0v8h2V2h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 -scale-x-100">
                  <svg width="8" height="8" fill="none">
                    <path
                      fill="#19232F"
                      fillRule="evenodd"
                      d="M8 2V0H0v8h2V2h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 -rotate-90">
                  <svg width="8" height="8" fill="none">
                    <path
                      fill="#19232F"
                      fillRule="evenodd"
                      d="M8 2V0H0v8h2V2h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 rotate-180">
                  <svg width="8" height="8" fill="none">
                    <path
                      fill="#19232F"
                      fillRule="evenodd"
                      d="M8 2V0H0v8h2V2h6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <img
                  src="/img/flutter-app.webp"
                  className="inline-block"
                  alt="mobile dev"
                  width={378}
                  height={378}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section-pad">
        <div className="container">
          <div className="">
            <h2 className="text-32 md:text-48  uppercase mb-8">
              {data?.h2Text}
            </h2>

            <p className="lg:max-w-[792px]">
              We have a team of proficient Flutter developers from across the
              globe who code Flutter applications to boost your business reach
              and leads. For us, our clients are our most significant assets,
              and we offer them the best Flutter app development services at a
              feasible cost with no compromise on quality. Being the most
              trusted Flutter app development company worldwide, we assure
              timely delivery of all the projects and post-delivery project
              maintenance services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 pt-10">
            {[
              {
                serviceIcon: '/img/simplified-payment-method.svg',
                serviceHeading: 'Simplified Payment methods',
                serviceDesc:
                  'Payment and checkout hassles can be a major drawback for companies. Our developers prioritize creating secure, smooth payment processes by integrating multiple payment methods. We ensure effortless transactions, enhancing the overall customer experience.',
              },
              {
                serviceIcon: '/img/bug-free.svg',
                serviceHeading: 'Bug-Free & Fast Speed',
                serviceDesc:
                  'Say goodbye to glitches with our expertly developed Flutter applications. Our team designs premium apps that are free from bugs and optimized for high performance, ensuring a smooth and fast user experience that keeps your audience engaged and satisfied.',
              },
              {
                serviceIcon: '/img/updates-alerts.svg',
                serviceHeading: 'Integration for Updates & Alerts',
                serviceDesc:
                  'Stay informed with timely, non-intrusive notifications about new versions, updates, and important alerts. We ensure app functionality that respects user experience, providing essential updates without overwhelming the user, contributing to a seamless and positive app journey.',
              },
            ].map(({ serviceHeading, serviceDesc, serviceIcon }, index) => (
              <div className="item" key={index}>
                <div className="p-4 border border-secondary border-r-0 last:border-r-secondary last:border-r h-full flex service-single">
                  <div className="p-8 flex flex-col bg-secondary duration-500 ease-out group  relative">
                    <div className="mb-6 inline-block ">
                      <img src={serviceIcon} alt="mariox" />
                    </div>

                    <h3 className="text-20 md:text-24 mb-8 md:mb-4 duration-500 ease-out ">
                      {serviceHeading}
                    </h3>

                    <div className="flex-1 flex items-end">
                      <p className="text-12 mb-0 duration-500 ease-out ">
                        {serviceDesc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary  z-0 duration-500 ease-out "></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary z-10 duration-500 ease-out "></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 ">
              <h2 className="text-32 md:text-48  uppercase mb-16  sticky top-15">
                Determine the Potent Flutter App Development Service for Your
                Business
              </h2>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    icons: '/img/smartphone-app-dev.svg',
                    title: 'Flutter App Development Consulting',
                    description:
                      'We offer premium Flutter app development in ' + data.cityName + ' consultations, helping you in acquiring a quality platform and visible presence. Our proficient team of developers code user-friendly and potent performing flutter applications that complement your business and market trends.',
                  },
                  {
                    icons: '/img/ios-ui-ux.svg',
                    title: 'Flutter App UI/UX Design',
                    description:
                      'Our Flutter app development in ' + data.cityName + ' team offers expert UI/UX design services. We understand your business and requirements the right way. Incorporating the best designs into your Flutter application, they design modern yet easy-to-use cross-platform app designs.',
                  },
                  {
                    icons: '/img/delivery-2.svg',
                    title: 'Flutter App Maintenance and Support',
                    description: (
                      <>
                        Our ongoing maintenance and support services for Flutter app development in {data.cityName} keep your Flutter app updated, glitch-free, and secure.
                        We ensure seamless performance and feature enhancements to maintain a high-quality user experience over time.
                      </>
                    ),
                  },

                  {
                    icons: '/img/ios-orange.svg',
                    title: 'iOS App Development',
                    description: (
                      <>
                        Our Flutter app development in {data.cityName} experts specialize in creating stunning,
                        customizable user interfaces. Using Flutter plugins, we seamlessly integrate native iOS APIs,
                        delivering apps that combine beauty with functionality.

                      </>
                    ),
                  },
                  {
                    icons: '/img/cross-platform.svg',
                    title: 'Cross-Platform App Development',
                    description:
                      'With Flutter app development in ' + data.cityName + ', you get premium-quality cross-platform apps that perform impeccably on all types of devices without any glitches. Now, reach the maximum audience, spending less money and saving more time.',
                  },
                  {
                    icons: '/img/testing-2.svg',
                    title: 'Flutter App QA and Testing',
                    description:
                      'Mariox offers top-notch Flutter app development in ' + data.cityName + ' With the help of Flutter’s encryption libraries, we inspect your applications and ensure their smooth speed and stringent security. ',
                  },
                ].map(({ title, description, icons }, index) => (
                  <div className="" key={index}>
                    <TechPageCard
                      padding
                      key={index}
                      number={`${index <= 8 ? '0' : ''}${index + 1}`}
                      title={title}
                      icon={icons}
                      description={description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className=" mb-12">
            <Heading icon className="heading-medium mb-8">
              Most Trusted Flutter Application <br /> Development Agency
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              As the most reliable Flutter app development company, we have a
              successful track record of several happy clients. Our proficient
              developers code Flutter apps in a way that delivers visible
              results. Flutter applications with seamless functionality for all
              types of devices, such as Android, iOS and Hybrid.
            </p>
          </div>
        </div>

        <div className="md:border-t md:border-t-primary ">
          <div className="container">
            <div className="grid md:grid-cols-3  gap-6">
              {[
                {
                  title: '[Free Consultation]',
                  description:
                    'Confused if you could afford our consultation sessions. Don’t worry! They are apt to your budget. Moreover, get your hands on our free consultation services, where our experts will connect with you and brief you about all the perks of a flutter-based application.',
                },
                {
                  title: '[360 Scalability]',
                  description: (
                    <>
                      Why just maximise business reach through an immersive
                      platform? Think big! Who knows if you are one of the
                      upcoming business tycoons in your industry? We can ensure
                      that with your holistic growth. Check out our services:
                      Mobile App Development, and various other solutions.
                    </>
                  ),
                },
                {
                  title: '[24/7 Support & On-Time Delivery]',
                  description: (
                    <>
                      No more waste of time; we are precise and up to our word.
                      That’s what has made us earn our clients&apos; trust and
                      made us a reliable flutter app development agency. With
                      standard flutter app development, we assure our clients of
                      timely delivery
                    </>
                  ),
                },
              ].map(({ title, description, image }, index) => (
                <div key={index} className=" -mt-2">
                  <div className="w-4 h-4 mb-4 bg-primary" />

                  <div className="text-primary text-12 mb-4 uppercase">
                    {title}
                  </div>
                  <p className="mb-12 max-w-[282px]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-black section-pad`}>
        <div className="container">
          <Heading className="heading-medium text-white mb-14" icon>
            Technologies We Primarily Rely Upon
          </Heading>

          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  techName: 'iOS',
                  techIcon: '/img/ios.png',
                  link: '/ios-app-development',
                },
                {
                  techName: 'React',
                  techIcon: '/img/react.png',
                },
                {
                  techName: 'Flutter',
                  techIcon: '/img/flutter.png',
                },
                {
                  techName: 'Xamarin',
                  techIcon: '/img/xamarian.png',
                },
                {
                  techName: 'Android',
                  techIcon: '/img/android.png',
                  link: '/android-app-development'
                },
                {
                  techName: 'Python',
                  techIcon: '/img/python.png',
                },
                {
                  techName: 'Ruby',
                  techIcon: '/img/ruby.png',
                },
                {
                  techName: 'Ionic',
                  techIcon: '/img/ionic.png',
                },
              ].map(({ techName, techIcon, link }, index) => (
                <TechCard
                  key={index}
                  techName={techName}
                  techImage={techIcon}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <h2 className="text-24 md:text-48  uppercase mb-8 md:mb-16 max-w-[690px]">
            In what we deal with Flutter App Development
          </h2>
        </div>

        <div>
          <img src="/img/flutter-dev.webp" className="w-full" alt="mariox" />
        </div>

        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 border-black/10 border border-r-0">
            {[
              {
                icon: '/img/client-meeting-2.svg',
                heading: 'Client Meeting',
                subtext: (
                  <>
                    With the client meeting, we meet with their vision and
                    mission behind getting the application designed. As your
                    reliable Flutter app development company, we believe that
                    it’s our responsibility that we&apos;re thorough before we
                    start.
                  </>
                ),
              },
              {
                icon: '/img/strategy-formulation.svg',
                heading: 'Strategy Formulation',
                subtext:
                  'We strategically work on every piece of information the client provides and lay out a prototype to proceed with the project. Before devising any plan, we critically analyze the market, competitors, and scope related to the project.',
              },
              {
                icon: '/img/development.svg',
                heading: 'Design and Development',
                subtext:
                  'We execute the plan and start implementing the designs. After an explicit design is prepared, our Flutter developer starts coding the application to make the design function on every platform and software.',
              },
              {
                icon: '/img/delivery-2.svg',
                heading: 'Delivery and Post Service Support',
                subtext:
                  'We deliver the app, but our journey with you does not end here; we are with you in the long run. With our post-project delivery support and maintenance services, you can enjoy our long-term benefits even after the project delivery.',
              },
            ].map(({ heading, subtext, icon }, index) => (
              <div
                key={index}
                className="border-r border-r-black/10 py-6 px-4 md:py-12 md:px-6 min-h-[150px] md:min-h-[266px] border-t border-t-black/10 md:border-t-0"
              >
                <div className="mb-5">
                  <img src={icon} alt="mariox" />
                </div>
                <h3 className="text-16 mb-3"> {heading}</h3>
                <p className="text-12 mb-0">{subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SelectedWorkSection heading="Case Study" />
      <IndustriesSection />

      {data?.testimonials && <TestimonialSliderSection data={data?.testimonials} />}
      {/* <AboutPage content={data?.aboutPage} /> */}
      <FaqSection faqs={data?.faqs} />
      {/* About Service start*/}
      {
        data?.aboutService && data?.pageName ? <AboutPage content={data?.aboutService} pageName={data?.pageName} /> : <></>
      }
      {/* About Service end*/}
      <TopLinksSection
        cityLinks={data?.interlinks?.sameServiceLinks}
        serviceLinks={data?.interlinks?.sameCityLinks}
      />
      <ContactUsSection />
    </div>
  );
};

export default FlutterAppDev;
