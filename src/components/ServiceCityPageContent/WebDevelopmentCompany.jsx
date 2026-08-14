import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechnologiesSection from '@/components/TechnologiesSection/TechnologiesSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import { logosApp } from '@/utils/clientLoos';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
  {
    carddata: [
      {
        heading: "Responsive Websites",
        description:
          "A website’s potential is analyzed by its performance. Our professional developers ensure that the website development process they follow also ensures our client’s users a seamless experience with quick functionality and smooth usage.",
      },
    ],
    serviceIcon: "/img/responsive-android-app.svg",
  },
  {
    carddata: [
      {
        heading: "CMS-Based Websites",
        description:
          "We develop integrating user experience with CMS-based websites, which allows you to edit or add things to your website within just one go. This eases the hassle of time-consuming procedures to update your business website.",
      },
    ],
    serviceIcon: "/img/cms-android-app.svg",
    cardBg: "bg-white",
    sideSquareBg: "bg-black",
  },
  {
    carddata: [
      {
        heading: "Compelling Interfaces",
        description:
          "Along with robust backend development, developers at Mariox Software ensure that your website looks compelling to visitors or viewers. They take time to design compelling and interactive interfaces to make your website appealing, syncing with your business’s objectives",
      },
    ],
    serviceIcon: "/img/compelling-interfaces.svg",
    cardBg: "bg-primary",
    sideSquareBg: "bg-white",
    whiteContent: true,
  },
  {
    carddata: [
      {
        heading: "Easy to navigate",
        description:
          "To avoid the struggle for your users, our developers make sure the website development process is done with easy-to-navigate functionality so that it is quick for the users to navigate through the website and access what they are searching for.",
      },
    ],
    serviceIcon: "/img/easy-to-navigate.svg",
  },
];

const animatedCardsData = [
  {
    whyTitle: "Free Consultation",
    whyContent:
      "As a top Android app development company, we understand the importance of giving you a clear understanding of our work process. Book your free consultation session with us immediately and learn how we can help you.",
    animatePos: -10,
  },
  {
    whyTitle: "360 Scalability",
    whyContent: (
      <>
        To ensure your business&apos;s holistic growth, learn about our other
        services, which are web and app development, digital marketing services,
        app development services, PPC marketing services, content marketing
        services, and designing services.
      </>
    ),
    animatePos: -25,
  },
  {
    whyTitle: "24/7 Support & On-Time Delivery",
    whyContent:
      "The importance of time can not be denied; hence, your trusted Android app development agency ensures the timely delivery of your project. Along with this, our development team is always ready to take any sort of urgency.",
    animatePos: -40,
  },
];
export const serviceCards2 = [
  {
    carddata: [
      {
        heading: "Client Meeting",
        description:
          "Our team starts with the client meeting, where they gather all the required information about the client’s business, website development purpose, target audience, requirements, functionality, competitors, and specific restrictions or business goals (if any).",
      },
    ],
    serviceIcon: "/img/client-meeting-2.svg",
  },
  {
    carddata: [
      {
        heading: "Strategy Formulation",
        description:
          "We strategically work on every piece of information the client provides and lay out a prototype to proceed with the project. Before devising any plan, we critically analyze the market, competitors, and scope related to the project. This approach ensures a well-rounded strategy aligned with your goals.",
      },
    ],
    serviceIcon: "/img/strategy-formulation.svg",
    cardBg: "bg-white",
    imageBg: "bg-secondary",
    sideSquareBg: "bg-black",
  },
  {
    carddata: [
      {
        heading: "Design and Development",
        description:
          "We implement the strategy practically with our third step, where our development team starts working on designing the website’s interface. Once the front end has done its responsibilities, our backend ensures that it gives an impeccable user experience without any bugs or glitches while functioning.",
      },
    ],
    serviceIcon: "/img/development-2.svg",
    cardBg: "bg-primary",
    imageBg: 'bg-white"',
    sideSquareBg: "bg-white",
    whiteContent: true,
  },
  {
    carddata: [
      {
        heading: "Delivery and Post Service Support",
        description:
          "Lastly, With the client’s approval, we proceed with the timely delivery of the project, maintaining the standards and quality of the project. We are with you in the long run of your success, and hence, our responsibility does not end right after the project delivery, but our post-delivery support and maintenance services help to keep a regular track of your website and its success rate along with a routine check of its flawless performance.",
      },
    ],
    serviceIcon: "/img/delivery-2.svg",
  },
];

const WebDevelopmentCompany = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/mobile-dev-banner.webp"} />
      <section className="bg-secondary pt-20 pb-22.5">
        <div className="container">
          <Breadcrumb items={data?.breadcrumb} />
          <div className="flex items-end gap-6 flex-wrap">
            <div className="w-full md:w-2/3">
              <div className="py-10 md:py-0">
                <h1 className="text-48 md:text-64 xl:text-[80px] uppercase leading-[100%] mb-12">
                  {data?.h1Text}
                </h1>

                <p>{data?.h1Desc}</p>

                <div
                  className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                  <Button href="/contact">CONTACT US</Button>

                  <div className="text-primary uppercase">
                    [iOS development]
                  </div>

                  <div className="text-primary uppercase">
                    [Android development]
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center relative px-6 md:px-12">
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
                src="/img/mobile-dev-banner.webp"
                className="inline-block"
                alt="mobile dev"
                width={280}
                height={600}
              />
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
                <h2 className="text-32 md:text-42 lg:text-48 uppercase mb-16">
                  {data?.h2Text}
                </h2>

                <p className="lg:max-w-[90%]">
                  We are a prominent website development company known
                  globally for offering client-centric website development
                  services that deliver striking business results, helping
                  your business make remarkable imprints in the ever-changing
                  business landscape. Our cutting-edge web development
                  services are tailored to meet your requirements and cater to
                  your users’ needs. You can acquire robust, secure, and
                  flawless website development services with us. Here is how
                  we ensure the best web development benefits-
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

      <section className="section-pad !pt-0">
        <div className="container">
          <Heading icon className="heading-medium mb-16 flex">
            Our Explicit Website <br /> Development Services
          </Heading>

          <div className="grid  md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: "/img/app-testing.svg",
                heading: "Front-End Development",
                description: (
                  <>
                    We are a website development company in {data.cityName} that builds custom
                    applications right from consulting, maintenance, development, and support.
                    Our skilled developers have the technical expertise to deliver complex and multi-disciplinary projects
                  </>
                ),
              },
              {
                serviceIcon: "/img/server.svg",
                heading: "Backend Development",
                description: (
                  <>
                    As a leading website development company in {data.cityName},
                    Our back-end development professionals build complex server-side layers,
                    enable cloud integration, and facilitate smart digital transformation strategies to
                    strengthen your core IT landscape. The dedicated team will deliver value and quality products.
                  </>
                ),
              },
              {
                serviceIcon: "/img/cross-platform-mobile-app.svg",
                heading: "Mobile Web App Development",
                description:
                  'We have a mobile web App developers team who are qualified visual designers, at our website development company in ' + data.cityName + '. Our team ensures maximum efficiency to build and make the product that would match your initial goals.',
              },
              {
                serviceIcon: "/img/cloud.svg",
                heading: "Laravel Website Development Services",
                description:
                  'Our Laravel web development services in ' + data.cityName + ' are backed by experienced developers who specialize in creating extensions to enhance your project and meet your business needs. All of our trained designers and developers are highly skilled, ensuring top-quality results. As a trusted website development company in {data.cityName}, we deliver exceptional solutions for businesses across locations.',
              },
              {
                serviceIcon: "/img/b2b.svg",
                heading: "WordPress Website Development",
                description:
                  'Our website development company in ' + data.cityName + ', Mariox, offers expert WordPress website migration services., Our WordPress website developer has the expertise to deliver hassle-free migration services. At Mariox, experts are skilled in CSS, HTML, JavaScript, PHP, and other technologies for developing custom-made sites.',
              },
              {
                serviceIcon: "/img/website.svg",
                heading: "PHP Website Development",
                description:
                  'Our dedicated team of PHP developers at our website development company in ' + data.cityName + ' will create a 100% unique website using advanced technology and tools to deliver next-generation, high-performing PHP web development solutions.',
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

      <section className="section-pad why-mariox-section !pt-0 ">
        <div className="container">
          <div className=" mb-12">
            <Heading icon className="heading-medium mb-8">
              Why Choose Mariox Software as Your <br /> Web Development
              Company?
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              Being the top website development agency globally and in {data.cityName}, Mariox
              Software Pvt. Ltd. ensures the delivery of quality website
              development projects that resonate with market standards and
              help you stand ahead of your competitors. Their efforts in the
              custom web development process offer your users a
              high-performing, feature-packed experience that is impeccably
              functional and secure and scales your enterprise growth
              digitally. We have a track record of 350+ clients with a
              constant success rate in the digital market landscape. We have
              been a reliable partner to many business enthusiasts globally,
              and you can be next among them, ensuring your business success
              with us despite the challenges.
            </p>
          </div>

          <AnimatedCards data={animatedCardsData} />
        </div>
      </section>
      <TechnologiesSection />
      <section className="section-pad">
        <div className="container">
          <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
            In what ways do we Deal with <br />
            <span className="font-medium text-primary">Website</span>{" "}
            Development
          </h2>

          {serviceCards2.map((card, index) => (
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
      <IndustriesSection />

      <section className="section-pad !pb-0">
        <div className="container">
          <div className="mb-10 md:mb-15">
            <h2 className="heading-medium mb-6 max-w-[750px]">
              Our Assurance as a Website Development Company
            </h2>

            <p className="max-w-[610px]">
              As a globally renowned website development company, we harness
              the benefits of trending tech and tools with an assurance of
              long-term success by leveraging our tech expertise, where our
              developers work on strengthening your business, maintaining
              scalability, and expanding your user reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quality-First Approach",
                description:
                  "Our team delivers immersive web experiences, magnifying digital transformation.",
              },
              {
                title: "Steering Web Complexities",
                description:
                  "Our team builds world-class custom web apps that are capable of driving market disruption.",
              },
              {
                title: "Multiple Engagement Models",
                description: (
                  <>
                    Our team offers multiple business engagement models that
                    you can choose as per your budget, essentiality&apos;s, &
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

export default WebDevelopmentCompany;
