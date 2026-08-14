import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
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
                    'We start the process once any client comes to us by understanding their business model, requirements, areas of improvement, and expectations of the website. In this step, we try to sync with the client’s idea of getting WordPress development services so that we can deliver them exceptional services.',
            },
        ],
        serviceIcon: '/img/user-check.svg',
    },
    {
        carddata: [
            {
                heading: 'Design and Development',
                description:
                    'Once the entire process is clear to us, we proceed with strategizing the entire process to move the project forward. Our team of developers curates compelling UI/UX designs for the website. Then, the backend development team ensures the smooth functioning of the website to provide a seamless experience to the website users.',
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
                    'Upon completing the website, it becomes essential to check whether it is ready to be delivered and has no bugs, for which our testing team inspects the website and ensures that there are no bugs left. We keep you updated on progress and welcome your input at every stage.',
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
                    'The website is ready to be delivered after the team is completely satisfied and the client approves. We make the website live and offer our post-service maintenance support to the client, which entirely depends on the package chosen by the client.  We are with you in the long run. ',
            },
        ],
        serviceIcon: '/img/delivery-2.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Expert WordPress Developers',
        whyContent:
            'Our skillful developers are so passionate about WordPress development that they work round the clock to deliver excellent sites. With in-depth knowledge of PHP, HTML, and JavaScript, they create visually appealing sites. We are proficient in varied plugin development, theme customization.',
        animatePos: -10,
    },
    {
        whyTitle: 'Tailored Solutions for Every Need',
        whyContent: (
            <>
                We specialize in providing tailored and technical solutions for diverse
                needs. Whether you are a start-up, enterprise, or an individual
                entrepreneur, we tailor sites and deliver robust technical solutions to
                your specific requirements.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: 'Cutting-edge Technologies and Practices',
        whyContent:
            'Embrace innovation in WordPress. Mariox takes excellent satisfaction in using state-of-the-art technologies, applying best practices, and staying up to date with industry trends to guarantee that your project is at the forefront of innovation.',
        animatePos: -40,
    },
];
const WordpressAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/wordpress-app-dev.webp"} />
            <section className="bg-secondary pt-20">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="grid gap-15 mt-15 md:mt-[110px]">
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[790px] mx-auto">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[780px] mx-auto">{data?.h1Desc}</p>

                                <div className="pt-1 ">
                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center ">
                            <div className="inline-block relative">
                                <img
                                    src="/img/wordpress-app-dev.webp"
                                    className="inline-block mix-blend-darken"
                                    alt="mobile dev"
                                    width={1200}
                                    height={384}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LogoSlider logos={logosApp} whiteBg />

            <section className="section-pad ">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className="sticky top-15">
                                <h2 className="text-32 md:text-48  uppercase mb-16 ">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[85%]">
                                    Mariox Software Pvt. Ltd. has established itself as the most
                                    popular hybrid app development company in India, scoring the
                                    best possible rating. We offer full-cycle hybrid application
                                    development services, covering all aspects of the
                                    development from planning and design to development, testing
                                    and deployment. With Mariox, you get a comprehensive all
                                    assisted hybrid application development solution.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/ios-ui-ux.svg',
                                        title: 'Exceptional UI/UX Design',
                                        description:
                                            'We create a visually appealing and stunning website, envisaging a seamless and intuitive user experience. Our design teams craft designs that are easy to navigate, engaging, and optimized for conversion. Your users will enjoy a smooth journey from start to finish.',
                                    },
                                    {
                                        icons: '/img/website.svg',
                                        title: 'SEO Cordial Website',
                                        description:
                                            'We prioritize SEO by optimizing site structure, using proper meta tags, creating high-quality content, and ensuring fast loading times. It drives organic traffic and boosts search engine rankings. This ensures your website reaches its full potential in search visibility.',
                                    },
                                    {
                                        icons: '/img/clock.svg',
                                        title: 'Lightening Fast Pages',
                                        description: (
                                            <>
                                                We guarantee quick page loading speed; our team
                                                employed techniques such as minifying code, caching,
                                                CDN integration, image optimization, etc., to ensure
                                                your website loads quickly and efficiently. Your
                                                visitors will experience swift access to your content.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/users-check.svg',
                                        title: 'Experienced Developers',
                                        description: (
                                            <>
                                                Mariox has a team of experienced and skilled
                                                developers for WordPress development services, with an
                                                in-depth understanding of this platform, its
                                                capabilities, complexities, and more, to aid them in
                                                creating a custom solution to meet your requirements.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/hybrid-app-integeration.svg',
                                        title: 'Integrated Core Technologies',
                                        description: (
                                            <>
                                                We integrate core technologies into WordPress
                                                websites. It enhances the site’s performance and
                                                website. Whether it’s about integrating CRM systems,
                                                e-commerce platforms, payment gateways, or
                                                third-party, we seamlessly integrate these core
                                                technologies into your website.
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

            <section className="section-pad !pt-0">
                <div className="container">
                    <Heading icon className="heading-medium mb-16 flex">
                        Our Exceptional WordPress <br /> Development Services
                    </Heading>
                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/app-testing.svg',
                                heading: 'Custom Website Development',
                                description:
                                    'For a strong digital presence, boost your business with our WordPress development services in ' + data.cityName + '. We create feature-rich, secure, and scalable WordPress solutions that can be customised to meet the requirements of diverse clients.',
                            },
                            {
                                serviceIcon: '/img/monitor-cms.svg',
                                heading: 'WordPress CMS Development',
                                description:
                                    'Hire expert developers for WordPress development services in ' + data.cityName + ' to create user-friendly WordPress CMS with scalable capabilities, robust integration, and functionalities. Opting for WordPress CMS development services aids you to manage your site’s content quickly.',
                            },
                            {
                                serviceIcon: '/img/delivery-2.svg',
                                heading: 'WordPress Maintenance Services',
                                description:
                                    'We offer comprehensive WordPress development services in ' + data.cityName + ', ensuring your site is always up-to-date and secure. Our WordPress maintenance services cover everything from designing and development to security and updates. Additionally, we ensure that your site goes for zero downtime and disruption.',
                            },
                            {
                                serviceIcon: '/img/website-2.svg',
                                heading: 'WordPress Website Development',
                                description: (
                                    <>
                                        We offer top-notch WordPress development services in {data.cityName}, delivering tailored,
                                        scalable, and secure websites that meet your goals. Our team works round the clock to
                                        deliver tailored solutions and scalable and secure sites that fulfill your goals and objectives.
                                        Our team develops high-quality websites that resonate with your target audience.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/shield.svg',
                                heading: 'WordPress Bug Fixing',
                                description:
                                    'Our specialized team offers expert WordPress development services in ' + data.cityName + ' to handle complex WordPress Bug Fixing and make your site work smoothly and efficiently. We have a proven track record of successfully resolving a wide range of WordPress issues, from minor glitches to major errors.',
                            },
                            {
                                serviceIcon: '/img/photoshop.svg',
                                heading: 'PSD to WordPress Conversion',
                                description: (
                                    <>
                                        Our expert designers convert PSD designs into feature-rich, responsive
                                        WordPress sites with WordPress development services in {data.cityName}.
                                        We guarantee that your site aligns with your current web standards
                                        and will get ranked in search results quickly.
                                    </>
                                ),
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
                            Leading WordPress <br /> Development Company
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Choosing the right partner for your WordPress development is a
                            prerequisite to crafting your digital footprint. We excel in
                            offering experienced developers who commit to transforming your
                            digital vision into reality.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        Our Methodology of Approaching{' '}
                        <span className="font-medium text-primary">
                            WordPress Development
                        </span>{' '}
                        Services
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

export default WordpressAppDev;
