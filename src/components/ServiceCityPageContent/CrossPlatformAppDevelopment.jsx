import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechCard from '@/components/techCard/techCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import { logosApp } from '@/utils/clientLoos';
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
        heading: 'Standard UI and UX design',
        description:
          'An application’s potential is analyzed by its performance. Our professional developers ensure that as a responsible Android app development agency, we follow a process to ensure our client’s users a seamless experience with quick functionality and smooth usage.',
      },
    ],
    serviceIcon: '/img/ios-ui-ux.svg',
  },
  {
    carddata: [
      {
        heading: 'Innovation',
        description:
          'We develop integrating user experience with CMS-based Android applications, which allows you to edit or add things to your applications within just one go. This eases the hassle of time-consuming procedures to update your business Android applications.',
      },
    ],
    serviceIcon: '/img/innovation.svg',
    cardBg: 'bg-white',
    sideSquareBg: 'bg-black',
  },
  {
    carddata: [
      {
        heading: 'Customised solutions',
        description:
          'Along with robust backend development, developers at Mariox Software ensure that your Android application looks compelling to visitors or viewers. They invest their time in designing compelling and interactive interfaces to make the app appealing and sync with your business’s objectives.',
      },
    ],
    serviceIcon: '/img/customised-solutions-2.svg',
    cardBg: 'bg-primary',
    sideSquareBg: 'bg-white',
    whiteContent: true,
  },
  {
    carddata: [
      {
        heading: 'Tested code',
        description:
          'To avoid the struggle for your users, our developers make sure the Android applications are incorporated with easy-to-navigate functionality so that it is quick for the users to navigate through the application and access what they are searching for.',
      },
    ],
    serviceIcon: '/img/tested-code.svg',
  },
];

const CrossPlatformAppDev = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/cross-platform-app-dev.webp"} />
      <section className="bg-secondary pt-20">
        <div className="container">
          <Breadcrumb items={data?.breadcrumb} />
          <div className="grid gap-15 mt-15 md:mt-[110px]">
            <div className="w-full">
              <div className="text-center">
                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[790px] mx-auto">
                  {data?.h1Text}
                </h1>

                <p className="max-w-[780px] mx-auto">{data?.h1Desc}</p>

                <div className="pt-1 ">
                  <Button>LEt’s discuss</Button>
                </div>
              </div>
            </div>

            <div className="text-center ">
              <div className="inline-block relative">
                <img
                  src="/img/cross-platform-app-dev.webp"
                  className="inline-block "
                  alt="mobile dev"
                  width={849}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoSlider logos={logosApp} whiteBg />
      <section className="section-pad">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-5/12 px-3">
              <div className=" sticky top-15">
                <h2 className="text-32 md:text-48  uppercase mb-16">
                  {data?.h2Text}
                </h2>

                <p className="lg:max-w-[90%]">
                  Do not scroll down; Mariox is known as one of the best
                  cross-platform app development companies in India. You will
                  find the best team, which is a mixture of creativity and
                  experience, to develop tailor-made software solutions that
                  translate your goals to a technological level. Step into an
                  empty canvas that transforms into the place where every line
                  of code speaks of progress and possibilities, where technology
                  meets imagination to make digital masterpieces.
                </p>
              </div>
            </div>
            <div className="w-full md:w-7/12 px-3">
              {serviceCards.map((card, index) => (
                <div className="" key={index}>
                  <ServiceDetailCard
                    serviceIcon={card.serviceIcon}
                    whiteContent={card.whiteContent}
                    serviceData={card.carddata}
                    cardBg={card.cardBg}
                    imageBg={card.imageBg}
                    sideSquareBg={card.sideSquareBg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <Heading icon className="mb-16 flex">
            Our Cross-Platform App <br /> Development Services
          </Heading>

          <div className="grid  md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: '/img/cross-platform-app-migration.svg',
                heading: 'Cross-Platform App Migration',
                description:
                  'Mariox offers top-tier Cross-Platform App Development in ' + data.cityName + ', allowing users to access the service with maximum ease and greatest accessibility. Our process ensures minimal downtime and a smooth user experience during migration.',
              },
              {
                serviceIcon: '/img/ios-ui-ux.svg',
                heading: 'Cross-platform App UI/UX',
                description:
                  'As an experienced Cross-Platform App Development company in ' + data.cityName + ', our team consists of skilled UI/UX designers. Our design professionals are ready to help you create interactive and adaptable app designs. We ensure that every design is intuitive and enhances user engagement.',
              },
              {
                serviceIcon: '/img/cross-platform-app-design.svg',
                heading: 'Cross-Platform App Design',
                description:
                  'In Cross-Platform App Development in ' + data.cityName + ', our experts handle design complexities in-depth to create visually appealing and user-friendly apps, making the user experience close to ideal. We focus on consistency across platforms, ensuring brand coherence.',
              },
              {
                serviceIcon: '/img/smartphone-app-dev.svg',
                heading: 'Expert Mobile App Development Services',
                description:
                  'As a Cross-Platform App Development company in ' + data.cityName + ', Mariox offers customized services to companies of all sizes, utilizing the latest trends to build and create unique products. We prioritize innovation to keep your app ahead of the competition.',
              },
              {
                serviceIcon: '/img/cross-platform-mobile-app.svg',
                heading: 'Cross-platform Mobile App Development',
                description:
                  'Our Cross-Platform App Development in ' + data.cityName + ' team has years of experience in building applications that combine features uniquely designed for different platforms. We deliver solutions that ensure maximum performance and adaptability across devices.',
              },
              {
                serviceIcon: '/img/delivery-2.svg',
                heading: 'Support and Maintenance',
                description:
                  'Our skilled developers provide on-time maintenance and technical support to apps spanning multiple platforms, guaranteeing a high level of reliability and usability. As a trusted Cross-Platform App Development company in ' + data.cityName + ', We stay proactive in identifying and resolving issues or bugs promptly.',
              },
            ].map(({ heading, description, serviceIcon }, index) => (
              <div
                key={index}
                className="bg-black p-8 min-h-[356px] flex-col flex relative group"
              >
                <div className="w-4 h-4 absolute bottom-0 left-0 bg-primary"></div>
                <div className="w-4 h-4 absolute bottom-0 left-0 group-hover:-translate-x-full group-hover:translate-y-full duration-500 ease-elastic bg-primary"></div>
                <div className="mb-6 inline-block w-10 md:w-15">
                  <img src={serviceIcon} alt="mariox" />
                </div>

                <h3 className="text-24 text-white">{heading}</h3>

                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-12  text-white mb-0 leading-[140%] md:max-w-[90%]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        noTopBar
        heading="Why Choose Cross-Platform App Development Company?"
        data={[
          {
            processIcon: '/img/amazing-quality.svg',
            processTitle: 'Amazing Quality',
            processDesc: (
              <>
                Mariox&apos;s devotion to mobile app development across the
                platforms leads to unsurpassed quality, benefit, and service,
                which are ingeniously customized to your integrity and
                confidentiality. We take pride in delivering first-rate
                services; that means you will always find us as the number one
                location for all your needs.
              </>
            ),
          },
          {
            processIcon: '/img/affordable-prices.svg',
            processTitle: 'Affordable Prices',
            processDesc: (
              <>
                The best part of taking service from us is that we provide
                pocket-friendly budgets for projects of any size. Pricing is
                custom-made per client demand. Client satisfaction is
                Mariox&apos;s number one priority, allowing us to do our best
                possible job. For Mariox company, client satisfaction is the key
                to achieving the final goal.
              </>
            ),
          },
          {
            processIcon: '/img/transparent-process.svg',
            processTitle: 'Transparent Development Process',
            processDesc: (
              <>
                Our team make it our mission to bring the best out of every
                cross-platform mobile app development we undertake, and clients
                and users alike are sure to receive excellent results. Empowered
                by developers, we comprehend the significance of accurate
                communication and proper project management in order to lead to
                any project&apos;s success.
              </>
            ),
          },
        ]}
      />

      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-5/12 px-3">
              <div className="sticky top-15">
                <h2 className="text-32 md:text-48  uppercase mb-16 ">
                  How we deal with Cross-Platform App Development Company
                </h2>
              </div>
            </div>
            <div className="w-full md:w-7/12 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    icons: '/img/client-meeting-2.svg',
                    title: 'Discussing with Clients',
                    description:
                      'Rationally designed apps by our experts are strapping and customised, especially for distinct business purposes. Our team excels in developing apps from simple to complicated interfaces. Healthcare apps, android apps, and enhanced UI and UX are some of the previous works of our app development agency.',
                  },
                  {
                    icons: '/img/strategy-formulation.svg',
                    title: 'Planning and Conceptualization',
                    description:
                      'Leaving the traditional behind, we move ahead with trends. We understand technology moves forward with time, as are our expert app developers. Being an experienced app design company, we design high-quality apps based on seamless functionality.',
                  },
                  {
                    icons: '/img/development.svg',
                    title: 'Designing and Development',
                    description: (
                      <>
                        We develop suggestion-based apps, i.e., we hear you and
                        design. After comprehensively understanding your
                        business and competition, we proceed with your app
                        theme. Being a dedicated IOS and Android app development
                        company, we curate apps with a standardised quality.
                      </>
                    ),
                  },
                  {
                    icons: '/img/testing-2.svg',
                    title: 'Quality Assurance Testing',
                    description: (
                      <>
                        We ensure the stability and authenticity of every code
                        before release. A lot many tests are done checking for
                        bugs or errors so that app can perform at its best on
                        different platforms. Our rigorous testing process
                        includes thorough checks for bugs, and compatibility
                        across different devices and operating systems.
                      </>
                    ),
                  },
                  {
                    icons: '/img/launching.svg',
                    title: 'Launching',
                    description: (
                      <>
                        We ensure the stability and authenticity of every code
                        before release. A lot many tests are done checking for
                        bugs or errors so that app can perform at its best on
                        different platforms. Our rigorous testing process
                        includes thorough checks for bugs, and compatibility
                        across different devices and operating systems.
                      </>
                    ),
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

      <SelectedWorkSection heading="Case Study" />

      <section className="section-pad !pt-0">
        <div className="container">
          <div className="mb-10 md:mb-15">
            <h2 className="heading-medium mb-6 max-w-[750px]">
              Our Promise as a Cross-Platform App Developer
            </h2>

            <p className="max-w-[610px]">
              Mariox Software has established a realm as an application
              development company in the digital marketplace, and this has been
              possible with our team of experts and our client’s trust in us.
              Hence, we ensure our client’s complete success with a potent
              backend and frontend application development where the ultimate
              goal is extended reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality-First Approach',
                description:
                  'Our team delivers immersive web experiences, magnifying digital transformation.',
              },
              {
                title: 'Steering Web Complexities',
                description:
                  'Our team builds world-class custom web apps that are capable of driving market disruption.',
              },
              {
                title: 'Multiple Engagement Models',
                description: (
                  <>
                    Our team offers multiple business engagement models that you
                    can choose as per your budget, essentiality&apos;s, &
                    requirements.
                  </>
                ),
              },
            ].map(({ title, description }, index) => (
              <div
                key={index}
                className="pb-3 border-b border-b-black/10 relative"
              >
                <div className="flex mb-10 justify-between">
                  <h3 className="text-24 ">{title}</h3>

                  <span>0{index + 1}</span>
                </div>

                <p>{description}</p>

                <div className="absolute w-4 h-4 bg-primary bottom-1 left-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {data?.testimonials && <TestimonialSliderSection data={data?.testimonials} />}

      <section className={`bg-black section-pad`}>
        <div className="container">
          <Heading className="heading-medium text-white mb-14" icon>
            OTHER RECOMMENDED SERVICES
          </Heading>

          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  techName: 'Mobile App Development',
                  techIcon: '/img/mobile-app-development.png',
                  link: '/mobile-app-development-company',
                },
                {
                  techName: 'Android App Development',
                  techIcon: '/img/android.png',
                  link: '/android-app-development',
                },
                {
                  techName: 'IOS App Development',
                  techIcon: '/img/ios.png',
                  link: '/ios-app-development',
                },
                {
                  techName: 'E-commerce app Development',
                  techIcon: '/img/ecommerce.png',
                  link: '/e-commerce-app-development',
                },
                {
                  techName: 'React Native App Development ',
                  techIcon: '/img/react.png',
                  link: '/react-native-app-development-company',
                },
                {
                  techName: 'Flutter App Development ',
                  techIcon: '/img/flutter.png',
                  link: '/flutter-app-development',
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

export default CrossPlatformAppDev;
