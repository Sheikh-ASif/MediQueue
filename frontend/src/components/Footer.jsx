import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/**Left Section */}
            <div>
                <img className='mb-2 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6 font-semibold'>We empower patients by providing simple, reliable, and seamless access to a wide network of trusted healthcare professionals, ensuring quality care and convenience anytime, anywhere.</p>
            </div>
            {/**Center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 font-semibold cursor-pointer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                </ul>
            </div>

            {/**Right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600 font-semibold cursor-pointer'>
                <li>+2-131-765-8890</li>
                <li>mediqueue@example.com</li>
                </ul>
            </div>
        </div>
        <div className='text-center' >
            <hr />
            <p className='py-5 text-sm text-center'> © 2024 MediQueue. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer