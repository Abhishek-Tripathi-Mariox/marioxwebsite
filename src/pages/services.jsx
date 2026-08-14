import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import AnimatedCards from "@/components/AnimatedCards/AnimatedCards";
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import ServiceSchema from '@/components/Schema/serviceSchema';
import { fetchServicePageDetails } from '@/lib/api';
import { logosApp } from '@/utils/clientLoos';
import React from 'react';
import TechnologiesSection from '@/components/TechnologiesSection/TechnologiesSection';
import { NextSeo } from 'next-seo';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import ContactForm from '@/components/ContactForm/ContactForm';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
// import AboutContent from '@/components/AboutContent/AboutPage';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import AboutPage from "@/components/AboutPage/AboutPage";
import Image from 'next/image';
import Script from 'next/script';
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

// import FoodDeliveryBanner from '../../public/img/food-delivery-website.jpg'

// Contact Modal Component

function ContactModal({ isOpen, closeModal }) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                {/* Backdrop */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
                </TransitionChild>

                {/* Modal Container */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#ece7e1] p-6 text-left align-middle shadow-xl transition-all">
                                {/* Cross Icon Top-Right */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                                    aria-label="Close"
                                >
                                    &times;
                                </button>

                                {/* Contact Form */}
                                <div className="mb-0">
                                    <ContactForm />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

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

const Services = (pageDetails) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data = {} } = pageDetails;
    const router = useRouter();
    const prevParams = useRef(router.query); // Store previous params

    useEffect(() => {
        if (JSON.stringify(prevParams.current) !== JSON.stringify(router.query)) {
            prevParams.current = router.query; // Update previous params
            router.reload();
        }
    }, [router?.query]); // Run effect when query params change

    let slug = prevParams?.current?.serviceCity || '';
    const parts = slug ? slug?.split('-') : [];
    const cityName = parts.length > 0 ? parts[parts?.length - 1] : 'Unknown City';

    // converted slug into keyword for seo
    function formatSlug(slug) {
        return slug.replace(/-/g, ' ');
    }

    const convertSlugToKeyWord = formatSlug(slug);

    // setup canonical url
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;

    return (
        <>
            <ServiceSchema slug={data?.slug} />
            <NextSeo
                title={data?.seoMeta?.title}
                description={data?.seoMeta?.description}
                canonical={canonicalUrl}
            />
            <MetaOgContent data={data} imagePath={"/img/mobile-dev-banner.webp"} />
            <div className="page-main">
                <section className="bg-secondary pt-20 pb-22.5">
                    <div className="container">
                        <Breadcrumb items={data?.breadcrumb} />
                        <div className='flex flex-col md:flex-row '>
                            <div className=" w-full md:w-1/2  flex-wrap">

                                <div className="py-10 md:py-0">
                                    <h1 className="text-48 md:text-54 lg:text-72 xl:text-[65px] uppercase leading-[100%] mb-12">
                                        {data?.h1Text}
                                    </h1>

                                    <p className='pr-8'>{data?.h1Desc}</p>

                                    <div className="pt-1 md:pt-23 flex justify-between md:items-end md:pr-15 flex-wrap flex-col md:flex-row items-start gap-6">
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
                            <div className="w-full md:w-1/2">
                                <ContactForm cityName={cityName} />
                            </div>
                        </div>
                    </div>
                </section>

                <LogoSlider logos={logosApp} whiteBg />


                {/* Food Section Start */}


                {/* single image start */}

                {/* <section className="w-full px-4 py-6 mt-15">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 relative h-[500px] rounded-2xl">
                        <Image
                            src="https://mariox-website.s3.ap-south-1.amazonaws.com/c8d94a221811659.67dad7a0dd479.png"
                            alt="Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section> */}

                {/* single image end */}

                {/* multi image start section */}

                {/* <section className="w-full px-4 py-6 mt-15">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                        {(() => {
                            const items = [];
                            const images = data?.images ?? [];
                            let contentPointer = 0;
                            for (let i = 0; i < images.length; i++) {
                                const image = images[i];

                                items.push(
                                    <div
                                        key={`img-${i}`}
                                        className={`h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md bg-white sticky top-0 z-[${i + 1}]`}
                                    >
                                        <Image
                                            src={image.image}
                                            alt={`Image ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={i === 0}
                                        />
                                    </div>
                                );

                                if (i % 2 === 0) {
                                    for (let j = 0; j < 2; j++) {
                                        if (contentPointer < images.length) {
                                            items.push(
                                                <div
                                                    key={`content-${contentPointer}`}
                                                    className={`h-64 sm:h-80 md:h-96 bg-[#e43c13]/80 text-white rounded-2xl p-4 overflow-auto shadow-md  items-center sticky top-0 z-[${i + 1}]`}
                                                >
                                                    <h2 className="text-xl  p-5">
                                                        {images[contentPointer]?.title}
                                                    </h2>
                                                    <div className="py-5 md:p-5" dangerouslySetInnerHTML={{ __html: images[contentPointer]?.content }} />
                                                </div>
                                            );
                                            contentPointer++;
                                        }
                                    }
                                }
                            }
                            return items;
                        })()}
                    </div>
                </section> */}


                {/* Banner Section */}


                {/* <section className="w-full bg-[#eeeaea] px-4 py-12">
                    <div className="max-w-9xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                            What Makes Us The Best{" "}
                            <span className="text-pink-500">Food Delivery App</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                                Development Company
                            </span>{" "}
                            for Food-Tech Start Ups
                        </h2>

                        <div className="mt-1 relative flex justify-center">
                            <img
                                src={FoodDeliveryBanner.src}
                                alt="Food Delivery Platform Screens"
                                className="w-full max-w-4xl"
                            />
                        </div>
                    </div>
                </section> */}

                {/* Dynmaic part start  */}
                <>
                    {Array.isArray(data?.images) && data.images.length > 0 && (
                        <section className="w-full bg-white px-4 sm:px-12 py-12">
                            {data.images.map((item, index) => (
                                <div
                                    key={index}
                                    className={`max-w-8xl mx-auto flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        } items-center gap-10 py-10`}
                                >
                                    {/* Text */}
                                    <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
                                        <p className="text-3xl md:text-5xl font-bold leading-tight">
                                            <span className="text-[#1e1e1e]">{item?.title}</span>
                                        </p>
                                        <div
                                            className="text-gray-600 text-lg space-y-3"
                                            dangerouslySetInnerHTML={{ __html: item?.content }}
                                        />
                                        {/* Button */}
                                        <div className="pt-6">
                                            <button
                                                onClick={() => setIsOpen(true)}
                                                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
                                            >
                                                We Help You Go Online – Contact Us
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="lg:w-1/2 relative">
                                        <img
                                            src={item.image}
                                            alt={item?.title || 'mariox'}
                                            className="w-full h-auto rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Modal */}
                    <ContactModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
                </>

                {/* Dynamic part end  */}


                {/* multi image end section */}

                {/* Food Section End */}

                <ProcessSection />
                <TechnologiesSection />

                <section className="section-pad why-mariox-section  !pb-0">
                    <div className="container">
                        <div className=" mb-12">
                            {/* <Heading icon className="heading-medium mb-8">
                                App Development Service <br />
                                for Your Business Needs
                            </Heading> */}

                            <div className="heading-medium mb-8 flex items-center gap-2 text-3xl font-semibold text-black">
                                {/* Add icon here manually if required */}
                                <span>
                                    App Development Service <br />
                                    for Your Business Needs
                                </span>
                            </div>

                            <p className="text-16 leading-[120%] max-w-[715px]">
                                At Mariox Software, we pride ourselves on delivering custom
                                solutions for startups and big brands. From strategy to UI/UX
                                design to digital prototyping, we are a mobile app and website
                                development company in {cityName} with expertise in developing and
                                designing innovative mobile and website development services for
                                all devices. With a strong focus on emerging technologies, our
                                skilled team is here to lead the growth of your next successful
                                venture.<br></br>
                                <br></br>
                                We are a top-rated mobile app development company
                                in {cityName}. You can rely on Mariox’s talented team of developers to
                                streamline your business processes, reach a large number
                                audience with an online presence or just about anything on the
                                website. <br></br>
                                <br></br>
                                We have always met the standards of the ever-changing challenges
                                of the IT sector. We believe more in actions, which is why we
                                have become the most preferred app development
                                company in {cityName} across technologies like Laravel, PHP,
                                Django/Python, AngularJS, CodeIgniter, and many more. <br></br>
                                <br></br>
                            </p>
                        </div>

                        <AnimatedCards data={animatedCardsData} />
                    </div>
                </section>


                <section className="section-pad !pb-0  ">
                    <div className="container">
                        {/* <Heading icon className="mb-16 flex">
                            Our Explicit App <br /> Development Services
                        </Heading> */}

                        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-3xl sm:text-5xl lg:text-7xl font-semibold text-black">
                            {/* Insert icon here manually if needed */}
                            <span>
                                Our Explicit App <br /> Development Services
                            </span>
                        </div>

                        <div className="grid  md:grid-cols-3 gap-6">
                            {[
                                {
                                    serviceIcon: '/img/smartphone-app-dev.svg',
                                    heading: 'Android App Development',
                                    description:
                                        `Mariox is one of the best Android app development companies in ${cityName}, offering fully functional and secure application solutions tailored to business needs. Our company has an ample understanding of frameworks, industry experience, technical knowledge and innovative approaches.	`,
                                },
                                {
                                    serviceIcon: '/img/tab-app-dev.svg',
                                    heading: 'iOS App Development',
                                    description:
                                        `Our highly-skilled iOS application developers in ${cityName} have the combined experience and knowledge of working on and delivering iPhone and iPad apps for various apps covering such genres as Healthcare, Business, Entertainment, Technology, Lifestyle, Travel, and more. `,
                                },
                                {
                                    serviceIcon: '/img/tv-app-dev.svg',
                                    heading: 'Hybrid App Development',
                                    description:
                                        `Hybrid application development in ${cityName} involves creating an app compatible with numerous platforms. It uses a framework that works on iOS, Android, and Windows platforms. Hybrid application development uses web technologies such as CSS, JavaScript and HTML.`,
                                },
                                {
                                    serviceIcon: '/img/wearable-app-dev.svg',
                                    heading: 'E-Commerce App Development',
                                    description:
                                        `Being an end-to-end e-commerce app development company in ${cityName}, we use advanced technologies to unlock potential revenue streams for you while maximising the business prospects of your application or product.`,
                                },
                                {
                                    serviceIcon: '/img/foldable-app-dev.svg',
                                    heading: 'React Native App Development',
                                    description:
                                        `Team up with the top React Native app development company in ${cityName}, and develop your great idea along with our team of professional developers who will strengthen your mission and boost your business success through their contemporary technology implementation.`,
                                },
                                {
                                    serviceIcon: '/img/iot-app-dev.svg',
                                    heading: 'Cross-Platform App Development',
                                    description:
                                        `Our expert team in ${cityName}, with years of experience, knows what creates apps that run smoothly on various platforms. Those apps lift your business to a completely new level. Mariox will make sure that you get the highest quality product, smooth operation, and the best possible support in services throughout the lifetime of your app.`,
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
                <SelectedWorkSection heading="Case Study" />
                <IndustriesSection />
                <TestimonialSliderSection data={[
                    {
                        testimonial:
                            'Working with Mariox has been a transformative experience for our company. Their team, has been instrumental in guiding our digital strategy and implementing innovative solutions that have significantly improved our business operations.',
                        name: 'Abhishek Tripathi',
                        profilePicture: '/img/john-smith.webp',
                        designation: ''
                    },
                    {
                        testimonial: (
                            <>
                                My efforts in app development have changed massively thanks
                                to Mariox. They have tremendously sophisticated technologies
                                that I use to streamline campaigns, analyse data, and
                                improve outcomes. I&apos;ve had great growth and success in
                                my business strategy because to their professional resources
                                and assistance. highly advisable.{' '}
                            </>
                        ),
                        name: 'Anil Mehta',
                        profilePicture: '/img/anil-mehta.webp',
                        designation: ''
                    },
                    {
                        testimonial:
                            'Mariox is a perfect place to opt for Laravel development services. Their honest, reliable, and hardworking team delivers a flawless product beyond expectations.',
                        name: 'Akhil Malhotra',
                        profilePicture: '/img/akhil-manhotra.webp',
                        designation: ''
                    },
                ]} />

                {/* Faq's Section start */}
                <FaqSection faqs={data?.faqs} />
                {/* Faq's Section end */}

                {/* About Service start*/}
                {
                    data?.aboutService && data?.pageName ? <AboutPage content={data?.aboutService} pageName={data?.pageName} /> : <></>
                }
                {/* About Service end*/}

                <TopLinksSection
                    cityLinks={data?.topCities}
                    serviceLinks={data?.topServices}
                />

                <ContactUsSection cityName={cityName} />
            </div>

            {/* <Script
        id="hubspot-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var hs = document.createElement("script");
              hs.type = "text/javascript";
              hs.async = true;
              hs.defer = true;
              hs.src = "//js-na2.hs-scripts.com/243753455.js";
              hs.id = "hs-script-loader";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hs, s);
            })();
          `,
        }}
      /> */}


            {/* 
            <Script
                id="tawkto-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/68b82b043bc2fe191afa54f2/1j47mg2hk';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
                }}
            /> */}


        </>
    );
};

export default Services;