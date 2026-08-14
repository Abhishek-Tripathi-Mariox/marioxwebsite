import Link from 'next/link';
import React from 'react';

const TechPageCard = ({
  title,
  number,
  description,
  link,
  whiteText,
  icon,
  padding,
}) => {
  return (
    <div className="border-b border-b-black/10 pb-2 relative">
      <div className={padding ? 'p-4 md:p-8' : 'pb-4'}>
        {icon ? (
          <div className="mb-10">
            <img src={icon} alt="mariox" />
          </div>
        ) : (
          ''
        )}
        <div className="flex justify-between items-center mb-8">
          <h3 className={`text-24 ${whiteText ? 'text-white' : ''}`}>
            {title}
          </h3>

          <span className={`text-16 ${whiteText ? 'text-white' : ''}`}>
            {number}
          </span>
        </div>

        <p className={whiteText ? 'text-white' : ''}>{description}</p>

        {link ? (
          <div className="flex justify-between items-center">
            <Link href={link} className="text-primary">
              LEARN MORE
            </Link>

            <div className="w-6 h-6 grid place-content-center bg-primary">
              <svg width="7" height="10" fill="none">
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="w-6 h-6 bg-primary absolute bottom-0 left-0"></div>
        )}
      </div>
    </div>
  );
};

export default TechPageCard;
