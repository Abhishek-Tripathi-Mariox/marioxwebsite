import React from "react";

const AccordionItem = ({ accordionTitle, children, classname, onclick }) => {
  return (
    <div
      className={`accordion py-6 md:py-12 border-b border-b-black/10 first:border-t first:border-t-black/10 ${classname}`}
    >
      <button
        onClick={onclick}
        className="flex w-full items-center justify-between text-left text-16 md:text-24 leading-[120%]"
      >
        <div className="flex-1">{accordionTitle}</div>
        <span className="relative flex items-center justify-center w-6 h-6 duration-300 ease-out bg-black md:w-8 md:h-8">
          <span className="w-3 h-[1px] md:w-4 md:h-[2px] bg-white"></span>
          <span className="w-3 h-[1px] md:w-4 md:h-[2px] bg-white rotate-90 origin-center absolute top-3 md:top-4 duration-300 ease-out"></span>
        </span>
      </button>

      <div className="accordion-answer ">
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
