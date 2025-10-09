import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const {
    dtoken,
    dashData,
    setDashData,
    getDashData,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dtoken) {
      getDashData();
    }
  }, [dtoken]);

  return (
    dashData && (
      <div className="w-full min-h-screen bg-gradient-to-tr from-sky-50 to-indigo-50 px-2 pt-8 pb-20">
        {/* Summary Cards - theme-matched */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Earnings */}
          <div className="rounded-2xl min-h-[110px] flex flex-col justify-center px-8 py-7 shadow-lg
            bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600
            text-white overflow-hidden cursor-pointer hover:scale-105 transition">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Earnings</p>
              <div className="bg-yellow-400/40 rounded-lg p-2">
                <img className="w-8" src={assets.earning_icon} alt="Earnings" />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <span className="text-3xl font-extrabold">{currency}{dashData.earnings ?? 0}</span>
            </div>
          </div>
          {/* Appointments */}
          <div className="rounded-2xl min-h-[110px] flex flex-col justify-center px-8 py-7 shadow-lg
            bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700
            text-white overflow-hidden cursor-pointer hover:scale-105 transition">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Appointments</p>
              <div className="bg-blue-400/30 rounded-lg p-2">
                <img className="w-8" src={assets.appointments_icon} alt="Appointments" />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <span className="text-3xl font-extrabold">{dashData.appointments ?? 0}</span>
            </div>
          </div>
          {/* Patients */}
          <div className="rounded-2xl min-h-[110px] flex flex-col justify-center px-8 py-7 shadow-lg
            bg-gradient-to-r from-green-400 via-green-500 to-green-700
            text-white overflow-hidden cursor-pointer hover:scale-105 transition">
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">Patients</p>
              <div className="bg-green-400/30 rounded-lg p-2">
                <img className="w-8" src={assets.patients_icon} alt="Patients" />
              </div>
            </div>
            <div className="pt-3 pb-1">
              <span className="text-3xl font-extrabold">{dashData.patients ?? 0}</span>
            </div>
          </div>
        </div>

        {/* Latest Appointments Section */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg">
          <div className="flex items-center gap-3 px-7 py-6 border-b border-gray-100 bg-gray-50 rounded-t-2xl">
            <img src={assets.list_icon} alt="" className="w-8" />
            <p className="font-bold text-blue-900 text-lg">Latest Appointments</p>
          </div>
          <div>
            {dashData.latestAppointments.map((item, index) => (
              <div
                className={"flex items-center px-7 py-4 gap-5 border-b border-gray-50 hover:bg-blue-50 transition"}
                key={index}
              >
                <img
                  className="rounded-full w-12 h-12 object-cover border-4 border-blue-100"
                  src={item.userData.image}
                  alt={item.userData.name}
                />
                <div className="flex-1 text-base">
                  <p className="text-gray-800 font-semibold">
                    {item.userData.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 bg-red-50 px-4 py-1 font-semibold rounded-lg shadow border border-red-200 text-xs">
                    Cancelled
                  </p>
                ) : item.isCompleted ? (
                  <p className="text-green-600 bg-green-50 px-4 py-1 font-semibold rounded-lg shadow border border-green-200 text-xs">
                    Completed
                  </p>
                ) : (
                  <div className="flex gap-2">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-9 h-9 cursor-pointer bg-white rounded hover:bg-red-100 border border-gray-200"
                      src={assets.cancel_icon}
                      alt="Cancel"
                      title="Cancel"
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-9 h-9 cursor-pointer bg-white rounded hover:bg-green-100 border border-gray-200"
                      src={assets.tick_icon}
                      alt="Complete"
                      title="Completed"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;









// import React from "react";
// import { useContext } from "react";
// import { DoctorContext } from "../../context/DoctorContext";
// import { useEffect } from "react";
// import { assets } from "../../assets/assets";
// import { AppContext } from "../../context/AppContext";

// const DoctorDashboard = () => {
//   const {
//     dtoken,
//     dashData,
//     setDashData,
//     getDashData,
//     completeAppointment,
//     cancelAppointment,
//   } = useContext(DoctorContext);
//   const { currency, slotDateFormat } = useContext(AppContext);

//   useEffect(() => {
//     if (dtoken) {
//       getDashData();
//     }
//   }, [dtoken]);

//   return (
//     dashData && (
//       <div className="m-5">
//         <div className="flex flex-wrap gap-3">
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.earning_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {currency} {dashData.earnings}
//               </p>
//               <p className="text-gray-400 ">Earnings</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.appointments_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.appointments}
//               </p>
//               <p className="text-gray-400 ">Appointments</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.patients_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.patients}
//               </p>
//               <p className="text-gray-400 ">Patients</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white">
//           <div className="flex items-center gap-2.5 px-4 py-4 mt-10 roundedd-t border">
//             <img src={assets.list_icon} alt="" />
//             <p className="font-semibold">Latest Appointments</p>
//           </div>
//           <div className="pt-4 border border-t-0">
//             {dashData.latestAppointments.map((item, index) => (
//               <div
//                 className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 "
//                 key={index}
//               >
//                 <img
//                   className="rounded-full w-10 "
//                   src={item.userData.image}
//                   alt=""
//                 />
//                 <div className="flex-1 text-sm">
//                   <p className="text-gray-800 font-medium">
//                     {item.userData.name}
//                   </p>
//                   <p className="text-gray-600">
//                     {slotDateFormat(item.slotDate)}
//                   </p>
//                 </div>
//                 {item.cancelled ? (
//                   <p className="text-red-400 text-xs font-medium">Cancelled</p>
//                 ) : item.isCompleted ? (
//                   <p className="text-green-500 text-xs font-medium">
//                     Completed
//                   </p>
//                 ) : (
//                   <div className="flex">
//                     <img
//                       onClick={() => cancelAppointment(item._id)}
//                       className="w-10 cursor-pointer"
//                       src={assets.cancel_icon}
//                       alt=""
//                     />
//                     <img
//                       onClick={() => completeAppointment(item._id)}
//                       className="w-10 cursor-pointer"
//                       src={assets.tick_icon}
//                       alt=""
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorDashboard;
