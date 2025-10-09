import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 md:px-16 pt-25 lg:px-32 pb-20 bg-gradient-to-br from-[#f4f7ff] to-[#ebf3fd] text-gray-700 font-sans w-full">
      {/* --- ABOUT HEADER --- */}
      <div className="text-center mb-2">
        <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] bg-clip-text text-transparent drop-shadow">
          ABOUT <span className="text-blue-600">US</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] mx-auto mt-4 rounded-full shadow-lg"></div>
      </div>
      {/* --- ABOUT SECTION --- */}
      <div className="mt-16 flex flex-col md:flex-row gap-14 lg:gap-24 items-center max-w-7xl mx-auto">
        <img
          className="w-full md:max-w-[440px] rounded-3xl shadow-2xl border-4 border-[#e0e6ff] hover:scale-105 transition-transform duration-600"
          src={assets.about_image}
          alt="About MediQueue"
          loading="lazy"
        />
        <div className="space-y-7 md:w-2/3 text-center md:text-left text-lg leading-relaxed tracking-wide text-[#293255]">
          <p>
            MediQueue is committed to redefining excellence in healthcare technology. With every innovation, we bring you a smarter, smoother, and more human way to manage your health.
          </p>
          <p>
            From booking your very first appointment to staying on top of ongoing care, MediQueue isn’t just a platform—it’s your trusted partner, guiding you with ease and confidence every step of the way.
          </p>
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#7a5cff] to-[#33cef3] bg-clip-text pt-7 border-t-2 border-[#7a5cff] max-w-max mx-auto md:mx-0">
            ✨ Our Vision
          </h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            At MediQueue, our vision is to craft a world where healthcare feels seamless, connected, and within everyone’s reach. We strive to bridge the gap between patients and providers, making access to trusted care simpler, faster, and more compassionate.
          </p>
        </div>
      </div>
      {/* --- WHY CHOOSE US --- */}
      <div className="text-center mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] bg-clip-text text-transparent tracking-tight drop-shadow">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#7a5cff] to-[#33cef3] mx-auto mt-4 rounded-full shadow-md"></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-4 md:px-0">
        {[
          {
            icon: "⚡",
            title: "EFFICIENCY",
            desc: "Effortless scheduling that adapts to your day, not the other way around.",
          },
          {
            icon: "📍",
            title: "CONVENIENCE",
            desc: "Connect instantly with trusted healthcare professionals near you.",
          },
          {
            icon: "💙",
            title: "PERSONALIZATION",
            desc: "Stay ahead of your health with tailored recommendations and gentle reminders just for you.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-3xl border-2 border-[#e0e6ff] bg-white p-10 flex flex-col items-start gap-5 shadow-md hover:border-transparent hover:scale-105 hover:bg-gradient-to-br hover:from-[#7a5cff] hover:via-[#47d4fa] hover:to-[#33cef3] hover:shadow-lg transition-all duration-400 cursor-pointer"
          >
            <div className="text-5xl font-bold group-hover:text-white transition">
              {icon}
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-white transition">
              {title}
            </h3>
            <p className="text-gray-700 group-hover:text-blue-100 text-base leading-relaxed transition">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>
//         <div className='text-center text-2xl pt-10 text-gray-500'>
//           <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
//         </div>

//         <div className='mt-10 flex flex-col md:flex-row gap-12'>
//           <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//           <div className='flex flex-col gap-6 text-center md:w-2/4text-sm md:text-left '>
//             <p>MediQueue is committed to redefining excellence in healthcare technology. With every innovation, we bring you a smarter, smoother, and more human way to manage your health. From booking your very first appointment to staying on top of ongoing care, MediQueue isn’t just a platform—it’s your trusted partner, guiding you with ease and confidence every step of the way.</p>
//             <p>At MediQueue, we are devoted to excellence in healthcare technology. With every step, we infuse innovation and care to create a platform that feels effortless and empowering. By embracing the latest advancements, we ensure a seamless experience—where booking your first appointment feels simple and managing ongoing care feels reassuring. More than just a service, MediQueue is your healthcare companion, guiding you with trust, convenience, and compassion every step of the way. </p>
//             <b>Our Vision at MediQueue</b>
//             <p>At MediQueue, our vision is to craft a world where healthcare feels seamless, connected, and within everyone’s reach. We strive to bridge the gap between patients and providers, making access to trusted care simpler, faster, and more compassionate. With MediQueue, the care you need is always there—precisely when you need it.</p>
//           </div>
//         </div>

//         <div className='text-xl  mt-10 text-center my-4'>
//           <p>WHY  <span  className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//         </div>

//              <div className='flex flex-col md:flex-row mb-20'>
//               <div className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
//                 <b>EFFICIENCY:</b>
//                 <p>Effortless scheduling that adapts to your day, not the other way around</p>
//               </div>
//               <div  className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
//                 <b>CONVENIENCE:</b>
//                 <p>Connect instantly with trusted healthcare professionals near you</p>
//                 </div>
//               <div  className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
//                 <b>PERSONALIZATION:</b>
//                 <p>Stay ahead of your health with customized recommendations and gentle reminders made just for you.</p>
//               </div>
//              </div>

//     </div>
//   )
// }

// export default About
