import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import IndustryCard from '@/components/IndustryCard/IndustryCard';
import IndustryCardSmall from '@/components/IndustryCardSmall/IndustryCardSmall';
import Image from 'next/image';
import React, { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Industries = () => {
    const main = useRef();

    useGSAP(
        () => {
            const mm = gsap.matchMedia();
            mm.add(
                {
                    small: '(max-width: 767px)',
                    large: '(min-width: 768px)',
                },
                (ctx) => {
                    const { small } = ctx.conditions;
                    let workSection = document.querySelector('.industry-block');

                    gsap.to('.industry-block', {
                        x: () => (small ? 0 : workSection.scrollWidth * -1),
                        xPercent: small ? 0 : 100,
                        scrollTrigger: {
                            trigger: '.industry-block',
                            start: 'center center',
                            start: '0% 20%',
                            end: '+=2000px 10%',
                            pin: small ? false : true,
                            scrub: 0.5,
                            invalidateOnRefresh: true,
                            // markers: true,
                        },
                    });
                }
            );
        },
        {
            scope: main,
        }
    );
    return (
        <>
            <section className="pt-20">
                <div className="container">
                    <div className="pt-12 md:pt-20 lg:pt-[150px] grid gap-8 pb-10 md:pb-0">
                        <h1 className="uppercase text-4xl md:text-48 lg:text-64 max-w-[996px] md:leading-[100%]">
                            Transforming <span className="font-bold">industries</span> with
                            advanced IT and software solutions.
                        </h1>

                        <div>
                            <Button className="uppercase">Let’s start today</Button>
                        </div>

                        <div>
                            <Image
                                width="1200"
                                height="433"
                                src="/img/industry-banner.webp"
                                className="w-full"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {[
                    {
                        title: 'Healthcare',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/healthcare.webp',
                        hoverImage: '/img/finance.webp',
                        link: '/',
                    },
                    {
                        title: 'Finance',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/finance.webp',
                        hoverImage: '/img/healthcare.webp',
                        link: '/',
                    },
                    {
                        title: 'Ed-Tech',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/ed-tech.webp',
                        hoverImage: '/img/manufacturing.webp',
                        link: '/',
                    },
                    {
                        title: 'Manufacturing',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/manufacturing.webp',
                        hoverImage: '/img/technology.webp',
                        link: '/',
                    },
                    {
                        title: 'Technology & Telecom',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/technology.webp',
                        hoverImage: '/img/manufacturing.webp',
                        link: '/',
                    },
                    {
                        title: 'Real Estate',
                        description:
                            'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                        image: '/img/real-estate.webp',
                        hoverImage: '/img/technology.webp',
                        link: '/',
                    },
                ].map(({ title, description, image, link, hoverImage }, index) => (
                    <IndustryCard
                        key={index}
                        number={`0${index + 1}`}
                        title={title}
                        description={description}
                        image={image}
                        link={link}
                        hoverImage={hoverImage}
                    />
                ))}
            </section>

            <section className="bg-secondary section-pad overflow-hidden">
                <div className="container">
                    <Heading icon className="mb-12">
                        MORE INDUSTRIES
                    </Heading>

                    <div className="flex flex-wrap md:flex-nowrap gap-6 industry-block">
                        {[
                            {
                                title: 'Healthcare',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/healthcare.webp',
                                hoverImage: '/img/finance.webp',
                                link: '/',
                            },
                            {
                                title: 'Finance',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/finance.webp',
                                hoverImage: '/img/healthcare.webp',
                                link: '/',
                            },
                            {
                                title: 'Ed-Tech',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/ed-tech.webp',
                                hoverImage: '/img/manufacturing.webp',
                                link: '/',
                            },
                            {
                                title: 'Manufacturing',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/manufacturing.webp',
                                hoverImage: '/img/technology.webp',
                                link: '/',
                            },
                            {
                                title: 'Technology & Telecom',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/technology.webp',
                                hoverImage: '/img/manufacturing.webp',
                                link: '/',
                            },
                            {
                                title: 'Real Estate',
                                description:
                                    'Mariox Software is a renowned app development company and worldwide, offering scalable solutions built on vigorous technologies for future-oriented app development.',
                                image: '/img/real-estate.webp',
                                hoverImage: '/img/technology.webp',
                                link: '/',
                            },
                        ].map(({ title, description, image, link, hoverImage }, index) => (
                            <div key={index} className="md:min-w-[50%] lg:min-w-[33%]">
                                <IndustryCardSmall
                                    number={`${index <= 2 ? '0' : ''}${index + 7}`}
                                    title={title}
                                    description={description}
                                    image={image}
                                    link={link}
                                    hoverImage={hoverImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <IndustriesSection />
            <TestimonialSliderSection />

            <FaqSection />
        </>
    );
};

export default Industries;
