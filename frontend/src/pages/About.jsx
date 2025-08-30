import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='mt-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col gap-6 text-center md:w-2/4text-sm md:text-left '>
            <p>MediQueue is committed to redefining excellence in healthcare technology. With every innovation, we bring you a smarter, smoother, and more human way to manage your health. From booking your very first appointment to staying on top of ongoing care, MediQueue isn’t just a platform—it’s your trusted partner, guiding you with ease and confidence every step of the way.</p>
            <p>At MediQueue, we are devoted to excellence in healthcare technology. With every step, we infuse innovation and care to create a platform that feels effortless and empowering. By embracing the latest advancements, we ensure a seamless experience—where booking your first appointment feels simple and managing ongoing care feels reassuring. More than just a service, MediQueue is your healthcare companion, guiding you with trust, convenience, and compassion every step of the way. </p>
            <b>Our Vision at MediQueue</b>
            <p>At MediQueue, our vision is to craft a world where healthcare feels seamless, connected, and within everyone’s reach. We strive to bridge the gap between patients and providers, making access to trusted care simpler, faster, and more compassionate. With MediQueue, the care you need is always there—precisely when you need it.</p>
          </div>
        </div>
        
        <div className='text-xl  mt-10 text-center my-4'>
          <p>WHY  <span  className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

             <div className='flex flex-col md:flex-row mb-20'>
              <div className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
                <b>EFFICIENCY:</b>
                <p>Effortless scheduling that adapts to your day, not the other way around</p>
              </div>
              <div  className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
                <b>CONVENIENCE:</b>
                <p>Connect instantly with trusted healthcare professionals near you</p>
                </div>
              <div  className='border px-4 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-600 cursor-pointer'>
                <b>PERSONALIZATION:</b>
                <p>Stay ahead of your health with customized recommendations and gentle reminders made just for you.</p>
              </div>
             </div>
        
    </div>
  )
}

export default About