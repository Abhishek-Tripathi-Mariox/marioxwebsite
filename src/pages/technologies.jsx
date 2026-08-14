import Button from '@/components/Button/Button';
import FaqSection from '@/components/FaqSection/FaqSection';
import TechPageCard from '@/components/TechPageCard/TechPageCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import {
    backendContent,
    databaseContent,
    devOpsContent,
    frameworksContent,
    frontendContent,
} from '@/utils/techContent';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Technologies = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container">
                    <div className="pt-12 md:pt-20 lg:pt-[150px] grid gap-8 pb-10 md:pb-0">
                        <h1 className="uppercase text-4xl md:text-48 lg:text-64 max-w-[996px] md:leading-[100%]">
                            Revolutionizing <span className="font-bold">technology</span> for
                            a dynamic world.
                        </h1>

                        <div>
                            <Button className="uppercase">Let’s start today</Button>
                        </div>

                        <div className="pb-9 bg-[url(/img/orange-squares-pattern.svg)] bg-repeat-x bg-left-bottom">
                            <Image
                                width="1200"
                                height="391"
                                src="/img/technology-banner.webp"
                                className="w-full"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div className="md:sticky top-15 mb-15 md:mb-0">
                                <div className="mb-10 md:mb-[250px]">
                                    <div className="mb-6">
                                        <svg width="59" height="59" fill="none" viewBox="0 0 59 59">
                                            <path
                                                stroke="#E43C13"
                                                d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                                            ></path>
                                        </svg>
                                    </div>

                                    <h2 className="text-32 md:text-48 uppercase">Backend</h2>
                                </div>

                                <div className="max-w-[250px]">
                                    <p>
                                        The backend is the server-side of web or mobile apps,
                                        managing data and processing client requests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-10 md:gap-[150px]">
                            {backendContent.map(({title, description, link}, index) => (
                                <TechPageCard
                                    key={index}
                                    number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                    title={title}
                                    description={description}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-pad bg-secondary">
                <div className="container">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div className="md:sticky top-15 mb-15 md:mb-0">
                                <div className="mb-10 md:mb-[250px]">
                                    <div className="mb-6">
                                        <svg width="59" height="59" fill="none" viewBox="0 0 59 59">
                                            <path
                                                stroke="#E43C13"
                                                d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                                            ></path>
                                        </svg>
                                    </div>

                                    <h2 className="text-32 md:text-48 uppercase">Frontend</h2>
                                </div>

                                <div className="max-w-[250px]">
                                    <p>
                                        The backend is the server-side of web or mobile apps,
                                        managing data and processing client requests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-10 md:gap-[150px]">
                            {frontendContent.map(({title, description, link}, index) => (
                                <TechPageCard
                                    key={index}
                                    number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                    title={title}
                                    description={description}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad">
                <div className="container">
                    <div className="mb-18">
                        <div className="mb-6">
                            <svg width="59" height="59" fill="none" viewBox="0 0 59 59">
                                <path
                                    stroke="#E43C13"
                                    d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                                ></path>
                            </svg>
                        </div>

                        <h2 className="text-32 md:text-48 uppercase">Database</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {databaseContent.map(({title, description, link}, index) => (
                            <TechPageCard
                                key={index}
                                number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                title={title}
                                description={description}
                                link={link}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-pad !pt-0">
                <div className="container">
                    <div className="mb-18">
                        <div className="mb-6">
                            <svg width="59" height="59" fill="none" viewBox="0 0 59 59">
                                <path
                                    stroke="#E43C13"
                                    d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                                ></path>
                            </svg>
                        </div>

                        <h2 className="text-32 md:text-48 uppercase">Frameworks</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {frameworksContent.map(({title, description, link}, index) => (
                            <TechPageCard
                                key={index}
                                number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                title={title}
                                description={description}
                                link={link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-pad bg-black">
                <div className="container">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div className="md:sticky top-15 mb-15 md:mb-0">
                                <div className="mb-10 md:mb-[250px]">
                                    <div className="mb-6">
                                        <svg width="59" height="59" fill="none" viewBox="0 0 59 59">
                                            <path
                                                stroke="#E43C13"
                                                d="M58.5 29.25H0M29.25 58.5V0M8.567 8.567l41.366 41.366m-41.366 0L49.933 8.567"
                                            ></path>
                                        </svg>
                                    </div>

                                    <h2 className="text-48 uppercase text-white">Devops</h2>
                                </div>

                                <div className="max-w-[250px]">
                                    <p className="text-white">
                                        The backend is the server-side of web or mobile apps,
                                        managing data and processing client requests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-10 md:gap-[150px]">
                            {devOpsContent.map(({title, description, link}, index) => (
                                <TechPageCard
                                    whiteText
                                    key={index}
                                    number={`${index <= 8 ? '0' : ''}${index + 1}`}
                                    title={title}
                                    description={description}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSliderSection/>

            <FaqSection/>
        </>
    );
};

export default Technologies;
