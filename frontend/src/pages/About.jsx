import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="pt-28 pb-24 bg-gradient-to-br from-[#f9fbff] via-[#f1f4ff] to-[#eef1ff] text-gray-700 font-sans w-full overflow-hidden">
      
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wide text-[#3a3e61]">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e49ed] to-[#9b7cff]">US</span>
        </h1>
        <div className="w-28 h-1.5 bg-gradient-to-r from-[#6e49ed] to-[#9b7cff] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row gap-16 lg:gap-28 items-center max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#6e49ed] to-[#9b7cff] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img
            className="relative w-[500px] h-[340px] rounded-3xl border border-[#e3e7ff] object-cover shadow-xl group-hover:scale-105 transition-transform duration-500"
            src={assets.about_image1}
            alt="About MediQueue"
            loading="lazy"
          />
        </div>

        <div className="space-y-7 md:w-2/3 text-center md:text-left text-lg leading-relaxed text-[#293255]">
          <p>
            <span className="font-semibold text-[#6e49ed]">MediQueue</span> is dedicated to transforming healthcare through smart,
            seamless, and human-centered technology that simplifies how care is accessed.
          </p>

          <p>
            From instant appointment booking to real-time queue tracking, MediQueue
            empowers both patients and providers with transparency, speed, and control.
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-bold text-[#6e49ed] inline-block pb-2 border-b-2 border-[#6e49ed]">
              ✨ Our Vision
            </h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mt-4">
              To create a connected healthcare ecosystem where technology bridges gaps,
              reduces waiting, and delivers truly personalized care experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-28 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#3a3e61]">
          WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e49ed] to-[#9b7cff]">CHOOSE US</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#6e49ed] to-[#9b7cff] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 px-6 md:px-0">
        {[
          {
            icon: "⚡",
            title: "EFFICIENCY",
            desc: "Smart scheduling designed to save time and eliminate unnecessary waiting.",
          },
          {
            icon: "📍",
            title: "CONVENIENCE",
            desc: "Instant access to trusted healthcare professionals around you.",
          },
          {
            icon: "💙",
            title: "PERSONALIZATION",
            desc: "Health insights, reminders, and care tailored specifically for you.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-3xl bg-white/70 backdrop-blur-lg border border-[#e3e7ff] p-10 flex flex-col gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#6e49ed]/10 to-[#9b7cff]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative text-5xl">{icon}</div>
            <h3 className="relative text-2xl font-bold text-gray-800">{title}</h3>
            <p className="relative text-gray-600 text-base leading-relaxed">{desc}</p>
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
