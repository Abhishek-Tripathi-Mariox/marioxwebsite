import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import TechPageCard from "@/components/TechPageCard/TechPageCard";
import AboutContent from '@/components/AboutContent/AboutPage';

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
        heading: "Results and Delivery",
        description: (
          <>
            After the completion of the project, our team delivers the project
            to the client. Moreover, we offer our clients our support and
            maintenance services after delivering the project for extra edits or
            additions to the project later.
          </>
        ),
      },
    ],
    serviceIcon: "/img/editing.svg",
  },
];


const DesigningServices = ({ data }) => {
  return (
    <div className="page-main">
      <MetaOgContent data={data} imagePath={"/img/web-design.webp"} />
      <section className="pt-20  bg-secondary">
        <div className="container">
          <Breadcrumb items={data?.breadcrumb} />
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-full md:w-5/12">
              <div className="py-10 md:py-0">
                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                  {data?.h1Text}
                </h1>

                <p className="max-w-[510px] mb-12">
                  {data?.h1Desc}
                </p>

                <Button href="/contact">CONTACT US</Button>
              </div>
            </div>

            <div className="flex-1 text-center relative">
              <img
                src="/img/web-design.webp"
                className="inline-block"
                alt="mobile dev"
                width={690}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-5/12 px-3">
              <div className=" sticky top-15">
                <h2 className="text-32 md:text-48  uppercase mb-16">
                  {data?.h2Text}
                </h2>

                <p className="lg:max-w-[90%]">
                  Innovative minds develop unique visuals that captivate your
                  audience. Our designing perfectionists excel in branding and
                  identity design and various other UI/UX design services. We
                  offer all designing services and have a track record of more
                  than 500 happy clients. Our ultimate goal while offering our
                  designing services is client satisfaction and fascinating
                  visual deliverance for any project.
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
                        We offer our services at minimum client expenses
                        without compromising content quality. After all, your
                        investment should be worth it!
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
            Know the Type of Design <br /> Services We Offer
          </Heading>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                serviceIcon: "/img/landing-page.svg",
                heading: "UI Design",
                description: (
                  <>
                    Make your first appearance strike your viewers' brains
                    with appealing user interface designs. Our designers focus
                    on anticipating what users might be looking for and
                    merging the elements that could help them with an easy
                    CTA.
                  </>
                ),
              },
              {
                serviceIcon: "/img/website-2.svg",
                heading: "UX Design",
                description:
                  "A well-crafted website layout design is essential for a compelling online presence. Our skilled designer meticulously prepares the layout for seamless navigation. From intuitive user interface to charming visuals, we take care of every aspect that reflects your brand identity.",
              },
              {
                serviceIcon: "/img/website.svg",
                heading: "Mobile app Design",
                description: (
                  <>
                    Ensure your business apps have the best appearance on
                    mobiles. Our experts complete the task of designing mobile
                    applications as best as possible, considering all the
                    visuals and graphics used in the application are
                    interactive and impact your audience.
                  </>
                ),
              },
              {
                serviceIcon: "/img/ios-ui-ux.svg",
                heading: "Logo Design ",
                description:
                  "Get your business to stand differently in the marketplace and the known face of your brand with our logo design services. Our design experts will design an attractive logo for your business that reflects the vision behind your business.",
              },
              {
                serviceIcon: "/img/react-native.svg",
                heading: "Graphics Design",
                description: (
                  <>
                    Get compelling visuals with animations that transform
                    static designs into moving pictures, giving your consumers
                    a completely different experience. Contact us to learn how
                    motion graphics design works and how we can help your
                    business.
                  </>
                ),
              },
              {
                serviceIcon: "/img/monitor-square.svg",
                heading: "Icon & Illustation Design",
                description:
                  "Represent your concept or ideas through small, simplified graphical icons or symbols, and compelling illustrations help you target your audience creatively. A part of creativity that can do wonders to make anything look appealing, enhancing its appearance. ",
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
              Leading Design Services
            </Heading>

            <p className="text-16 leading-[120%] max-w-[715px]">
              Mariox Software has successfully helped several businesses
              become agile in the marketplace in the past years and is
              continuing the legacy. Our client rate has become unstoppable.
              We believe this is because of our tremendous efforts towards
              every project where we ensure our client’s utter satisfaction
              and aimed results. In fact, our UI/UX designing services are
              specially crafted per the client’s need to make user interface
              design appealing and compelling, resonating with their business.
            </p>
          </div>

          <AnimatedCards data={animatedCardsData} />
        </div>
      </section>

      <section className="section-pad !pt-0">
        <div className="container">
          <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
            In what ways do we deal with <br /> Design services
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

export default DesigningServices;
