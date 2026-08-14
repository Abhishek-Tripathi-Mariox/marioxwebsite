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
          'With the client meeting, we meet with their vision and mission behind getting the application designed. As your reliable React Native app development company, we believe that it’s our responsibility to leave no page unturned before starting your project.',
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
          'We execute the plan and start implementing the designs. After an explicit design is prepared, our React Native app developer starts coding the application to make the design function on every platform and software. We keep you updated on progress and welcome your input at every stage.',
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
    whyTitle: 'On-Time Delivery',
    whyContent:
      'Our team manage projects using agile best practices and smart productivity tools for project planning. By doing this, we control the project progress and guarantee the solution delivery on time while consistently upholding high quality standards.',
    animatePos: -10,
  },
  {
    whyTitle: 'Deliver Exactly What You Need',
    whyContent: (
      <>
        We have a responsive team that can fulfill your requirements. Whether
        the solutions are custom, Mariox&apos;s experienced professionals are
        trying to understand your objectives and ensure the solution becomes
        part of your digital strategy.
      </>
    ),
    animatePos: -25,
  },
  {
    whyTitle: 'Transparency',
    whyContent:
      'To ensure transparency and collaboration, our dedicated team keeps you informed about the progress of your project, actively seeks your feedback, and continuously improves the app based on your evolving needs.',
    animatePos: -40,
  },
];
const ReactNativeAppDev = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/react-native-app.webp"} />
      <section className="bg-secondary pt-20 pb-22.5">
        <div className="container">
          <Breadcrumb items={data?.breadcrumb} />
          <div className="flex items-end gap-6 flex-wrap">
            <div className="w-full md:w-7/12">
              <div className="py-10 md:py-0">
                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[580px]">
                  {data?.h1Text}
                </h1>

                <p className="max-w-[510px]">{data?.h1Desc}</p>

                <div className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                  <Button href="/contact">CONTACT US</Button>

                  <div className="text-primary uppercase">
                    [React Native development]
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

              <div className="absolute left-3  md:-left-12 top-[10%]  md:max-w-full">
                <img src="/img/react-native-app-2.webp" alt="mariox" />
              </div>
              <div className="absolute right-2  md:-right-10 top-[60%]  md:max-w-full">
                <img src="/img/react-native-app-3.webp" alt="mariox" />
              </div>

              <img
                src="/img/react-native-app.webp"
                className="inline-block"
                alt="mobile dev"
                width={486}
                height={625}
              />
            </div>
          </div>
        </div>
      </section>

      <LogoSlider logos={logosApp} whiteBg />

      <section className="section-pad">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div>
              <h2 className="heading-medium mb-6">{data?.h2Text}</h2>
            </div>

            <div className="md:pl-15">
              <p>
                Team up with the top React Native app development company with
                React Native, and develop your great idea along with our team of
                professional developers who will strengthen your mission and
                boost your business success through their contemporary
                technology implementation. Expert app developers of our team are
                able to develop mobile apps for both Android and iOS systems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '/img/ios-ui-ux.svg',
                title: 'Standard UI/UX design',
                description:
                  'Our app developers own expertise in developing apps from simple to complicated interfaces. Healthcare apps, E-commerce apps, android apps, and enhanced UI and UX are some of the previous works of our app development agency.',
              },
              {
                icon: '/img/innovation.svg',
                title: 'Innovation',
                description:
                  'Staying ahead of  latest trends, we understand technology moves forward with time, as are our expert app developers. Being an experienced app design company, we design high-quality apps based on seamless functionality.',
              },
              {
                icon: '/img/customised-solutions.svg',
                title: 'Customised solutions',
                description:
                  'After comprehensively understanding your business and competition, we proceed with your app theme. Being a dedicated IOS and Android app development company, we curate apps with a standardised quality.',
              },
              {
                icon: '/img/tested-code.svg',
                title: 'Tested code',
                description:
                  'We ensure the stability and authenticity of every code before release. A lot many tests are done checking for bugs or errors so that app can perform at its best on different platforms.',
              },
            ].map(({ icon, title, description }, index) => (
              <div key={index}>
                <div className="mb-8">
                  <img src={icon} alt="mariox" />
                </div>

                <h3 className="mb-6 text-24 ">{title}</h3>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-secondary">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <h2 className="text-32 md:text-48  uppercase mb-16 sticky top-15">
                Determine the Potent React Native Mobile App Development
                Services
              </h2>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    icons: '/img/smartphone-app-dev.svg',
                    title: 'React Native Apps Consultation',
                    description:
                      'Mariox Software Pvt. Ltd., a leading React Native app development company in ' + data.cityName + ', offers comprehensive consultation on all aspects of React Native mobile app development, including design, deployment, and architecture. For more information contact us.',
                  },
                  {
                    icons: '/img/react-native.svg',
                    title: 'React Native App Development',
                    description:
                      'As a React Native app development company in ' + data.cityName + ', we offer comprehensive services, including wireframes, prototypes, design, development, testing, and deployment for the best experience. Every step is tailored to deliver the best user experience.',
                  },
                  {
                    icons: '/img/ios-ui-ux.svg',
                    title: 'React Native UI/UX & Design',
                    description: (
                      <>
                        For a team with years of experience in React Native UI/UX & design, choose Mariox Software,
                        a leading React Native app development company in {data.cityName}. Our skilled professionals, designers,
                        and strategists deliver top-notch UI/UX and visual experiences
                      </>
                    ),
                  },
                  {
                    icons: '/img/app-migration.svg',
                    title: 'App Migration & Upgradation',
                    description: (
                      <>
                        As a React Native app development company in {data.cityName}, we empower your transition
                        from legacy platforms to React Native with our dedicated team,
                        which specializes in optimizing features for the best performance. We ensure a smooth and efficient migration process.
                      </>
                    ),
                  },
                  {
                    icons: '/img/product-ideation.svg',
                    title: 'Product Ideation & Consultation',
                    description:
                      'As a React Native app development company in ' + data.cityName + ', our dedicated team offers innovative product ideation and consulting services to drive rapid business expansion and improve ROI. Our team helps you turn ideas into successful digital products.',
                  },
                  {
                    icons: '/img/delivery-2.svg',
                    title: 'React Native App Maintenance',
                    description:
                      'As a React Native app development company in ' + data.cityName + ', Mariox Software understands that post-deployment support is crucial, so Mariox Software provides its clients with continual support and maintenance. We keep your app running smoothly and efficiently.',
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

      <section className="section-pad why-mariox-section ">
        <div className="container">
          <div className=" mb-12">
            <Heading icon className="heading-medium mb-8">
              Why Choose us as Your React Native <br /> App Development Company?
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              Are you looking for any standout React Native development company
              in India if you browse? Look no further! Mariox Software Private
              Limited company is more than able to build your new project from
              scratch and also meet your needs if React Native integration is
              required.
            </p>
          </div>

          <AnimatedCards data={animatedCardsData} />
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container">
          <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
            In what ways do we Deal with{' '}
            <span className="font-medium text-primary">React Native App</span>{' '}
            Development
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
              Our Assurance as a React Native Mobile App Developer
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
                  techName: 'IOS App Development',
                  techIcon: '/img/ios.png',
                  link: '/ios-app-development',
                },
                {
                  techName: 'WordPress Website Development',
                  techIcon: '/img/wordpress.png',
                  link: '/wordpress-development',
                },
                {
                  techName: 'CMS Development Services',
                  techIcon: '/img/cms.png',
                  link: '/cms-development',
                },
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
                  techName: 'PHP Development Services',
                  techIcon: '/img/php.png',
                  link: '/php-development',
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

export default ReactNativeAppDev;
