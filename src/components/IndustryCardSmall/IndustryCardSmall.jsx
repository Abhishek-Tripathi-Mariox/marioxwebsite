import Link from 'next/link';
import React from 'react';

const IndustryCardSmall = ({ number, title, description, image, link }) => {
  return (
    <div className="group">
      <div className="flex gap-4 items-center mb-8">
        <div className="w-8 h-8 bg-black text-secondary grid place-content-center text-16">
          {number}
        </div>
        <div className="text-16 uppercase">{title}</div>
      </div>

      <div className="w-full aspect-square overflow-hidden relative mb-6">
        <img src={image} alt="mariox" />

        <div className="absolute z-20 w-3 aspect-square bg-primary bottom-0 left-0"></div>
        <div className="absolute z-20 w-3 aspect-square bg-primary bottom-3 left-3 ease-elastic duration-700 group-hover:w-[150px] xl:block hidden"></div>
        <Link
          href={link}
          className="absolute z-20 w-[150px] aspect-square bottom-3 left-3 grid place-content-center bg-primary xl:bg-transparent"
        >
          <div className="overflow-hidden">
            <div className="block xl:translate-y-full group-hover:translate-y-0 text-white ease-elastic duration-700 group-hover:delay-150">
              LEARN MORE
            </div>
          </div>
        </Link>
      </div>

      <h3 className="text-24 mb-4 uppercase hidden md:block">{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default IndustryCardSmall;
