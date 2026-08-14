import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

const Footer = ({ className }) => {
  const footerRef = useRef();
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let footerTexts = new SplitText('.bottom-text', {
        type: 'chars',
      });
      let footerText = footerTexts.chars;

      gsap.set(footerText, { yPercent: -100 });

      gsap.to(footerText, {
        yPercent: 0,
        stagger: 0.1,
        autoAlpha: 1,

        scrollTrigger: {
          trigger: footerRef.current,
          // markers: true,
          start: '70% 100%',
          end: '85% 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, footerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <footer className={`bg-black  ${className}`} ref={footerRef}>
      <div className="border-y border-y-white/10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 ">
            <div className="w-1/2 md:w-1/4 px-4 pt-[90px] md:border-r border-r-white/10 pb-[220px]">
              <div className="grid gap-4 md:gap-6 ">
                {[
                  {
                    linkText: 'About us',
                    linkUrl: '/about',
                  },
                  {
                    linkText: 'Contact us',
                    linkUrl: '/contact',
                  },
                  {
                    linkText: 'Careers',
                    linkUrl: '/career',
                  },
                  {
                    linkText: 'T&C',
                    linkUrl: '/terms-and-conditions',
                  },
                ].map(({ linkText, linkUrl }, index) => (
                  <div key={index}>
                    <Link
                      className="text-24 lg:text-32 text-white hover:text-primary duration-300 ease-out uppercase "
                      href={linkUrl}
                    >
                      {linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/2 md:w-[41%] px-4 md:border-r border-r-white/10">
              <div className="grid gap-6 pt-[90px]">
                {[
                  {
                    linkText: 'Android App Development',
                    linkUrl: '/android-app-development',
                  },
                  {
                    linkText: 'iOS App Development',
                    linkUrl: '/ios-app-development',
                  },
                  {
                    linkText: 'Flutter App Development',
                    linkUrl: '/flutter-app-development',
                  },
                  {
                    linkText: 'E-Commerce App Development',
                    linkUrl: '/e-commerce-app-development',
                  },
                  {
                    linkText: 'Website Development',
                    linkUrl: '/website-development-company',
                  },
                  {
                    linkText: 'PHP Development',
                    linkUrl: '/php-development',
                  },
                  {
                    linkText: 'CMS Development',
                    linkUrl: '/cms-development',
                  },
                ].map(({ linkText, linkUrl }, index) => (
                  <div key={index}>
                    <Link
                      className="text-12 md:text-14 text-white hover:text-primary"
                      href={linkUrl}
                    >
                      {linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="w-full md:w-[32%] px-4">
              <div className="md:pt-[90px]">
                <div className="mb-8">
                  <svg width="24" height="29" fill="none">
                    <path
                      stroke="#ECE7E1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M23 12.055c0 8.555-11 15.889-11 15.889S1 20.61 1 12.054a11 11 0 1 1 22 0Z"
                    />
                    <path
                      stroke="#ECE7E1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M11.999 15.716a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z"
                    />
                  </svg>
                </div>

                <p className="text-14 text-white leading-[1.4] mb-10">
                  Head Office <br />
                  202, Assotech Business Cresterra,
                  <br />
                  Tower-4, Sector 135,
                  <br />
                  Noida, Uttar Pradesh 201301
                </p>
                <p className="text-14 text-white leading-[1.4] mb-5">
                  <a className="hover:text-primary" href="tel:+91 9599287045">
                    +91 9599287045
                  </a>
                </p>
                <p className="text-14 text-white leading-[1.4] mb-5">
                  <a
                    className="hover:text-primary"
                    href="mailto:admin@marioxsoftware.com"
                  >
                    admin@marioxsoftware.com
                  </a>
                </p>
              </div>
            </div> */}

            <div className="w-full md:w-[32%] px-4">
              <div className="md:pt-[90px]">
                <div className="mb-8">
                  <svg width="24" height="29" fill="none">
                    <path
                      stroke="#ECE7E1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M23 12.055c0 8.555-11 15.889-11 15.889S1 20.61 1 12.054a11 11 0 1 1 22 0Z"
                    />
                    <path
                      stroke="#ECE7E1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M11.999 15.716a3.667 3.667 0 1 0 0-7.333 3.667 3.667 0 0 0 0 7.333Z"
                    />
                  </svg>
                </div>

                {/* ✅ Offices in 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Head Office */}
                  <p className="text-14 text-white leading-[1.4]">
                    <strong>Head Office</strong> <br />
                    202, Assotech Business Cresterra, <br />
                    Tower-4, Sector 135, <br />
                    Noida, Uttar Pradesh 201301
                  </p>

                  {/* USA Office */}
                  <p className="text-14 text-white leading-[1.4]">
                    <strong>USA Office</strong> <br />
                    539 W Commerce St suite 5589, <br />
                    Dallas, TX 75208, <br />
                    United States
                  </p>

                  {/* Australia Office */}
                  <p className="text-14 text-white leading-[1.4]">
                    <strong>Australia Office</strong> <br />
                    2 Nichollii Ct, <br />
                    Wyndham Vale VIC 3024, <br />
                    Australia
                  </p>

                  {/* Hyderabad Office */}
                  <p className="text-14 text-white leading-[1.4]">
                    <strong>Hyderabad Office</strong> <br />
                    10th Floor, SmartPace, Suite-B 1003, <br />
                    The Platina, Mariox, Wing - B, <br />
                    Above Third Wave Coffee, Gachibowli, <br />
                    Hyderabad, Telangana 500032
                  </p>
                </div>

                {/* ✅ Contact */}
                <div className="mt-8">
                  <p className="text-14 text-white leading-[1.4] mb-5">
                    <a className="hover:text-primary" href="tel:+91 9599287045">
                      +91 9599287045
                    </a>
                  </p>
                  <p className="text-14 text-white leading-[1.4] mb-5">
                    <a
                      className="hover:text-primary"
                      href="mailto:admin@marioxsoftware.com"
                    >
                      admin@marioxsoftware.com
                    </a>
                  </p>
                </div>
              </div>
            </div>


          </div>
          <div className="flex flex-wrap -mx-4 pt-12 md:pt-0">
            <div className="w-full md:w-1/4 px-4 md:border-r border-r-white/10">
              <div className="grid gap-3 mb-8">
                {[
                  {
                    linkText: 'FACEBOOK',
                    linkUrl: 'https://www.facebook.com/Marioxsoftware',
                  },
                  {
                    linkText: 'INSTAGRAM',
                    linkUrl: 'https://www.instagram.com/marioxsoftware',
                  },

                  {
                    linkText: 'LINKEDIN',
                    linkUrl: 'https://www.linkedin.com/company/marioxsoftwares',
                  },
                  {
                    linkText: 'YOUTUBE',
                    linkUrl: 'https://www.youtube.com/@MarioxSoftware',
                  },
                  {
                    linkText: 'TWITTER',
                    linkUrl: 'https://twitter.com/MarioxSoftwares',
                  },
                ].map(({ linkText, linkUrl }, index) => (
                  <div key={index}>
                    <a
                      target="_blank"
                      rel="noopner noreferrer"
                      className="text-14 text-white hover:text-primary duration-300 ease-out uppercase "
                      href={linkUrl}
                    >
                      {linkText}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[41%] px-4 md:border-r border-r-white/10">
              <div>
                <p className="text-14 text-white leading-[1.4]">
                  We are a leading software company specialising in mobile app
                  and web development. Founded by Mr Mohit Garg & Rahul Garg
                  with an aim to fill the gaps between business needs and the
                  digital world. We envisage extensive digital marketing and
                  software development solutions to help businesses across
                  industries enhance their marketing efforts.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[32%] px-4">
              <p className="text-14 text-white leading-[1.4]">
                Best Website and Mobile App Development Company
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div className="text-[24vw] font-bold text-primary leading-[80%] text-center mb-[-20px] md:mb-[-5vh] lg:mb-[-12vh] bottom-text">
          MARIOX
        </div>
        <div className="bg-[length:auto_25px] md:bg-[length:auto_auto] absolute -bottom-4 left-0 right-0 w-full bg-[url(/img/black-squares-pattern.svg)] bg-repeat-x bg-top-left scale-y-[-1] h-15"></div>
      </div>
    </footer>
  );
};

export default Footer;
