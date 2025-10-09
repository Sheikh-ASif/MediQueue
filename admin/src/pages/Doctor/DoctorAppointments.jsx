import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dtoken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dtoken) {
      getAppointments();
    }
  }, [dtoken]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 mb-12">
      <h1 className="mb-7 text-2xl font-extrabold text-blue-800 tracking-tight bg-gradient-to-r from-blue-200 via-blue-50 to-white rounded-xl shadow border px-6 py-3">
        All Appointments
      </h1>

      <div className="bg-white border-2 border-blue-100 rounded-2xl shadow-xl text-sm max-h-[75vh] min-h-[40vh] overflow-y-auto">
        <div className="hidden sm:grid grid-cols-[0.7fr_2.6fr_1.2fr_1.2fr_2.3fr_1.3fr_1.5fr] gap-1 py-4 px-8 border-b bg-gradient-to-r from-blue-100 via-blue-50 to-white text-blue-700 font-semibold uppercase tracking-wide text-xs">
          <span>Sr no</span>
          <span>Patient</span>
          <span>Payment</span>
          <span>Age</span>
          <span>Date & Time</span>
          <span>Fees</span>
          <span>Action</span>
        </div>
        {appointments.map((item, index) => (
          <div
            className="sm:grid grid-cols-[0.7fr_2.6fr_1.2fr_1.2fr_2.3fr_1.3fr_1.5fr] items-center py-4 px-8
                  bg-white border-b transition hover:bg-blue-50 flex flex-wrap max-sm:gap-3"
            key={item._id}
            style={{ minHeight: "60px" }}
          >
            <span className="max-sm:hidden text-gray-500 font-semibold">
              {index + 1}
            </span>
            <div className="flex items-center gap-3">
              <img
                className="w-9 h-9 rounded-full border-2 border-blue-100 shadow"
                src={item.userData.image}
                alt={item.userData.name}
              />
              <span className="font-medium text-gray-900">{item.userData.name}</span>
            </div>
            <div>
              <span className={`px-3 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-blue-200 to-blue-400 text-blue-800 border border-blue-200`}>
                {item.payment ? "ONLINE" : "CASH"}
              </span>
            </div>
            <span className="max-sm:hidden text-gray-700">{calculateAge(item.userData.dob)}</span>
            <span className="truncate text-gray-700">
              {slotDateFormat(item.slotDate)}, <span className="text-gray-400">{item.slotTime}</span>
            </span>
            <span className="text-center font-semibold text-blue-700">
              {currency}{item.amount}
            </span>
            {item.cancelled ? (
              <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200">
                Cancelled
              </span>
            ) : item.isCompleted ? (
              <span className="text-green-500 px-2 py-1 bg-green-50 font-semibold rounded">
                Completed
              </span>
            ) : (
              <div className="flex gap-2 items-center justify-center">
                <img
                  title="Cancel"
                  onClick={() => cancelAppointment(item._id)}
                  className="w-8 h-8 p-1 rounded cursor-pointer hover:bg-red-100 transition"
                  src={assets.cancel_icon}
                  alt="Cancel"
                />
                <img
                  title="Complete"
                  onClick={() => completeAppointment(item._id)}
                  className="w-8 h-8 p-1 rounded cursor-pointer hover:bg-green-100 transition"
                  src={assets.tick_icon}
                  alt="Complete"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;








// import React from "react";
// import { useContext } from "react";
// import { DoctorContext } from "../../context/DoctorContext";
// import { useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";

// const DoctorAppointments = () => {
//   const {
//     dtoken,
//     appointments,
//     getAppointments,
//     completeAppointment,
//     cancelAppointment,
//   } = useContext(DoctorContext);

//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (dtoken) {
//       getAppointments();
//     }
//   }, [dtoken]);

//   return (
//     <div className="w-full max-w-6xl m-5">
//       <p className="mb-3 text-lg font-medium">All Appointments</p>

//       <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
//         <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
//           <p>Sr no</p>
//           <p>Patient</p>
//           <p>Payment</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Fees</p>
//           <p>Action </p>
//         </div>
//         {appointments.map((item, index) => (
//           <div
//             className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-centertext-gray-500 py-3 px-6 border-b hover:bg-gray-50"
//             key={index}
//           >
//             <p className="max-sm:hidden">{index + 1}</p>
//             <div className="flex items-center gap-2">
//               <img
//                 className="w-8 rounded-full"
//                 src={item.userData.image}
//                 alt=""
//               />{" "}
//               <p>{item.userData.name}</p>
//             </div>
//             <div>
//               <p className="text-xs inline border border-primary px-2 rounded-full">
//                 {item.payment ? "online" : "CASH"}
//               </p>
//             </div>
//             <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
//             <p>
//               {slotDateFormat(item.slotDate)},{item.slotTime}
//             </p>
//             <p>
//               {currency}
//               {item.amount}
//             </p>
//             {item.cancelled ? (
//               <p className="text-red-400 text-xs font-medium">Cancelled</p>
//             ) : item.isCompleted ? (
//               <p className="text-green-500 text-xs font-medium">Completed</p>
//             ) : (
//               <div className="flex">
//                 <img
//                   onClick={() => cancelAppointment(item._id)}
//                   className="w-10 cursor-pointer"
//                   src={assets.cancel_icon}
//                   alt=""
//                 />
//                 <img
//                   onClick={() => completeAppointment(item._id)}
//                   className="w-10 cursor-pointer"
//                   src={assets.tick_icon}
//                   alt=""
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorAppointments;
