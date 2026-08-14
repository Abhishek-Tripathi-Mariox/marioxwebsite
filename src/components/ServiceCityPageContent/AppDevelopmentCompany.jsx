
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import AnimatedCards from "@/components/AnimatedCards/AnimatedCards";
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TechnologiesSection from '@/components/TechnologiesSection/TechnologiesSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import { logosApp } from '@/utils/clientLoos';
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'iOS application development',
                description:
                    'Design your first impression exaltedly! What if you get a beautifully designed website. Design your first impression exaltedly! What if you get a beautifully designed website.',
                image: '/img/ios-app-dev.webp',
                features: [
                    {
                        featureSingle: '[iOS app development]',
                    },
                    {
                        featureSingle: '[iOS Software testing]',
                    },
                    {
                        featureSingle: '[Enterprise ios Apps]',
                    },
                    {
                        featureSingle: '[Fluter app development]',
                    },
                ],
            },
        ],
    },
    {
        carddata: [
            {
                heading: 'Android application development',
                description:
                    'Design your first impression exaltedly! What if you get a beautifully designed website. Design your first impression exaltedly! What if you get a beautifully designed website.',
                image: '/img/ios-app-dev.webp',
                features: [
                    {
                        featureSingle: '[android app development]',
                    },
                    {
                        featureSingle: '[android Software testing]',
                    },
                    {
                        featureSingle: '[Enterprise android Apps]',
                    },
                ],
            },
        ],
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'iOS application development',
                description:
                    'Design your first impression exaltedly! What if you get a beautifully designed website. Design your first impression exaltedly! What if you get a beautifully designed website.',
                image: '/img/ios-app-dev.webp',
                features: [
                    {
                        featureSingle: '[iOS app development]',
                    },
                    {
                        featureSingle: '[iOS Software testing]',
                    },
                    {
                        featureSingle: '[Enterprise ios Apps]',
                    },
                    {
                        featureSingle: '[Fluter app development]',
                    },
                ],
            },
        ],
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'iOS application development',
                description:
                    'Design your first impression exaltedly! What if you get a beautifully designed website. Design your first impression exaltedly! What if you get a beautifully designed website.',
                image: '/img/ios-app-dev.webp',
                features: [
                    {
                        featureSingle: '[iOS app development]',
                    },
                    {
                        featureSingle: '[iOS Software testing]',
                    },
                    {
                        featureSingle: '[Enterprise ios Apps]',
                    },
                    {
                        featureSingle: '[Fluter app development]',
                    },
                ],
            },
        ],
    },
];

const animatedCardsData = [
    {
        whyTitle: "Free Consultation",
        whyContent:
            "Consult with us and learn about our various services that can help your business grow and generate higher ROI. We ensure that website development services are accessible to all, and budget should never be an issue, so we offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. Take a free consultation today, join us, observe changes, and see your business touch the skies.",
        animatePos: -10,
    },
    {
        whyTitle: "360 Scalability",
        whyContent: (
            <>
                Our company emphasizes the dynamic growth of your business. Hence, web and app development services can be the right stop for all your business-related issues. They comprise mobile app development, digital marketing, QA testing, website app development, Oracle, and other compatible solutions that can work wonders for client expectations and growth.


            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: "24/7 Support & On-Time Delivery",
        whyContent:
            "Our company emphasizes the dynamic growth of your business. Hence, web and app development services can be the right stop for all your business-related issues. They comprise mobile app development, digital marketing, QA testing, website app development, Oracle, and other compatible solutions that can work wonders for client expectations and growth.",
        animatePos: -40,
    },
];


const AppDevelopmentCompany = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/mobile-dev-banner.webp"} />
            <section className="bg-secondary pt-20 pb-22.5">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-end gap-6 flex-wrap">
                        <div className="w-full md:w-2/3">
                            <div className="py-10 md:py-0">
                                <h1 className="text-48 md:text-64 xl:text-[80px] uppercase leading-[100%] mb-12">
                                    {data?.h1Text}
                                </h1>

                                <p>{data?.h1Desc}</p>

                                <div
                                    className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
                                    <Button href="/contact">CONTACT US</Button>

                                    <div className="text-primary uppercase">
                                        [iOS development]
                                    </div>

                                    <div className="text-primary uppercase">
                                        [Android development]
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-center relative px-6 md:px-12">
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
                                src="/img/mobile-dev-banner.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={280}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <LogoSlider logos={logosApp} whiteBg />


            <section className="section-pad ">
                <div className="container">
                    <Heading icon className="mb-16 flex">
                        Our Explicit App <br /> Development Services
                    </Heading>

                    <div className="grid  md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/smartphone-app-dev.svg',
                                heading: 'Android App Development',
                                description:
                                    'Mariox is one of the best Android app development companies in Hyderabad, offering fully functional and secure application solutions tailored to business needs. Our company has an ample understanding of frameworks, industry experience, technical knowledge and innovative approaches.	',
                            },
                            {
                                serviceIcon: '/img/tab-app-dev.svg',
                                heading: 'iOS App Development',
                                description:
                                    'Our highly-skilled iOS application developers have the combined experience and knowledge of working on and delivering iPhone and iPad apps for various apps covering such genres as Healthcare, Business, Entertainment, Technology, Lifestyle, Travel, and more.                    ',
                            },
                            {
                                serviceIcon: '/img/tv-app-dev.svg',
                                heading: 'Hybrid App Development',
                                description:
                                    'Hybrid application development in Hyderabad involves creating an app compatible with numerous platforms. It uses a framework that works on iOS, Android, and Windows platforms. Hybrid application development uses web technologies such as CSS, JavaScript and HTML.',
                            },
                            {
                                serviceIcon: '/img/wearable-app-dev.svg',
                                heading: 'E-Commerce App Development',
                                description:
                                    'Being an end-to-end e-commerce app development company, we use advanced technologies to unlock potential revenue streams for you while maximising the business prospects of their application or product.',
                            },
                            {
                                serviceIcon: '/img/foldable-app-dev.svg',
                                heading: 'React Native App Development',
                                description:
                                    'Team up with the top React Native app development company with React Native, and develop your great idea along with our team of professional developers who will strengthen your mission and boost your business success through their contemporary technology implementation.',
                            },
                            {
                                serviceIcon: '/img/iot-app-dev.svg',
                                heading: 'Cross-Platform App Development',
                                description:
                                    'Our expert team with years of experience knows what creates apps that run smoothly on various platforms. Those apps lift your business to a completely new level. Mariox will make sure that you will get the highest quality product, smooth operation, and the best possible support in services throughout the lifetime of your app.',
                            },
                        ].map(({ heading, description, serviceIcon }, index) => (
                            <div
                                key={index}
                                className="bg-black p-8 min-h-[356px] flex-col flex relative group"
                            >
                                <div className="w-4 h-4 absolute bottom-0 left-0 bg-primary"></div>
                                <div className="w-4 h-4 absolute bottom-0 left-0 group-hover:-translate-x-full group-hover:translate-y-full duration-500 ease-elastic bg-primary"></div>
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

            <section className="section-pad why-mariox-section !pt-0  !pb-0">
                <div className="container">
                    <div className=" mb-12">
                        <Heading icon className="heading-medium mb-8">
                            App Development Service <br />
                            for Your Business Needs
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            At Mariox Software, we pride ourselves on delivering custom
                            solutions for startups and big brands. From strategy to UI/UX
                            design to digital prototyping, we are a mobile app and website
                            development company in Noida with expertise in developing and
                            designing innovative mobile and website development services for
                            all devices. With a strong focus on emerging technologies, our
                            skilled team is here to lead the growth of your next successful
                            venture.<br></br>
                            <br></br>
                            We are a top-rated mobile app development company in
                            Noida. You can rely on Mariox’s talented team of developers to
                            streamline your business processes, reach a large number
                            audience with an online presence or just about anything on the
                            website. <br></br>
                            <br></br>
                            We have always met the standards of the ever-changing challenges
                            of the IT sector. We believe more in actions, which is why we
                            have become the most preferred app development
                            company in Noida across technologies like Laravel, PHP,
                            Django/Python, AngularJS, CodeIgniter, and many more. <br></br>
                            <br></br>
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <TechnologiesSection />
            <ProcessSection />
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

export default AppDevelopmentCompany;
