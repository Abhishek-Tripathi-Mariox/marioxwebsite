import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
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
                heading: 'E-Commerce SEO',
                description:
                    'Our Ecommerce SEO Services help you optimize your online store through the best e-commerce SEO practices, enhancing your online presence on various search engines and gaining more organic traffic for higher sales.',
            },
        ],
        serviceIcon: '/img/b2b.svg',
    },
    {
        carddata: [
            {
                heading: 'Enterprise SEO',
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
                heading: 'Local SEO Services',
                description:
                    'By using the best-targeted keywords, we help you improve your business visibility in local search results through Local SEO Services. using prime principles like location-based keywords and GMB optimization to attract genuine and higher leads.',
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
                heading: 'Multilingual SEO',
                description:
                    'With Multilingual SEO Services, we ensure that audiences with different language backgrounds can access your business. For the same, we use methods that help in optimizing websites in various languages for Higher ROI.',
            },
        ],
        serviceIcon: '/img/translate.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Certified Experts',
        whyContent:
            'As a best SEO agency we spent more than five years in the digital marketing industry. We have a team of professional and certified experts to look after various digital marketing elements, such as SEO, content marketing, web design and development, PPC, Customer support, etc. ',
        animatePos: -10,
    },
    {
        whyTitle: 'Exceptional Results',
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
        whyTitle: '24/7 Premium Support',
        whyContent:
            'We are available 24*7 for your service. Our team of customer support helps you with your queries and drives you through the process of how you can connect with us and what benefits you can acquire after investing in Mariox Software for fully-managed SEO services',
        animatePos: -40,
    },
];
const FullyManagedSeoServices = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/fully-managed-seo.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="bg-secondary pt-20 pb-22.5">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className="flex items-end gap-6 flex-wrap">
                            <div className="w-full md:w-1/2">
                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-64 xl:text-[80px] uppercase leading-[100%] mb-6">
                                        {data?.h1Text}
                                    </h1>

                                    <p className="max-w-[510px] mb-12">{data?.h1Desc}</p>

                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>

                            <div className="flex-1 text-center relative">
                                <div
                                    className="absolute left-3 md:-translate-x-1/2 top-6 md:top-auto md:bottom-[10%]  max-w-[120px]">
                                    <img src="/img/fully-managed-seo-2.webp" alt="mariox" />
                                </div>

                                <img
                                    src="/img/fully-managed-seo.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={510}
                                    height={451}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="section-pad">
                <div className="container">
                    <div className="">
                        <h2 className="text-32 md:text-48  uppercase mb-8 max-w-[790px]">
                            {data?.h2Text}
                        </h2>

                        <p className="lg:max-w-[792px]">
                            As a responsible digital marketing company, we will enhance your
                            online visibility through various SEO strategies such as keyword
                            optimization, technical optimization, link building, content
                            management, On-page optimization, algorithm update, and more. We
                            use fully-managed SEO services to enhance your organic lead
                            generation leading them to higher conversion rates and return on
                            investment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 pt-10">
                        {[
                            {
                                serviceIcon: '/img/list.svg',
                                serviceHeading: 'Fully Managed SEO Strategies',
                                serviceDesc:
                                    'At Mariox Software, we specialize in crafting custom mobile applications tailored to your unique vision and business needs. Our team of experienced developers works closely with you to conceptualize, design, and develop high-quality mobile apps that resonate with your target audience.',
                            },
                            {
                                serviceIcon: '/img/checkbox.svg',
                                serviceHeading: 'Ethical SEO Process',
                                serviceDesc:
                                    'Mariox software only follows a long-term white hat SEO Process. Our major focus is content quality, keyword research and optimization, ethical link-building practices, On-page & off-page optimization, and all other important SEO aspects. We follow every practice respecting the Search engine guidelines for the best outcomes.',
                            },
                            {
                                serviceIcon: '/img/list-2.svg',
                                serviceHeading: 'We provide excellent facilities',
                                serviceDesc:
                                    'We deliver top-notch, fully managed SEO services to our clients, comprising various aspects of search engine optimization such as Technical audit, on-page and off-page optimization, content optimization, off-page submissions like Guest posts, PR Submission, and many more, technical optimization, and more.',
                            },
                        ].map(({ serviceHeading, serviceDesc, serviceIcon }, index) => (
                            <div className="item" key={index}>
                                <div
                                    className="p-4 border border-secondary border-r-0 last:border-r-secondary last:border-r h-full flex service-single">
                                    <div
                                        className="p-8 flex flex-col bg-secondary duration-500 ease-out group  relative">
                                        <div className="mb-6 inline-block ">
                                            <img src={serviceIcon} alt="mariox" />
                                        </div>

                                        <h3 className="text-20 md:text-24 mb-8 md:mb-4 duration-500 ease-out ">
                                            {serviceHeading}
                                        </h3>

                                        <div className="flex-1 flex items-end">
                                            <p className="text-12 mb-0 duration-500 ease-out ">
                                                {serviceDesc}
                                            </p>
                                        </div>

                                        <div
                                            className="absolute bottom-0 left-0 w-4 h-4 bg-secondary  z-0 duration-500 ease-out "></div>
                                        <div
                                            className="absolute bottom-0 left-0 w-4 h-4 bg-secondary z-10 duration-500 ease-out "></div>
                                    </div>
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
                            Advanced Results With the Best SEO Approaches
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            With our Fully managed SEO services, you can organically ensure
                            your website’s high visibility and digital presence. Our experts
                            use SEO strategies that help you to rank on search engines. The
                            SEO team at Mariox Software tailors services and strategies per
                            your business’s industry.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        Our Top Services From{' '}
                        <span className="font-medium text-primary">
                            Fully Managed SEO
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

export default FullyManagedSeoServices;
