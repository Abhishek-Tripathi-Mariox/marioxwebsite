import React from 'react';
import Head from 'next/head';
import Heading from '../Heading/Heading';
import Accordion, { defaultFaqs } from '../Accordion/Accordion';

const FaqSection = ({ faqs }) => {
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq?.answer?.replace(/<[^>]*>/g, '') // Remove HTML tags from the answer
      }
    }))
  } : null;

  return (
    <>
      {faqSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Head>
      )}
      <section className="section-pad">
        <div className="container">
          <div className="flex gap-6 items-center mb-8 md:mb-16">
            {/* <div className="w-full md:w-1/2">
                <Heading>
                  Frequently <br />
                  asked questions
                </Heading>
              </div> */}

            <div className="w-full md:w-1/2">
              <div className="flex flex-col text-4xl sm:text-7xl font-semibold text-black leading-snug">
                <span>
                  Frequently <br />
                  asked questions
                </span>
              </div>
            </div>

            <div>
              <img src="/img/question-mark.svg" alt="mariox" />
            </div>
          </div>
          {faqs && faqs.length > 0 ? (
            <Accordion data={faqs} />
          ) : (
            <Accordion data={defaultFaqs} />
          )}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
