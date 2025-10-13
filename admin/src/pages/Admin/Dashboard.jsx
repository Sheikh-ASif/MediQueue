import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
];

const Dashboard = () => {
  const { atoken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  const [liveAppointmentsData, setLiveAppointmentsData] = useState([]);
  const [specialtyData, setSpecialtyData] = useState([]);

  // For showing lists
  const [showList, setShowList] = useState(""); // "doctors" or "patients" or ""

  useEffect(() => {
    if (atoken) {
      getDashData();
    }
  }, [atoken]);

  useEffect(() => {
    if (dashData) {
      let liveData = dashData.latestAppointments.map((item, index) => {
        const slotDateObj = new Date(item.slotDate);
        let label;
        if (!item.slotDate) {
          label = "";
        } else if (!isNaN(slotDateObj.getTime())) {
          label = slotDateObj.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        } else {
          label = item.slotDate; // fallback to raw string
        }
        return {
          time: label,
          count: index + 1,
        };
      });
      setLiveAppointmentsData(liveData);

      if (dashData.specialtyCount) {
        let specialtyArr = [];
        for (const [key, value] of Object.entries(dashData.specialtyCount)) {
          specialtyArr.push({ name: key, value: value });
        }
        setSpecialtyData(specialtyArr);
      } else {
        const specMap = {};
        dashData.latestAppointments.forEach((item) => {
          const spec = item.docData.speciality || "Unknown";
          specMap[spec] = (specMap[spec] || 0) + 1;
        });
        const specialtyArr = Object.entries(specMap).map(([name, value]) => ({
          name,
          value,
        }));
        setSpecialtyData(specialtyArr);
      }
    }
  }, [dashData]);

  return (
    dashData && (
      <div className="w-full min-h-screen bg-gradient-to-tr from-sky-50 to-indigo-50 px-8 py-6 ">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center tracking-tight">
          Admin Dashboard
        </h1>

        {/* Summary Cards - updated colors and sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div
            className="rounded-xl min-h-[110px] flex flex-col justify-center items-start px-8 py-6 shadow-lg
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 relative overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => setShowList(showList === "doctors" ? "" : "doctors")}
            title="Click to view Doctors"
          >
            <span className="absolute top-5 right-6 bg-blue-100 rounded-full p-2 text-blue-600 shadow">
              <img src={assets.doctor_icon} alt="Doctors" className="w-8 h-8" />
            </span>
            <p className="text-lg font-bold text-white opacity-90 mb-1">
              Doctors
            </p>
            <p className="text-3xl font-extrabold text-white mb-1">
              {dashData.doctors}
            </p>
            <span className="text-sm text-white opacity-75">Click to view</span>
          </div>
          <div
            className="rounded-xl min-h-[110px] flex flex-col justify-center items-start px-8 py-6 shadow-lg
            bg-gradient-to-r from-green-400 via-green-600 to-green-700 relative overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() =>
              setShowList(showList === "patients" ? "" : "patients")
            }
            title="Click to view Patients"
          >
            <span className="absolute top-5 right-6 bg-green-100 rounded-full p-2 text-green-600 shadow">
              <img
                src={assets.patients_icon}
                alt="Patients"
                className="w-8 h-8"
              />
            </span>
            <p className="text-lg font-bold text-white opacity-90 mb-1">
              Patients
            </p>
            <p className="text-3xl font-extrabold text-white mb-1">
              {dashData.patients}
            </p>
            <span className="text-sm text-white opacity-75">Click to view</span>
          </div>
          <div
            className="rounded-xl min-h-[110px] flex flex-col justify-center items-start px-8 py-6 shadow-lg
            bg-gradient-to-r from-pink-400 via-pink-600 to-red-500 relative overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <span className="absolute top-5 right-6 bg-pink-100 rounded-full p-2 text-pink-500 shadow">
              <img
                src={assets.appointments_icon}
                alt="Appointments"
                className="w-8 h-8"
              />
            </span>
            <p className="text-lg font-bold text-white opacity-90 mb-1">
              Appointments
            </p>
            <p className="text-3xl font-extrabold text-white mb-1">
              {dashData.appointments}
            </p>
            <span className="text-sm text-white opacity-75">Click to view</span>
          </div>
        </div>

        {/* Show the doctors or patients list if selected */}
        {showList === "doctors" && (
          <div className="bg-white mb-10 rounded-2xl shadow-md px-10 py-6 max-h-[340px] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-700">All Doctors</h3>
              <button
                className="text-blue-500 px-4 py-1 rounded-lg hover:bg-blue-100 transition"
                onClick={() => setShowList("")}
              >
                Close
              </button>
            </div>
            <ul>
              {dashData.doctorList?.map((doc) => (
                <li
                  key={doc._id}
                  className="flex items-center gap-4 py-2 border-b"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-10 h-10 rounded-full border shadow"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {doc.name}
                    </span>
                    <span className="block text-gray-500 text-sm">
                      {doc.speciality}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showList === "patients" && (
          <div className="bg-white mb-10 rounded-2xl shadow-md px-10 py-6 max-h-[340px] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-green-700">
                All Patients
              </h3>
              <button
                className="text-green-700 px-4 py-1 rounded-lg hover:bg-green-100 transition"
                onClick={() => setShowList("")}
              >
                Close
              </button>
            </div>
            <ul>
              {dashData.patientList?.map((user) => (
                <li
                  key={user._id}
                  className="flex items-center gap-4 py-2 border-b"
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border shadow"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {user.name}
                    </span>
                    <span className="block text-gray-500 text-sm">
                      Age: {user.age}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Graph Section */}
        <div className="bg-white rounded-2xl border border-indigo-100 shadow-xl mb-12 py-8 px-6">
          <h2 className="text-2xl font-bold text-indigo-800 text-center mb-8">
            Graph Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-2">
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 text-center">
                Live Appointments Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={liveAppointmentsData}
                  margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid stroke="#ececec" />
                  <XAxis
                    dataKey="time"
                    tick={{ fill: "#6366f1", fontWeight: 600 }}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: "#6366f1", fontWeight: 600 }}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#6366f1"
                    strokeWidth={3}
                    activeDot={{ r: 9 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold text-indigo-700 mb-4 text-center">
                Appointments by Specialty
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={specialtyData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    fill="#82ca9d"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {specialtyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [value, "Appointments"]} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Latest Appointments List */}
        <div className="bg-white mt-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl">
          <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-200">
            <img src={assets.list_icon} alt="List Icon" className="w-8" />
            <p className="font-bold text-indigo-800 text-lg">
              Latest Appointments
            </p>
          </div>
          <div>
            {dashData.latestAppointments.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-8 py-4 gap-6 hover:bg-indigo-50 cursor-default border-b border-gray-100 text-base"
              >
                <img
                  className="rounded-full w-14 h-14 object-cover border-4 border-indigo-100"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
                
                <div className="flex-1 text-base">
                  <p className="text-gray-800 font-semibold">
                    {item.docData.name}
                  </p>
                  <p className="text-gray-600">
                    {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <p className="text-green-500 text-xs font-medium">
                    {" "}
                    Completed
                  </p>
                ) : (
                  <button title="Cancel appointment">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-8 h-8 p-1 rounded hover:bg-red-100 transition"
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;

// import React, { useContext, useEffect, useState } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { assets } from '../../assets/assets'
// import { AppContext } from '../../context/AppContext'

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from 'recharts'

// const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c']

// const Dashboard = () => {
//   const { atoken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
//   const { slotDateFormat } = useContext(AppContext)

//   const [liveAppointmentsData, setLiveAppointmentsData] = useState([])
//   const [specialtyData, setSpecialtyData] = useState([])

//   useEffect(() => {
//     if (atoken) {
//       getDashData()
//     }
//   }, [atoken])

//   useEffect(() => {
//     if (dashData) {
//       // Always plot, use fallback to raw slotDate if date is invalid
//       let liveData = dashData.latestAppointments.map((item, index) => {
//         const slotDateObj = new Date(item.slotDate)
//         let label = ''
//         if (!item.slotDate) {
//           label = ''
//         } else if (!isNaN(slotDateObj.getTime())) {
//           label = slotDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         } else {
//           label = item.slotDate
//         }
//         return {
//           time: label,
//           count: index + 1,
//         }
//       })
//       setLiveAppointmentsData(liveData)

//       if (dashData.specialtyCount) {
//         let specialtyArr = []
//         for (const [key, value] of Object.entries(dashData.specialtyCount)) {
//           specialtyArr.push({ name: key, value: value })
//         }
//         setSpecialtyData(specialtyArr)
//       } else {
//         const specMap = {}
//         dashData.latestAppointments.forEach(item => {
//           const spec = item.docData.speciality || 'Unknown'
//           specMap[spec] = (specMap[spec] || 0) + 1
//         })
//         const specialtyArr = Object.entries(specMap).map(([name, value]) => ({ name, value }))
//         setSpecialtyData(specialtyArr)
//       }
//     }
//   }, [dashData])

//   return (
//     dashData && (
//       <div className="w-full min-h-screen bg-gradient-to-tr from-sky-50 to-indigo-50 px-8 py-6">
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center tracking-tight">
//           Admin Dashboard
//         </h1>

//         {/* Summary Cards */}
//         <div className="flex flex-wrap gap-8 justify-between mb-12">
//           <div className="flex-1 min-w-[240px] mr-4 flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
//             <img className="w-16 drop-shadow-lg" src={assets.doctor_icon} alt="Doctors" />
//             <div>
//               <p className="text-3xl font-bold text-indigo-700">{dashData.doctors}</p>
//               <p className="text-gray-500 font-medium">Doctors</p>
//             </div>
//           </div>
//           <div className="flex-1 min-w-[240px] mr-4 flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
//             <img className="w-16 drop-shadow-lg" src={assets.appointments_icon} alt="Appointments" />
//             <div>
//               <p className="text-3xl font-bold text-indigo-700">{dashData.appointments}</p>
//               <p className="text-gray-500 font-medium">Appointments</p>
//             </div>
//           </div>
//           <div className="flex-1 min-w-[240px] flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
//             <img className="w-16 drop-shadow-lg" src={assets.patients_icon} alt="Patients" />
//             <div>
//               <p className="text-3xl font-bold text-indigo-700">{dashData.patients}</p>
//               <p className="text-gray-500 font-medium">Patients</p>
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//           <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl w-full">
//             <h2 className="text-xl font-bold mb-6 text-indigo-800 text-center">
//               Live Appointments Trend
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart
//                 data={liveAppointmentsData}
//                 margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
//               >
//                 <CartesianGrid stroke="#ececec" />
//                 <XAxis dataKey="time" tick={{ fill: "#6366f1", fontWeight: 600 }} />
//                 <YAxis allowDecimals={false} tick={{ fill: "#6366f1", fontWeight: 600 }} />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} activeDot={{ r: 9 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl w-full">
//             <h2 className="text-xl font-bold mb-6 text-indigo-800 text-center">
//               Appointments by Specialty
//             </h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={specialtyData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={110}
//                   fill="#82ca9d"
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {specialtyData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip formatter={(value) => [value, "Appointments"]} />
//                 <Legend verticalAlign="bottom" height={36} />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Latest Appointments List */}
//         <div className="bg-white mt-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl">
//           <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-200">
//             <img src={assets.list_icon} alt="List Icon" className="w-8" />
//             <p className="font-bold text-indigo-800 text-lg">Latest Appointments</p>
//           </div>
//           <div>
//             {dashData.latestAppointments.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center px-8 py-4 gap-6 hover:bg-indigo-50 cursor-default border-b border-gray-100 text-base"
//               >
//                 <img className="rounded-full w-14 h-14 object-cover border-4 border-indigo-100" src={item.docData.image} alt={item.docData.name} />
//                 <div className="flex-1 text-base">
//                   <p className="text-gray-800 font-semibold">{item.docData.name}</p>
//                   <p className="text-gray-600">{slotDateFormat(item.slotDate)}</p>
//                 </div>
//                 {item.cancelled ? (
//                   <p className="text-red-500 font-semibold text-xs">Cancelled</p>
//                 ) : (
//                   <img
//                     onClick={() => cancelAppointment(item._id)}
//                     className="w-10 cursor-pointer hover:opacity-70 transition"
//                     src={assets.cancel_icon}
//                     alt="Cancel Appointment"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   )
// }

// export default Dashboard

// import React from 'react'
// import { useContext } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { useEffect } from 'react'
// import { assets } from '../../assets/assets'
// import { AppContext } from '../../context/AppContext'

// const Dashboard = () => {

//   const {atoken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)

//   const {slotDateFormat} = useContext(AppContext)

//   useEffect( () => {

//     if(atoken) {
//       getDashData()
//     }

//   },[atoken])

//   return dashData && (
//     <div className='m-5'>

//     <div className='flex flex-wrap gap-3'>

// <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//   <img className='w-14' src={assets.doctor_icon} alt="" />
//   <div>
//     <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
//     <p className='text-gray-400 '>Doctors</p>
//   </div>
// </div>

// <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//   <img className='w-14' src={assets.appointments_icon} alt="" />
//   <div>
//     <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
//     <p className='text-gray-400 '>Appointments</p>
//   </div>
// </div>

// <div  className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//   <img className='w-14' src={assets.patients_icon} alt="" />
//   <div>
//     <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
//     <p className='text-gray-400 '>Patients</p>
//   </div>
// </div>

//     </div>

// <div className='bg-white'>

//   <div className='flex items-center gap-2.5 px-4 py-4 mt-10 roundedd-t border'>
//     <img src={assets.list_icon} alt="" />
//     <p className='font-semibold'>Latest Appointments</p>
//   </div>

//   <div className='pt-4 border border-t-0'>
//     {
//       dashData.latestAppointments.map((item,index)=>(
//         <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100 ' key={index}>
//           <img className='rounded-full w-10 ' src={item.docData.image} alt="" />
//           <div className='flex-1 text-sm'>
//             <p className='text-gray-800 font-medium'>{item.docData.name}</p>
//             <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
//           </div>
//           {
//             item.cancelled
//             ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
//             : <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
//           }
//         </div>
//       ))
//     }
//   </div>

// </div>

//     </div>
//   )
// }

// export default Dashboard
