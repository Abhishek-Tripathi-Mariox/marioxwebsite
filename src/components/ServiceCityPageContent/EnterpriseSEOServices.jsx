import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import ServiceSchema from "@/components/Schema/serviceSchema";
import { NextSeo } from "next-seo";
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

const animatedCardsData = [
    {
        whyTitle: 'Audit and Research Your Website',
        whyContent:
            'Mariox Software has a list of a well-trained professional who audits SEO-related issues, such as broken links, missing meta tags, duplicate content, and slow page load times. Addressing these issues can enhance your search engine rankings and also organic traffic. ',
        animatePos: -10,
    },
    {
        whyTitle: 'Analyze The Competition',
        whyContent: (
            <>
                Analyzing the competition in the context of enterprise SEO services
                involves a systematic approach to gathering insights and developing
                plans/strategies. that can aid your business website in improving its
                search engine visibility and outperforming rivals.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: 'Measure Growth',
        whyContent: (
            <>
                Enterprise SEO growth refers to the process of achieving and sustaining
                increased organic traffic, visibility and overall online presence for
                large-scale businesses&apos; websites on search engines. Our experienced
                team will give you a monthly report based on an analytic report.
            </>
        ),
        animatePos: -40,
    },
];
const EnterpriseSeoServices = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/enterprise-seo.webp"} />
            <section className="bg-secondary pt-20">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="grid gap-15 mt-15 md:mt-[110px]">
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[790px] mx-auto">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[780px] mx-auto">
                                    {data?.h1Desc}
                                </p>

                                <div className="pt-1 ">
                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center relative">
                            <div className="absolute left-3 bottom-[10%] z-10 asset-shadow max-w-[20%]">
                                <img src="/img/enterprise-seo-1.webp" alt="mariox" />
                            </div>
                            <div
                                className="absolute right-0 md:-translate-x-1/2 top-6 md:top-[6%] z-10 asset-shadow max-w-[15%]">
                                <img src="/img/enterprise-seo-2.webp" alt="mariox" />
                            </div>
                            <div className="absolute right-3 lg:-right-12 bottom-[7%]  z-10 asset-shadow max-w-[30%]">
                                <img src="/img/enterprise-seo-3.webp" alt="mariox" />
                            </div>
                            <div className="inline-block relative">
                                <img
                                    src="/img/enterprise-seo.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={910}
                                    height={463}
                                />
                            </div>
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
                                    If you want more organic traffic, unlimited visibility, or
                                    want to help ranking for competitive keywords. In that case,
                                    Enterprise SEO services can help you reach your target
                                    audience, improve conversions, and generate significant
                                    revenue growth. Enterprise SEO services will do more than help
                                    your website rank well on Bing, Yahoo, and Google.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/globe.svg',
                                        title: 'Increased Organic Traffic',
                                        description: (
                                            <>
                                                Enterprise SEO services optimize a website&apos;s
                                                structure, content, and technical aspects to improve or
                                                enhance its search engine rankings. This leads to
                                                increased organic traffic to the business website, as
                                                higher-ranking pages are more likely to attract clicks
                                                from search engine users.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/roi.svg',
                                        title: 'ROI Tracking and Reporting',
                                        description:
                                            'Taking service from Mariox Software, the SEO Services team provides comprehensive reporting on critical metrics such as keyword rankings, organic traffic, conversion rates, and more. Having clear ROI data or information allows you to justify the budget allot to SEO services. ',
                                    },
                                    {
                                        icons: '/img/target.svg',
                                        title: 'Targeted Audience Reach',
                                        description: (
                                            <>
                                                Our Enterprise SEO services team involves keyword
                                                research to identify the phrases and terms your intended
                                                audience is searching for. By optimizing your business
                                                website content around these keywords, you can better
                                                connect with potential clients actively looking for your
                                                services or products.
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

            <section className="why-mariox-section">
                <div className="container">
                    <div className=" mb-12">
                        <Heading icon className="heading-medium mb-8">
                            Boost Your Business With Our <br />
                            Affordable Enterprise SEO Services.
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox Software is a leading digital marketing services provider
                            that helps increase your business’s search engine visibility and
                            social media presence at an affordable price. We provide
                            affordable SEO services for your company with measurable results,
                            dependable service, and both.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <ProcessSection
                noTopBar
                heading="Best Enterprise Seo Services and Process"
                data={[
                    {
                        processIcon: '/img/users-check-white.svg',
                        processTitle: 'Enterprise SEO Consultation',
                        processDesc: (
                            <>
                                Enterprise SEO Consultation and Strategy Development are
                                specialized services to optimize large businesses&apos; online
                                presence on search engines. These solutions involve tight
                                collaboration with a skilled SEO professional.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/monito-seo-white.svg',
                        processTitle: 'SEO Performance Monitoring',
                        processDesc: (
                            <>
                                It’s plays a significant role in any successful SEO Optimization
                                plan, including enterprise-level efforts. These processes
                                involve tracking key metrics, providing regular update and
                                analyzing data.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/store-white.svg',
                        processTitle: 'Enterprise SEO Workshops',
                        processDesc: (
                            <>
                                Enterprise SEO training and workshops are educational
                                initiatives designed to equip well-trained teams within large
                                businesses with the skills and knowledge required to manage and
                                execute SEO plans effectively.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/bag-white.svg',
                        processTitle: 'Enterprise E-Commerce SEO',
                        processDesc: (
                            <>
                                Enterprise Ecommerce SEO Services are specialized activities and
                                strategies designed to optimize the online presence of large
                                corporations that operate e-commerce websites.
                            </>
                        ),
                    },
                ]}
            />
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

export default EnterpriseSeoServices;
