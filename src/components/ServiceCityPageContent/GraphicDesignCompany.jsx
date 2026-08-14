import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';

import ServiceDetailCard from '@/components/ServiceDetailCard/ServiceDetailCard';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
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
                heading: 'Logo Graphic Design',
                description:
                    'Design logos that can amaze the viewers and can clearly express the motive behind them. Being the most creative design agency in Noida, our expert are well-worked with the understanding of what type of logos are needed.',
            },
        ],
        serviceIcon: '/img/notepad.svg',
    },
    {
        carddata: [
            {
                heading: 'Print media Design',
                description: (
                    <>
                        The designs that are to be printed need particular concern. As a
                        responsible graphic design company, With a keen understanding of
                        each factor, our expert designers draw graphics that match our
                        client&apos;s requirements
                    </>
                ),
            },
        ],
        serviceIcon: '/img/image-star.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Social media graphic Design',
                description:
                    'Being from the most considered Graphic design company, our designers design the most pleasant designs that will fetch the attraction of most of the audience through social media.',
            },
        ],
        serviceIcon: '/img/phone-white.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Infographic Design',
                description:
                    'Informative visuals are the most liked ones. Wondering Why? They hold a lot of information. Just one infographic can solve a complete query of a person. Mariox, providing the best graphic design services ',
            },
        ],
        serviceIcon: '/img/image-text.svg',
    },
];

const GraphicDesign = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/graphic-design.webp"} />
            <section className="bg-secondary pt-20">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="grid gap-15 mt-15 md:mt-[110px]">
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6 max-w-[790px] mx-auto">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[780px] mx-auto">
                                    {data?.h1Desc}
                                </p>

                                <div className="pt-1 ">
                                    <Button href="/contact">CONTACT US</Button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center ">
                            <div className="inline-block relative">
                                <img
                                    src="/img/graphic-design.webp"
                                    className="inline-block mix-blend-darken"
                                    alt="mobile dev"
                                    width={1200}
                                    height={377}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <div className="">
                        <h2 className="text-32 md:text-48  uppercase mb-8 max-w-[790px]">
                            {data?.h2Text}
                        </h2>

                        <p className="lg:max-w-[792px]">
                            Welcome to Mariox, the best graphic design agency in Noida and
                            your foremost destination for extraordinary graphics. We are an
                            advanced and the most considered Graphic Design and Best Web
                            Design Development that takes jubilates in creating captivating
                            and impactful visuals for our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 pt-10">
                        {[
                            {
                                serviceIcon: '/img/clock-money.svg',
                                serviceHeading: 'Time-saving and Economical',
                                serviceDesc:
                                    'If budget is your issue, then do not worry. Being the best graphic design agency, we are known for providing the best and most customised visuals and graphics in the minimum time. Do not doubt the services! Once you receive the results, they will be top-notch. ',
                            },
                            {
                                serviceIcon: '/img/ios-ui-ux.svg',
                                serviceHeading: 'Ingeniously Designed',
                                serviceDesc:
                                    'Do you know we are also known as the creative design agency in Noida? Yes! This is because of the remarkable designs that our designers produce.  Your project deserves the best one, and all you need to do is to choose the best one for yourself. ',
                            },
                            {
                                serviceIcon: '/img/list.svg',
                                serviceHeading: 'Comprehensive Design Services',
                                serviceDesc:
                                    'Our clients and their projects are our most significant assets; hence our professional designers at our graphic design company take time to understand your project comprehensively and only after conscientiously ensuring every aspect and detail of designs with your collaboration. ',
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
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-5/12 px-3">
                            <div className="sticky top-15">
                                <h2 className="text-32 md:text-48  uppercase mb-16 ">
                                    Design your business with best Graphic Design Company.
                                </h2>

                                <p className="lg:max-w-[85%]">
                                    We understand it’s a crucial decision to choose a particular
                                    Graphic Design Company in Noida to enhance your business game.
                                    But our primary focus is our clients, and hence we dedicatedly
                                    work to give them an even higher return on their investment.
                                    You can sit back and let us handle the designing game.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-7/12 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        icons: '/img/users-check.svg',
                                        title: 'Certified Professional & Expert',
                                        description:
                                            'ariox has a team of certified experts who are highly skilled in their league. Our team has SEO consultants, SEO executives, Graphic designers, PPC experts, Content Writers, Web designers, and developers who devotedly work on the client’s project remembering their requirements.',
                                    },
                                    {
                                        icons: '/img/clock.svg',
                                        title: <>We&apos;re fast, Accurate & Reliable</>,
                                        description:
                                            'Before starting your project, our team comprehensively understands your company and its requirements accordingly; the strategies are devised for better reach and increased clients; hence, Mariox has been the best graphic design agency in Noida.',
                                    },
                                    {
                                        icons: '/img/phone-24.svg',
                                        title: 'We are here to help you 24/7',
                                        description: (
                                            <>
                                                We understand you might have doubts while investing in a
                                                company handing over your brand harness to maximize its
                                                worth. As a responsible Graphic Design agency, we
                                                understand that resolving your queries is our
                                                responsibility. They listen to your questions and guide
                                                you accordingly.
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
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        In what ways do we deal with Graphic Designing Services
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

export default GraphicDesign;
