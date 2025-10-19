import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative w-full min-h-[630px] flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#e9fafe] via-[#e4ebfc] to-[#e3f9fe] px-8 md:px-16 lg:px-24 pt-50 pb-10 md:pb-20 shadow-inner">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Book Appointments <br /> with Trusted Doctors
        </h1>

        <div className="flex items-center gap-6">
          <img
            src={assets.group_profiles}
            alt="group"
            className="w-40 h-auto rounded-lg shadow-lg"
          />
          <p className="text-lg text-[#4e5d77] max-w-md">
            Your health matters. Browse our trusted doctors and schedule
            appointments effortlessly.
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:brightness-110 transition"
        >
          Book Appointment
          <img className="w-5" src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
        <img
          className="w-full max-w-lg rounded-3xl shadow-2xl object-contain"
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
