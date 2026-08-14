import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'Expert Shopify Developers',
                description:
                    'Our skillful developers are so passionate about Shopify development that they work round the clock to deliver excellent sites. With in-depth knowledge of PHP, HTML, and JavaScript, they create visually appealing sites. ',
            },
        ],
        serviceIcon: '/img/users-check.svg',
    },
    {
        carddata: [
            {
                heading: 'Tailored Solutions for Every Need',
                description:
                    'We specialize in providing tailored and technical solutions for diverse needs. Whether you are a start-up, enterprise, or an individual entrepreneur, we tailor sites and deliver robust technical solutions to your specific requirements.',
            },
        ],
        serviceIcon: '/img/innovation.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Cutting-edge Technologies and Practices',
                description:
                    'Adopting the newest technology and committing to lifelong learning is essential to staying ahead in the fast-paced field of WordPress development. Mariox takes excellent satisfaction in using state-of-the-art technologies, applying best practices, and staying up to date with industry trends.',
            },
        ],
        serviceIcon: '/img/customised-solutions-2.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
];

const ShopifyAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/shopify-app-dev.webp"} />
            <section className="pt-20 pb-22.5">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-end gap-6 flex-wrap">
                        <div className="w-full md:w-5/12">
                            <div className="py-10 md:py-0">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[510px]">{data?.h1Desc}</p>

                                <Button href="/contact">CONTACT US</Button>
                            </div>
                        </div>

                        <div className="flex-1 text-center relative md:mt-10">
                            <img
                                src="/img/shopify-app-dev.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={728}
                                height={462}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad bg-secondary">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[80%]">
                                    Combining expertise, innovation, and a client-centric
                                    approach excels our Shopify development services. Our
                                    dedicated team meticulously crafts the marketing strategy,
                                    utilizes the latest technologies, and performs best
                                    practices to make your site functional and exceptional. We
                                    prioritize the design, user experience, and functionality
                                    that make our services stand out.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        title: 'Shopify SEO Optimization',
                                        description:
                                            'Our experts keep an eye on SEO optimization with the right strategy that enhances your growth. ',
                                    },
                                    {
                                        title: 'Shopify Plus Experts',
                                        description:
                                            'We have a dedicated team of Shopify developers with outstanding knowledge in designing, optimizing, and developing e-commerce stores.  ',
                                    },
                                    {
                                        title: 'Tailored Solutions',
                                        description: (
                                            <>
                                                We ensure that our Shopify web development solutions
                                                align with your business&apos;s requirements.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Competitive Pricing',
                                        description: (
                                            <>
                                                Our competitive pricing model for Shopify website
                                                development services aids you in having an exceptional
                                                value of services. Our e-commerce solutions are
                                                accessible to businesses of varying sizes and budgets
                                                without compromising quality.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Comprehensive E-commerce Solutions',
                                        description: (
                                            <>
                                                Apart from Shopify development services, we offer
                                                expertise in SEO, PPC, email marketing, and many more
                                                for business growth and success.
                                            </>
                                        ),
                                    },
                                ].map(({ title, description }, index) => (
                                    <div className="" key={index}>
                                        <TechPageCard
                                            key={index}
                                            number={`${index <= 8 ? '0' : ''}${index + 1}`}
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

            <section className="section-pad">
                <div className="container">
                    <Heading icon className="heading-medium mb-16 flex">
                        Our Exceptional Shopify <br /> e-Commerce Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/store.svg',
                                heading: 'Shopify Store Development',
                                description: (
                                    <>
                                        Our Shopify development company in {data?.cityName} will help you set up
                                        your Shopify store quickly and efficiently.
                                        Achieve your eCommerce goals faster through our custom Shopify development.
                                        We ensure your store is ready to thrive in the competitive market.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/b2b.svg',
                                heading: 'Shopify Theme Development',
                                description: (
                                    <>
                                        Opt for Shopify development company in {data?.cityName} for expert theme development services at Mariox.
                                        Our UI/UX designers create visually appealing designs that improve the appearance of your Shopify store online.
                                        Your store will stand out and attract more customers with our unique themes.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/app-testing.svg',
                                heading: 'Shopify Web Development',
                                description:
                                    'Apart from Shopify web development, as a Shopify development company in ' + data?.cityName + ', our team is proficient in creating mobile applications, ensuring smooth e-commerce and a seamless experience. Opting for Shopify mobile app development, we provide quality services across all platforms and devices.',
                            },
                            {
                                serviceIcon: '/img/delivery-2.svg',
                                heading: 'Shopify Maintenance and Support',
                                description:
                                    'From bug fixes to performance optimization and upgrading your Shopify store to the latest version, as a Shopify development company in ' + data?.cityName + ', our team is capable of maintaining and supporting each Shopify service. We keep your store running smoothly and efficiently at all times.',
                            },
                            {
                                serviceIcon: '/img/migration.svg',
                                heading: 'Shopify Migration',
                                description:
                                    'We are your trusted Shopify development company in ' + data?.cityName + ', aiding in making a smooth transition for any eCommerce store development. We ensure you migrate your online store to Shopify in no time. Your store will be up and running on Shopify without any downtime.',
                            },
                            {
                                serviceIcon: '/img/hybrid-app-integeration.svg',
                                heading: 'Shopify Integration',
                                description:
                                    'Elevate your Shopify eCommerce store with third-party integrations from a trusted Shopify development company in ' + data?.cityName + '. We integrate shopping carts, shipping, APIs, payment gateways, QuickBooks, social login, and many others. These integrations will streamline your operations and enhance customer satisfaction.',
                            },
                        ].map(({ heading, description, serviceIcon }, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 min-h-[356px] flex-col flex relative group"
                            >
                                <div className="w-4 h-4 absolute bottom-0 left-0 bg-primary"></div>
                                <div
                                    className="w-4 h-4 absolute bottom-0 left-0 group-hover:-translate-x-full group-hover:translate-y-full duration-500 ease-elastic bg-primary"></div>
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

            <section className="section-pad ">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className="sticky top-15">
                                <h2 className="text-32 md:text-42 lg:text-48 uppercase mb-16 ">
                                    Leading Shopify Development Company
                                </h2>
                                <p className="md:max-w-[85%]">
                                    Would choosing us be a wise decision? Choosing Mariox for
                                    Shopify web development or any other service will be your
                                    best decision ever. In collaboration with you, our sincere
                                    and dedicated team creates your dream Shopify eCommerce
                                    website development. We use the latest technologies, a
                                    flexible, agile development model, and our UI/UX expertise
                                    design visually appealing designs.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 px-3">
                            <div className="">
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
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <h2 className="text-24 md:text-48  uppercase mb-8 md:mb-16 max-w-[690px]">
                        Our Methodology for Approaching <br /> Shopify Development
                        Services
                    </h2>
                </div>

                <div>
                    <img
                        src="/img/shopify-app-dev-full.webp"
                        className="w-full"
                        alt="mariox"
                    />
                </div>

                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-black/10 border border-r-0">
                        {[
                            {
                                icon: '/img/client-meeting-2.svg',
                                heading: 'Requirements Gathering',
                                subtext: (
                                    <>
                                        With a clear scope, we can track the on-time completion of
                                        the project. To delineate the project scope, the Gantt
                                        chart is considered the most effective tool and aids in
                                        creating accountability within the development team.
                                    </>
                                ),
                            },
                            {
                                icon: '/img/development.svg',
                                heading: 'Design and Development',
                                subtext:
                                    'After receiving approval, the prototypes are developed into functional code, with backend developers concentrating on database integration and server-side applications and frontend developers on the user interface.',
                            },
                            {
                                icon: '/img/testing-2.svg',
                                heading: 'Testing and Deployment',
                                subtext: (
                                    <>
                                        After receiving the client&apos;s final approval, the QA
                                        team tests the application to ensure it functions well.
                                        The program is made available to the intended user base on
                                        a server once it has been tested.
                                    </>
                                ),
                            },
                            {
                                icon: '/img/delivery-2.svg',
                                heading: 'Maintenance',
                                subtext:
                                    'After it goes live, we provide post-deployment responsibilities, including project documentation, continuing maintenance, support, project documentation, customer comments, and more.',
                            },
                        ].map(({ heading, subtext, icon }, index) => (
                            <div
                                key={index}
                                className="border-r border-r-black/10 py-6 px-4 md:py-12 md:px-6 min-h-[150px] md:min-h-[266px] border-t border-t-black/10 md:border-t-0"
                            >
                                <div className="mb-5">
                                    <img src={icon} alt="mariox" />
                                </div>
                                <h3 className="text-16 mb-3"> {heading}</h3>
                                <p className="text-12 mb-0">{subtext}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <SelectedWorkSection heading="Case Study" />
            <IndustriesSection />
            {data?.testimonials && <TestimonialSliderSection data={data?.testimonials} />}
            {/* <AboutPage content={data?.aboutPage} pageName={data?.pageName}/> */}
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

export default ShopifyAppDev;
