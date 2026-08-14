import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechCard from '@/components/techCard/techCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import { logosApp } from '@/utils/clientLoos';
import React from 'react';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'Consultation and Assessment',
                description:
                    'With the client meeting, we meet with their vision and mission behind getting the application designed. As your reliable Hybrid mobile app development company, we believe that it’s our responsibility to leave no page unturned before starting your project.',
            },
        ],
        serviceIcon: '/img/client-meeting-2.svg',
    },
    {
        carddata: [
            {
                heading: 'Design and Development',
                description:
                    'We strategically work on every piece of information the client provides and lay out a prototype to proceed with the project. Before devising any plan, we critically analyze the market, competitors, and scope related to the project. This approach ensures a well-rounded strategy aligned with your goals.',
            },
        ],
        serviceIcon: '/img/development.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Testing',
                description:
                    'We execute the plan and start implementing the designs. After an explicit design is prepared, our Hybrid app developer starts coding the application to make the design function on every platform and software. We keep you updated on progress and welcome your input at every stage.',
            },
        ],
        serviceIcon: '/img/testing.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Delivery and Post Service Support',
                description:
                    'Lastly, if the client approves, the app is all ready for delivery. We deliver the app, but our journey with you does not end here; we are with you in the long run. With our post-project delivery support and maintenance services, you can enjoy our long-term benefits even after the project delivery.',
            },
        ],
        serviceIcon: '/img/delivery-2.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Free Consultation',
        whyContent:
            'We ensure that our services are accessible to all, and budget should never be an issue, so we offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. ',
        animatePos: -10,
    },
    {
        whyTitle: '360 Scalability',
        whyContent: (
            <>
                We are very flexible with our pricing, and we can give you the rates
                that work for your company. For Mariox company, client satisfaction is
                the key to achieving the final goal. It is the main motivation to come
                up with an outstanding end product.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '24/7 Support & On-Time Delivery',
        whyContent:
            'We devoted ourselves to the handling each of the Hybrid mobile app development projects meticulously so as to come up with successful outcomes. We strive for excellence in hybrid app development, combining technical expertise with strong communication.',
        animatePos: -40,
    },
];
const CmsDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/cms-dev.webp"} />
            <section className=" pt-20">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="grid gap-15 mt-15 md:mt-[110px]">
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[790px] mx-auto">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[720px] mx-auto">{data?.h1Desc}</p>

                                <div className="pt-1 ">
                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center bg-secondary">
                            <div className="inline-block relative pt-10">
                                <img
                                    src="/img/cms-dev.webp"
                                    className="inline-block "
                                    alt="mobile dev"
                                    width={992}
                                    height={378}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LogoSlider logos={logosApp} whiteBg />

            <section className="section-pad">
                <div className="container">
                    <div className="">
                        <h2 className="text-32 md:text-48  uppercase mb-8">
                            {data?.h2Text}
                        </h2>

                        <p className="lg:max-w-[792px]">
                            As a highly recommended CMS development company, Mariox Software
                            covers numerous content management areas that eventually help
                            offer our clients a robust solution. We offer a full set of
                            eCommerce web development solutions from consultation to
                            development, design, optimization, and maintenance. You will get
                            custom CMS development services according to your business
                            requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 pt-10">
                        {[
                            {
                                serviceIcon: '/img/responsive-website.svg',
                                serviceHeading: 'Responsive Websites',
                                serviceDesc:
                                    'Day-by-day different companies are improving their website response. Amid this competition, to ensure that your business stays caught up, our professionals design mobile-friendly websites so your users can have a flawless experience while enjoying your services.',
                            },
                            {
                                serviceIcon: '/img/cms-based-website.svg',
                                serviceHeading: 'CMS-Based Websites',
                                serviceDesc:
                                    'Why do you need CMS-based websites? To edit, update or delete content from your website, you need CMS. Further, CMS must launch a new landing page and post the latest updates. Our Website design and development services include CMS-based website designing.',
                            },
                            {
                                serviceIcon: '/img/ios-ui-ux.svg',
                                serviceHeading: 'Website Design',
                                serviceDesc:
                                    'To compete in the market, well-designed websites that can be optimized on different platforms are a must in today’s age. We design websites that provide a flawless experience to users with advanced UI/UX, faster loading time and improved user experience.',
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

            <section className="section-pad !pt-0">
                <div className="container">
                    <Heading icon className="heading-medium mb-16 flex">
                        CMS development opens <br />
                        up many possibilities.
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/app-testing.svg',
                                heading: 'Custom Web Development',
                                description:
                                    'We offer expert CMS development services in ' + data.cityName + ', building custom solutions for high-performance websites. Our CMS specialists analyze and suggest the best practices and solutions you can adopt to stay one step ahead of the competition.',
                            },
                            {
                                serviceIcon: '/img/cms-theme.svg',
                                heading: 'CMS Theme/Extensions Development',
                                description:
                                    'At Mariox Software, we specialise in CMS development services in ' + data.cityName + ', offering custom themes and tailored solutions to meet your business needs. Our experienced CMS experts have several years of experience delivering custom themes and development solutions.',
                            },
                            {
                                serviceIcon: '/img/cms-migration.svg',
                                heading: 'CMS Migration & Upgradation',
                                description: (
                                    <>
                                        CMS development services in {data.cityName} help keep your business
                                        up-to-date and ready for growth.
                                        Mariox's development team understands the requirements of secured
                                        migration while updating sites to better versions that fulfil your business needs.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/hybrid-app-integeration.svg',
                                heading: 'CMS Integration',
                                description: (
                                    <>
                                        We offer CMS development services in {data.cityName}, integrating the
                                        latest marketing technologies like CRMs, analytics,
                                        and automation tools, along with features to optimize and customize content for better results.
                                        Our goal is to enhance your site's efficiency and user engagement.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/delivery-2.svg',
                                heading: 'CMS Support and Maintenance',
                                description: (
                                    <>
                                        We're here with technical support with our CMS development services in {data.cityName}.
                                        Our development team will help you with bug fixes, site improvements, and more.
                                        We also offer regular updates to keep your CMS functioning at its best. We stay proactive
                                        in identifying and resolving issues or bugs promptly.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/enterprise-solution.svg',
                                heading: 'Enterprise CMS Solutions',
                                description:
                                    'Our CMS development services in ' + data.cityName + ' help you stay ahead of the competition. Our experts analyzes, identifies, and proposes best practices and solutions to help you stay ahead of the competition. We tailor our services to meet the unique needs of your enterprise, ensuring long-term success.',
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

            <section className="section-pad why-mariox-section !pt-0">
                <div className="container">
                    <div className=" mb-12">
                        <Heading icon className="heading-medium mb-8">
                            Preeminent CMS Development Company
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox Software Pvt. Ltd. pioneered with the motive of
                            encouraging and helping every type of business in the
                            marketplace to grow. Being the preeminent CMS development
                            company globally, we have always relied upon partners to help
                            them transform from lows to highs. We have a record of
                            transforming several baby projects into a brand. Our primary
                            concern while delivering any project is maintaining its quality
                            and be the most known face for your business.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className={`bg-black section-pad`}>
                <div className="container">
                    <Heading className="heading-medium text-white mb-14" icon>
                        Technologies We Primarily Rely Upon
                    </Heading>

                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                {
                                    techName: 'Drupal',
                                    techIcon: '/img/drupal.png',
                                },
                                {
                                    techName: 'Magento',
                                    techIcon: '/img/magneto.png',
                                },
                                {
                                    techName: 'Prestashop',
                                    techIcon: '/img/prestashop.png',
                                },
                                {
                                    techName: 'Shopify',
                                    techIcon: '/img/shopify.png',
                                    link: './shopify-development-company'
                                },
                                {
                                    techName: 'WordPress',
                                    techIcon: '/img/wordpress.png',
                                    link: '/wordpress-development'
                                },
                                {
                                    techName: 'Joomla',
                                    techIcon: '/img/joomla.png',
                                },
                                {
                                    techName: 'Squarespace',
                                    techIcon: '/img/squarespace.png',
                                },
                                {
                                    techName: 'Wix',
                                    techIcon: '/img/wix.png',
                                },
                            ].map(({ techName, techIcon, link }, index) => (
                                <TechCard
                                    key={index}
                                    techName={techName}
                                    techImage={techIcon}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad ">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        In what ways do we deal with{' '}
                        <span className="font-medium text-primary">CMS Development</span>{' '}
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
            <SelectedWorkSection heading="Case Study" />
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

export default CmsDev;
