import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

const PhpAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/php-app-dev.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="bg-secondary pt-20 pb-22.5">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className="flex items-end gap-6 flex-wrap">
                            <div className="w-full md:w-2/3">
                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                        {data?.h1Text}
                                    </h1>

                                    <p className="max-w-[510px]">{data?.h1Desc}</p>

                                    <Button href="/contact">CONTACT US</Button>

                                    <div
                                        className="pt-10 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                                        <div className="text-primary uppercase">
                                            [Flexibility]
                                        </div>
                                        <div className="text-primary uppercase">
                                            [More faster]
                                        </div>
                                        <div className="text-primary uppercase">[Real time]</div>
                                        <div className="text-primary uppercase">
                                            [Open source]
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center relative md:mt-10">
                                <div className="absolute left-3  md:-left-12 top-[40%]  md:max-w-full face-id">
                                    <img src="/img/php-app-dev-2.svg" alt="mariox" />
                                </div>
                                <div className="absolute right-2  md:-right-15 top-[60%]  md:max-w-full">
                                    <img src="/img/php-app-dev-3.svg" alt="mariox" />
                                </div>
                                <div
                                    className="absolute left-0 md:-left-3 md:-translate-x-full translate-y-full md:translate-y-0 -bottom-3 md:bottom-0 md:max-w-full">
                                    <img src="/img/php-app-dev-4.svg" alt="mariox" />
                                </div>

                                <img
                                    src="/img/php-app-dev.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={384}
                                    height={572}
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
                                    Excel your business potential with maximum reach and leave
                                    everlasting imprints on your clients. Our PHP website
                                    development benefits are specially crafted for our clinets
                                    to meet their requirements and cater to their needs. The
                                    professional PHP website developers at Mariox Software have
                                    always been dedicated to designing and developing
                                    feature-rich and highly functional PHP websites that elevate
                                    your business games.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        title: 'Seamless Integration',
                                        description:
                                            'We firmly design standard and interactive UI/UX design in the E-commerce apps we develop to make it appealing to the user and easy to use and work with at the same time.',
                                    },
                                    {
                                        title: 'Responsive Web Design',
                                        description:
                                            'Our eCommerce app development team does not forget to interpolate custom search features that make it easy for users to navigate their favorite products or categories.',
                                    },
                                    {
                                        title: 'Secure Backup',
                                        description: (
                                            <>
                                                We develop an app for your business and consumers that
                                                is simple to check out so that you do not become the
                                                next victim of having your products abandoned in the
                                                consumer&apos;s cart.
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

            <section className="section-pad !pt-0">
                <div className="container">
                    <Heading icon className="heading-medium mb-16 flex">
                        Our Explicit PHP <br /> Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/app-testing.svg',
                                heading: 'Custom Web Development',
                                description: (
                                    <>
                                        Represent your business through a steady portable platform and deliver the
                                        utmost proficient services to your clients through a robust customised design with
                                        Mariox Software.As a provider of PHP development services in {data.cityName}, our expert PHP
                                        developers build high-performing websites tailored to your needs.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/server.svg',
                                heading: 'Intuitive CRM Development',
                                description: (
                                    <>
                                        Maximize the power of open-source with our PHP development services
                                        in {data.cityName} to build high-quality CRM solutions.
                                        We deliver robust PHP development frameworks to
                                        take care of and manage customer data and the company's
                                        relationship and interaction with its clients.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/cross-platform-mobile-app.svg',
                                heading: 'Robust Backend Solutions',
                                description:
                                    'As a leading provider of PHP development services in ' + data.cityName + ', we know that an application’s performance relies on robust backend functionality, and having proficient PHP application developers as the most trusted PHP website development agency, we offer robust backend solutions to our clients.',
                            },
                            {
                                serviceIcon: '/img/cloud.svg',
                                heading: 'Cloud Applications Solutions',
                                description:
                                    'Optimize productivity and manage workloads with expertly crafted PHP development services in ' + data.cityName + ' for cloud-enabled solutions. Now, conceptualise the web application’s future with the cloud and develop a potent digital presence. Our expert team will guide you through the process',
                            },
                            {
                                serviceIcon: '/img/b2b.svg',
                                heading: 'E-commerce Solutions',
                                description:
                                    'List your products with the benefits of PHP development services in ' + data.cityName + '. Our developers craft e-commerce solutions to scale your business that are primarily focused on accomplishing your business goals. We prioritize user experience, security, and scalability.',
                            },
                            {
                                serviceIcon: '/img/website.svg',
                                heading: 'Enterprise Web Portals',
                                description:
                                    'Empower your business with custom Enterprise Web Portals through our PHP development services in ' + data.cityName + '. Our expert PHP development team crafts scalable, secure, and intuitive portals that streamline communication, enhance collaboration, and drive efficiency.',
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

            <section className="section-pad bg-secondary">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className="sticky top-15">
                                <h2 className="text-32 md:text-48  uppercase mb-16 ">
                                    Leading PHP Development Company
                                </h2>
                                <p className="md:max-w-[85%]">
                                    Excel your business potential with maximum reach and leave
                                    everlasting imprints on your clients. Our PHP website
                                    development benefits are specially crafted for our clinets
                                    to meet their requirements and cater to their needs. The
                                    professional PHP website developers at Mariox Software have
                                    always been dedicated to designing and developing
                                    feature-rich and highly functional PHP websites that elevate
                                    your business games.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/client-meeting-2.svg',
                                        title: 'Free Consultation',
                                        description:
                                            'We ensure that our services are accessible to all, and budget should never be an issue, so we offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. ',
                                    },
                                    {
                                        icons: '/img/arrow.svg',
                                        title: '360 Scalability',
                                        description:
                                            'We are very flexible with our pricing, and we can give you the rates that work for your company. For Mariox company, client satisfaction is the key to achieving the final goal. It is the main motivation to come up with an outstanding end product.',
                                    },
                                    {
                                        icons: '/img/phone-24.svg',
                                        title: '24/7 Support & On-Time Delivery',
                                        description: (
                                            <>
                                                Truly respecting the value of time, we offer assured,
                                                timely delivery. Mariox Software, a dynamic PHP
                                                website development agency, not only confirms your
                                                scalability and flexibility but is always up to take
                                                any sort of urgency and handle it proficiently.
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

            <section className="pt-9 bg-[url(/img/black-squares-pattern.svg)] bg-repeat-x bg-left-top">
                <div className="bg-black section-pad">
                    <div className="container">
                        <Heading icon className=" mb-12 text-white ">
                            How You Can Benefit <br /> From PHP Development
                        </Heading>

                        <div className="grid grid-cols-2 md:grid-cols-4  border border-[#1C1C1B]">
                            {[
                                {
                                    icon: '/img/unlock.svg',
                                    industryName: 'Open-Source',
                                },
                                {
                                    icon: '/img/scale.svg',
                                    industryName: 'Scalable',
                                },
                                {
                                    icon: '/img/extensive.svg',
                                    industryName: 'Extensive Library',
                                },
                                {
                                    icon: '/img/felxibility.svg',
                                    industryName: 'Flexibility',
                                },
                                {
                                    icon: '/img/database.svg',
                                    industryName: 'Wide Selection Of Databases',
                                },
                                {
                                    icon: '/img/users.svg',
                                    industryName: 'Community Support',
                                },
                                {
                                    icon: '/img/wrench.svg',
                                    industryName: 'Easy To Maintain',
                                },
                                {
                                    icon: '/img/headphone.svg',
                                    industryName: 'Contact Us',
                                },
                            ].map(({ industryName, icon }, index) => (
                                <div
                                    key={index}
                                    className="group relative before:absolute before:z-10 before:bg-[#1C1C1B] before:w-[1px] before:h-full before:top-0 before:left-[-1px] after:absolute after:z-10 after:bg-[#1C1C1B] after:h-[1px] after:w-full after:left-0 after:top-[-1px]"
                                >
                                    <div className="overflow-hidden p-5 md:p-8 block">
                                        <div className="mb-8 md:mb-20 inline-block w-10 md:w-auto">
                                            <img src={icon} alt="mariox" />
                                        </div>

                                        <div
                                            className="text-12 md:text-16 text-white uppercase duration-700 ease-elastic group-hover:translate-x-20 group-hover:text-primary">
                                            &#123;{industryName}&#125;
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-pad">
                <div className="container">
                    <h2 className="text-24 md:text-48  uppercase mb-8 md:mb-16 max-w-[690px]">
                        In what ways do we deal <br /> with PHP Development
                    </h2>
                </div>

                <div>
                    <img src="/img/php-app-dev-full.webp" className="w-full" alt="mariox" />
                </div>

                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-black/10 border border-r-0">
                        {[
                            {
                                icon: '/img/client-meeting-2.svg',
                                heading: 'Consultation and Assessment',
                                subtext: (
                                    <>
                                        We start the process once any client comes to us by
                                        understanding their business model, requirements, areas of
                                        improvement, and expectations of the website. We try to
                                        sync with the client’s idea of getting PHP development.
                                    </>
                                ),
                            },
                            {
                                icon: '/img/development.svg',
                                heading: 'Design and Development',
                                subtext:
                                    'Once the entire process is clear to us, we will strategize the entire PHP development service process to move the project forward. Our team of developers curates compelling UI/UX designs for the website. ',
                            },
                            {
                                icon: '/img/testing-2.svg',
                                heading: 'Testing',
                                subtext:
                                    'Upon completing the website, it becomes essential to check whether it is ready to be delivered and has no bugs, for which our testing team inspects the website and ensures that there are no bugs left.',
                            },
                            {
                                icon: '/img/delivery-2.svg',
                                heading: 'Delivery and Post Service Support',
                                subtext:
                                    'The website is ready to be delivered after the team is completely satisfied and the client approves. We make the website live and offer our post-service maintenance support, which entirely depends on the package chosen.',
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

export default PhpAppDev;
