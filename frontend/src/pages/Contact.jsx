import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

        <div className='text-center text-2xl pt-10 test-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-10 justify-center '>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>
             <p className='font-semibold text-lg text-gray-600'>Our Office </p>
             <p className='text-gray-500'>32671 New Street Tower <br/>Suite 420, Birmingham, UK</p>
             <p className='text-gray-500'>Tel: (415) 555-0132 <br/> Email: mediqueue@example.com</p>
             <p className='font-semibold text-lg text-gray-600'>Careesrs at Mediqueue</p>
             <p className='text-gray-500'>Learn more about our teams and job openings</p>
             <button className='font-semibold border border-black rounded-full cursor-pointer px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>

        </div>

    </div>
  )
}

export default Contact