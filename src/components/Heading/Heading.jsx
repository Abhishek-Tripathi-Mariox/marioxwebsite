import React from 'react';

const Heading = ({ className, children, icon }) => {
  return (
    <h2 className={`heading uppercase ${className}`}>
      <span>{children}</span>
      {icon ? (
        <span>
          <svg width="16" height="16" fill="none">
            <path fill="#E43C13" d="M0 8h8v8H0V8Zm8-8h8v8H8V0Z" />
          </svg>
        </span>
      ) : (
        ''
      )}
    </h2>
  );
};

export default Heading;
