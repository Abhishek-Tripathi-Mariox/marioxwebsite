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
                heading: 'Local Ecommerce SEO Services',
                description:
                    'Our Ecommerce SEO Services help you optimize your online store through the best e-commerce SEO practices, enhancing your online presence on various search engines and gaining more organic traffic for higher sales.',
            },
        ],
        serviceIcon: '/img/b2b.svg',
    },
    {
        carddata: [
            {
                heading: 'Local Enterprise SEO Services',
                description:
                    'For optimizing large-scale websites, we offer the best Enterprise SEO Services that include full website analysis, content management, and technical optimization leading to enriched visibility of your business and gaining organic leads and higher ROI.',
            },
        ],
        serviceIcon: '/img/store.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Local Multilingual SEO Services',
                description:
                    'By using the best-targeted keywords, we help you improve your business visibility in local search results through Local SEO Services. using prime principles like location-based keywords and GMB optimization to attract genuine and higher leads.',
            },
        ],
        serviceIcon: '/img/translate-white.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'GMB Optimization',
                description: (
                    <>
                        With Multilingual SEO Services, we ensure that audiences with
                        different language backgrounds can access your business. For the
                        same, we use methods that help in optimizing websites in various
                        languages for Higher ROI.
                    </>
                ),
            },
        ],
        serviceIcon: '/img/store-search.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'On-page Local SEO',
        whyContent:
            'Detailed reporting is essential for tracking the effectiveness of your local SEO efforts and making informed decisions to improve your strategy. A well-structured and detailed local SEO report provides transparency,and a clear direction for optimizing your local SEO strategy. ',
        animatePos: -10,
    },
    {
        whyTitle: 'Local Link Building & Listing',
        whyContent: (
            <>
                To date, we have offered exceptional results to our clients with our
                prominent digital marketing services. We have proven results that depict
                our hard work on every project of our clients. With the best industry
                practices, we ensure that to meet the requirements of your consumers.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: 'Detailed Reporting',
        whyContent:
            'We are available 24*7 for your service. Our team of customer support helps you with your queries and drives you through the process of how you can connect with us and what benefits you can acquire after investing in Mariox Software for fully-managed SEO services',
        animatePos: -40,
    },
];
const LocalSeoService = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/local-seo-service.webp"} />
            <section className="pt-20 pb-22.5">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-center gap-6 flex-wrap">
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

                        <div className="flex-1 text-center relative">
                            <img
                                src="/img/local-seo-service.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={507}
                                height={670}
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
                                    Effective local SEO services offer numerous benefits for all
                                    sizes of businesses looking to improve their online presence
                                    and attract local customers. Local SEO (Search Engine
                                    Optimization) focuses on optimizing a company’s digital assets
                                    to rank higher in local search results, particularly for
                                    location-based queries.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/target.svg',
                                        title: 'Local Keywords Targeting',
                                        description: (
                                            <>
                                                Local keyword targeting is a specialized aspect of
                                                Search Engine Optimization that focuses on optimizing
                                                your online presence for specific geographic locations.
                                                This strategy is crucial for businesses that want to
                                                attract customers from a particular area.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/store-search.svg',
                                        title: 'Google My Business (GMB)',
                                        description: (
                                            <>
                                                GMB is a platform provided by Google that allows
                                                businesses to manage and handle their online presence
                                                across Google&apos;s search engine and maps. It&apos;s a
                                                critical component of local SEO optimization and helps
                                                businesses connect with local customers.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/rating.svg',
                                        title: 'Ratings and Reviews',
                                        description: (
                                            <>
                                                Local SEO ratings and reviews are integral to building a
                                                strong online presence and attracting local customers.
                                                Positive reviews and ratings can significantly impact
                                                your local search rankings, improve click-through rates,
                                                and build trust with potential customers.
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
                            Our Skilled Local SEO Company Can <br /> Help You Achieve Local
                            Success
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox Software is an expert local SEO agency, India, as it can
                            ensure optimization efforts tailored to your specific needs and
                            excellent performance in local searches. We have years of
                            experience in local SEO services, and our expert campaign managers
                            can devise the right plans and engage ads to fetch excellent
                            results for location-based or local searches.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        Our Top Services From{' '}
                        <span className="font-medium text-primary">Fully Managed SEO</span>{' '}
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

export default LocalSeoService;
