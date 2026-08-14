import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechCard from '@/components/techCard/techCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import { logosApp } from '@/utils/clientLoos';
import React from 'react';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import Head from "next/head";
import { useRouter } from "next/router";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'Responsive Android Applications',
                description:
                    'An application’s potential is analyzed by its performance. Our professional developers ensure that as a responsible Android app development agency, we follow a process to ensure our client’s users a seamless experience with quick functionality and smooth usage.',
            },
        ],
        serviceIcon: '/img/responsive-android-app.svg',
    },
    {
        carddata: [
            {
                heading: 'CMS-Based Android Applications',
                description:
                    'We develop integrating user experience with CMS-based Android applications, which allows you to edit or add things to your applications within just one go. This eases the hassle of time-consuming procedures to update your business Android applications.',
            },
        ],
        serviceIcon: '/img/cms-android-app.svg',
        cardBg: 'bg-white',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Compelling Interfaces',
                description:
                    'Along with robust backend development, developers at Mariox Software ensure that your Android application looks compelling to visitors or viewers. They invest their time in designing compelling and interactive interfaces to make the app appealing and sync with your business’s objectives.',
            },
        ],
        serviceIcon: '/img/compelling-interfaces.svg',
        cardBg: 'bg-primary',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Easy to navigate',
                description:
                    'To avoid the struggle for your users, our developers make sure the Android applications are incorporated with easy-to-navigate functionality so that it is quick for the users to navigate through the application and access what they are searching for.',
            },
        ],
        serviceIcon: '/img/easy-to-navigate.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Free Consultation',
        whyContent:
            'As a top Android app development company, we understand the importance of giving you a clear understanding of our work process. Book your free consultation session with us immediately and learn how we can help you.',
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
            'The importance of time can not be denied; hence, your trusted Android app development agency ensures the timely delivery of your project. Along with this, our development team is always ready to take any sort of urgency.',
        animatePos: -40,
    },
];
const AndroidAppDev = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/android-app-dev.webp"} />
            <section className="bg-secondary pt-20 pb-22.5">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-end gap-6 flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div className="py-10 md:py-0">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                    {data?.h1Text}
                                </h1>

                                <p>{data?.h1Desc}</p>

                                <div
                                    className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                                    <Button href="/contact">CONTACT US</Button>

                                    <div className="text-primary uppercase">
                                        [Android development]
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

                            <img
                                src="/img/android-app-dev.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={1182}
                                height={1296}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LogoSlider logos={logosApp} whiteBg />
            <section className="section-pad">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className=" sticky top-15">
                                <h2 className="text-32  md:text-42 lg:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[90%]">
                                    We are a prominent Android application development company
                                    known globally for offering client-centric Android app
                                    development services that deliver striking business results,
                                    helping your business make remarkable imprints in the
                                    ever-changing business landscape. Our cutting-edge Android
                                    applications are tailored to meet your requirements and
                                    cater to your users’ needs. You can acquire robust, secure,
                                    and flawless Android applications with us. Here is how we
                                    ensure the best android app development benefits
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 px-3">
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
            </section>
            <section className="section-pad !pt-0">
                <div className="container">
                    <Heading icon className="mb-16 flex">
                        Our Explicit Android App <br /> Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/smartphone-app-dev.svg',
                                heading: 'Android smartphone app development',
                                description:
                                    'As an Android app development company in ' + data.cityName + ', we create powerful Android applications that enhance visibility and user reach. Our developers code potent Android applications for smartphones that can give a seamless user experience and easy payment gateways.	',
                            },
                            {
                                serviceIcon: '/img/tab-app-dev.svg',
                                heading: 'Android tablet app development',
                                description:
                                    'As a leading Android app development company in ' + data.cityName + ', we specialise in creating apps that fit Android tablets to make your business handier for consumers; making your services accessible is more likely to give your business extensive reach. Get your business competitive Android tablet app development services and gain leads easily. ',
                            },
                            {
                                serviceIcon: '/img/tv-app-dev.svg',
                                heading: 'Android Smart TV app development',
                                description:
                                    'As a leading Android app development company in ' + data.cityName + ', we provide innovative Android smart TV app development services. Our proficient developers ensure that your application works impeccably on smart TVs and is easy for users to navigate.',
                            },
                            {
                                serviceIcon: '/img/wearable-app-dev.svg',
                                heading: 'Android Wearables App Development',
                                description:
                                    'As a leading Android app development company in ' + data.cityName + ', we offer robust Android wearable app development services, our developers will offer robust Android wearable app development services. Enriched with all the features and easy to use without any glitches, it can leave an ever-lasting impression.',
                            },
                            {
                                serviceIcon: '/img/foldable-app-dev.svg',
                                heading: 'Android Foldable App Development	',
                                description:
                                    'With growing innovations, time demands high-tech apps. As a leading Android app development company in ' + data.cityName + ', we specialise in Android foldable app development services, perfectly complementing foldable devices. Tailor your business by incorporating prominent Android features with us, the best Android app development agency.',
                            },
                            {
                                serviceIcon: '/img/iot-app-dev.svg',
                                heading: 'Android IoT app Development',
                                description:
                                    'Boost your business with enhanced management and automation through Android IoT application development services in ' + data.cityName + '. Our solutions improve functionality, streamline operations, and increase overall efficiency and productivity.',
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
                            Android App Development for Your <br /> Business Needs
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Being the renowned Android app development agency globally,
                            Mariox Software Pvt. Ltd. ensures the delivery of quality app
                            development projects that resonate with market standards and
                            help you stand ahead of your competitors.
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
          <img src="/img/full-temp-img.webp" className="w-full" alt="" />
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
                                    techIcon: '/img/android.png',
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
                                    techName: 'Python',
                                    techIcon: '/img/python.png',
                                },
                                {
                                    techName: 'HTML5',
                                    techIcon: '/img/html5.png',
                                },
                                {
                                    techName: 'C++',
                                    techIcon: '/img/c++.png',
                                },
                                {
                                    techName: 'Ruby',
                                    techIcon: '/img/ruby.png',
                                },
                                {
                                    techName: 'Kotlin',
                                    techIcon: '/img/kotlin.png',
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
            <ProcessSection
                noTopBar
                heading="In what ways do we deal with Android App Development"
                data={[
                    {
                        processIcon: '/img/client-meeting.svg',
                        processTitle: 'Client Meeting',
                        processDesc: (
                            <>
                                We meet with our clients to understand their requirements and
                                necessities, which has made us their reliable Android app
                                development agency. As a loyal Android app development
                                company, we make sure that clients&apos; vision and business
                                goals are clear to our team. From competitors to market scope,
                                we analyze every aspect of our competitors.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/design-dev.svg',
                        processTitle: 'Design and Development',
                        processDesc:
                            'As an Android app development agency that does not believe in compromising on the quality of any project, our application design team meticulously works to make a compelling and interactive application interface that intrigues your users and creatively represents your business, leaving an everlasting impression.',
                    },
                    {
                        processIcon: '/img/testing.svg',
                        processTitle: 'Testing',
                        processDesc:
                            'So that there are no bugs left and the application is performing efficiently, our testers practice testing on the application and make sure that the developed Android application is up to the mark. We rigorously validate every feature and functionality to ensure a seamless user experience.',
                    },
                    {
                        processIcon: '/img/delivery.svg',
                        processTitle: 'Delivery and Post Service Support',
                        processDesc:
                            'As the most reliable Android app development agency, we offer our clients maintenance services even after the delivery of the project where we take care of the application and are available to make any improvements or edits required, our team keeps the success track of your application and work on maintaining its efficiency.',
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

export default AndroidAppDev;
