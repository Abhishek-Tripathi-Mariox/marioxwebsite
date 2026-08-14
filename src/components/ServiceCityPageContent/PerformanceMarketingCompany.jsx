import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'Search Engine Advertising',
                description:
                    'Have you ever seen Google ads? The perfect example of search engine advertising. Whether your business is small or huge, we help you to flourish through search engine advertising.',
            },
        ],
        serviceIcon: '/img/globe-search.svg',
    },
    {
        carddata: [
            {
                heading: 'Display Advertising',
                description:
                    'You must have witnessed different ads while using an app or website. The main purpose behind this is to promote your brand on the third-party website so that it can reach you to a larger extent.',
            },
        ],
        serviceIcon: '/img/image-search.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Social media Advertising',
                description:
                    'Today the world is going crazy about social media, and what can be a better platform than a social media platform to promote your business? With the best strategies, our experts know how to promote your company',
            },
        ],
        serviceIcon: '/img/phone-white.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Influencer Marketing',
                description: (
                    <>
                        Our paid Marketing company which is moving ahead with the latest
                        trends; we collaborate with the finest celebrities in the industry
                        to promote your business.
                    </>
                ),
            },
        ],
        serviceIcon: '/img/megaphone.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Certified Professional & Expert',
        whyContent:
            'Our Best digital marketing agency in Noida has a team of SEO consultants, SEO executives, Content Marketing Managers, PPC experts, Web designers, and developers who devotedly work on the client’s project',
        animatePos: -10,
    },
    {
        whyTitle: <>We&apos;re fast, Accurate & Reliable</>,
        whyContent: (
            <>
                Before starting your project, our team comprehensively understands your
                company and its requirements accordingly; the strategies are devised for
                better reach and increased clients; hence, Mariox has been the Google ad
                agency in Noida.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '24/7 Premium Support',
        whyContent:
            'As a responsible PPC Advertising company, we understand that resolving your queries is our responsibility. They listen to your questions and guide you accordingly. You can reach us anytime.',
        animatePos: -40,
    },
];
const PerformanceMarketing = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/performance-marketing.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="pt-20 pb-22.5 bg-secondary">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className="flex items-center gap-6 flex-wrap md:pt-15">
                            <div className="w-full md:w-1/2">
                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-64 xl:text-[80px] uppercase leading-[100%] mb-6">
                                        {data?.h1Text}
                                    </h1>

                                    <p className="max-w-[510px] mb-12">
                                        {data?.h1Desc}
                                    </p>

                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>

                            <div className="flex-1 md:text-end relative">
                                <div
                                    className="absolute left-3 -bottom-[15%] md:-translate-x-[30%] z-10 asset-shadow max-w-[38%]">
                                    <img src="/img/performance-marketing-2.webp" alt="mariox" />
                                </div>
                                <div
                                    className="absolute right-0 md:translate-x-1/2 top-6 md:top-[6%] z-10 asset-shadow max-w-[45%]">
                                    <img src="/img/performance-marketing-3.webp" alt="mariox" />
                                </div>
                                <img
                                    src="/img/performance-marketing.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={511}
                                    height={377}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="section-pad">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[80%]">
                                    Out of dedication and curiosity, Mariox has a team of
                                    extremely devoted professionals who are responsible for
                                    developing the best Pay per click- advertisement services for
                                    your business. For us, it does not matter if you are a newbie
                                    in the industry or an experience holder, but what we can
                                    assure you is your digital presence on different platforms.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/add-package.svg',
                                        title: 'Services we offer in Performance Marketing',
                                        description: (
                                            <>
                                                As a performance marketing agency in Noida, we are
                                                proficient in customer value propositions and help our
                                                clients to promote their businesses effectively. Our
                                                team of reliable professionals sit, communicate and
                                                strategises the best marketing methods and implement
                                                them for excellent results.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/bar-graph.svg',
                                        title: 'Breaking orthodox concepts of Marketing',
                                        description: (
                                            <>
                                                Marketing and promoting your business or products
                                                through traditional marketing methods is not sufficient.
                                                We move with the latest concepts of marketing that not
                                                only contribute to the immense growth of your business
                                                but also bring high traffic to your website.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/list-5.svg',
                                        title: 'Doing things the right way',
                                        description: (
                                            <>
                                                We understand until and unless your message gets
                                                delivered to the consumer, no promotion is worth doing.
                                                Hence, with every promotion of your brand in any way, we
                                                ensure that it gets to the targeted audience and
                                                convince them to a level that it converses to high
                                                traffic on a website.
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

            <section className="section-pad why-mariox-section !pt-0">
                <div className="container">
                    <div className=" mb-12">
                        <Heading icon className="heading-medium mb-8">
                            Why Choose the Prominent <br /> Performance Marketing Company?
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            We understand it’s a crucial decision to choose a particular
                            Performance Marketing company to enhance your business game. But
                            our clients are our most significant assets, and hence we
                            dedicatedly work to give them an even higher return on their
                            investment. You can sit back and let us handle your business game.
                            Our experts dedicatedly work at their best to expand your
                            business.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className=" sticky top-15">
                                <h2 className="text-32 md:text-42 lg:text-48  uppercase mb-16">
                                    Premium PPC Services from the best Performance Marketing
                                    Company
                                </h2>
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

export default PerformanceMarketing;
