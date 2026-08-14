import Button from '@/components/Button/Button';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import React from 'react';
import { NextSeo } from 'next-seo';

const Contact = () => {
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/contact`;
    return (
        <>
            <NextSeo
                // title="Website And Mobile App Development Company | Web Development Services"
                // description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand&#039;s internet presence."
                canonical={canonicalUrl}
            />
            <section className="pb-9 bg-[url(/img/secondary-square-pattern.svg)] bg-repeat-x bg-left-bottom relative">
                <div className="bg-secondary pt-30 pb-22.5  overflow-hidden relative">
                    <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
                        <svg width="1202" height="783" fill="none" viewBox="0 0 1202 783">
                            <path
                                stroke="#E1D8CE"
                                d="M1201 0v783M817 0v783M283 0v783M589 0v783M1 0v783"
                            />
                        </svg>
                    </div>
                    <div className="container relative z-10">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-2/3 px-4 mb-15 md:">
                                <div className="text-primary text-14 uppercase mb-8 md:mb-16">
                                    [Contact]
                                </div>

                                <h1 className="text-48 lg:text-[95px] uppercase">
                                    Get in Touch with Mariox Today
                                </h1>
                            </div>
                            <div className="w-full md:w-1/3 px-4">
                                <div className="text-primary text-14 uppercase mb-8 md:mb-16">
                                    [Our Locations]
                                </div>

                                {/* <div className="grid md:gap-12 gap-8 lg:pr-[8%]">
                                    {[
                                        {
                                            location: 'Noida',
                                            address:
                                                '202, Assotech Business Cresterra, Tower-4, Sector 135, Noida, Uttar Pradesh, 201301',
                                        },
                                        {
                                            location: 'Dallas, TX',
                                            address:
                                                '539 W Commerce St suite 5589, Dallas, TX 75208, United States',
                                        },
                                    ].map(({ location, address }, index) => (
                                        <div key={index} className="flex gap-3">
                                            <div>
                                                <svg
                                                    width="14"
                                                    height="16"
                                                    fill="none"
                                                    viewBox="0 0 14 16"
                                                >
                                                    <path
                                                        stroke="#E43C13"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.333"
                                                        d="M13 6.666c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 1 1 12 0Z"
                                                    />
                                                    <path
                                                        stroke="#E43C13"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.333"
                                                        d="M7 8.666a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="flex-1">
                                                <div className="mb-4 text-14 text-primary uppercase">
                                                    {location}
                                                </div>
                                                <div className="mb-4 text-14 leading-[140%]">
                                                    {address}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}

                                <div className="grid md:gap-12 gap-8 lg:pr-[8%]">
                                    {[
                                        {
                                            location: 'Noida',
                                            address:
                                                '202, Assotech Business Cresterra, Tower-4, Sector 135, Noida, Uttar Pradesh, 201301',
                                        },
                                        {
                                            location: 'Dallas, TX',
                                            address:
                                                '539 W Commerce St suite 5589, Dallas, TX 75208, United States',
                                        },
                                        {
                                            location: 'Australia',
                                            address:
                                                '2 Nichollii Ct, Wyndham Vale VIC 3024, Australia',
                                        },
                                        {
                                            location: 'Hyderabad',
                                            address:
                                                '10th Floor, SmartPace, Suite-B 1003, The Platina, Mariox, Wing - B, above Third Wave Coffee, Gachibowli, Hyderabad, Telangana 500032',
                                        },
                                    ].map(({ location, address }, index) => (
                                        <div key={index} className="flex gap-3">
                                            <div>
                                                <svg
                                                    width="14"
                                                    height="16"
                                                    fill="none"
                                                    viewBox="0 0 14 16"
                                                >
                                                    <path
                                                        stroke="#E43C13"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.333"
                                                        d="M13 6.666c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 1 1 12 0Z"
                                                    />
                                                    <path
                                                        stroke="#E43C13"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.333"
                                                        d="M7 8.666a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="flex-1">
                                                <div className="mb-4 text-14 text-primary uppercase">
                                                    {location}
                                                </div>
                                                <div className="mb-4 text-14 leading-[140%]">
                                                    {address}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    {' '}
                </div>
            </section>

            <ContactUsSection />
        </>
    );
};

export default Contact;
