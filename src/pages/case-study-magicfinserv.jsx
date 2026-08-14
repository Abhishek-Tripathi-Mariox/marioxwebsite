import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';

const MagicFinServCaseStudy = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-6 md:pt-15 md:pb-24 py-10">
                        <div>
                            <div className="text-14 text-primary">[Magicfinserv]</div>
                        </div>
                        <div className="flex md:flex-col gap-3">
                            <div className="text-14 mb-3">[iOS Development]</div>
                            <div className="text-14 mb-3">[Android Development]</div>
                            <div className="text-14 mb-3">[Web App]</div>
                        </div>
                    </div>

                    <div className="lg:max-w-[66%] mb-12">
                        <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
                            Secrets Behind <br />
                            <span className="text-primary">MagicFinServ’s</span> Growth
                        </h1>
                    </div>
                </div>
            </section>

            <section className="pb-8 md:pb-16">
                <div>
                    <img
                        src="/img/cs/magicfinserv/magicfinserve-banner.webp"
                        alt="mariox"
                        className="w-full"
                    />
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] lg:max-w-[690px]">
                        <div className="text-primary text-14 mb-6">[ABOUT]</div>

                        <p>
                            Magic FinServ is a prominent digital technology services company
                            specialising in FinTech. It encompasses a unique blend of
                            cutting-edge Blockchain and Artificial Intelligence skills and
                            financial services domain expertise. They aim to empower our
                            customers to concentrate on their core competencies and take
                            charge to achieve the next level of growth at an optimal cost.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="grid gap-6">
                        <div className="flex flex-wrap -mx-3 items-end gap-y-6">
                            <div className="md:flex-1 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-2.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs/magicfinserv/magicfinserve-3.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad bg-secondary">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3">
                            <div className="md:sticky top-10">
                                <div className="text-primary text-14 mb-6">[THE RESULTS]</div>
                                <h2 className="text-24 mb-16 max-w-[500px]">
                                    With the shift in the complete digital landscape of
                                    NumberDekho, Mariox web, and app development services have
                                    been a drastic game changer in boosting daily bookings and
                                    increasing ROI.
                                </h2>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="grid gap-10 md:gap-[72px]">
                                {[
                                    {
                                        title: 'Customized Product Showcase',
                                        description: (
                                            <>
                                                We designed an interactive showcase that highlights
                                                MagicFinServ&apos;s offerings with unique content, easy
                                                navigation, and engaging visuals, making it simple for
                                                users to explore products and services.
                                            </>
                                        ),
                                    },
                                    {
                                        title: 'Enhanced Functionality',
                                        description:
                                            'Maintaining the quality of the project and ensuring robust performance, scalability, and app performance.',
                                    },
                                    {
                                        title: 'Responsive Design & User Experience',
                                        description: (
                                            <>
                                                For seamless and consistent user experience, we
                                                prioritized responsive design that can fit various
                                                devices and screen sizes.
                                            </>
                                        ),
                                    },
                                ].map(({ description, title, number }, index) => (
                                    <div className="" key={index}>
                                        <TechPageCard
                                            key={index}
                                            title={title}
                                            description={description}
                                            number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] lg:max-w-[796px]">
                        <div className="text-primary text-14 mb-6">
                            [CHALLENGES FACED BY US]
                        </div>

                        <p className="text-18 md:text-24">
                            Integrating complicated financial data into the platform
                            seamlessly was one of the main problems during the website
                            developmental process. To maintain clarity and accessibility for
                            website visitors, Magic FinServ&apos;s wide variety of financial
                            services and solutions necessitated careful organisation and
                            display of complex data sets.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="grid gap-6">
                        <div className="flex flex-wrap -mx-3 gap-y-6">
                            <div className="w-full md:w-5/12 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-4.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-3 self-end">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-5.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3">
                                <p>
                                    Our MarioX team worked with Magic FinServ&apos;s specialists
                                    to design an organised strategy for presenting financial data
                                    in an easy-to-understand format to overcome this difficulty.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
                            <div className="md:flex-1 md:ml-[8%] px-3">
                                <div className="max-w-[490px]">
                                    <p>
                                        The website&apos;s abundance of data was made easier to
                                        understand and navigate by including dynamic data
                                        visualisation tools, user-friendly data filtering options,
                                        and simple categorization into the display of complicated
                                        financial information.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 self-end">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-6.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs/magicfinserv/magicfinserve-7.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] ">
                        <div className="text-primary text-14 mb-6">[RESULTS]</div>

                        <p className="text-18 md:text-24 max-w-[600px]">
                            The collaboration of Magic FinServ with Mariox resulted in the
                            successful development of a sophisticated, feature-rich website
                            that enhances Magic FinServ’s digital presence and user
                            engagement. The new website provided visitors a seamless user
                            experience showing the company’s expertise, products and services.
                            <br />
                            <br />
                            The implementation of the flexible CMS ensured scalability with
                            robust optimization techniques and security that instilled trust
                            and confidence among visitors.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="small-container">
                    <div className="lg:max-w-[700px]">
                        <div className="text-primary text-14 mb-6">[IMPACT]</div>

                        <p className="text-18 md:text-24">
                            Over the course of our partnership, we helped ship hundreds of UX
                            improvements to numberdekho.com, impacting millions of monthly
                            visitors and facilitating billions in revenue.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-6 pt-10">
                        <div>
                            <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                                &#123;350+&#125;
                            </div>

                            <div className="text-16">PROJECT DONE</div>
                        </div>
                        <div>
                            <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                                &#123;4.7&#125;
                            </div>

                            <div className="text-16">CUSTOMER RATING</div>
                        </div>
                        <div>
                            <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                                &#123;300&#125;
                            </div>

                            <div className="text-16">HAPPY CUSTOMER</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="grid gap-6">
                        <div className="flex flex-wrap -mx-3 gap-y-6 justify-between items-end">
                            <div className="w-full md:w-1/4 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-8.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs/magicfinserv/magicfinserve-9.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSliderSection className="mt-16" />
            <FaqSection />
            <ContactUsSection />
        </>
    );
};

export default MagicFinServCaseStudy;
