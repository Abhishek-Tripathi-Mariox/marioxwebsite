// import React, { useEffect, useRef, useState } from 'react';
// import { useLenis } from '@studio-freight/react-lenis';
// import Link from 'next/link';
// import { navLinks } from '@/utils/navLinks';
// // import FeaturedWork from '../FeaturedWork/FeaturedWork';
// import { useRouter } from 'next/router';
// import FeaturedWorkSmall from '../FeaturedWork/FeaturedWorkSmall';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const Header = ({ lightHead = false, className, initialPathname = '/' }) => {
//   const router = useRouter();
//   const { asPath } = router;

//   const lenis = useLenis();

//   const [serviceDropdownMenu, setServiceDropdownMenu] = useState(false);
//   const [mobDropdownMenu, setmobDropdownMenu] = useState(false);
//   const [headerBg, setHeaderBg] = useState(false);
//   function serviceDropdownTrigger(value) {
//     return () => {
//       setServiceDropdownMenu((state) => (state === value ? false : value));
//       setmobDropdownMenu(false);
//     };
//   }
//   function mobDropdownTrigger(value) {
//     return () => {
//       setmobDropdownMenu((state) => (state === value ? false : value));
//     };
//   }
//   function serviceDropdowndisable() {
//     setServiceDropdownMenu(false);
//   }

//   useEffect(() => {
//     if (headerBg) {
//       document.body.style.overflow = 'hidden';
//       lenis?.stop();
//     } else {
//       document.body.style.overflow = 'visible';
//       lenis?.start();
//     }
//     return () => {
//       document.body.style.overflow = 'visible';
//       lenis?.start();
//     };
//   }, [headerBg, lenis]);

//   // useLenis(
//   //   (lenis) => {
//   //     if (serviceDropdownMenu) {
//   //       lenis.stop();
//   //     } else {
//   //       lenis.start();
//   //     }
//   //   },
//   //   [serviceDropdownMenu]
//   // );


//   const dropdownBg = useRef();

//   useEffect(() => {
//     const dropDown = document.querySelectorAll('.dropdown');
//     // const dropdownMenu = dropDown.querySelector('.dropdown-menu')

//     dropDown.forEach((dropdownItem) => {
//       const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
//       dropdownItem.addEventListener('click', () => {
//         const dropdownHeight = dropdownMenu.offsetHeight;
//         setHeaderBg(true);
//         dropdownBg.current.style.height = dropdownHeight + 'px';
//       });
//       if (serviceDropdownMenu === false || serviceDropdownMenu === null) {
//         setHeaderBg(false);
//         dropdownBg.current.style.height = 0 + 'px';
//       }
//     });
//   }, [serviceDropdownMenu]);

//   useEffect(() => {
//     setHeaderBg(false);
//     setServiceDropdownMenu(false);
//   }, [asPath]);

//   useGSAP(() => {
//     const mm = gsap.matchMedia();
//     mm.add(
//       {
//         small: '(max-width: 767px)',
//         large: '(min-width: 768px)',
//       },
//       (ctx) => {
//         const { small } = ctx.conditions;

//         // const workWrapper = workSingle.current;

//         const pageMain = document.querySelector('.page-main');
//         const elementsArray = pageMain?.querySelectorAll('[data-animate]'); // Selecting elements with data-animate attribute
//         elementsArray?.forEach((element) => {
//           const xPercent = parseFloat(element.dataset.animateX); // Getting x value from data-animate-x attribute
//           const yPercent = parseFloat(element.dataset.animateY); // Getting y value from data-animate-y attribute
//           const trigger = element.dataset.animateTrigger; // Getting trigger element from data-animate-trigger attribute

//           gsap.fromTo(
//             element,

//             {
//               xPercent: 0,
//               yPercent: 0,
//             },

//             {
//               // Animating the element
//               xPercent,
//               yPercent,
//               scrollTrigger: {
//                 // Using scroll trigger for animation trigger
//                 trigger,
//                 scrub: 0.6, // Setting scrub to true for smooth animation
//                 start: '0% 60%', // Trigger animation when top of element hits bottom of viewport
//                 end: '100% 30%', // Trigger animation when bottom of element hits top of viewport
//                 // markers: true,
//               },
//             }
//           );
//         });
//       }
//     );
//   }, {});

//   return (
//     <>
//       <header
//         className={`header-main py-3.5 z-[998] duration-300 ease-out absolute top-0 left-0 right-0 border-b border-b-black/10 ${className} ${headerBg ? 'bg-white' : ''
//           }`}
//       >
//         <div className="container">
//           <div className="flex gap-4 items-center">
//             <div>
//               <Link href="/">
//                 <img src="/img/mariox-logo.svg" alt="Mariox Software" />
//               </Link>
//             </div>

//             <div className="flex gap-8 flex-1">
//               <div className="flex-1 gap-8 md:flex items-center justify-end nav-wrapper hidden">
//                 {navLinks.map((navlink, index) => (
//                   <div
//                     key={index}
//                     className={navlink.dropdownMenu ? 'dropdown' : ''}
//                   >
//                     {navlink.dropdownMenu ? (
//                       <button
//                         onClick={serviceDropdownTrigger(navlink.index)}
//                         href={navlink.linkpath}
//                         className={`text-14 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${serviceDropdownMenu === index ? '!text-primary' : ''
//                           }`}
//                       >
//                         <span className="flex items-center ">
//                           <span>&#123;</span>
//                           {navlink.linkName}
//                           <span>&#125;</span>
//                         </span>

//                         <svg width="8" height="11" fill="none">
//                           <path
//                             className={`group-hover:stroke-primary duration-300 ease-out ${serviceDropdownMenu === navlink.index
//                               ? '!stroke-primary'
//                               : ''
//                               }`}
//                             stroke="#000"
//                             d="M4 0v10m0 0L1 7m3 3 3-3"
//                           />
//                         </svg>
//                       </button>
//                     ) : (
//                       <Link
//                         href={navlink.linkpath}
//                         className={`text-14 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${serviceDropdownMenu === index ? '!text-primary' : ''
//                           }`}
//                       >
//                         <span className="flex items-center ">
//                           <span>&#123;</span>
//                           {navlink.linkName}
//                           <span>&#125;</span>
//                         </span>
//                       </Link>
//                     )}
//                     {navlink.dropdownMenu ? (
//                       <div
//                         className={`dropdown-menu  ${serviceDropdownMenu === navlink.index ? 'active' : ''
//                           }`}
//                       >
//                         <div className="container">
//                           <div className="flex gap-4">
//                             <div className="w-[75%]">
//                               <div className="grid grid-cols-3 gap-x-4 gap-y-12">
//                                 {navlink.dropdownMenu?.map(
//                                   (dropdownItem, index) => (
//                                     <div key={index} className="dropdown-links">
//                                       <h3 className="text-16 text-primary mb-4 uppercase">
//                                         <Link href={
//                                           dropdownItem.dropdownHeaderLinkPath
//                                         }>
//                                           &#123;
//                                           {dropdownItem.dropdownHeader}
//                                           &#125;
//                                         </Link>
//                                       </h3>

//                                       <div className="grid gap-4">
//                                         {dropdownItem.dropdownLinks.map(
//                                           (dropdownLink, index) => (
//                                             <div
//                                               key={index}
//                                               className="overflow-hidden"
//                                             >
//                                               <Link
//                                                 className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
//                                                 href={
//                                                   dropdownLink.dropdownLinkPath
//                                                 }
//                                               >
//                                                 <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
//                                                 <span>
//                                                   &#123;
//                                                   {
//                                                     dropdownLink.drodpownLinkName
//                                                   }
//                                                   &#125;
//                                                 </span>
//                                               </Link>
//                                             </div>
//                                           )
//                                         )}
//                                       </div>
//                                     </div>
//                                   )
//                                 )}
//                               </div>
//                             </div>

//                             <div className="flex-1">
//                               <FeaturedWorkSmall
//                                 initialText="NEW"
//                                 projectType="On demand service"
//                                 projectLink="/case-study/numberdekho"
//                                 projectName="Numberdekho"
//                                 projectThumb="/img/numberdekho-header.webp"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       ''
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="ml-auto dropdown">
//                 <button
//                   className="bg-black h-10 w-10 relative group"
//                   onClick={serviceDropdownTrigger(99)}
//                   aria-label="Open service dropdown"
//                 >
//                   <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto -translate-x-1.5 -translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
//                   <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto translate-x-1.5 -translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
//                   <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto -translate-x-1.5 translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
//                   <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto translate-x-1.5 translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
//                 </button>

//                 <div
//                   className={`dropdown-menu !pb-0 ${serviceDropdownMenu === 99 ? 'active' : ''
//                     }`}
//                 >
//                   <div className="container">
//                     <div className="grid gap-6 md:hidden">
//                       {navLinks.map((navlink, index) => (
//                         <div
//                           key={index}
//                           className={navlink.dropdownMenu ? 'dropdown' : ''}
//                         >
//                           {navlink.dropdownMenu ? (
//                             <button
//                               onClick={mobDropdownTrigger(navlink.index)}
//                               href={navlink.linkpath}
//                               className={`text-16 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center justify-between w-full group ${mobDropdownMenu === index ? '!text-primary' : ''
//                                 }`}
//                             >
//                               <span className="flex items-center ">
//                                 {navlink.linkName}
//                               </span>

//                               <svg
//                                 width="8"
//                                 height="11"
//                                 fill="none"
//                                 className="-rotate-90"
//                               >
//                                 <path
//                                   className={`group-hover:stroke-primary duration-300 ease-out  ${mobDropdownMenu === navlink.index
//                                     ? '!stroke-primary'
//                                     : ''
//                                     }`}
//                                   stroke="#000"
//                                   d="M4 0v10m0 0L1 7m3 3 3-3"
//                                 />
//                               </svg>
//                             </button>
//                           ) : (
//                             <Link
//                               href={navlink.linkpath}
//                               className={`text-16 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${mobDropdownMenu === index ? '!text-primary' : ''
//                                 }`}
//                             >
//                               <span className="flex items-center ">
//                                 {navlink.linkName}
//                               </span>
//                             </Link>
//                           )}
//                           {navlink.dropdownMenu ? (
//                             <div
//                               data-lenis-prevent
//                               className={`dropdown-menu subdropdown ${mobDropdownMenu === navlink.index
//                                 ? 'active'
//                                 : ''
//                                 }`}
//                             >
//                               <div className="container">
//                                 <button
//                                   onClick={mobDropdownTrigger(null)}
//                                   className="flex gap-2 items-center text-16 mb-8"
//                                 >
//                                   <svg
//                                     width="17"
//                                     height="17"
//                                     fill="none"
//                                     viewBox="0 0 17 17"
//                                   >
//                                     <path
//                                       stroke="#000"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth="2"
//                                       d="M15.367 8.146h-14m0 0 7 7m-7-7 7-7"
//                                     />
//                                   </svg>
//                                   Back to menu
//                                 </button>
//                                 <div className="flex flex-col gap-4">
//                                   <div className="">
//                                     <div className="grid gap-y-12">
//                                       {navlink.dropdownMenu?.map(
//                                         (dropdownItem, index) => (
//                                           <div
//                                             key={index}
//                                             className="dropdown-links"
//                                           >
//                                             {/* <h3 className="text-16 text-primary mb-4 uppercase">
//                                               &#123;
//                                               {dropdownItem.dropdownHeader}
//                                               &#125;
//                                             </h3> */}

//                                             <h3 className="text-16 text-primary mb-4 uppercase">
//                                               <Link href={
//                                                 dropdownItem.dropdownHeaderLinkPath
//                                               }>
//                                                 &#123;
//                                                 {dropdownItem.dropdownHeader}
//                                                 &#125;
//                                               </Link>
//                                             </h3>

//                                             <div className="grid gap-4">
//                                               {dropdownItem.dropdownLinks.map(
//                                                 (dropdownLink, index) => (
//                                                   <div
//                                                     key={index}
//                                                     className="overflow-hidden"
//                                                   >
//                                                     <Link
//                                                       className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
//                                                       href={
//                                                         dropdownLink.dropdownLinkPath
//                                                       }
//                                                     >
//                                                       <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
//                                                       <span>
//                                                         &#123;
//                                                         {
//                                                           dropdownLink.drodpownLinkName
//                                                         }
//                                                         &#125;
//                                                       </span>
//                                                     </Link>
//                                                   </div>
//                                                 )
//                                               )}
//                                             </div>
//                                           </div>
//                                         )
//                                       )}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ) : (
//                             ''
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="flex flex-wrap md:flex-nowrap gap-4 pt-6">
//                       <div className="w-full md:w-[75%]">
//                         <div className="grid md:grid-cols-3 h-full gap-y-6">
//                           <Link
//                             href="/career"
//                             className="flex flex-col md:h-full single-hamburger-item hover:text-primary"
//                           >
//                             <span className="text-16 md:text-3xl uppercase">
//                               Career
//                             </span>

//                             <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
//                               <img
//                                 src="/img/ach-thumb.jpg"
//                                 alt="mariox"
//                                 className="w-full md:h-full object-cover ease-elastic-medium duration-700"
//                               />
//                             </div>
//                           </Link>
//                           <Link
//                             href="/about"
//                             className="flex flex-col md:h-full single-hamburger-item hover:text-primary md:pt-20"
//                           >
//                             <span className="text-16 md:text-3xl uppercase">
//                               About Us
//                             </span>

//                             <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
//                               <img
//                                 src="/img/ach-thumb.jpg"
//                                 alt="mariox"
//                                 className="w-full h-full object-cover ease-elastic-medium duration-700"
//                               />
//                             </div>
//                           </Link>
//                           <Link
//                             href="/contact"
//                             className="flex flex-col h-full single-hamburger-item hover:text-primary md:pt-40"
//                           >
//                             <span className="text-16 md:text-3xl uppercase">
//                               Contact us
//                             </span>

//                             <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
//                               <img
//                                 src="/img/ach-thumb.jpg"
//                                 alt="mariox"
//                                 className="w-full h-full object-cover ease-elastic-medium duration-700"
//                               />
//                             </div>
//                           </Link>
//                         </div>
//                       </div>

//                       <div className="w-full md:w-auto md:flex-1 grid gap-6 pb-10">
//                         <div className="hidden xl:block">
//                           <FeaturedWorkSmall
//                             initialText="NEW"
//                             projectType=" On demand service"
//                             projectLink="/"
//                             projectName="On demand service"
//                           />
//                         </div>

//                         {/* <div className="flex flex-col gap-4">
//                           {[
//                             {
//                               linkName: 'Career',
//                               linkPath: '/',
//                             },
//                             {
//                               linkName: 'Our Offices',
//                               linkPath: '/',
//                             },
//                             {
//                               linkName: 'Local seo services',
//                               linkPath: '/',
//                             },
//                             {
//                               linkName: 'Ecommerce seo services',
//                               linkPath: '/',
//                             },
//                           ].map(({ linkName, linkPath }, index) => (
//                             <div key={index}>
//                               <Link
//                                 className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
//                                 href={linkPath}
//                               >
//                                 <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
//                                 <span> {linkName} </span>
//                               </Link>
//                             </div>
//                           ))}
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <button
//         onClick={serviceDropdowndisable}
//         className={`invisible fixed inset-0 z-[99] h-screen w-full bg-black/50  opacity-0 duration-300 ease-out  ${serviceDropdownMenu !== false
//           ? 'pointer-events-auto !visible !opacity-100'
//           : 'pointer-events-none'
//           }`}
//       ></button>
//       <div
//         className={`pointer-events-none invisible fixed inset-0 z-[100] h-screen w-full opacity-0 duration-300 ease-out pt-[68px] ${serviceDropdownMenu !== false ? ' !visible !opacity-100' : ''
//           }`}
//       >
//         <div
//           className=" bg-secondary  duration-1000 ease-elastic relative overflow-hidden"
//           ref={dropdownBg}
//           style={{ height: 0 }}
//         >
//           <div className="absolute inset-0 z-0 flex justify-center">
//             <svg width="1203" height="722" fill="none">
//               <path
//                 stroke="#E1D8CE"
//                 d="M1 0v722M290 0v722M581 0v722M880 0v722M1202 0v722"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import Link from 'next/link';
import { navLinks } from '@/utils/navLinks';
// import FeaturedWork from '../FeaturedWork/FeaturedWork';
import { useRouter } from 'next/router';
import FeaturedWorkSmall from '../FeaturedWork/FeaturedWorkSmall';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = ({ lightHead = false, className, initialPathname = '/' }) => {
  const router = useRouter();
  const { asPath } = router;

  const lenis = useLenis();

  const [serviceDropdownMenu, setServiceDropdownMenu] = useState(false);
  const [mobDropdownMenu, setmobDropdownMenu] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  function serviceDropdownTrigger(value) {
    return () => {
      setServiceDropdownMenu((state) => (state === value ? false : value));
      setmobDropdownMenu(false);
    };
  }
  function mobDropdownTrigger(value) {
    return () => {
      setmobDropdownMenu((state) => (state === value ? false : value));
    };
  }
  function serviceDropdowndisable() {
    setServiceDropdownMenu(false);
  }

  useEffect(() => {
    if (headerBg) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'visible';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'visible';
      lenis?.start();
    };
  }, [headerBg, lenis]);

  // useLenis(
  //   (lenis) => {
  //     if (serviceDropdownMenu) {
  //       lenis.stop();
  //     } else {
  //       lenis.start();
  //     }
  //   },
  //   [serviceDropdownMenu]
  // );


  const dropdownBg = useRef();

  useEffect(() => {
    const dropDown = document.querySelectorAll('.dropdown');
    // const dropdownMenu = dropDown.querySelector('.dropdown-menu')

    dropDown.forEach((dropdownItem) => {
      const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
      dropdownItem.addEventListener('click', () => {
        const dropdownHeight = dropdownMenu.offsetHeight;
        setHeaderBg(true);
        dropdownBg.current.style.height = dropdownHeight + 'px';
      });
      if (serviceDropdownMenu === false || serviceDropdownMenu === null) {
        setHeaderBg(false);
        dropdownBg.current.style.height = 0 + 'px';
      }
    });
  }, [serviceDropdownMenu]);

  useEffect(() => {
    setHeaderBg(false);
    setServiceDropdownMenu(false);
  }, [asPath]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        small: '(max-width: 767px)',
        large: '(min-width: 768px)',
      },
      (ctx) => {
        const { small } = ctx.conditions;

        // const workWrapper = workSingle.current;

        const pageMain = document.querySelector('.page-main');
        const elementsArray = pageMain?.querySelectorAll('[data-animate]'); // Selecting elements with data-animate attribute
        elementsArray?.forEach((element) => {
          const xPercent = parseFloat(element.dataset.animateX); // Getting x value from data-animate-x attribute
          const yPercent = parseFloat(element.dataset.animateY); // Getting y value from data-animate-y attribute
          const trigger = element.dataset.animateTrigger; // Getting trigger element from data-animate-trigger attribute

          gsap.fromTo(
            element,

            {
              xPercent: 0,
              yPercent: 0,
            },

            {
              // Animating the element
              xPercent,
              yPercent,
              scrollTrigger: {
                // Using scroll trigger for animation trigger
                trigger,
                scrub: 0.6, // Setting scrub to true for smooth animation
                start: '0% 60%', // Trigger animation when top of element hits bottom of viewport
                end: '100% 30%', // Trigger animation when bottom of element hits top of viewport
                // markers: true,
              },
            }
          );
        });
      }
    );
  }, {});


  const handleClick = (e, path) => {
    e.preventDefault(); // prevent default Link navigation
    router.replace(path, undefined, { shallow: false }); // force full SSR reload
  };

  return (
    <>
      <header
        className={`header-main py-3.5 z-[998] duration-300 ease-out absolute top-0 left-0 right-0 border-b border-b-black/10 ${className} ${headerBg ? 'bg-white' : ''
          }`}
      >
        <div className="container">
          <div className="flex gap-4 items-center">
            <div>
              <Link href="/">
                <img src="/img/mariox-logo.svg" alt="Mariox Software" />
              </Link>
            </div>

            <div className="flex gap-8 flex-1">
              <div className="flex-1 gap-8 md:flex items-center justify-end nav-wrapper hidden">
                {navLinks.map((navlink, index) => (
                  <div
                    key={index}
                    className={navlink.dropdownMenu ? 'dropdown' : ''}
                  >
                    {navlink.dropdownMenu ? (
                      <button
                        onClick={serviceDropdownTrigger(navlink.index)}
                        href={navlink.linkpath}
                        className={`text-14 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${serviceDropdownMenu === index ? '!text-primary' : ''
                          }`}
                      >
                        <span className="flex items-center ">
                          <span>&#123;</span>
                          {navlink.linkName}
                          <span>&#125;</span>
                        </span>

                        <svg width="8" height="11" fill="none">
                          <path
                            className={`group-hover:stroke-primary duration-300 ease-out ${serviceDropdownMenu === navlink.index
                              ? '!stroke-primary'
                              : ''
                              }`}
                            stroke="#000"
                            d="M4 0v10m0 0L1 7m3 3 3-3"
                          />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={navlink.linkpath}
                        className={`text-14 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${serviceDropdownMenu === index ? '!text-primary' : ''
                          }`}
                      >
                        <span className="flex items-center ">
                          <span>&#123;</span>
                          {navlink.linkName}
                          <span>&#125;</span>
                        </span>
                      </Link>
                    )}
                    {navlink.dropdownMenu ? (
                      <div
                        className={`dropdown-menu  ${serviceDropdownMenu === navlink.index ? 'active' : ''
                          }`}
                      >
                        <div className="container">
                          <div className="flex gap-4">
                            <div className="w-[75%]">
                              <div className="grid grid-cols-3 gap-x-4 gap-y-12">
                                {navlink.dropdownMenu?.map(
                                  (dropdownItem, index) => (
                                    <div key={index} className="dropdown-links">
                                      {/* <h3 className="text-16 text-primary mb-4 uppercase">
                                        <Link href={
                                          dropdownItem.dropdownHeaderLinkPath
                                        }>
                                          &#123;
                                          {dropdownItem.dropdownHeader}
                                          &#125;
                                        </Link>
                                      </h3> */}

                                      <h3 className="text-16 text-primary mb-4 uppercase">
                                        <a
                                          href={dropdownItem.dropdownHeaderLinkPath} // SEO-friendly href
                                          onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = dropdownItem.dropdownHeaderLinkPath; // full reload to trigger SSR
                                          }}
                                          className="hover:underline"
                                        >
                                          {dropdownItem.dropdownHeader}
                                        </a>
                                      </h3>



                                      {/* <div className="grid gap-4">
                                        {
                                        dropdownItem.dropdownLinks.map(
                                          (dropdownLink, index) => (
                                            <div
                                              key={index}
                                              className="overflow-hidden"
                                            >
                                              <Link
                                                className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
                                                href={
                                                  dropdownLink.dropdownLinkPath
                                                }
                                              >
                                                <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
                                                <span>
                                                  &#123;
                                                  {
                                                    dropdownLink.drodpownLinkName
                                                  }
                                                  &#125;
                                                </span>
                                              </Link>
                                            </div>
                                          )
                                        )}
                                      </div> */}

                                      <div className="grid gap-4">
                                        {dropdownItem.dropdownLinks.map((dropdownLink, index) => (
                                          <div key={index} className="overflow-hidden">
                                            <a
                                              href={dropdownLink.dropdownLinkPath} // SEO-friendly href
                                              onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = dropdownLink.dropdownLinkPath; // force full page reload
                                              }}
                                              className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
                                            >
                                              <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
                                              <span>{dropdownLink.drodpownLinkName}</span>
                                            </a>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                  )
                                )}
                              </div>
                            </div>

                            <div className="flex-1">
                              <FeaturedWorkSmall
                                initialText="NEW"
                                projectType="On demand service"
                                projectLink="/case-study/numberdekho"
                                projectName="Numberdekho"
                                projectThumb="/img/numberdekho-header.webp"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
              </div>

              <div className="ml-auto dropdown">
                <button
                  className="bg-black h-10 w-10 relative group"
                  onClick={serviceDropdownTrigger(99)}
                  aria-label="Open service dropdown"
                >
                  <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto -translate-x-1.5 -translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto translate-x-1.5 -translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto -translate-x-1.5 translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="w-1 h-1 bg-white rounded-full absolute inset-0 m-auto translate-x-1.5 translate-y-1.5 z-10 duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                </button>

                <div
                  className={`dropdown-menu !pb-0 ${serviceDropdownMenu === 99 ? 'active' : ''
                    }`}
                >
                  <div className="container">
                    <div className="grid gap-6 md:hidden">
                      {navLinks.map((navlink, index) => (
                        <div
                          key={index}
                          className={navlink.dropdownMenu ? 'dropdown' : ''}
                        >
                          {navlink.dropdownMenu ? (
                            <button
                              onClick={mobDropdownTrigger(navlink.index)}
                              href={navlink.linkpath}
                              className={`text-16 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center justify-between w-full group ${mobDropdownMenu === index ? '!text-primary' : ''
                                }`}
                            >
                              <span className="flex items-center ">
                                {navlink.linkName}
                              </span>

                              <svg
                                width="8"
                                height="11"
                                fill="none"
                                className="-rotate-90"
                              >
                                <path
                                  className={`group-hover:stroke-primary duration-300 ease-out  ${mobDropdownMenu === navlink.index
                                    ? '!stroke-primary'
                                    : ''
                                    }`}
                                  stroke="#000"
                                  d="M4 0v10m0 0L1 7m3 3 3-3"
                                />
                              </svg>
                            </button>
                          ) : (
                            <Link
                              href={navlink.linkpath}
                              className={`text-16 uppercase flex hover:gap-1 duration-300 ease-out hover:text-primary gap-1 items-center group ${mobDropdownMenu === index ? '!text-primary' : ''
                                }`}
                            >
                              <span className="flex items-center ">
                                {navlink.linkName}
                              </span>
                            </Link>
                          )}
                          {navlink.dropdownMenu ? (
                            <div
                              data-lenis-prevent
                              className={`dropdown-menu subdropdown ${mobDropdownMenu === navlink.index
                                ? 'active'
                                : ''
                                }`}
                            >
                              <div className="container">
                                <button
                                  onClick={mobDropdownTrigger(null)}
                                  className="flex gap-2 items-center text-16 mb-8"
                                >
                                  <svg
                                    width="17"
                                    height="17"
                                    fill="none"
                                    viewBox="0 0 17 17"
                                  >
                                    <path
                                      stroke="#000"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.367 8.146h-14m0 0 7 7m-7-7 7-7"
                                    />
                                  </svg>
                                  Back to menu
                                </button>
                                <div className="flex flex-col gap-4">
                                  <div className="">
                                    <div className="grid gap-y-12">
                                      {navlink.dropdownMenu?.map(
                                        (dropdownItem, index) => (
                                          <div
                                            key={index}
                                            className="dropdown-links"
                                          >
                                            {/* <h3 className="text-16 text-primary mb-4 uppercase">
                                              &#123;
                                              {dropdownItem.dropdownHeader}
                                              &#125;
                                            </h3> */}

                                            <h3 className="text-16 text-primary mb-4 uppercase">
                                              <Link href={
                                                dropdownItem.dropdownHeaderLinkPath
                                              }>
                                                &#123;
                                                {dropdownItem.dropdownHeader}
                                                &#125;
                                              </Link>
                                            </h3>

                                            <div className="grid gap-4">
                                              {dropdownItem.dropdownLinks.map(
                                                (dropdownLink, index) => (
                                                  <div
                                                    key={index}
                                                    className="overflow-hidden"
                                                  >
                                                    <Link
                                                      className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
                                                      href={
                                                        dropdownLink.dropdownLinkPath
                                                      }
                                                    >
                                                      <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
                                                      <span>
                                                        &#123;
                                                        {
                                                          dropdownLink.drodpownLinkName
                                                        }
                                                        &#125;
                                                      </span>
                                                    </Link>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-4 pt-6">
                      <div className="w-full md:w-[75%]">
                        <div className="grid md:grid-cols-3 h-full gap-y-6">
                          <Link
                            href="/career"
                            className="flex flex-col md:h-full single-hamburger-item hover:text-primary"
                          >
                            <span className="text-16 md:text-3xl uppercase">
                              Career
                            </span>

                            <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
                              <img
                                src="/img/ach-thumb.jpg"
                                alt="mariox"
                                className="w-full md:h-full object-cover ease-elastic-medium duration-700"
                              />
                            </div>
                          </Link>
                          <Link
                            href="/about"
                            className="flex flex-col md:h-full single-hamburger-item hover:text-primary md:pt-20"
                          >
                            <span className="text-16 md:text-3xl uppercase">
                              About Us
                            </span>

                            <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
                              <img
                                src="/img/ach-thumb.jpg"
                                alt="mariox"
                                className="w-full h-full object-cover ease-elastic-medium duration-700"
                              />
                            </div>
                          </Link>
                          <Link
                            href="/contact"
                            className="flex flex-col h-full single-hamburger-item hover:text-primary md:pt-40"
                          >
                            <span className="text-16 md:text-3xl uppercase">
                              Contact us
                            </span>

                            <div className="flex-1 mt-6 hidden md:block overflow-hidden hamburger-img ease-elastic-medium duration-1000">
                              <img
                                src="/img/ach-thumb.jpg"
                                alt="mariox"
                                className="w-full h-full object-cover ease-elastic-medium duration-700"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-auto md:flex-1 grid gap-6 pb-10">
                        <div className="hidden xl:block">
                          <FeaturedWorkSmall
                            initialText="NEW"
                            projectType=" On demand service"
                            projectLink="/"
                            projectName="On demand service"
                          />
                        </div>

                        {/* <div className="flex flex-col gap-4">
                          {[
                            {
                              linkName: 'Career',
                              linkPath: '/',
                            },
                            {
                              linkName: 'Our Offices',
                              linkPath: '/',
                            },
                            {
                              linkName: 'Local seo services',
                              linkPath: '/',
                            },
                            {
                              linkName: 'Ecommerce seo services',
                              linkPath: '/',
                            },
                          ].map(({ linkName, linkPath }, index) => (
                            <div key={index}>
                              <Link
                                className="text-12 uppercase flex items-center hover:text-primary group whitespace-nowrap"
                                href={linkPath}
                              >
                                <span className="w-0 h-2 duration-300 ease-out group-hover:w-2 group-hover:mr-2 bg-primary"></span>
                                <span> {linkName} </span>
                              </Link>
                            </div>
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        onClick={serviceDropdowndisable}
        className={`invisible fixed inset-0 z-[99] h-screen w-full bg-black/50  opacity-0 duration-300 ease-out  ${serviceDropdownMenu !== false
          ? 'pointer-events-auto !visible !opacity-100'
          : 'pointer-events-none'
          }`}
      ></button>
      <div
        className={`pointer-events-none invisible fixed inset-0 z-[100] h-screen w-full opacity-0 duration-300 ease-out pt-[68px] ${serviceDropdownMenu !== false ? ' !visible !opacity-100' : ''
          }`}
      >
        <div
          className=" bg-secondary  duration-1000 ease-elastic relative overflow-hidden"
          ref={dropdownBg}
          style={{ height: 0 }}
        >
          <div className="absolute inset-0 z-0 flex justify-center">
            <svg width="1203" height="722" fill="none">
              <path
                stroke="#E1D8CE"
                d="M1 0v722M290 0v722M581 0v722M880 0v722M1202 0v722"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
