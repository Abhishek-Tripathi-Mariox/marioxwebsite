import React from 'react';

const TabButton = ({ onClick, children, className, darkButton }) => {
  return (
    <div className={`tab-button `}>
      <button
        onClick={onClick}
        className={`text-14 md:text-16  uppercase tab-link whitespace-nowrap pb-2 ${className} ${
          darkButton ? 'text-black' : 'text-white'
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default TabButton;
