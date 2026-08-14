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
                heading: 'Fully Managed SEO Services',
                description:
                    'To provide Fully managed SEO services, Mariox is famously known as the best SEO agency. Our team of professional SEO experts makes your business rank in the top searches of search engine pages.',
            },
        ],
        serviceIcon: '/img/b2b.svg',
    },
    {
        carddata: [
            {
                heading: 'E-Commerce SEO Services',
                description:
                    'To rank your product at the top of search engine pages, we use white-hat SEO strategies that make your product visible to the targeted consumers and appear at the top of the search results.',
            },
        ],
        serviceIcon: '/img/customised-solutions.svg ',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Local SEO Services',
                description:
                    'Our SEO Optimization Services also include Local SEO services that help your business grow in your league. That is, your business can grow and reach a high audience.',
            },
        ],
        serviceIcon: '/img/map-marker-white.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'International SEO Services',
                description: (
                    <>
                        Being the best SEO agency, we confirm all the possibilities to make
                        a global reach of your product/business. Our SEO experts consolidate
                        the strategies that meet the requirements to reach your business
                        globally.
                    </>
                ),
            },
        ],
        serviceIcon: '/img/globe.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Certified Professionals and Experts',
        whyContent:
            'Being a certified and experienced SEO company, Mariox has a team of certified experts who are highly skilled in their league. Our team has SEO consultants, SEO executives, Content Marketing Managers, PPC experts, Content Writers, Web designers, and developers who devotedly work on the client’s project.  ',
        animatePos: -10,
    },
    {
        whyTitle: <>We&apos;re fast, Accurate & Reliable</>,
        whyContent: (
            <>
                We provide digital marketing services to make your brand reach its goal
                quickly and efficiently. Before starting your project, our team
                comprehensively understands your company and its requirements
                accordingly; the strategies are devised for better reach and increased
                clients hence, Mariox has been the best SEO Company.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '24/7 Premium Support',
        whyContent:
            'We understand you might have doubts while investing in a company handing over your brand harness to maximize its worth. Being a responsible SEO company, we comprehend that resolving your queries is our responsibility, and for the same reasons, our experts are available 24/7 to assist you with your doubts. ',
        animatePos: -40,
    },
];
const SeoServices = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/seo-services.webp"} />
            <section className="pt-20  bg-secondary">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="w-full md:w-1/2">
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
                            <div
                                className="absolute right-0 md:translate-x-1/2 top-6 md:top-[10%] z-10 asset-shadow max-w-[25%]">
                                <img src="/img/seo-services-2.webp" alt="mariox" />
                            </div>
                            <img
                                src="/img/seo-services.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={591}
                                height={663}
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
                                    As a foremost best Digital Marketing Agency, Mariox has a
                                    record for the last five years for delivering outstanding
                                    Search Engine Optimization marketing (SEO) services in India
                                    and worldwide. Obligated with our partners’ support, we offer
                                    SEO benefits in the USA, UK, Australia, Canada, and New
                                    Zealand. Multiplex ranking keywords, prominent brands as our
                                    service consumers, clients’ satisfaction and testimonials, and
                                    several awards and certifications ostensibly depict our
                                    success through the past years.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/list.svg',
                                        title: 'SEO (Search Engine Optimization) Strategy',
                                        description: (
                                            <>
                                                We understand your concerns about maintaining your brand
                                                through our SEO services. From start to finish, our SEO
                                                experts ensure transparency in Mariox services. We
                                                deliver results that align with your budget and exceed
                                                expectations.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/list-5.svg',
                                        title: 'Honest SEO Practices',
                                        description: (
                                            <>
                                                Our clients are our most significant assets, and unlike
                                                any other SEO services agency, Mariox believes in
                                                positive practices and exemplary strategic
                                                implementations. For the exact cause, we only support
                                                positive/White-hat SEO practices, so as a result, your
                                                website ranks at the top of search engine pages.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/shield-check.svg',
                                        title: 'Services with Enriched Standards',
                                        description: (
                                            <>
                                                Our SEO services include PPC, Social Media, and
                                                Conversion Rate Optimization, delivering proven results.
                                                As Google algorithms evolve, we continuously refine our
                                                strategies. Our experts experiment with on-page SEO and
                                                link-building techniques for optimal outcomes.
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
                            Boost Your Business with <br /> the{' '}
                            <span className="text-primary">Best SEO Agency</span>.
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox quickly fixes your issues with strategies that work across
                            your organization and support your project’s objectives. No matter
                            what you are up to, be it growing, transforming, consolidating, or
                            centralizing, we are the support for you that you can count on
                            anytime.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        Premium SEO Services from the Best SEO Agency
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

export default SeoServices;
