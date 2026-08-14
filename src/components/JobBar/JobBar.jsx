// import React from 'react';

// const JobBar = ({ jobRole, roleArray }) => {
//   return (
//     <div className="py-9 flex -mx-4 flex-wrap gap-8 md:gap-0 items-center border-b border-b-white/10">
//       <div className="w-full md:w-5/12 px-4">
//         <h3 className="text-24 md:text-32 text-white uppercase">{jobRole}</h3>
//       </div>
//       <div className="w-full md:w-5/12 px-4">
//         <div className="flex flex-wrap">
//           {(
//             roleArray || [
//               {
//                 roleRequirement: 'Full time',
//               },
//               {
//                 roleRequirement: 'Hyderabad',
//               },
//               {
//                 roleRequirement: 'Hybrid',
//               },
//             ]
//           ).map(({ roleRequirement }, index) => (
//             <div
//               key={index}
//               className="text-16 text-white px-4 first:pl-0 after:absolute after:w-1 after:h-1 after:bg-white after:right-0 after:top-1/2 content-none relative last:after:hidden"
//             >
//               {roleRequirement}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full md:w-2/12 px-4 ">
//         {/* <a
//           href="#!"
//           className="w-full max-w-[48px] aspect-square md:ml-auto grid place-content-center border border-primary duration-300 ease-out hover:bg-primary group"
//         >
//           <span className="duration-300 ease-out group-hover:translate-x-4">
//             <svg width="8" height="14" fill="none" viewBox="0 0 8 14">
//               <path
//                 className="duration-300 ease-out group-hover:stroke-white"
//                 stroke="#E43C13"
//                 strokeWidth=".75"
//                 d="m1 13 6-6-6-6"
//               />
//             </svg>
//           </span>
//         </a> */}
//       </div>
//     </div>
//   );
// };

// export default JobBar;


import React from "react"

const JobBar = ({ jobRole, roleArray }) => {
  return (
    <div className="py-9 flex -mx-4 flex-wrap gap-8 md:gap-0 items-center border-b border-b-white/10">
      {/* Left: Job Role */}
      <div className="w-full md:w-5/12 px-4">
        <h3 className="text-24 md:text-32 text-white uppercase">{jobRole}</h3>
      </div>

      {/* Center: Role Requirements */}
      <div className="w-full md:w-5/12 px-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {(roleArray || []).map(({ roleRequirement }, index) => (
            <div
              key={index}
              className="text-16 text-white relative pr-4 after:absolute after:content-[''] after:w-1 after:h-1 after:bg-white after:right-1 after:top-1/2 after:translate-y-[-50%] last:after:hidden"
            >
              {roleRequirement}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Apply Button */}
      <div className="w-full md:w-2/12 px-4">
        <a
          href="mailto:hr@marioxsoftware.co?subject=Job Application - IT Sales Executive"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition text-center md:ml-auto"
        >
          Apply
        </a>
      </div>
    </div>
  )
}

export default JobBar
