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
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import { logosApp } from '@/utils/clientLoos';
import React from 'react';
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
                    'We sit with our clients to understand their needs and business modules. Our primary concern is the reason for which they are seeking iOS application development services. The type of iOS application they want to get designed, pages required, theme, must-haves, and all leftover information that could help us design and develop a compelling Apple software-based application for our client.',
                image: '/img/ios-dev-1.webp',
            },
        ],
        serviceIcon: '/img/consultation-assesment.svg',
    },
    {
        carddata: [
            {
                heading: 'Development',
                description:
                    'Now, enacting the design into a seamless experience through our professional backend application development. Our application developers code your application, making sure there are no bugs or glitches left. We understand that user experience defines a good app, and our team works significantly on this aspect by incorporating easy CTA, trusted and quick payment gateway methods, etc.',
                image: '/img/ios-dev-2.webp',
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
                    'To ensure a flawless application, our testing team meticulously examines every aspect, from performance and efficiency to individual features and functionalities, guaranteeing a seamless user experience. This rigorous testing process includes thorough checks for compatibility across different devices and operating systems, ensuring a consistent and reliable experience for all users.',
                image: '/img/ios-dev-3.webp',
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
                    'Get your iOS application’s timely delivery with quality and outstanding performance. That’s not it; things are beyond this; as the most reliable iOS app development agency, we offer our clients maintenance services even after the delivery of the project where we take care of the application and are available to make any improvements or edits required, our team keeps the success track of your application and work on maintaining its efficiency.',
                image: '/img/ios-dev-1.webp',
            },
        ],
        serviceIcon: '/img/delivery-4.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Free Consultation',
        whyContent:
            'As a top iOS app development company, we understand the importance of giving you a clear understanding of our work and work process. Book your free consultation session with us immediately and learn how we can help you skyrocket your business.',
        animatePos: -10,
    },
    {
        whyTitle: '360 Scalability',
        whyContent: (
            <>
                To ensure your business&apos;s holistic growth, learn about our other
                services, which are web and app development, digital marketing services,
                app development services, PPC marketing services, content marketing
                services, and designing services.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '24/7 Support & On-Time Delivery',
        whyContent:
            'The importance of time can not be denied; hence, your trusted iOS app development agency ensures the timely delivery of your project. Along with this, our development team is always ready to take any sort of urgency.',
        animatePos: -40,
    },
];
const IosAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/ios-development.webp"} />
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
                                        [IOs app development]
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

                            <div className="absolute left-3  md:-left-12 top-[50%] max-w-[60px] md:max-w-full face-id">
                                <img src="/img/face-id.svg" alt="mariox" />
                            </div>

                            <img
                                src="/img/ios-development.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={534}
                                height={593}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LogoSlider logos={logosApp} whiteBg />
            <section className="section-pad">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[80%]">
                                    Over the years, Mariox Software has been successfully able
                                    to earn the title of most reliable and top iOS application
                                    development agency across the globe because of never-ending
                                    efforts to enrich our iOS application development services
                                    with security and scalable digital solutions.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        title: 'Standard UI/UX Designing',
                                        description:
                                            'Incorporating conventional and emerging technologies in the iOS apps we design and develop, ensuring a seamless and engaging user experience.',
                                    },
                                    {
                                        title: 'Custom Search Features',
                                        description:
                                            'Maintaining the quality of the project and ensuring robust performance, scalability, and app performance.',
                                    },
                                    {
                                        title: 'Simplified Payment Methods and Checkouts',
                                        description:
                                            'Our professional developers with years of experience in the industry design and develop compelling, and intriguing iOS apps for your business that are compatible with all iOS platforms.',
                                    },
                                    {
                                        title: 'Bug-Free & Optimization for Fast Speeds',
                                        description: (
                                            <>
                                                Curating every code for the app that could resonate
                                                with our client&apos;s audience&apos;s expectations
                                                and requirements.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Integration for Updates & Alerts',
                                        description:
                                            'We ensure that the apps we deliver leave a lasting impression on iOS app users and give them a great experience.',
                                    },
                                ].map(({ title, description }, index) => (
                                    <div className="" key={index}>
                                        <TechPageCard
                                            padding
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
                    <Heading icon className="mb-16 flex">
                        Our Explicit iOS App <br /> Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/smartphone-app-dev.svg',
                                heading: 'iOS application development consultation',
                                description:
                                    'Our iOS experts at iOS app development company in ' + data.cityName + ' guide you in developing an app that perfectly aligns with your business objectives. We design and help in strategising your app solutions so that your iOS app doesn’t merely fit but is instrumental in the concrete success of the business.',
                            },
                            {
                                serviceIcon: '/img/ios-ui-ux.svg',
                                heading: 'iOS UI/UX Design',
                                description:
                                    'We specialize in creating custom iOS applications at our iOS app development company in ' + data.cityName + ' tailored to your specific business needs. Our developers focus on delivering scalable and future-ready solutions, ensuring that your app is robust, innovative, and perfectly aligned with your growth strategy.',
                            },
                            {
                                serviceIcon: '/img/custom-ios-app.svg',
                                heading: 'Custom iOS Application Development',
                                description:
                                    'Our skilled designers at iOS app development company in ' + data.cityName + ' create compelling, user-friendly interfaces that not only reflect your brand but also provide a seamless user experience. We ensure that every app we design leaves a lasting impression, meeting the high standards expected from iOS software.',
                            },
                            {
                                serviceIcon: '/img/ios-software-testing.svg',
                                heading: 'iOS Software Testing',
                                description:
                                    'To uphold the trust our clients place in us, an iOS app development company in ' + data.cityName + ', we rigorously test every aspect of the iOS app. Our priority is to ensure top performance and security, making certain that the app functions flawlessly and meets all industry standards before deployment.',
                            },
                            {
                                serviceIcon: '/img/enterprise-ios-apps.svg',
                                heading: 'Enterprise iOS Apps',
                                description:
                                    'At our iOS app development company in ' + data.cityName + ', We develop enterprise-grade iOS applications designed for large organisations using iOS devices. Our solutions are tailored to enhance operational efficiency, providing robust, scalable, and secure apps that meet the complex needs of enterprise environments.',
                            },
                            {
                                serviceIcon: '/img/voip.svg',
                                heading: 'VOIP Calling Apps',
                                description:
                                    'At our iOS app development company in ' + data.cityName + ', We design and develop VoIP calling apps that enable affordable and convenient internet-based voice and video communication. Our apps are built to deliver clear, reliable connections, enhancing the user experience and keeping people connected effortlessly.',
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
                            IOS App Development for Your <br />
                            Business Needs
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            As the most trusted iOS app development agency, Mariox Software
                            Pvt. Ltd. assures timely delivery of all projects without any
                            compromise on the project’s quality. Our iOS application
                            developers incorporate the latest technology and updated tools
                            to make your iOS applications future-prepared and
                            feature-packed.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
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
                                    techName: 'Android',
                                    techIcon: '/img/swift.png',
                                },
                                {
                                    techName: 'React Native',
                                    techIcon: '/img/react.png',
                                    link: '/react-native-app-development-company',

                                },
                                {
                                    techName: 'Flutter',
                                    techIcon: '/img/flutter.png',
                                    link: '/flutter-app-development',
                                },
                                {
                                    techName: 'PHP',
                                    techIcon: '/img/php.png',
                                    link: '/php-development',
                                },
                                {
                                    techName: 'JAVA',
                                    techIcon: '/img/java.png',
                                },
                                {
                                    techName: 'Dart',
                                    techIcon: '/img/dart.png',
                                },
                                {
                                    techName: 'C#',
                                    techIcon: '/img/c-hash.png',
                                },
                                {
                                    techName: 'Objective C',
                                    techIcon: '/img/objective-c.png',
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
                    <h2 className="text-32 md:text-48 lg:max-w-[60%] uppercase mb-16">
                        In what ways do we{' '}
                        <span className="font-medium text-primary">
                            deal with iOS App Development
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
                                imageBg={card.imageBg}
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

export default IosAppDev;
