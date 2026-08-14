import AnimatedCards from "@/components/AnimatedCards/AnimatedCards";
import Button from "@/components/Button/Button";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import Heading from "@/components/Heading/Heading";
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from "@/components/IndustriesSection/IndustriesSection";
import ServiceDetailCard from "@/components/ServiceDetailCard/ServiceDetailCard";
import TechPageCard from "@/components/TechPageCard/TechPageCard";
import TestimonialSliderSection from "@/components/TestimonialSliderSection/TestimonialSliderSection";
import TopLinksSection from "@/components/TopLinksSection/TopLinksSection";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
  {
    carddata: [
      {
        heading: "Project Analysis",
        description:
          "Once we receive a project from a client, we sit down with them to understand the significant purpose of the content they want written. Suppose it is for a business; our content writers will then sit down with the client to understand their business and the type of content they seek.",
      },
    ],
    serviceIcon: "/img/project-analysis.svg",
  },
  {
    carddata: [
      {
        heading: "Research",
        description:
          "Once we have gathered all the information and understood the project clearly, we start with comprehensive research. We analyse competitors and the scope of the market. We research on the project and what digital marketing strategies will be implemented for the best results.",
      },
    ],
    serviceIcon: "/img/search-2.svg",
    cardBg: "bg-white",
    imageBg: "bg-secondary",
    sideSquareBg: "bg-black",
  },
  {
    carddata: [
      {
        heading: "Implementation",
        description:
          "Our different teams operating the complete digital marketing process are assigned specific tasks such as website development, content marketing, Search Engine Optimization, PPC, etc.",
      },
    ],
    serviceIcon: "/img/content-white.svg",
    cardBg: "bg-primary",
    imageBg: 'bg-white"',
    sideSquareBg: "bg-white",
    whiteContent: true,
  },
  {
    carddata: [
      {
        heading: "Delivery and Result Track",
        description: (
          <>
            After getting our client’s consent, we deliver our services, make
            the website live, run Google ads, and use SEO services to ensure the
            best outcomes. We offer post-delivery services to maintain the
            project correctly and to track results.
          </>
        ),
      },
    ],
    serviceIcon: "/img/editing.svg",
  },
];

const animatedCardsData = [
  {
    whyTitle: "Free Consultation",
    whyContent:
      "We offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. Take a free consultation today, join us, observe changes, and see your business touch the skies. ",
    animatePos: -10,
  },
  {
    whyTitle: "360 Scalability",
    whyContent: (
      <>
        Our company emphasises your business&apos;s dynamic growth; hence, our
        services can be the right stop for all your business-related issues.
        These comprise mobile app development, digital marketing and various
        other compatible solutions that can do wonders for client expectations
        and growth
      </>
    ),
    animatePos: -25,
  },
  {
    whyTitle: "24/7 Support & On-Time Delivery",
    whyContent:
      "Truly respecting the value of time, we offer assured, timely delivery. Mariox Software, being a dynamic mobile app development services provider, not only confirms your scalability and flexibility but is always up to take any sort of urgency and can handle it proficiently.",
    animatePos: -40,
  },
];
const DigitalMarketingServices = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent
        data={data}
        imagePath={"/img/content-writing-seervice.webp"}
      />
      <section className="pt-20 pb-22.5 bg-secondary">
        <div className="container">
          <Breadcrumb items={data?.breadcrumb} />
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="py-10 md:py-0">
                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                  {data?.h1Text}
                </h1>

                <p className="max-w-[510px] mb-12">{data?.h1Desc}</p>

                <Button href="/contact">CONTACT US</Button>
              </div>
            </div>

            <div className="flex-1 text-center relative">
              <div className="absolute left-5 md:translate-x-[-30%] -bottom-10 md:bottom-[-10%] z-10 asset-shadow max-w-[25%]">
                <img src="/img/content-writing-seervice-2.webp" alt="mariox" />
              </div>
              <div className="absolute -right-2 md:translate-x-[35$] top-6 md:top-[10%] z-10 asset-shadow max-w-[25%]">
                <img src="/img/content-writing-seervice-3.webp" alt="mariox" />
              </div>
              <img
                src="/img/content-writing-seervice.webp"
                className="inline-block"
                alt="mobile dev"
                width={486}
                height={503}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <div className="md:sticky top-10">
                <h2 className="text-32 md:text-48  uppercase mb-16">
                  {data?.h2Text}
                </h2>

                <p className="lg:max-w-[80%]">
                  Where global requirements are being fulfilled through digital
                  transitions, we have helped several businesses worldwide to
                  transform their growth platform and definition in the
                  technology-reliant world. We have a track record of helping
                  more than 500 businesses and startups with their business and
                  brands through our digital marketing services. Our diverse
                  team, specifically working on digital marketing aspects,
                  brainstorms with the best digital marketing ideas and
                  solutions to execute your business growth model at an
                  accelerated pace.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <div className="grid gap-10 md:gap-[72px]">
                {[
                  {
                    title: "Enhanced Online Visibility",
                    description: (
                      <>
                        Our best SEO strategies help your business improve its
                        online appearance and gain noteworthy visibility,
                        eventually helping it enhance its popularity.
                      </>
                    ),
                  },
                  {
                    title: "Organic traffic and Online Branding",
                    description: (
                      <>
                        Our team works efficiently to help you get organic
                        traffic through online marketing, promotions, or
                        branding on potent platforms.
                      </>
                    ),
                  },
                  {
                    title: "Quality Assurance",
                    description: (
                      <>
                        We offer our services at minimum client expenses without
                        compromising content quality. After all, your investment
                        should be worth it!
                      </>
                    ),
                  },
                  {
                    title: "Result Oriented",
                    description: (
                      <>
                        We offer services that generate results and could help
                        you gain a high ROI because business is not just about
                        investing but also about getting results from that
                        investment.
                      </>
                    ),
                  },
                ].map(({ title, description }, index) => (
                  <div className="" key={index}>
                    <TechPageCard
                      padding
                      key={index}
                      number={`${index <= 8 ? "0" : ""}${index + 1}`}
                      title={title}
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
            Find the Right Digital Marketing <br /> Services for Your Business
          </Heading>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: "/img/phone.svg",
                heading: "Paid Marketing",
                description: (
                  <>
                    Boost your ROI with our expert digital marketing services in {data.cityName}.
                    Our paid marketing campaigns, like social media marketing and others, help
                    your business grow faster, enhance visibility, and make a mass audience aware of your services and brand.
                  </>
                ),
              },
              {
                serviceIcon: "/img/notepad.svg",
                heading: "Web Development",
                description:
                  'We understand the importance of your digital presence. To enhance it, we offer expert digital marketing services in ' + data.cityName + ', designing compelling, SEO-optimized websites that rank on top of SERPs and attract visitors.',
              },
              {
                serviceIcon: "/img/notepad-2.svg",
                heading: "App Development",
                description: (
                  <>
                    Your business should be accessible to all, and we can help with that by designing robust
                    e-commerce marketing apps or other featured apps for Android, iOS, or hybrid platforms.
                    Our solutions ensure functionality across every platform, providing your consumers with an impeccable experience.
                    We also offer digital marketing services in {data.cityName} to enhance your app’s visibility and reach.
                  </>
                ),
              },
              {
                serviceIcon: "/img/video-camera.svg",
                heading: "Search Engine Optimization",
                description:
                  'We use top SEO strategies and highly ranked keywords in our digital marketing services in ' + data.cityName + ' to boost your search engine rankings. We have helped various enterprises become among the best on Google search engine results, and with us, you can be the next.',
              },
              {
                serviceIcon: "/img/editing.svg",
                heading: "Graphic Design",
                description: (
                  <>
                    The first impression matters, and to make it stand out, we enhance your
                    visuals with attractive icons, graphics, and logos. With our digital marketing services in {data.cityName},
                    We not only help you to be known but know a bit differently in the industry.
                  </>
                ),
              },
              {
                serviceIcon: "/img/list-3.svg",
                heading: "PPC Management",
                description:
                  'What can not be expressed in any way can be expressed through words. Our professional content writers at digital marketing services in ' + data.cityName + ' excel at crafting impactful content marketing strategies, targeting the audience manipulatively. After its just a game of words, and they can help',
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
              Leading Digital Marketing Services
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              Mariox Software has successfully helped several businesses become
              agile in the marketplace in the past years and is continuing the
              legacy. Our client rate has become unstoppable. We believe this is
              because of our tremendous efforts towards every project where we
              ensure our client’s utter satisfaction and aimed results. In fact,
              our reputation management services are specially crafted to
              confirm that even after services, we keep up with our client’s
              expectations and can maintain high ROI results
            </p>
          </div>

          <AnimatedCards data={animatedCardsData} />
        </div>
      </section>
      <SelectedWorkSection heading="Case Study" />

      <section className="section-pad !pt-0">
        <div className="container">
          <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
            In what ways do we deal with digital marketing service
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

export default DigitalMarketingServices;
