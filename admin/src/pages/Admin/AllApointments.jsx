// import React, { useContext, useEffect } from 'react';
// import { AdminContext } from '../../context/AdminContext';
// import { AppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';

// const AllApointments = () => {
//   const { atoken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (atoken) {
//       getAllAppointments();
//     }
//   }, [atoken, getAllAppointments]);

//   return (
//     <div className="max-w-7xl mx-auto my-12 px-6 sm:px-12">
//       <h1 className="text-4xl font-extrabold text-gradient via-purple-700 to-pink-600 mb-8 select-none tracking-tight">
//         All Appointments
//       </h1>

//       <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-300 bg-gradient-to-br from-white to-gray-50 max-h-[78vh] overflow-y-auto">
//         {/* Gradient header stripe */}
//         <div className="sticky top-0 z-20 grid grid-cols-[0.9fr_3fr_1.3fr_3fr_3fr_1.3fr_1.5fr] bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white uppercase font-semibold tracking-widest text-xs select-none px-8 py-6 border-b border-gray-300 shadow-lg">
//           <span>S.No</span>
//           <span>Patient</span>
//           <span>Age</span>
//           <span>Date & Time</span>
//           <span>Doctor</span>
//           <span className="text-right">Fees</span>
//           <span className="text-center">Action</span>
//         </div>

//         {/* Appointment rows */}
//         {appointments.map((item, index) => (
//           <div
//             key={item._id}
//             className="grid grid-cols-[0.9fr_3fr_1.3fr_3fr_3fr_1.3fr_1.5fr] gap-x-6 items-center py-5 px-8 border-b border-gray-200 bg-white hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer select-text"
//             style={{ minHeight: '70px' }}
//           >
//             {/* Serial number with gradient circle */}
//             <div className="flex justify-center items-center">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-600 text-white font-black text-lg flex justify-center items-center shadow-lg">
//                 {index + 1}
//               </div>
//             </div>

//             {/* Patient */}
//             <div className="flex items-center gap-5">
//               <img
//                 src={item.userData.image}
//                 alt="Patient"
//                 className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg transition-transform hover:scale-110"
//               />
//               <div>
//                 <p className="font-bold text-gray-900 text-lg tracking-tight truncate max-w-[220px]">
//                   {item.userData.name}
//                 </p>
//                 <p className="text-sm text-gray-500">Patient</p>
//               </div>
//             </div>

//             {/* Age */}
//             <p className="text-center font-semibold text-indigo-700">{calculateAge(item.userData.dob)}</p>

//             {/* Date & Time */}
//             <p className="text-gray-800 font-medium max-w-[230px] truncate">
//               {slotDateFormat(item.slotDate)}, <span className="text-gray-400">{item.slotTime}</span>
//             </p>

//             {/* Doctor */}
//             <div className="flex items-center gap-5">
//               <img
//                 src={item.docData.image}
//                 alt="Doctor"
//                 className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg transition-transform hover:scale-110"
//               />
//               <div>
//                 <p className="font-bold text-gray-900 text-lg tracking-tight truncate max-w-[220px]">{item.docData.name}</p>
//                 <p className="text-sm text-purple-600 font-semibold italic">Specialist</p>
//               </div>
//             </div>

//             {/* Fees */}
//             <p className="text-right font-extrabold text-green-600 text-xl">{currency}{item.amount}</p>

//             {/* Action */}
//             <div className="flex justify-center">
//               {item.cancelled ? (
//                 <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold shadow-md border border-red-300 select-none">
//                   Cancelled
//                 </span>
//               ) : (
//                 <button
//                   onClick={() => cancelAppointment(item._id)}
//                   title="Cancel this appointment"
//                   className="w-12 h-12 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 rounded-full flex justify-center items-center shadow-lg hover:brightness-110 transition focus:scale-95 active:scale-90 focus:outline-none"
//                   aria-label={`Cancel appointment for ${item.userData.name}`}
//                 >
//                   <img src={assets.cancel_icon} alt="Cancel Icon" className="w-6 h-6" />
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllApointments;







import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllApointments = () => {
  const { atoken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (atoken) {
      getAllAppointments()
    }
  }, [atoken, getAllAppointments])

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <p className="mb-5 text-2xl font-bold text-gray-800 tracking-tight">All Appointments</p>
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto">
        <div className="hidden sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] py-4 px-8 border-b bg-gray-100 text-gray-700 font-semibold uppercase tracking-wider text-xs">
          <span>S.no</span>
          <span>Patient</span>
          <span>Age</span>
          <span>Date & Time</span>
          <span>Doctor</span>
          <span>Fees</span>
          <span>Action</span>
        </div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] items-center py-4 px-8
                     bg-white border-b transition-colors
                     hover:bg-blue-50 hover:shadow-md flex flex-wrap max-sm:gap-4"
            style={{ minHeight: '62px' }}
          >
            {/* Serial Number */}
            <span className="max-sm:hidden text-center text-base font-bold text-gray-500">{index + 1}</span>
            {/* Patient */}
            <div className="flex items-center gap-3">
              <img
                src={item.userData.image}
                alt="Patient"
                className="w-10 h-10 rounded-full border border-gray-200 shadow"
              />
              <span className="font-medium text-gray-900 text-base">{item.userData.name}</span>
            </div>
            {/* Age */}
            <span className="max-sm:hidden text-center text-gray-600 font-medium">{calculateAge(item.userData.dob)}</span>
            {/* Date & Time */}
            <p className="max-sm:hidden truncate text-gray-700 font-medium">
              {slotDateFormat(item.slotDate)}, <span className="text-gray-500">{item.slotTime}</span>
            </p>
            {/* Doctor */}
            <div className="flex items-center gap-3">
              <img
                src={item.docData.image}
                alt="Doctor"
                className="w-10 h-10 rounded-full border border-gray-200 bg-gray-100 shadow"
              />
              <span className="font-medium text-gray-900 text-base">{item.docData.name}</span>
            </div>
            {/* Fees */}
            <p className="text-center font-semibold text-green-600">
              {currency}{item.amount}
            </p>
            {/* Action */}
            <div className="flex items-center justify-center">
              {item.cancelled ? (
                <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200">
                  Cancelled
                </span>
              ) : item.isCompleted 
              ? <p className='text-green-500 text-xs font-medium'> Completed</p> : (
                <button title="Cancel appointment">
                  <img onClick={()=>cancelAppointment(item._id)}
                    className="w-8 h-8 p-1 rounded hover:bg-red-100 transition"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllApointments

