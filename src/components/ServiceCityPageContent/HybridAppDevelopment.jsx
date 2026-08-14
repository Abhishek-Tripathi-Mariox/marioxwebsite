import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
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
        heading: 'Client Meeting',
        description:
          'With the client meeting, we meet with their vision and mission behind getting the application designed. As your reliable Hybrid mobile app development company, we believe that it’s our responsibility to leave no page unturned before starting your project.',
      },
    ],
    serviceIcon: '/img/client-meeting-2.svg',
  },
  {
    carddata: [
      {
        heading: 'Strategy Formulation',
        description:
          'We strategically work on every piece of information the client provides and lay out a prototype to proceed with the project. Before devising any plan, we critically analyze the market, competitors, and scope related to the project. This approach ensures a well-rounded strategy aligned with your goals.',
      },
    ],
    serviceIcon: '/img/strategy-formulation.svg',
    cardBg: 'bg-white',
    imageBg: 'bg-secondary',
    sideSquareBg: 'bg-black',
  },
  {
    carddata: [
      {
        heading: 'Design and Development',
        description:
          'We execute the plan and start implementing the designs. After an explicit design is prepared, our Hybrid app developer starts coding the application to make the design function on every platform and software. We keep you updated on progress and welcome your input at every stage.',
      },
    ],
    serviceIcon: '/img/development-2.svg',
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
          'Lastly, if the client approves, the app is all ready for delivery. We deliver the app, but our journey with you does not end here; we are with you in the long run. With our post-project delivery support and maintenance services, you can enjoy our long-term benefits even after the project delivery.',
      },
    ],
    serviceIcon: '/img/delivery-2.svg',
  },
];

const animatedCardsData = [
  {
    whyTitle: 'Amazing Quality',
    whyContent:
      'By employing the Hybrid Mobile Application Development strategy, Mariox makes its quality unmatched, value stands out and it well delivers service as per client’s purpose. Our culture of excellence from top to bottom is our ultimate selling point as we are your go-to for quality services.',
    animatePos: -10,
  },
  {
    whyTitle: 'Affordable Prices',
    whyContent: (
      <>
        We are very flexible with our pricing, and we can give you the rates
        that work for your company. For Mariox company, client satisfaction is
        the key to achieving the final goal. It is the main motivation to come
        up with an outstanding end product.
      </>
    ),
    animatePos: -25,
  },
  {
    whyTitle: 'Transparent Development Process',
    whyContent:
      'We devoted ourselves to the handling each of the Hybrid mobile app development projects meticulously so as to come up with successful outcomes. We strive for excellence in hybrid app development, combining technical expertise with strong communication.',
    animatePos: -40,
  },
];
const HybridAppDev = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/hybrid-app-dev.webp"} />
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
                  <Button href="/contact">CONTACT US</Button>
                </div>
              </div>
            </div>

            <div className="text-center ">
              <div className="inline-block relative">
                <div className="absolute -left-3  md:-left-15 top-[30%] md:top-[40%] z-10 max-w-[32px] md:max-w-full">
                  <img src="/img/hybrid-app-dev-1.svg" alt="mariox" />
                </div>
                <div className="absolute right-2  md:-right-14 -top-4 md:top-[10%] z-10 max-w-[32px] md:max-w-full">
                  <img src="/img/hybrid-app-dev-2.svg" alt="mariox" />
                </div>
                <div className="absolute right-2  md:-right-24 top-[70%] z-10">
                  <img src="/img/hybrid-app-dev-3.webp" alt="mariox" />
                </div>

                <img
                  src="/img/hybrid-app-dev.webp"
                  className="inline-block mix-blend-darken"
                  alt="mobile dev"
                  width={674}
                  height={490}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoSlider logos={logosApp} whiteBg />

      <section className="section-pad ">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-5/12 px-3">
              <div className="sticky top-15">
                <h2 className="text-32 md:text-48  uppercase mb-16 ">
                  {data?.h2Text}
                </h2>

                <p className="lg:max-w-[85%]">
                  Mariox Software Pvt. Ltd. has established itself as the most
                  popular hybrid app development company in India, scoring the
                  best possible rating. We offer full-cycle hybrid application
                  development services, covering all aspects of the development
                  from planning and design to development, testing and
                  deployment. With Mariox, you get a comprehensive all assisted
                  hybrid application development solution.
                </p>
              </div>
            </div>
            <div className="w-full md:w-7/12 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    icons: '/img/ios-ui-ux.svg',
                    title: 'Standard UI and UX design',
                    description:
                      'Rationally designed apps by our experts are strapping and customised, especially for distinct business purposes. Our team excels in developing apps from simple to complicated interfaces. Healthcare apps, android apps, and enhanced UI and UX are some of the previous works of our app development agency.',
                  },
                  {
                    icons: '/img/innovation.svg',
                    title: 'Innovation',
                    description:
                      'Leaving the traditional behind, we move ahead with trends. We understand technology moves forward with time, as are our expert app developers. Being an experienced app design company, we design high-quality apps based on seamless functionality.',
                  },
                  {
                    icons: '/img/customised-solutions.svg',
                    title: 'Customised solutions',
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
                    icons: '/img/tested-code.svg',
                    title: 'Tested code',
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

      <section className="section-pad !pt-0">
        <div className="container">
          <Heading icon className="heading-medium mb-16 flex">
            Check Out Our Hybrid App <br /> Development Services
          </Heading>

          <div className="grid  md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: '/img/cross-platform.svg',
                heading: 'Hybrid App Design',
                description:
                  'With our expertise in hybrid app development in ' + data.cityName + ', we create interactive app designs that cater to your business needs. Our designs are focused on both appearance and usability, delivering a superior user experience.',
              },
              {
                serviceIcon: '/img/smartphone-app-dev.svg',
                heading: 'Hybrid App Development',
                description:
                  'We leverage innovative technologies and industry best practices to deliver robust, self-sufficient hybrid apps. As a leading hybrid app development company in ' + data.cityName + ' We garantee step-by-step software operation so you can encourage user experience per the state-of-the-art technologies.',
              },
              {
                serviceIcon: '/img/hybrid-app-integeration.svg',
                heading: 'Hybrid App Integration',
                description:
                  'As a leading hybrid app development company in ' + data.cityName + ', we are professionals with an original approach, which presupposes smooth merging into other outside software, keeping the devices functioning normally.',
              },
              {
                serviceIcon: '/img/migration.svg',
                heading: 'Migration to Hybrid Framework',
                description: (
                  <>
                    Our expert team ensures a seamless migration to hybrid app development in {data.cityName},
                    ensuring efficient data sharing across platforms. We leverage our deep understanding
                    of hybrid technologies to ensure a smooth transition and optimize your app's performance.
                  </>
                ),
              },
              {
                serviceIcon: '/img/app-testing.svg',
                heading: 'Hybrid App testing',
                description:
                  'We ensure that your hybrid app meets the highest standards of performance and reliability, delivering a seamless user experience across all platforms. Our hybrid app development in ' + data.cityName + ' includes compatibility checks on various devices and operating systems.',
              },
              {
                serviceIcon: '/img/delivery-2.svg',
                heading: 'Hybrid App maintainance',
                description:
                  'Our dedicated support team provides ongoing maintenance and updates to keep your hybrid app running smoothly and securely on all platforms. As a leading hybrid app development company in ' + data.cityName + ', We are committed to long-term support and are always available to address any issues or implement new features.',
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

      <section className="section-pad why-mariox-section !pt-0">
        <div className="container">
          <div className=" mb-12">
            <Heading icon className="heading-medium mb-8">
              Why Choose us ?
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              you’re looking to hire the best hybrid app development company in
              India, your search ends here! Mariox Software Pvt. Ltd., one of
              the top hybrid app development companies in India, now offers a
              range of services. Being a team made up of top-notch hybrid app
              developers with rich industry backgrounds, we keep up
              significantly in creating apps of the best quality, efficiency,
              usability, and consumer compatibility.
            </p>
          </div>

          <AnimatedCards data={animatedCardsData} />
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container">
          <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
            In what ways do we deal with{' '}
            <span className="font-medium text-primary">
              Hybrid App Development
            </span>{' '}
            Company
          </h2>

          {serviceCards.map((card, index) => (
            <div className="sticky top-0" key={index}>
              <ServiceDetailCard
                whiteContent={card.whiteContent}
                serviceData={card.carddata}
                cardBg={card.cardBg}
                sideSquareBg={card.sideSquareBg}
                serviceIcon={card.serviceIcon}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="mb-10 md:mb-15">
            <h2 className="heading-medium mb-6 max-w-[750px]">
              Our Assurance as a Hybrid App Development Company
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

      <SelectedWorkSection heading="Case Study" />
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
                  techName: 'CMS Development Services',
                  techIcon: '/img/cms.png',
                  link: '/',
                },
                {
                  techName: 'WordPress Website Development',
                  techIcon: '/img/wordpress.png',
                  link: '/',
                },
                {
                  techName: 'IOS App Development',
                  techIcon: '/img/ios.png',
                  link: '/',
                },
                {
                  techName: 'Mobile App Development',
                  techIcon: '/img/mobile-app-development.png',
                  link: '/',
                },
                {
                  techName: 'E-commerce App Development',
                  techIcon: '/img/ecommerce.png',
                  link: '/',
                },
                {
                  techName: 'Android App Development',
                  techIcon: '/img/android.png',
                  link: '/',
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
      <FaqSection faqs={data?.faqs} />

      {/* About Service start*/}
      {
        data?.aboutService && data?.pageName ? <AboutPage content={data?.aboutService} pageName={data?.pageName} /> : <></>
      }
      {/* About Service end*/}
      {/* <AboutPage content={data?.aboutPage} /> */}
      <TopLinksSection
        cityLinks={data?.interlinks?.sameServiceLinks}
        serviceLinks={data?.interlinks?.sameCityLinks}
      />
      <ContactUsSection />
    </div>
  );
};

export default HybridAppDev;
