import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDocters = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10 px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center relative">
        Our <span className="text-blue-600">Top-Rated</span> Specialists
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-center text-sm md:text-base text-gray-600">
        Connect with reputable doctors for reliable medical care and trusted expertise.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6 pt-8">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-full h-52 object-cover object-top bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 space-y-2">
              {/* Availability */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available
              </div>

              {/* Name */}
              <p className="text-gray-900 text-lg font-semibold">
                {item.name}
              </p>

              {/* Speciality */}
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => {
          navigate("/docters");
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-3 rounded-full mt-10 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        View More Doctors
      </button>
    </div>
  );
};

export default TopDocters;





// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const TopDocters = () => {
    
//     const navigate = useNavigate()
//     const {doctors} = useContext(AppContext)

//   return (
//     <div className='flex flex-col items-center gap-4 my-16 texxt-gray-900 md:mx-10'>
//         <h1 className='text-3xl font-medium'>Our Top-Rated Specialists</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Connect with reputable doctors for reliable medical care</p>
//         <div className='w-full grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//             {doctors.slice(0,10).map((item,index)=>(
//                 <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                     <img className='bg-blue-50' src={item.image} alt="" />
//                     <div className='p-4'>
//                         <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                             <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                         </div>
//                         <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                         <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <button onClick={()=> {navigate('/docters');scrollTo(0,0)}} className='bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
//     </div>
//   )
// }

// export default TopDocters