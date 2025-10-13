import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from 'react-router-dom'

const NUM_RECENT = 5;

const cardConfig = [
  {
    key: "recent",
    label: "Recent Appointments",
    color: "from-purple-400 to-purple-700",
    icon: "📅",
    getCount: (appointments) => appointments.filter(item => !item.isCompleted && !item.cancelled).slice(-NUM_RECENT).length,
  },
  {
    key: "pending",
    label: "Pending",
    color: "from-yellow-400 to-yellow-600",
    icon: "⏳",
    getCount: (appointments) => appointments.filter(item => !item.cancelled && !item.isCompleted).length,
  },
  {
    key: "completed",
    label: "Completed",
    color: "from-green-400 to-green-700",
    icon: "✅",
    getCount: (appointments) => appointments.filter(item => item.isCompleted && !item.cancelled).length,
  },
  {
    key: "rejected",
    label: "Rejected",
    color: "from-red-400 to-red-600",
    icon: "❌",
    getCount: (appointments) => appointments.filter(item => item.cancelled).length,
  },
];

const AllApointments = () => {
  const { atoken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);
  const navigate = useNavigate()

  const [filter, setFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (atoken) getAllAppointments();
  }, [atoken, getAllAppointments]);

  // Base filter logic for cards
  let baseAppointments;
  if (filter === "recent") {
    baseAppointments = appointments
      .filter(item => !item.isCompleted && !item.cancelled)
      .slice(-NUM_RECENT)
      .reverse();
  } else if (filter === "pending") {
    baseAppointments = appointments.filter(item => !item.cancelled && !item.isCompleted);
  } else if (filter === "completed") {
    baseAppointments = appointments.filter(item => item.isCompleted && !item.cancelled);
  } else if (filter === "rejected") {
    baseAppointments = appointments.filter(item => item.cancelled);
  } else {
    baseAppointments = appointments;
  }

  // Search logic: case-insensitive match on patient name, doctor name, slot time or slot date
  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setSearchResults(null);
      return;
    }
    const results = baseAppointments.filter(item =>
      (item.userData.name && item.userData.name.toLowerCase().includes(term)) ||
      (item.docData.name && item.docData.name.toLowerCase().includes(term)) ||
      (item.slotTime && item.slotTime.toLowerCase().includes(term)) ||
      (item.slotDate && slotDateFormat(item.slotDate).toLowerCase().includes(term))
    );
    setSearchResults(results.length ? results : []);
  };

  const appointmentsToRender = searchResults !== null ? searchResults : baseAppointments;

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-2">
      {/* PAGE HEADING */}
      <div className="mb-8 flex items-center gap-4">
        <span className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl text-3xl">📖</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Appointments Dashboard</h1>
          <p className="text-gray-600 text-base">Manage all appointments efficiently.</p>
        </div>
      </div>

      {/* TOP ACTIONS */}
      <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
        <div className="flex gap-3">
          <button className="bg-blue-50 text-blue-700 px-4 py-2 font-semibold rounded-lg shadow hover:bg-blue-100" onClick={()=> navigate('/analytics')}>Show Analytics</button>
          <button className="bg-green-50 text-green-700 px-4 py-2 font-semibold rounded-lg shadow hover:bg-green-100" onClick={()=> navigate('/summary-report')}>Summary Report</button>
          <button className="bg-purple-50 text-purple-700 px-4 py-2 font-semibold rounded-lg shadow hover:bg-purple-100" onClick={()=> navigate('/date-filter')}>Date Filter</button>
          <button className="bg-pink-50 text-pink-700 px-4 py-2 font-semibold rounded-lg shadow hover:bg-pink-100" onClick={()=> navigate('/export-data')}>Export Data</button>
        </div>
        <div className="flex gap-2 items-center">
          <select
            className="bg-white border px-3 py-2 rounded-lg"
            value={filter || ""}
            onChange={e => {
              setFilter(e.target.value || null);
              setSearchResults(null); // Reset search on filter change
            }}
          >
            <option value="">All Statuses</option>
            <option value="recent">Recent Appointments</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
          <input
            className="border px-3 py-2 rounded-lg"
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search appointments..."
          />
          <button
            className="bg-blue-600 text-white px-5 py-2 font-medium rounded-lg shadow hover:bg-blue-700 transition"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="flex flex-wrap gap-8 mb-10">
        {cardConfig.map(({ key, label, color, icon, getCount }) => (
          <div
            key={key}
            onClick={() => { setFilter(key); setSearchResults(null); }}
            className={`flex flex-col justify-between min-w-[220px] max-w-[270px] h-32 rounded-xl p-6 bg-gradient-to-r ${color} text-white shadow-lg cursor-pointer transition hover:scale-105 relative`}
            style={{ border: filter === key ? "3px solid #fff" : undefined }}
            title={label}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{icon}</span>
              <span className="font-bold text-lg">{label}</span>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-extrabold">{getCount(appointments)}</span>
              <span className="ml-2 text-sm opacity-80">Click to view</span>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT APPOINTMENT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {appointmentsToRender.length === 0 ? (
          <div className="col-span-full mx-auto text-xl text-gray-400 font-bold py-16">
            Not Found!
          </div>
        ) : (
          appointmentsToRender.map((item, index) => (
            <div className="bg-white rounded-xl border shadow-lg flex flex-col p-6 transition hover:shadow-2xl hover:border-blue-400 relative" key={item._id} style={{ minHeight: "170px" }}>
              {/* Top row: Patient + Doctor + Age */}
              <div className="flex items-center gap-3 mb-4">
                <img src={item.userData.image} alt="Patient" className="w-9 h-9 rounded-full border shadow" />
                <span className="font-semibold text-gray-900">{item.userData.name}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-lg font-medium ml-auto">Age: {calculateAge(item.userData.dob)}</span>
              </div>
              {/* Doctor & Date */}
              <div className="flex items-center gap-3 mb-2">
                <img src={item.docData.image} alt="Doctor" className="w-7 h-7 rounded-full border shadow" />
                <span className="text-gray-800 font-medium">{item.docData.name}</span>
                <span className="ml-auto bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-semibold">
                  {slotDateFormat(item.slotDate)}, {item.slotTime}
                </span>
              </div>
              {/* Status & Fee */}
              <div className="flex gap-3 items-center mt-2">
                <span className="font-semibold text-green-700">{currency}{item.amount}</span>
                {item.cancelled ? (
                  <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200 ml-auto">Rejected</span>
                ) : item.isCompleted ? (
                  <span className="text-green-500 px-2 py-1 bg-green-50 font-semibold rounded ml-auto">Completed</span>
                ) : (
                  <button title="Cancel appointment" className="ml-auto">
                    <span className="text-xl text-red-500 hover:opacity-80 cursor-pointer"
                      onClick={() => cancelAppointment(item._id)}
                    >❌</span>
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* QUICK ACTIONS */}
      <div className="flex flex-wrap gap-6 justify-end">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-100 text-red-700 font-medium shadow hover:bg-red-200">
          <span className="text-lg">⚠️</span> Urgent Appointments
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-100 text-green-700 font-medium shadow hover:bg-green-200">
          <span className="text-lg">✔️</span> Resolved Today
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium shadow hover:bg-blue-200">
          <span className="text-lg">📤</span> Export Report
        </button>
      </div>
    </div>
  );
};

export default AllApointments;










// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";

// const AllApointments = () => {
//   const { atoken, appointments, getAllAppointments, cancelAppointment } =
//     useContext(AdminContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (atoken) {
//       getAllAppointments();
//     }
//   }, [atoken, getAllAppointments]);

//   return (
//     <div className="w-full max-w-6xl mx-auto my-8">
//       <p className="mb-5 text-2xl font-bold text-gray-800 tracking-tight">
//         All Appointments
//       </p>
//       <div className="bg-white border border-gray-200 rounded-xl shadow-lg text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto">
//         <div className="hidden sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] py-4 px-8 border-b bg-gray-100 text-gray-700 font-semibold uppercase tracking-wider text-xs">
//           <span>S.no</span>
//           <span>Patient</span>
//           <span>Age</span>
//           <span>Date & Time</span>
//           <span>Doctor</span>
//           <span>Fees</span>
//           <span>Action</span>
//         </div>
//         {appointments.map((item, index) => (
//           <div
//             key={index}
//             className="sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] items-center py-4 px-8
//                      bg-white border-b transition-colors
//                      hover:bg-blue-50 hover:shadow-md flex flex-wrap max-sm:gap-4"
//             style={{ minHeight: "62px" }}
//           >
//             {/* Serial Number */}
//             <span className="max-sm:hidden text-center text-base font-bold text-gray-500">
//               {index + 1}
//             </span>
//             {/* Patient */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={item.userData.image}
//                 alt="Patient"
//                 className="w-10 h-10 rounded-full border border-gray-200 shadow"
//               />
//               <span className="font-medium text-gray-900 text-base">
//                 {item.userData.name}
//               </span>
//             </div>
//             {/* Age */}
//             <span className="max-sm:hidden text-center text-gray-600 font-medium">
//               {calculateAge(item.userData.dob)}
//             </span>
//             {/* Date & Time */}
//             <p className="max-sm:hidden truncate text-gray-700 font-medium">
//               {slotDateFormat(item.slotDate)},{" "}
//               <span className="text-gray-500">{item.slotTime}</span>
//             </p>
//             {/* Doctor */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={item.docData.image}
//                 alt="Doctor"
//                 className="w-10 h-10 rounded-full border border-gray-200 bg-gray-100 shadow"
//               />
//               <span className="font-medium text-gray-900 text-base">
//                 {item.docData.name}
//               </span>
//             </div>
//             {/* Fees */}
//             <p className="text-center font-semibold text-green-600">
//               {currency}
//               {item.amount}
//             </p>
//             {/* Action */}
//             <div className="flex items-center justify-center">
//               {item.cancelled ? (
//                 <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200">
//                   Cancelled
//                 </span>
//               ) : item.isCompleted ? (
//                 <p className="text-green-500 text-xs font-medium"> Completed</p>
//               ) : (
//                 <button title="Cancel appointment">
//                   <img
//                     onClick={() => cancelAppointment(item._id)}
//                     className="w-8 h-8 p-1 rounded hover:bg-red-100 transition"
//                     src={assets.cancel_icon}
//                     alt="Cancel"
//                   />
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
