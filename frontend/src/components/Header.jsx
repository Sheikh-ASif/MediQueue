
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






// import React from "react";
// import { assets } from "../assets/assets";

// const Header = () => (
//   <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl px-10 lg:px-20 py-14 mt-10 bg-gradient-to-br from-[#eaf6ff] via-[#dbeafc] to-[#e4f0fb] overflow-hidden">
//     {/* Left Side */}
//     <div className="md:w-1/2 flex flex-col gap-8 py-6 z-10">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-[#16345c] drop-shadow-md leading-tight mb-4">
//         Book Appointments<br />with Trusted Doctors
//       </h1>
//       <div className="flex items-center gap-5 bg-gradient-to-br from-[#eaf6ff] via-[#dbeafc] to-[#e4f0fb] rounded-2xl shadow-xl px-7 py-5 mb-3">
//         <img 
//           src={assets.group_profiles} 
//           alt="group" 
//           className="w-16 h-16 rounded-full shadow" 
//         />
//         <span className="text-base md:text-lg text-[#1952c4] font-medium">
//           Your health matters. Browse our trusted doctors and schedule appointments effortlessly.
//         </span>
//       </div>
//       <a
//         href="#speciality"
//         className="inline-flex items-center gap-2 bg-[#27c3b5] px-5 py-2 rounded-full text-white text-sm font-semibold shadow hover:bg-[#209b91] hover:scale-105 transition-all"
//       >
//         Book Appointment
//         <img className="w-4" src={assets.arrow_icon} alt="arrow" />
//       </a>
//     </div>
//     {/* Right Side */}
//     <div className="md:w-1/2 flex items-end justify-center mt-8 md:mt-0">
//       <img
//         className="w-full md:w-[90%] lg:w-[80%] rounded-2xl shadow-xl object-contain"
//         src={assets.header_img}
//         alt="doctor illustration"
//       />
//     </div>
//   </div>
// );

// export default Header;





