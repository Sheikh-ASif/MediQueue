import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg px-6 md:px-10 lg:px-20 overflow-hidden">
      {/**-----------Left Side------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          Book Appointments <br /> with Trusted Doctors
        </p>

        <div className="flex items-center gap-5">
          <img
            src={assets.group_profiles}
            alt="group"
            className="w-36 h-auto drop-shadow-md"
          />
          <p className="text-base md:text-lg text-white/90">
            Your health matters. Browse our trusted doctors and schedule
            appointments effortlessly.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-700 text-sm font-medium shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/**---------Right Side------- */}
      <div className="md:w-1/2 relative flex items-end justify-center mt-0 mb-5">
        <img
          className="w-full md:w-[90%] lg:w-[85%] rounded-2xl shadow-xl object-contain md:object-cover"
          src={assets.header_img}
          alt="doctor"
        />
      </div>
    </div>
  );
};

export default Header;

// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20'>
//         {/**-----------left Side------- */}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//             <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight'>
//                 Book Appointments <br/> with Trusted Doctors
//             </p>
//         <div className="flex items-center gap-6">
//   <img src={assets.group_profiles} alt="" className="w-40 h-auto" />
//   <p className="text-lg text-white">
//     Your health matters, browse our trusted doctors and
//     schedule appointments effortlessly
//   </p>
// </div>
//         <a href="#speciality" className='flex flex-items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' >
//             Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//             </a>
//              </div>
//           {/**---------Right Side------- */}
//         <div className='md:w-1/2 relative'>
//           <img className='w-full md:absolute bottom-0  h-auto rounded-lg ' src={assets.header_img} alt="" />
//         </div>
//     </div>

//   )
// }

// export default Header
