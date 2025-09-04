import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24">
      {/* --- CONTACT HEADER --- */}
      <div className="text-center text-3xl pt-12 text-gray-600 font-light tracking-wide">
        <p>
          CONTACT <span className="text-gray-800 font-semibold">US</span>
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <div className="my-16 flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Left Side - Image */}
        <img
          className="w-full md:max-w-[380px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          src={assets.contact_image}
          alt="Contact MediQueue"
        />

        {/* Right Side - Details */}
        <div className="flex flex-col justify-center items-start gap-6 text-gray-700 leading-relaxed">
          <div>
            <p className="font-semibold text-lg text-gray-800">📍 Our Office</p>
            <p className="text-gray-500 mt-2">
              32671 New Street Tower <br /> Suite 420, Birmingham, UK
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">☎ Get in Touch</p>
            <p className="text-gray-500 mt-2">
              Tel: (415) 555-0132 <br /> Email: mediqueue@example.com
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800">💼 Careers at MediQueue</p>
            <p className="text-gray-500 mt-2">
              Learn more about our teams and exciting job opportunities.
            </p>
          </div>

          <button className="mt-4 font-semibold border border-blue-500 text-blue-500 rounded-full px-8 py-3 text-sm hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact








// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>

//         <div className='text-center text-2xl pt-10 test-gray-500'>
//           <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//         </div>

//         <div className='my-10 flex flex-col md:flex-row gap-10 justify-center '>
//           <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

//           <div className='flex flex-col justify-center items-start gap-6'>
//              <p className='font-semibold text-lg text-gray-600'>Our Office </p>
//              <p className='text-gray-500'>32671 New Street Tower <br/>Suite 420, Birmingham, UK</p>
//              <p className='text-gray-500'>Tel: (415) 555-0132 <br/> Email: mediqueue@example.com</p>
//              <p className='font-semibold text-lg text-gray-600'>Careesrs at Mediqueue</p>
//              <p className='text-gray-500'>Learn more about our teams and job openings</p>
//              <button className='font-semibold border border-black rounded-full cursor-pointer px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//           </div>

//         </div>

//     </div>
//   )
// }

// export default Contact