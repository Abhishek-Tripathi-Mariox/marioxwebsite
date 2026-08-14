import React from 'react';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import IndustriesSection from '@/components/IndustriesSection/IndustriesSection';
import TechCard from '@/components/techCard/techCard';
import TestimonialSliderSection from '@/components/TestimonialSliderSection/TestimonialSliderSection';
import { NextSeo } from 'next-seo';

const TextSection = ({ section, first }) => (
  <section className="py-8 md:py-16">
    <div className="container">
      <div className="lg:ml-[8%] lg:max-w-[796px]">
        <div className="text-primary text-14 mb-6 uppercase">
          [{section.title}]
        </div>

        {section.paragraphs?.map((para, pIndex) => (
          <p
            className={`${first ? '' : 'text-18 md:text-24'} mb-6 last:mb-0`}
            key={pIndex}
          >
            {para}
          </p>
        ))}

        {section.list && section.list.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-8">
            {section.list.map((item, lIndex) => (
              <div className="flex items-start gap-3 text-14" key={lIndex}>
                <span className="text-primary mt-1">&#8226;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

// Groups gallery images into visually varied blocks — single wide shots,
// even pairs, and an offset asymmetric pair — instead of one flat grid.
const buildGalleryBlocks = (images) => {
  const blocks = [];
  let i = 0;
  let patternIndex = 0;

  while (i < images.length) {
    const remaining = images.length - i;
    const pattern = patternIndex % 3;

    if (pattern !== 1 && remaining >= 2) {
      blocks.push({
        type: pattern === 0 ? 'asymmetric' : 'pair',
        images: [images[i], images[i + 1]],
      });
      i += 2;
    } else {
      blocks.push({ type: 'single', images: [images[i]] });
      i += 1;
    }
    patternIndex += 1;
  }

  return blocks;
};

const GalleryBlock = ({ block, alt }) => {
  if (block.type === 'single') {
    return (
      <section className="py-8 md:py-16">
        <div className="container">
          <img src={block.images[0]} alt={alt} className="w-full" />
        </div>
      </section>
    );
  }

  if (block.type === 'asymmetric') {
    return (
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="flex flex-wrap -mx-3 items-end gap-y-6">
            <div className="md:flex-1 px-3">
              <img
                src={block.images[0]}
                className="w-full h-auto"
                alt={alt}
              />
            </div>
            <div className="w-full md:w-2/5 md:pl-[8%] px-3">
              <img
                src={block.images[1]}
                className="w-full h-auto"
                alt={alt}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-6 items-start">
          {block.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-auto"
              alt={alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyDetail = ({
  slug,
  companyName,
  tagline,
  metaTags = [],
  heroImage,
  galleryImages = [],
  sections = [],
  technology = [],
  seoTitle,
  seoDescription,
}) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/case-study/${slug}`;
  const galleryBlocks = buildGalleryBlocks(galleryImages);

  const content = [];
  let blockIndex = 0;

  sections.forEach((section, index) => {
    content.push(
      <TextSection section={section} first={index === 0} key={`section-${index}`} />
    );

    if ((index + 1) % 2 === 0 && blockIndex < galleryBlocks.length) {
      content.push(
        <GalleryBlock
          block={galleryBlocks[blockIndex]}
          alt={companyName}
          key={`gallery-${blockIndex}`}
        />
      );
      blockIndex += 1;
    }
  });

  while (blockIndex < galleryBlocks.length) {
    content.push(
      <GalleryBlock
        block={galleryBlocks[blockIndex]}
        alt={companyName}
        key={`gallery-${blockIndex}`}
      />
    );
    blockIndex += 1;
  }

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
      />

      <section className="pt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 md:pt-15 md:pb-24 py-10">
            <div>
              <div className="text-14 text-primary uppercase">
                [{companyName}]
              </div>
            </div>
            <div className="flex flex-wrap md:flex-col gap-3">
              {metaTags.map((tag, index) => (
                <div className="text-14 mb-3" key={index}>
                  [{tag}]
                </div>
              ))}
            </div>
          </div>

          <div className="lg:max-w-[66%] mb-12">
            <h1 className="text-4xl md:text-48 uppercase leading-[120%]">
              <span className="text-primary">{companyName}</span> {tagline}
            </h1>
          </div>
        </div>
      </section>

      {heroImage && (
        <section className="pb-8 md:pb-16">
          <div>
            <img src={heroImage} alt={companyName} className="w-full" />
          </div>
        </section>
      )}

      {content}

      {technology.length > 0 && (
        <section className="py-8 md:py-16 bg-secondary">
          <div className="container">
            <div className="text-primary text-14 mb-10 uppercase">
              [Technology]
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
              {technology.map(({ label, value }, index) => (
                <div key={index}>
                  <div className="text-14 text-primary uppercase mb-1">
                    {label}
                  </div>
                  <div className="text-18">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TestimonialSliderSection className="mt-16" />
      <IndustriesSection />
      <TechCard />
      <FaqSection />
      <ContactUsSection />
    </>
  );
};

export default CaseStudyDetail;
