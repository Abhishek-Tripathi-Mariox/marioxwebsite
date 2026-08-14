import AnimatedCards from '@/components/AnimatedCards/AnimatedCards';
import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import Heading from '@/components/Heading/Heading';
import SelectedWorkSection from '@/components/SelectedWorkSection/SelectedWorkSection';
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
                heading: 'Project Analysis',
                description:
                    'Once we receive a project from a client, we sit down with them to understand the significant purpose of the content they want written. Suppose it is for a business; our content writers will then sit down with the client to understand their business and the type of content they seek.',
            },
        ],
        serviceIcon: '/img/project-analysis.svg',
    },
    {
        carddata: [
            {
                heading: 'Research',
                description:
                    'Once we have gathered all the information and understood the project clearly, we start with comprehensive research. We analyse competitors and the scope of the market. We research the relevant keywords to stuff into the content so that it can get crawled by the web and benefit their business.',
            },
        ],
        serviceIcon: '/img/search-2.svg',
        cardBg: 'bg-white',
        imageBg: 'bg-secondary',
        sideSquareBg: 'bg-black',
    },
    {
        carddata: [
            {
                heading: 'Content Writing',
                description:
                    'When the content team is ready with all the required information and the research work is done, then comes the next part, which is the major part of content writing, where our expert writers use their skills to add all the gloom to the content while maintaining its tone and making it appealing.',
            },
        ],
        serviceIcon: '/img/content-white.svg',
        cardBg: 'bg-primary',
        imageBg: 'bg-white"',
        sideSquareBg: 'bg-white',
        whiteContent: true,
    },
    {
        carddata: [
            {
                heading: 'Editing and Delivery',
                description: (
                    <>
                        The complete process ends with content editing, where the final
                        inspection of the content is done, and improvements are made. After
                        2-3 times of final inspection, the content is ready to be delivered
                        to our clients.
                    </>
                ),
            },
        ],
        serviceIcon: '/img/editing.svg',
    },
];

const animatedCardsData = [
    {
        whyTitle: 'Free Consultation',
        whyContent:
            'We offer our services at feasible prices and various payment facilities. Our professional business and project management team works around the clock to resolve all your doubts. Take a free consultation today, join us, observe changes, and see your business touch the skies. ',
        animatePos: -10,
    },
    {
        whyTitle: '360 Scalability',
        whyContent: (
            <>
                Our company emphasises your business&apos;s dynamic growth; hence, our
                services can be the right stop for all your business-related issues.
                These comprise mobile app development, digital marketing and various
                other compatible solutions that can do wonders for client expectations
                and growth
            </>
        ),
        animatePos: -25,
    },
    {
        whyTitle: '24/7 Support & On-Time Delivery',
        whyContent:
            'Truly respecting the value of time, we offer assured, timely delivery. Mariox Software, being a dynamic mobile app development services provider, not only confirms your scalability and flexibility but is always up to take any sort of urgency and can handle it proficiently.',
        animatePos: -40,
    },
];
const ContentWritingervices = ({ data }) => {
    return (
        <div className="page-main">
            <MetaOgContent data={data} imagePath={"/img/content-writing-seervice.webp"} />
            <section className="pt-20 pb-22.5 bg-secondary">
                <div className="container">
                    <Breadcrumb items={data?.breadcrumb} />
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div className="py-10 md:py-0">
                                <h1 className="text-48 md:text-64 xl:text-64 uppercase leading-[100%] mb-6">
                                    {data?.h1Text}
                                </h1>

                                <p className="max-w-[510px] mb-12">{data?.h1Desc}</p>

                                <Button href="/contact">CONTACT US</Button>
                            </div>
                        </div>

                        <div className="flex-1 text-center relative">
                            <div
                                className="absolute left-5 md:translate-x-[-30%] -bottom-10 md:bottom-[-10%] z-10 asset-shadow max-w-[25%]">
                                <img src="/img/content-writing-seervice-2.webp" alt="mariox" />
                            </div>
                            <div
                                className="absolute -right-2 md:translate-x-[35$] top-6 md:top-[10%] z-10 asset-shadow max-w-[25%]">
                                <img src="/img/content-writing-seervice-3.webp" alt="mariox" />
                            </div>
                            <img
                                src="/img/content-writing-seervice.webp"
                                className="inline-block"
                                alt="mobile dev"
                                width={486}
                                height={503}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <h2 className="text-32 md:text-48  uppercase mb-16">
                                    {data?.h2Text}
                                </h2>

                                <p className="lg:max-w-[80%]">
                                    We have spent years in the content writing industry,
                                    offering our clients dynamic content writing services. From
                                    content marketing strategy to jotting comprehensively
                                    researched, unique and captivating content for your
                                    consumers, our content writing team’s ultimate goal while
                                    writing content for any brand or business is to resonate
                                    with their requirements and produce content that is easily
                                    understandable to their audience, making their vision about
                                    our client’s business clear.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        title: 'Extensive Research',
                                        description: (
                                            <>
                                                Our professional content writers conduct intense
                                                research before writing any content. The research is
                                                about the company, our client&apos;s business model,
                                                competitors, market standards, latest trends and other
                                                relevant information that would help our content
                                                writers curate excellent content.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Unique and Plag-free Content',
                                        description: (
                                            <>
                                                Be authentic in a world that relies on technology. Our
                                                content writers generate content with expertise and
                                                understanding of any topic rather than relying on AI
                                                or copying content. This will help you quickly rank on
                                                SERPs and maintain the authenticity of your brand.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Quality Assurance',
                                        description: (
                                            <>
                                                We offer our services at minimum client expenses
                                                without compromising content quality. After all, your
                                                investment should be worth it!
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Result Oriented',
                                        description: (
                                            <>
                                                We offer services that generate results and could help
                                                you gain a high ROI because business is not just about
                                                investing but also about getting results from that
                                                investment.
                                            </>
                                        ),
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
                    <Heading icon className="heading-medium mb-16 flex">
                        Find the Right Content Writing <br /> Services for Your Business
                    </Heading>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                serviceIcon: '/img/phone.svg',
                                heading: 'Social Media Content',
                                description: (
                                    <>
                                        We understand the unstoppable evolving trends of social media,
                                        and to agile your growth, we know how to manipulate your audience by
                                        curating the most relevant content for different social media platforms.
                                        Get affordable content writing services in {data.cityName} and social media solutions
                                        to engage your audience effectively.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/notepad.svg',
                                heading: 'Blog Writing',
                                description:
                                    'Our professional content writing services in ' + data.cityName + ' offer persuasive, immensely engaging, SEO-friendly blog writing services. We write relevant, informative blogs that will attract traffic to your website and, ultimately, help expand your business.',
                            },
                            {
                                serviceIcon: '/img/notepad-2.svg',
                                heading: 'Academic Content',
                                description: (
                                    <>
                                        Students' interest in quality education is growing. If you aim to support learning enthusiasts,
                                        our academic content writing services in {data.cityName} offer the perfect solution.
                                        We can help you with the most relevant and intriguing academic content.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/video-camera.svg',
                                heading: 'Video Scripts',
                                description:
                                    'Videos can be enhanced with powerful words. At content writing services in ' + data.cityName + ', we craft meaningful scripts that excite viewers or targeted audiences. With us, you get diverse video scripts for any industry. We have everything covered',
                            },
                            {
                                serviceIcon: '/img/editing.svg',
                                heading: 'Editing and Proofreading',
                                description: (
                                    <>
                                        Don’t let your website have mistakes! As a leading content writing services in {data.cityName},
                                        our editors provide top-notch editing and proofreading services to ensure error-free content
                                        for your website, social media, and other platforms.
                                    </>
                                ),
                            },
                            {
                                serviceIcon: '/img/list-3.svg',
                                heading: 'Marketing Content',
                                description:
                                    'We offer a range of content writing services in ' + data.cityName + ', including product descriptions, email copywriting, website copywriting, copywriting services, and more, that could sufficiently meet your marketing needs and help you promote your business on the best platforms with quality content.',
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
                            Leading Content Writing Services
                        </Heading>

                        <p className="text-16 leading-[120%] max-w-[715px]">
                            Mariox Software Pvt. Ltd. has successfully spent years in the
                            content writing industry. We have a track record of more than
                            350+ happy customers. Our professional content writing services
                            focus on accomplishing the maximum reach of your apps and
                            products.Hence, these services are enriched with impeccable and
                            intriguing topics, subtopics, headings, subheadings, quotations,
                            information, descriptions, and visuals.
                        </p>
                    </div>

                    <AnimatedCards data={animatedCardsData} />
                </div>
            </section>

            <section className="section-pad !pt-0">
                <div className="container">
                    <h2 className="text-32 md:text-48 lg:max-w-[80%] uppercase mb-16">
                        In what ways do we deal with content writing service
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

export default ContentWritingervices;
