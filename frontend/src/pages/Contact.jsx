import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    message: '',
  });
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="px-6 md:px-16 lg:px-24">
     
      <div className="text-center text-3xl pt-12 text-gray-600 font-light tracking-wide">
        <p>
          CONTACT <span className="text-gray-800 font-semibold">US</span>
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

     
      <div className="my-16 flex flex-col md:flex-row gap-12 items-center justify-center">
     
        <img
          className="w-full md:max-w-[380px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          src={assets.contact_image}
          alt="Contact MediQueue"
        />

        
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
              Tel: (415) 555-0132 <br /> Email: <a href="mailto:mediqueue@example.com" className="text-blue-600">mediqueue@example.com</a>
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

      
      <div className="max-w-4xl mx-auto">
        <div
          onMouseEnter={() => setFormVisible(true)}
          onMouseLeave={() => setFormVisible(false)}
          style={{ position: 'relative', width: '100%', maxWidth: '28rem', margin: '2rem auto' }}
        >
          <button className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all duration-500 w-full block cursor-pointer">
            Talk to Our Team
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden
              ${formVisible ? 'max-h-[40rem] opacity-100 py-8' : 'max-h-0 opacity-0 py-0 pointer-events-none'}`}
            style={{
              position: 'absolute',
              top: '100%',        
              left: 0,
              width: '100%',
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 32px 0 rgba(30,64,175,0.10)',
              zIndex: 50,
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-6">
              <h3 className="font-semibold text-gray-700 text-xl mb-2 text-center">Send Your Inquiry</h3>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Your password"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter your message..."
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all duration-500 w-full cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;









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