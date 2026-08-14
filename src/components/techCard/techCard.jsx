import Link from 'next/link';
import React from 'react';

const TechCard = ({ techIcon, techName, techImage, link }) => {
  return (
    <Link
      href={link ? link : '/'}
      className={`group tech-card ${link ? '' : 'cursor-default'}`}
    >
      <div className="bg-secondary min-h-[150px] flex justify-center items-center flex-col gap-4 duration-500 ease-out group-hover:bg-primary">
        <div className="tech-icon h-14 flex items-center justify-center">
          {techImage ? (
            <img
              src={techImage}
              className="duration-500 ease-out group-hover:invert"
              alt={techName}
            />
          ) : (
            ''
          )}
          {techIcon ? techIcon : ''}
        </div>
        <div className="text-16 text-center duration-500 ease-out group-hover:text-white px-3">
          {techName}
        </div>
      </div>

      <div className="service-patterns">
        <svg
          className="w-full h-auto"
          width="180"
          height="12"
          viewBox="0 0 180 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="168"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="144"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="120"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="96"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="72"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="48"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="24"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            width="12"
            height="12"
            fill="#ECE7E1"
          />
        </svg>
      </div>
      <div className="text-center flex justify-center group-hover:translate-y-[-200%] duration-500 ease-out">
        <svg
          className="w-full h-auto"
          width="180"
          height="6"
          viewBox="0 0 180 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="162"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="138"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="114"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="90"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="66"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="42"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
          <rect
            className="duration-500 ease-out group-hover:fill-primary"
            x="18"
            width="6"
            height="6"
            fill="#ECE7E1"
          />
        </svg>
      </div>
    </Link>
  );
};

export default TechCard;
