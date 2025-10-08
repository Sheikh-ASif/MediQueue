import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between
     bg-gradient-to-r from-[#7a5cff] via-[#4e2fda] to-[#33cef3]
     rounded-3xl px-8 sm:px-16 lg:px-24 my-16 md:mx-10 shadow-2xl min-h-[270px]">

      {/* Left Side */}
      <div className="flex-1 py-12 md:py-16 lg:py-20 md:pl-6">
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-snug mb-4 drop-shadow">
          <div>Your Health, Our Priority</div>
          <div className="text-[#ffe373]">Book With 100+ Trusted Doctors</div>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-gradient-to-r from-[#4e2fda] to-[#33cef3] text-white text-base lg:text-lg px-10 py-4 rounded-full mt-6 font-bold hover:bg-[#553cdd] hover:scale-105 transition-transform shadow-xl"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 lg:w-[320px] relative justify-center items-center">
        <img
          className="w-full max-w-md mx-auto object-contain"
          src={assets.appointment_img}
          alt="Appointment Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;






// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Banner = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex  bg-blue-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
//       {/**Left Side */}
//       <div className="flex-1 py-8 sm:py md:py-16 lg:py-24 lg:pl-5">
//         <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white ">
//           <p>Your Health,Our Priority</p>
//           <p>Book with 100+ Trusted Doctors Easily</p>
//         </div>
//         <button
//           onClick={() => {
//             navigate("/login");
//             scrollTo(0, 0);
//           }}
//           className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all cursor-pointer"
//         >
//           Create Account
//         </button>
//       </div>

//       {/**Right Side */}
//       <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
//         <img
//           className="w-full absolute bottom-0 right-0 max-w-md"
//           src={assets.appointment_img}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;
