import React from 'react';
import Heading from '../Heading/Heading';
import AnimatedCards from '../AnimatedCards/AnimatedCards';

const WhyMarioxSection = () => {
  return (
    <section className="section-pad why-mariox-section">
      <div className="container">
        <div className="md:max-w-[66%] mb-12">
          <Heading icon className="heading mb-8">
            Why Mariox
          </Heading>

          <p className="text-24 md:text-32 leading-[120%] uppercase">
            We blend expertise, innovation, collaboration, and results
            seamlessly.
          </p>
        </div>

        <AnimatedCards />
      </div>
    </section>
  );
};

export default WhyMarioxSection;
