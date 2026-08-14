import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import React from 'react';

const CaseStudyDetail = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-6 md:pt-15 md:pb-24 py-10">
                        <div>
                            <div className="text-14 text-primary">[Numberdekho]</div>
                        </div>
                        <div className="flex md:flex-col gap-3">
                            <div className="text-14 mb-3">[iOS Development]</div>
                            <div className="text-14 mb-3">[Android Development]</div>
                            <div className="text-14 mb-3">[Web App]</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-14 mb-3">[N0 04]</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-14 mb-3">[2020]</div>
                        </div>
                    </div>

                    <div className="lg:max-w-[66%] mb-12">
                        <h1 className="text-4xl md:text-48 uppercase">
                            Drive through{' '}
                            <span className="text-primary">NumberDekho&apos;s</span> Success
                            Journey
                        </h1>
                    </div>
                </div>
            </section>

            <section className="pb-8 md:pb-16">
                <div>
                    <img src="/img/cs-banner.webp" alt="mariox" className="w-full"/>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] lg:max-w-[690px]">
                        <div className="text-primary text-14 mb-6">[ABOUT]</div>

                        <p>
                            NumberDekho was initiated in 2022 with a “Yaha sabka number
                            milega” campaign. It is a local search engine platform offering
                            access to nearby service providers for various daily life
                            obstacles. These services include electrician, plumbing, AC
                            repair, pet grooming, maid, cooking, and a wide range of services.
                            The company started with a vision of helping people with easy
                            access to the services they might need in urgent situations.
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
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/5 md:pl-[8%] px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs-thumb-3.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] lg:max-w-[796px]">
                        <div className="text-primary text-14 mb-6">[CHALLENGES]</div>

                        <p className="text-18 md:text-24">
                            The company had a strong vision and mission but was lagging behind
                            due to high competition and wanted enhanced visibility and a
                            platform where the services could be quickly sold with the proper
                            vendor information.
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
                                        src="/img/cs-thumb-4.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-3 self-end">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-5.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3">
                                <p>
                                    Our development team developed a robust, compelling PHP
                                    website resonating with the project&apos;s theme, idea and
                                    mission.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 gap-y-6 items-end">
                            <div className="md:flex-1 md:ml-[8%] px-3">
                                <div className="max-w-[490px]">
                                    <p>
                                        Our development team developed a robust, compelling PHP
                                        website resonating with the project&apos;s theme, idea and
                                        mission.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 self-end">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-6.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs-thumb-7.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>

                        <div className="flex flex-wrap -mx-3 gap-y-6 ">
                            <div className="w-full md:w-5/12 px-3 ">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-8.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-5/12 px-3 ">
                                <div className="flex flex-col justify-between gap-6 h-full">
                                    <div>
                                        <p>
                                            To make the audience aware of the brand, we practised the
                                            best-white hat SEO strategies, which showed results within
                                            4-6 months, eventually helping our client generate organic
                                            traffic on the website and a high conversion rate.
                                        </p>
                                    </div>

                                    <div className="aspect-square w-full overflow-hidden lg:max-w-[60%]">
                                        <img
                                            src="/img/cs-thumb-9.webp"
                                            className="w-full h-full object-cover"
                                            alt="mariox"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="lg:ml-[8%] lg:max-w-[796px]">
                        <div className="text-primary text-14 mb-6">[RESULTS]</div>

                        <p className="text-18 md:text-24">
                            Our development team designed and developed a fierce hybrid app
                            and website, which has helped NumberDekho achieve massive consumer
                            growth in sales. Their consumers have reviewed that the
                            Application and website for NumberDekho are easy to use, offer
                            smooth working and give extraordinary experience. NumberDekho
                            social media handles are doing wonders in the digitally reliant
                            world. NumberDekho has claimed that social media handle
                            optimization done by Mariox Software’s social media and marketing
                            team has contributed massively to their growth rate and is
                            continuing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="container">
                    <div className="grid gap-6">
                        <div className="flex flex-wrap -mx-3 gap-y-6 justify-between">
                            <div className="w-full md:w-5/12 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs-thumb-3.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16">
                <div className="small-container">
                    <div className="lg:max-w-[796px]">
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

                            <div className="text-16">PROJECTS DONE</div>
                        </div>
                        <div>
                            <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                                &#123;300+&#125;
                            </div>

                            <div className="text-16">HAPPY CUSTOMERS</div>
                        </div>
                        <div>
                            <div className="text-48 md:text-64 lg:text-96 text-primary font-medium leading-none mb-4">
                                &#123;4.7&#125;
                            </div>

                            <div className="text-16">CUSTOMER RATINGS</div>
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
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-5/12 px-3">
                                <div className="aspect-square w-full overflow-hidden">
                                    <img
                                        src="/img/cs-thumb-1.webp"
                                        className="w-full h-full object-cover"
                                        alt="mariox"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/img/cs-thumb-3.webp"
                                className="w-full h-full object-cover"
                                alt="mariox"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSliderSection className="mt-16"/>
            <FaqSection/>
            <ContactUsSection/>
        </>
    );
};

export default CaseStudyDetail;
