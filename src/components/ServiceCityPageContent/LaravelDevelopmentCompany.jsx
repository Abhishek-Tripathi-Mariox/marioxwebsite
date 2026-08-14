import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

const LaravelAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/laravel-app-dev.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="bg-secondary pt-20 pb-22.5">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className="flex items-end gap-6 flex-wrap">
                            <div className="w-full md:w-2/3">
                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-64 xl:text-[80px] uppercase leading-[100%] mb-6">
                                        {data?.h1Text}
                                    </h1>

                                    <p className="max-w-[510px] mb-12">{data?.h1Desc}</p>

                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>

                            <div className="flex-1 text-center relative">
                                <div className="absolute top-0 left-0">
                                    <svg width="8" height="8" fill="none">
                                        <path
                                            fill="#19232F"
                                            fillRule="evenodd"
                                            d="M8 2V0H0v8h2V2h6Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute top-0 right-0 -scale-x-100">
                                    <svg width="8" height="8" fill="none">
                                        <path
                                            fill="#19232F"
                                            fillRule="evenodd"
                                            d="M8 2V0H0v8h2V2h6Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 -rotate-90">
                                    <svg width="8" height="8" fill="none">
                                        <path
                                            fill="#19232F"
                                            fillRule="evenodd"
                                            d="M8 2V0H0v8h2V2h6Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0 rotate-180">
                                    <svg width="8" height="8" fill="none">
                                        <path
                                            fill="#19232F"
                                            fillRule="evenodd"
                                            d="M8 2V0H0v8h2V2h6Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                <div className="absolute left-3 -translate-x-1/2 bottom-[10%]  md:max-w-full face-id">
                                    <img src="/img/laravel-app-dev-2.svg" alt="mariox" />
                                </div>

                                <img
                                    src="/img/laravel-app-dev.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={367}
                                    height={588}
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
                                    Our Laravel development services excel in the industry as we
                                    follow top technologies, helping us to reach our clients to
                                    new milestones. Our talented developers help you meet your
                                    business objectives and goals. Here are a few reason that
                                    makes us stand out in the industry.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/users-check.svg',
                                        title: 'Professional Laravel developers',
                                        description:
                                            'We create a visually appealing and stunning website, envisaging a seamless and intuitive user experience. Our design teams craft designs that are easy to navigate, engaging, and optimized for conversion. Your users will enjoy a smooth journey from start to finish.',
                                    },
                                    {
                                        icons: '/img/delivery-2.svg',
                                        title: 'Best-in-class support',
                                        description:
                                            'We prioritize SEO by optimizing site structure, using proper meta tags, creating high-quality content, and ensuring fast loading times. It drives organic traffic and boosts search engine rankings. This ensures your website reaches its full potential in search visibility.',
                                    },
                                    {
                                        icons: '/img/communication-check.svg',
                                        title: 'Transparent communication',
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
                                        icons: '/img/testing-2.svg',
                                        title: 'Comprehensive QA and Testing',
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
                                        icons: '/img/development.svg',
                                        title: 'Full stack development capability',
                                        description:
                                            'We integrate core technologies into WordPress websites. It enhances the site’s performance and website. Whether it’s about integrating CRM systems, e-commerce platforms, payment gateways, or third-party, we seamlessly integrate these core technologies into your website.',
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
                        Our Exceptional Laravel <br /> Web Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/phone-with-laravel.svg',
                                heading: 'Laravel Application Development',
                                description: (
                                    <>
                                        As a Laravel website development company in {data.cityName}, we specialise in customising templates and features for business use cases.
                                        Using the Laravel framework, we build unique designs and users for web apps,
                                        mobile apps, or e-commerce development. Your project will stand out with robust features.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/website.svg',
                                heading: 'Laravel Enterprise Application Development',
                                description:
                                    'As a leading Laravel website development company in ' + data.cityName + ', we specialise in simplifying integrations and providing built-in capabilities for large-scale enterprises. We offer  comprehensive CRM, CMS, and Laravel development solutions for all your business needs.',
                            },
                            {
                                serviceIcon: '/img/app-testing.svg',
                                heading: 'Laravel Custom Solutions',
                                description:
                                    'As a Laravel website development company in ' + data.cityName + ', We provide flexible solutions for solving any business challenges. Our customized RESTful APIs, custom dashboards, and integration will aid you in discovering the quality of our Laravel development services that cater to eCommerce, payment, and more needs.',
                            },
                            {
                                serviceIcon: '/img/delivery-2.svg',
                                heading: 'Laravel Maintenance and Support',
                                description:
                                    'Our Laravel website development company in ' + data.cityName + ' offers expert maintenance and support team resolves all your queries and issues and tailors them to your immediate and long-term business needs. Installing security patches, migrating applications to Laravel, or any other issues we are here to help you.',
                            },
                            {
                                serviceIcon: '/img/api.svg',
                                heading: 'Laravel API Development',
                                description:
                                    'For performance boosting, your website needs APIs. As a Laravel website development company in ' + data.cityName + ', our team can help you with Laravel API development to create flawless communication between mobile users and applications. We ensure your system is interconnected and functioning at its best.',
                            },
                            {
                                serviceIcon: '/img/b2b.svg',
                                heading: 'Laravel e-Commerce Development',
                                description:
                                    'At Mariox, as a Laravel website development company in ' + data.cityName + ', we specialise in secure Laravel eCommerce development.  We are pros in building eCommerce stores with secure payment gateways and interactive, high-performing designs. Your online store will be both safe and customer-friendly.',
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
            <section className="section-pad !pt-0">
                <div className="container">
                    <div className=" mb-12">
                        <Heading icon className="heading-medium mb-8">
                            Leading Laravel <br /> Development Company
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox is popular for Laravel Development services because of
                            our dedicated team of Laravel developers who work focused on the
                            project. We deliver custom solutions and excel in both front and
                            back-end development. We even provide customer-friendly quote
                            estimation as our goal is to make tech more affordable. We
                            mainly focus on client satisfaction and guarantee the best
                            application and design.
                        </p>
                    </div>
                </div>

                <div className="md:border-t md:border-t-primary ">
                    <div className="container">
                        <div className="grid md:grid-cols-3  gap-6">
                            {[
                                {
                                    title: '[Expert Laravel Developers]',
                                    description:
                                        'Our skillful developers are so passionate about Laravel development that they work round the clock. With in-depth knowledge of PHP, HTML, and JavaScript, they create visually appealing sites. We are proficient in varied plugin development, etc., which may exceed your technical expectations.',
                                },
                                {
                                    title: '[Tailored Solutions for Every Need]',
                                    description: (
                                        <>
                                            We specialize in providing tailored and technical
                                            solutions for diverse needs. Whether you are a start-up,
                                            enterprise, or an individual entrepreneur, we tailor
                                            sites and deliver robust technical solutions to your
                                            specific requirements.
                                        </>
                                    ),
                                },
                                {
                                    title: '[Cutting-edge Technologies and Practices]',
                                    description:
                                        'Adopting the newest technology and committing to lifelong learning is essential to staying ahead. Mariox takes excellent satisfaction in using state-of-the-art technologies, applying best practices, and staying up to date with trends to guarantee that your project is at the forefront of innovation.',
                                },
                            ].map(({ title, description, image }, index) => (
                                <div key={index} className=" -mt-2">
                                    <div className="w-4 h-4 mb-4 bg-primary" />

                                    <div className="text-primary text-12 mb-4 uppercase">
                                        {title}
                                    </div>
                                    <p className="mb-12 max-w-[282px]">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ProcessSection
                noTopBar
                heading="Our Methodology for Approaching Laravel Development"
                data={[
                    {
                        processIcon: '/img/people-white.svg',
                        processTitle: 'Requirements Gathering',
                        processDesc: (
                            <>
                                Once we plan your project, we keep an on identifying the
                                project’s scope. With a clear scope, we can track the on-time
                                completion of the project. To delineate the project scope, the
                                Gantt chart is considered the most effective tool and aids in
                                creating accountability within the development team.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/development-2.svg',
                        processTitle: 'Design and Development',
                        processDesc: (
                            <>
                                During the application design phase, the main goal is to
                                develop a prototype that accurately represents the
                                application&apos;s appearance and feel. After receiving
                                approval, the prototypes are developed into functional code,
                                with backend developers concentrating on database integration
                                and server-side applications and frontend developers on the
                                user interface.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/testing.svg',
                        processTitle: 'Testing and Deployment',
                        processDesc: (
                            <>
                                After receiving the client&apos;s final approval, the QA team
                                tests the application to ensure it functions well. The program
                                is made available to the intended user base on a server once
                                it has been tested.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/delivery.svg',
                        processTitle: 'Maintenance',
                        processDesc: (
                            <>
                                After it goes live, we provide post-deployment
                                responsibilities, including project documentation, continuing
                                maintenance, support, project documentation, customer
                                comments, and more.
                            </>
                        ),
                    },
                ]}
            />
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

export default LaravelAppDev;
