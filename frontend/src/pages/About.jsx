import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 text-gray-700 font-sans">
      {/* --- ABOUT HEADER --- */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
          ABOUT <span className="text-blue-600">US</span>
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full shadow-md"></div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="mt-16 flex flex-col md:flex-row gap-12 items-center max-w-7xl mx-auto">
        
        <img
          className="w-full md:max-w-[420px] rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-700"
          src={assets.about_image}
          alt="About MediQueue"
          loading="lazy"
        />

        <div className="space-y-6 md:w-2/3 text-center md:text-left text-lg leading-relaxed tracking-wide text-gray-800">
          <p>
            MediQueue is committed to redefining excellence in healthcare technology. With every innovation, we bring you a smarter, smoother, and more human way to manage your health.
          </p>
          <p>
            From booking your very first appointment to staying on top of ongoing care, MediQueue isn’t just a platform—it’s your trusted partner, guiding you with ease and confidence every step of the way.
          </p>
          <h3 className="text-2xl font-semibold text-blue-600 pt-6 border-t-2 border-blue-600 max-w-max">
            ✨ Our Vision
          </h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            At MediQueue, our vision is to craft a world where healthcare feels seamless, connected, and within everyone’s reach. We strive to bridge the gap between patients and providers, making access to trusted care simpler, faster, and more compassionate.
          </p>
        </div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <div className="text-center mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full shadow-md"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 px-4 md:px-0">
        {[
          {
            icon: '⚡',
            title: 'EFFICIENCY',
            desc: 'Effortless scheduling that adapts to your day, not the other way around.',
          },
          {
            icon: '📍',
            title: 'CONVENIENCE',
            desc: 'Connect instantly with trusted healthcare professionals near you.',
          },
          {
            icon: '💙',
            title: 'PERSONALIZATION',
            desc: 'Stay ahead of your health with tailored recommendations and gentle reminders just for you.',
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-3xl border border-gray-300 bg-white p-10 flex flex-col items-start gap-5 shadow-sm hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-500 cursor-pointer"
          >
            <div className="text-4xl font-semibold group-hover:text-white">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white">{title}</h3>
            <p className="text-gray-600 group-hover:text-blue-200 text-base tracking-wide leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About











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