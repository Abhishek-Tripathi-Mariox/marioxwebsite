import Link from 'next/link';
import React from 'react';

const FeaturedWorkSmall = ({
  initialText,
  projectType,
  projectLink,
  projectName,
  projectThumb,
  className,
}) => {
  return (
    <div className={`work-single-small ${className}`}>
      <div className="w-full aspect-square lg:aspect-auto overflow-hidden relative group">
        <img src={projectThumb} alt="mariox" className="w-full h-full object-cover" />

        <div className="absolute bottom-6 left-6 bg-primary w-[100px] h-[100px] xl:grid place-content-center duration-1000 ease-elastic group-hover:w-15 group-hover:h-15 group-hover:bottom-[200px] group-hover:left-[200px] hidden">
          <span className="text-white text-24 duration-500 ease-out group-hover:text-16">
            {' '}
            &#123;{initialText}&#125;{' '}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 bg-primary w-6 h-6 duration-1000 ease-elastic group-hover:w-[200px] group-hover:h-[200px] hidden xl:block"></div>
        <div className="absolute bottom-0 left-0 w-[180px]  md:w-[200px] aspect-square p-4 md:p-4 flex flex-col bg-primary xl:bg-transparent">
          <div className="text-12 mb-4 text-white work-text-anim">
            {projectName}
          </div>
          <div className="text-14 mb-4 text-white work-text-anim">
            &#123;{projectType}&#125;
          </div>
          <Link
            href={projectLink}
            className="text-14 mb-4 flex-1 flex items-end text-white work-text-anim"
          >
            &#123; VIEW&nbsp;PROJECT&#125;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkSmall;
