import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechCard from '@/components/techCard/techCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
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
                    'We start the process once any client comes to us by understanding their business model, requirements, areas of improvement, and expectations of the website. Basically, in this step, we try to sync with the client’s idea of getting e-commerce website services so that we can deliver them exceptional services.',
            },
        ],
        serviceIcon: '/img/consultation-assesment.svg',
    },
    {
        carddata: [
            {
                heading: 'Design and Development',
                description:
                    'Once the complete process is clear to us, we proceed with strategizing the complete process to take the project forward. Our team of developers curates compelling UI/UX designs for the website. Then, the backend development team ensures the smooth functioning of the app to serve a seamless experience to the app users.',
            },
        ],
        serviceIcon: '/img/development.svg',
        cardBg: 'bg-white',

        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Testing',
                description:
                    'Upon completing the website, it becomes essential to check whether it is ready to be delivered and has no bugs, for which our testing team inspects the website and ensures that there are no bugs left. We rigorously validate every feature and functionality to ensure a seamless user experience.',
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
                    'The website is ready to be delivered after the team is completely satisfied and the client approves. We make the website live and offer our post-service maintenance support to the client, which entirely depends on the package chosen by the client. Our team keeps the success track of your application and work on maintaining its efficiency.',
            },
        ],
        serviceIcon: '/img/delivery-2.svg',
    },
];

const EcomAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/ecom-app-dev.webp"} />
            <div className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom">
                <section className="bg-secondary pt-20 pb-22.5">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className="flex items-end gap-6 flex-wrap">
                            <div className="w-full md:w-7/12">
                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                        {data?.h1Text}
                                    </h1>

                                    <p className="max-w-[510px]">{data?.h1Desc}</p>

                                    <div
                                        className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                                        <Button href="/contact">CONTACT US</Button>

                                        <div className="text-primary uppercase">
                                            [E-Commerce app development]
                                        </div>
                                    </div>
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

                                <div className="absolute left-3  md:-left-12 top-[50%]  md:max-w-full">
                                    <img src="/img/ecom-app-dev-1.webp" alt="mariox" />
                                </div>
                                <div className="absolute right-2  md:-right-0 top-[60%]  md:max-w-full">
                                    <img src="/img/ecom-app-dev-2.webp" alt="mariox" />
                                </div>
                                <div className="absolute right-3  md:-right-6 top-[20%]  md:max-w-full">
                                    <img src="/img/ecom-app-dev-3.webp" alt="mariox" />
                                </div>

                                <img
                                    src="/img/ecom-app-dev.webp"
                                    className="inline-block"
                                    alt="mobile dev"
                                    width={466}
                                    height={565}
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
                                    We have been trusted partners to many; this is only possible
                                    because of our team, which is committed to delivering
                                    exceptional e-commerce solutions to every client that could
                                    resonate with their business requirements and help them
                                    provide impeccable app functionality and services to their
                                    target audience. Keeping quality checks for every project,
                                    we ensure that every e-commerce mobile application our app
                                    development team designs is enthralled with intriguing
                                    features and appearance.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/standard-ui-ux.svg',
                                        title: 'Standard UI/UX Designing',
                                        description:
                                            'We firmly design standard and interactive UI/UX design in the E-commerce apps we develop to make it appealing to the user and easy to use and work with at the same time.',
                                    },
                                    {
                                        icons: '/img/custom-search.svg',
                                        title: 'Custom Search Features',
                                        description:
                                            'Our eCommerce app development team does not forget to interpolate custom search features that make it easy for users to navigate their favorite products or categories.',
                                    },
                                    {
                                        icons: '/img/simplified-payment-method.svg',
                                        title: 'Simplified Payment Methods and Checkouts',
                                        description: (
                                            <>
                                                We develop an app for your business and consumers that
                                                is simple to check out so that you do not become the
                                                next victim of having your products abandoned in the
                                                consumer&apos;s cart.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/bug-free.svg',
                                        title: 'Bug-Free & Optimization for Fast Speeds',
                                        description: (
                                            <>
                                                User experience should not be untarnished or
                                                frustrating with your application, and to make sure,
                                                our app development team design and develop eCommerce
                                                apps that are super-fast and glitch-free.
                                            </>
                                        ),
                                    },
                                    {
                                        icons: '/img/updates-alerts.svg',
                                        title: 'Integration for Updates & Alerts',
                                        description:
                                            'Your discounts and offers should reach consumers exclusively, so we always insert update and alert integration for emails in our apps.',
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
                        Determine the Potent E-Commerce <br /> Mobile App Development
                        Service
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/b2b.svg',
                                heading: 'Business-to-Business',
                                description:
                                    'Accelerate your digital transformation with our e-commerce app development in ' + data.cityName + '. Convince and convert more clients while boosting revenue through consolidated branding. Our platform provides businesses with a highly influential and impressive online presence.',
                            },
                            {
                                serviceIcon: '/img/b2c.svg',
                                heading: 'Business-to-Consumers',
                                description:
                                    'Make a lasting impact on your consumers with our e-commerce app development in ' + data.cityName + '. Offer an exceptional shopping experience with groundbreaking interfaces, attractive catalogues, and seamless functionality that keeps customers engaged and returning.',
                            },
                            {
                                serviceIcon: '/img/c2b.svg',
                                heading: 'Consumers-to-Business',
                                description:
                                    'Enhance your products and services by receiving direct feedback from consumers. Our e-commerce app development in ' + data.cityName + ' offers a user-friendly interface that allows your customers to easily share their opinions, helping you to refine offerings and build stronger, more responsive business strategies.',
                            },
                            {
                                serviceIcon: '/img/c2c.svg',
                                heading: 'Consumers-to-Consumers',
                                description:
                                    'We create user-friendly e-commerce app development in ' + data.cityName + ' solutions that provide a seamless shopping experience while enabling users to buy, sell, and exchange products and services with each other, fostering a vibrant and interactive marketplace.',
                            },
                            {
                                serviceIcon: '/img/b2a.svg',
                                heading: 'Business-to-Administration',
                                description:
                                    'Need to engage with government agencies? As an e-commerce app development company in ' + data.cityName + ', We develop cutting-edge e-commerce mobile applications designed for better tendering, contracts, and interactions with administrations, ensuring your business stays ahead in compliance and efficiency.',
                            },
                            {
                                serviceIcon: '/img/c2a.svg',
                                heading: 'Consumers-to- Administration',
                                description:
                                    'Empower users to connect directly to services through e-commerce app development in ' + data.cityName + '. We build mobile apps that offer a seamless, user-friendly experience, enabling glitch-free communication and access to essential services and information.',
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
                            Leading E-Commerce App <br /> Development Company
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox Software Pvt. Ltd. has successfully spent years in the
                            application and website development industry. We have a track
                            record of more than 350+ happy customers. Our E-commerce app
                            development services focus on accomplishing the maximum reach of
                            your apps and products, and hence, these services are enriched
                            with impeccable and intriguing user experience, easy CTA,
                            bug-free operations, compelling designs, and appearance.
                        </p>
                    </div>
                </div>

                <div className="md:border-t md:border-t-primary ">
                    <div className="container">
                        <div className="grid md:grid-cols-3  gap-6">
                            {[
                                {
                                    title: '[Free Consultation]',
                                    description:
                                        'We ensure that our services are accessible to all, and budget should never be the issue for which we offer our services at feasible prices and various payment facilities. Our professional business and project management team works round the clock to resolve all your doubts. ',
                                },
                                {
                                    title: '[360 Scalability]',
                                    description: (
                                        <>
                                            Our services can be the right stop for all your
                                            business-related issues, which comprise Mobile App
                                            Development, Digital Marketing, QA testing, Website App
                                            Development, Oracle, and various other solutions that
                                            are compatible and can do wonders to client&apos;s
                                            expectations and growth.
                                        </>
                                    ),
                                },
                                {
                                    title: '[24/7 Support & On-Time Delivery]',
                                    description:
                                        'Truly respecting the value of time, we offer assured, timely delivery. Mariox Software, being a dynamic mobile app development services provider, not only confirms your scalability and flexibility but is always up to take any sort of urgency and can handle it proficiently.',
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
            {/* <section className="section-pad !pt-0">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-[56%]">
              <h2 className="text-48  uppercase mb-16">
                Our Expert&nbsp;
                <span className="font-medium text-primary">
                  Application Development
                </span>{' '}
                Services
              </h2>
            </div>
            <div className="w-full px-4 md:w-[44%]">
              <p>
                Empower Your Digital Transformation with Mariox Software – Your
                Global Partner for Exceptional App Development. Our seasoned
                team crafts feature-rich applications, ensuring a seamless user
                experience and robust digital presence for your business.
                Unleash the potential of cutting-edge technologies with us, and
                elevate your brand to new heights.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="/img/full-temp-img.webp" className="w-full" alt="mariox" />
        </div>

        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 border-black/10 border border-r-0">
            {[
              {
                heading: 'Standard UI/UX Designing',
                subtext:
                  'Incorporating the conventional and emerging technologies in the iOS apps we design and develop.',
              },
              {
                heading: 'Innovation',
                subtext:
                  'Incorporating the conventional and emerging technologies in the iOS apps we design and develop.',
              },
              {
                heading: 'Customized solutions',
                subtext:
                  'Incorporating the conventional and emerging technologies in the iOS apps we design and develop.',
              },
              {
                heading: 'Tested code',
                subtext:
                  'Incorporating the conventional and emerging technologies in the iOS apps we design and develop.',
              },
            ].map(({ heading, subtext }, index) => (
              <div
                key={index}
                className="border-r border-r-black/10 py-6 px-4 md:py-12 md:px-6 min-h-[150px] md:min-h-[266px] border-t border-t-black/10 md:border-t-0"
              >
                <h3 className="text-16 mb-3"> {heading}</h3>
                <p className="text-12 mb-0">{subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

            <section className={`bg-black section-pad`}>
                <div className="container">
                    <Heading className="heading-medium text-white mb-14" icon>
                        Technologies We Primarily Rely Upon
                    </Heading>

                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                {
                                    techName: 'iOS',
                                    techIcon: '/img/ios.png',
                                    link: '/ios-app-development',
                                },
                                {
                                    techName: 'React',
                                    techIcon: '/img/react.png',
                                },
                                {
                                    techName: 'Flutter',
                                    techIcon: '/img/flutter.png',
                                    link: '/flutter-app-development',
                                },
                                {
                                    techName: 'Xamarin',
                                    techIcon: '/img/xamarian.png',
                                },
                                {
                                    techName: 'Android',
                                    techIcon: '/img/android.png',
                                    link: '/android-app-development'
                                },
                                {
                                    techName: 'Python',
                                    techIcon: '/img/python.png',
                                },
                                {
                                    techName: 'Ruby',
                                    techIcon: '/img/ruby.png',
                                },
                                {
                                    techName: 'Ionic',
                                    techIcon: '/img/ionic.png',
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
            <section className="section-pad">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        In what ways do we{' '}
                        <span className="font-medium text-primary">
                            deal with E-commerce Mobile App
                        </span>{' '}
                        Development
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

export default EcomAppDev;
