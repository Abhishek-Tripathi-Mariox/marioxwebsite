import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import Icon from '../Icon/Icon'

/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef(
  (
    {
      href,
      children,
      onClick,
      type = 'button',
      secondary = false,
      whiteButton = false,
      blackButton = false,
      disabled = false,
      target = null,
      chevron = false,
      small = false,
      active = false,
      secondaryWhite = false,
      darkToggle = false,

      ...props
    },
    ref
  ) => {
    return href ? (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        className={[
          'button inline-flex items-center justify-center gap-1  bg-primary text-14 text-white leading-[100%]  font-swinton py-4 px-6 font-normal relative group/btn',
          secondary ? 'button-secondary' : '',
          secondaryWhite ? 'button-secondary-black' : '',
          whiteButton ? 'button-white' : '',
          blackButton ? 'button-black ' : '',
          small ? 'button-small' : '',
          darkToggle ? 'dark-toggle' : '',

          { ...props }.className,
        ].join(' ')}
      >
        <span className="btn-top-square w-2 h-2 absolute right-0 top-0 after:absolute after:inset-0 after:bg-primary content-[''] group-hover/btn:after:translate-x-full group-hover/btn:after:-translate-y-full after:duration-500 after:ease-out after:z-10 before:absolute before:inset-0 before:bg-white"></span>
        <span className={`button-content flex-1 `}>{children}</span>

        {chevron ? (
          <span className="chevron">
            <svg width="11" height="11" fill="none" viewBox="0 0 11 11">
              <path stroke="#000" d="m1 10.055 8.7-8.701M1 1.352h8.7v8.7" />
            </svg>
          </span>
        ) : (
          ''
        )}
      </Link>
    ) : (
      <button
        /* eslint-disable-next-line react/button-has-type */
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={[
          'button inline-flex items-center justify-center gap-1  bg-primary text-14 text-white leading-[100%]  font-swinton py-4 px-6 font-normal relative group/btn',
          secondary ? 'button-secondary' : '',
          secondaryWhite ? 'button-secondary-black' : '',
          whiteButton ? 'button-white' : '',
          blackButton ? 'button-black ' : '',
          small ? 'button-small' : '',
          darkToggle ? 'dark-toggle' : '',

          { ...props }.className,
        ].join(' ')}
      >
        <span className="btn-top-square w-2 h-2 absolute right-0 top-0 after:absolute after:inset-0 after:bg-primary content-[''] group-hover/btn:after:translate-x-full group-hover/btn:after:-translate-y-full after:duration-500 after:ease-out after:z-10 before:absolute before:inset-0 before:bg-white"></span>
        <span className={`button-content flex-1 `}>{children}</span>

        {chevron ? (
          <span className="chevron">
            <svg width="11" height="11" fill="none" viewBox="0 0 11 11">
              <path stroke="#000" d="m1 10.055 8.7-8.701M1 1.352h8.7v8.7" />
            </svg>
          </span>
        ) : (
          ''
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
