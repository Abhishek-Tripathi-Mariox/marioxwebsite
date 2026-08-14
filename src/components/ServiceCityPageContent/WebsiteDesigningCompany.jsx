import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import TopLinksSection from '@/components/TopLinksSection/TopLinksSection';
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb/BreadCrumb";
import AboutPage from "@/components/AboutPage/AboutPage";
import MetaOgContent from "@/components/MetaOgContent/MetaOgContent";
import AboutContent from '@/components/AboutContent/AboutPage';

export const serviceCards = [
    {
        carddata: [
            {
                heading: 'Innovative Designs',
                description:
                    'Mariox crafts a digital experience. We have a team of talented designers and developers who push their boundaries of creativity and deliver visually stunning designs that keep the users engaged.',
            },
        ],
        serviceIcon: '/img/ios-ui-ux.svg',
    },
    {
        carddata: [
            {
                heading: 'User-Centric Approach',
                description:
                    'A good website demands proper functionality and aesthetics. We prioritize the user experience and tenure, ensuring that the website is easy to navigate, intuitive, and professionally designed and converts visitors into customers.',
            },
        ],
        serviceIcon: '/img/users-check.svg',
        cardBg: 'bg-white',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Customization and Flexibility',
                description:
                    'Mariox doesn’t believe in one-size-fits-all solutions. After understanding the client’s unique needs and goals, our team tailored a custom website design representing your brand identity.',
            },
        ],
        serviceIcon: '/img/scale-white.svg',
        cardBg: 'bg-primary',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Cutting-Edge Technology',
                description:
                    'We leverage the latest tools and frameworks that ensure creative website design that looks stunning and is fast, secure, and optimized for search engines.',
            },
        ],
        serviceIcon: '/img/ios-software-testing.svg',
    },
    {
        carddata: [
            {
                heading: 'Exceptional Support and Maintenance',
                description:
                    'We don’t just deliver a website and disappear; we provide ongoing support and maintenance that ensures their client’s websites are always up-to-date, secure, and performing their best.',
            },
        ],
        serviceIcon: '/img/delivery-2.svg',
        cardBg: 'bg-white',
        sideSquareBg: 'bg-black',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Versatile Professional Designers',
        whyContent:
            'We have versatile professional designers whose creative designs can bring your website to life. Our team monitors your goals, vision, and mission and commits to crafting perfect design solutions that elevate your brand to new heights.',
        animatePos: -10,
    },
    {
        whyTitle: 'Integration of State-of-the-Art of Technology',
        whyContent: (
            <>
                We are incorporating the latest technology while building a site. It
                will boost your conversion rate and ensure your digital solutions are at
                the forefront of innovation. We aim to empower your business by
                integrating technology advancements and delivering unparalleled
                performance.
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '100% Satisfaction',
        whyContent:
            'Our goal is to satisfy our client in their business’s dynamic growth. No matter whether it’s in terms of content marketing, mobile app development, digital marketing, web design services, or more. Our primary goal is to provide 100% satisfaction.',
        animatePos: -40,
    },
];
const WebsiteDesigningCompany = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/web-design.webp"} />
            <section className="pt-20  bg-secondary">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="w-full md:w-5/12">
                            <div className="py-10 md:py-0">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[510px] mb-12">
                                    {data?.h1Desc}
                                </p>

                                <Button href="/contact">CONTACT US</Button>
                            </div>
                        </div>

                        <div className="flex-1 text-center relative">
                            <img
                                src="/img/web-design.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={690}
                                height={660}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className=" sticky top-15">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[90%]">
                                    At mariox, we understand how clamorous web design is for
                                    converting visitors into loyal customers. We excel in creating
                                    professional website design focusing on user experience and
                                    conversion optimization. Our team works round the clock to see
                                    you succeed in achieving your goals. Choose Mariox for
                                    extraordinary success; below, know why we are the best in
                                    website designing Company.
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
                    <Heading icon className="heading-medium mb-16 flex">
                        Know the Type of Website <br /> Design Services We Offer
                    </Heading>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/landing-page.svg',
                                heading: 'Landing Page Design',
                                description: (
                                    <>
                                        Step into the world of captivating landing page design with our website designing company in {data.cityName}.
                                        Our team specialises in creating a visually appealing landing page that grabs attention,
                                        drives meaningful interaction, and showcases your business accomplishments.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/website-2.svg',
                                heading: 'Website Layout Design',
                                description:
                                    'As a leading website designing company in ' + data.cityName + ', we create well-crafted website layouts essential for a compelling online presence. Our skilled designer meticulously prepares the layout for seamless navigation. From intuitive user interface to charming visuals, we take care of every aspect that reflects your brand identity.',
                            },
                            {
                                serviceIcon: '/img/website.svg',
                                heading: 'Enterprise Web Portals',
                                description: (
                                    <>
                                        As a website designing company in {data.cityName}, we integrate user-friendly
                                        call-to-action buttons and diverse categories to tailor your business needs.
                                        Our team ensures the creation of a remarkable site that can be easy to navigate
                                        and has aesthetically appealing website design services.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/ios-ui-ux.svg',
                                heading: 'UI/UX Design',
                                description:
                                    'As a website designing company in ' + data.cityName + ', We specialize in UI/UX design that perfectly blends functionality and aesthetics. Our team prioritizes the UI, is engaging, and ensures intuitive navigation. We meticulously craft the digital experience with appealing visual elements with user-centric functionality.',
                            },
                            {
                                serviceIcon: '/img/react-native.svg',
                                heading: 'Custom Website Design',
                                description: (
                                    <>
                                        As a website designing company in {data.cityName}, we understand that your website should stand out—not just be another page on the internet. Our custom website design services that aid you in winning the trust of your audience. Trusting Mariox can elevate your online presence.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/monitor-square.svg',
                                heading: 'Responsive Website Design',
                                description:
                                    'As a leading website designing company in ' + data.cityName + ', Our team provides a unique responsive web design that aids your website in looking flawless, flexible, and fluid on varied devices. Our meticulously crafted design can adapt seamlessly to assorted screen sizes, thus providing an optimal viewing experience to your visitors.',
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
                            Leading Website Designing Company
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            At mariox, we envisage premier choices for website design
                            services. We have a team of talented designers and developers who
                            don’t just create websites unquestioningly but innovate, and
                            continuous learning makes them build one that stays on top of the
                            ever-changing landscape and delivers captivating and cutting-edge
                            designs that will win the hearts of millions.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="bg-black section-pad">
                <div className="container">
                    <Heading icon className=" mb-12 text-white ">
                        Benefits of A Professional <br /> Website Design
                    </Heading>

                    <div className="grid grid-cols-2 md:grid-cols-3 border border-[#1C1C1B]">
                        {[
                            {
                                icon: '/img/money-in.svg',
                                industryName: 'Increased Revenue ',
                            },
                            {
                                icon: '/img/shield-check.svg',
                                industryName: 'Credibility',
                            },
                            {
                                icon: '/img/medal.svg',
                                industryName: 'Creates a Strong First Impression',
                            },
                            {
                                icon: '/img/bar-graph.svg',
                                industryName: 'Better Google Rankings',
                            },
                            {
                                icon: '/img/chart.svg',
                                industryName: 'Minimize your Bounce Rate',
                            },
                            {
                                icon: '/img/roi.svg',
                                industryName: 'Brand Consistency',
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
            </section>
            <SelectedWorkSection heading="Case Study" />
            <ProcessSection
                noTopBar
                heading="In what ways do we deal with PHP Development"
                data={[
                    {
                        processIcon: '/img/people-white.svg',
                        processTitle: 'Consultation and Assessment',
                        processDesc: (
                            <>
                                We start the process once any client comes to us by
                                understanding their business model, requirements, areas of
                                improvement, and expectations of the website. In this step, we
                                try to sync with the client’s idea of getting PHP development
                                services.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/development-2.svg',
                        processTitle: 'Website Designing',
                        processDesc: (
                            <>
                                Once the entire process is clear to us, we proceed with
                                strategizing the entire process to move the project forward. Our
                                team of developers curates compelling UI/UX designs for the
                                website.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/testing.svg',
                        processTitle: 'Testing',
                        processDesc: (
                            <>
                                Upon completing the website, it becomes essential to check
                                whether it is ready to be delivered and has no bugs, for which
                                our testing team inspects the website and ensures that there are
                                no bugs left.
                            </>
                        ),
                    },
                    {
                        processIcon: '/img/delivery.svg',
                        processTitle: 'Delivery and Post Service Support',
                        processDesc: (
                            <>
                                The website is ready to be delivered after the team is
                                completely satisfied and the client approves. We make the
                                website live and offer our post-service maintenance support to
                                the client, which entirely depends on the package chosen by the
                                client.
                            </>
                        ),
                    },
                ]}
            />

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

export default WebsiteDesigningCompany;
