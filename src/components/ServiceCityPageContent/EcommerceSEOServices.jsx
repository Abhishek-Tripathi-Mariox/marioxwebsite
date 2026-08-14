import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';

import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

const animatedCardsData = [
    {
        whyTitle: 'Substantial E-Commerce SEO Solutions',
        whyContent:
            'Our E-commerce SEO services include strategizing, keyword research, technical audits, on-page optimization, content marketing, and enhancing user experience. We implement tailored strategies to boost your product visibility and sales effectively. ',
        animatePos: -10,
    },
    {
        whyTitle: 'Effective Conversion-Driven Approach',
        whyContent: (
            <>
                We drive high website traffic through proven conversion-focused SEO
                tactics, including enterprise SEO services, to help expand your business
                and engage more users who take desired actions like purchasing or
                signing up.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: 'Measurable Results and Improvement',
        whyContent:
            'We deliver tangible results you can witness. Our experts analyze, implement, and optimize business and technical practices to ensure successful outcomes, proving the value of our services to our clients.',
        animatePos: -40,
    },
];
const EcommerceSeoServices = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/ecommerce-seo.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="bg-secondary pt-20">
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
                                    src="/img/ecommerce-seo.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={691}
                                    height={684}
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
                            Acquiring the best E-Commerce SEO services can help your product
                            with enhanced visibility and higher sales. If your product is a
                            new launch or is not yet known in the market, E-Commerce SEO
                            services can help it or your website as the top result in various
                            search engine results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 pt-10">
                        {[
                            {
                                serviceIcon: '/img/search.svg',
                                serviceHeading: 'Keyword and Product Optimization',
                                serviceDesc:
                                    'Targeting the right keyword on the right product page to optimize your product page and increase visibility. Give your potential consumers a clear view of your product’s benefits, features, and value, eventually leading to higher audience engagement and sales.',
                            },
                            {
                                serviceIcon: '/img/list.svg',
                                serviceHeading: 'Content and Category Optimization',
                                serviceDesc:
                                    'Optimizing your product page content, product descriptions, articles and other content according to the related category(like: Size, Color, weight) of the product page. And improve your product visibility on search engine result pages.',
                            },
                            {
                                serviceIcon: '/img/roi.svg',
                                serviceHeading: 'Google Analytics Report',
                                serviceDesc:
                                    'Make a detailed analysis of your website traffic and users’ actions on your website. Get yourself a clear view of your business growth with Acquisition channels, Audience overview, Behaviour surge, Conversion tracking, E-commerce performance and a lot more',
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
                            E-Commerce SEO Services That are Under Your Budget
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Different digital marketing agencies can charge you high prices
                            without proven results, but Mariox software ensures you the best
                            E-commerce SEO services at prices that are friendly to your pocket
                            also with proven results. We also offer customised E-commerce SEO
                            services tailored to your requirements, examining your business
                            and product directives.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    Successful and Affordable Ecommerce SEO Services
                                </h2>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/list-3.svg',
                                        title: 'Product page optimization',
                                        description: (
                                            <>
                                                With the best tactics, make your products more
                                                attractive to your targeted audience. We help you to
                                                Optimize your product page with the best E-commerce
                                                strategies for improved page visibility and product
                                                sale.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/customised-solutions.svg ',
                                        title: 'E-Commerce Site Structure',
                                        description:
                                            'Make a potential architecture for your E-commerce site, including all the technical infrastructure and design, such as servers, databases, programming languages, category navigation etc. ',
                                    },
                                    {
                                        icons: '/img/monitor-plug.svg',
                                        title: 'Handling Product Variations',
                                        description: (
                                            <>
                                                Products at E-commerce platforms often come with
                                                variations, such as color, size, material, pricing, etc,
                                                and require certain E-commerce SEO techniques to be
                                                handled well. Our experts master the art of Handling
                                                product variations
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/list-4.svg',
                                        title: 'Conversion page optimization',
                                        description: (
                                            <>
                                                Improve your landing page/web page with our experts and
                                                acquire higher leads for your business. Our experts help
                                                to bring the effectiveness that will encourage your
                                                visitors to perform your desired actions and boost your
                                                sale.
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

export default EcommerceSeoServices;
