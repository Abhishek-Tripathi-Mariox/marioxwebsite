import Link from 'next/link';
import React from 'react';

const IndustryCard = ({
  number,
  title,
  description,
  image,
  link,
  hoverImage,
}) => {
  return (
    <div className="md:min-h-screen py-10 lg:py-15 flex items-center border-b border-b-black/10 md:sticky top-0 bg-white">
      <div className="container w-full">
        <div className="flex flex-wrap -mx-3 md:pb-16">
          <div className="w-full md:w-1/2 px-3 pb-5 md:pb-0">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-secondary grid place-content-center text-16">
                {number}
              </div>
              <div className="text-16 uppercase hidden md:block">{title}</div>
            </div>
          </div>

          <div className="w-full md:w-5/12 px-3 ">
            <div className="text-24 uppercase mb-6">{title}</div>
            <p className="hidden md:block">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3  hidden md:block">
            <Link href={link} className="text-primary text-16 hover:text-black">
              &#123;Learn more&#125;
            </Link>
          </div>

          <div className="w-full md:w-5/12 px-3">
            <Link
              href={link}
              className="aspect-square overflow-hidden relative group block"
            >
              <div className="absolute z-20 w-3 aspect-square bg-primary bottom-0 left-0"></div>
              <div className="absolute z-20 w-3 aspect-square bg-primary bottom-3 left-3 ease-elastic duration-700 group-hover:w-[150px] xl:block hidden"></div>
              <div className="absolute z-20 w-[150px] aspect-square bottom-3 left-3 grid place-content-center bg-primary xl:bg-transparent">
                <div className="overflow-hidden">
                  <div className="block xl:translate-y-full group-hover:translate-y-0 text-white ease-elastic duration-700 group-hover:delay-150">
                    LEARN MORE
                  </div>
                </div>
              </div>
              <img src={image} className="w-full h-full object-cover" alt="mariox" />
              <div className="absolute inset-0 opacity-0 z-10 duration-500 ease-out group-hover:opacity-100">
                <img
                  src={hoverImage}
                  className="w-full h-full object-cover"
                  alt="mariox"
                />
              </div>
            </Link>
            <div className="block md:hidden pt-8">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
