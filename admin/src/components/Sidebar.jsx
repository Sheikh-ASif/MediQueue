import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const activeGradient = "bg-gradient-to-r from-yellow-300 to-blue-400";
const linkGradient =
  "hover:bg-gradient-to-r hover:from-[#f3f4f6] hover:via-[#e0e7ff] hover:to-[#f8fafc]";

const Sidebar = () => {
  const { atoken } = useContext(AdminContext);
  const { dtoken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5faff] border-r border-indigo-100 shadow-md">
      {atoken && (
        <ul className="mt-8 space-y-2 px-3 text-[1rem] font-medium">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-yellow-400 text-yellow-700 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.home_icon}
              alt="Dashboard"
            />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/all-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-blue-400 text-blue-700 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <span>Appointments</span>
          </NavLink>
          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-green-400 text-green-700 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.add_icon}
              alt="Add Doctor"
            />
            <span>Add Doctor</span>
          </NavLink>
          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-red-400 text-red-600 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.people_icon}
              alt="Doctors List"
            />
            <span>Doctors List</span>
          </NavLink>
        </ul>
      )}

      {dtoken && (
        <ul className="mt-8 space-y-2 px-3 text-[1rem] font-medium">
          <NavLink
            to="/doctor-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-yellow-400 text-yellow-700 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.home_icon}
              alt="Dashboard"
            />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/doctor-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-blue-400 text-blue-700 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <span>Appointments</span>
          </NavLink>
          <NavLink
            to="/doctor-profile"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-7 rounded-xl shadow-sm transition-all duration-300 group ${
                isActive
                  ? `${activeGradient} border-l-4 border-pink-400 text-pink-600 font-bold`
                  : `${linkGradient} text-gray-700`
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-80 group-hover:scale-110 transition-transform"
              src={assets.people_icon}
              alt="Profile"
            />
            <span>Profile</span>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

// import React, { useContext } from "react";
// import { AdminContext } from "../context/AdminContext";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { DoctorContext } from "../context/DoctorContext";

// const Sidebar = () => {
//   const { atoken } = useContext(AdminContext);
//   const { dtoken } = useContext(DoctorContext);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-[#f8faff] border-r shadow-md">
//       {atoken && (
//         <ul className="text-[#4a4a4a] mt-8 space-y-2 px-3">
//           <NavLink
//             to="/admin-dashboard"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.home_icon}
//               alt="Dashboard"
//             />
//             <p className="hidden md:block text-sm">Dashboard</p>
//           </NavLink>

//           <NavLink
//             to="/all-appointments"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.appointment_icon}
//               alt="Appointments"
//             />
//             <p className="hidden md:block text-sm">Appointments</p>
//           </NavLink>

//           <NavLink
//             to="/add-doctor"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.add_icon}
//               alt="Add Doctor"
//             />
//             <p className="hidden md:block text-sm">Add Doctor</p>
//           </NavLink>

//           <NavLink
//             to="/doctor-list"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.people_icon}
//               alt="Doctors List"
//             />
//             <p className="hidden md:block text-sm">Doctors List</p>
//           </NavLink>
//         </ul>
//       )}

//       {dtoken && (
//         <ul className="text-[#4a4a4a] mt-8 space-y-2 px-3">
//           <NavLink
//             to="/doctor-dashboard"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.home_icon}
//               alt="Dashboard"
//             />
//             <p className="hidden md:block text-sm">Dashboard</p>
//           </NavLink>

//           <NavLink
//             to="/doctor-appointments"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.appointment_icon}
//               alt="Appointments"
//             />
//             <p className="hidden md:block text-sm">Appointments</p>
//           </NavLink>

//           <NavLink
//             to="/doctor-profile"
//             className={({ isActive }) =>
//               `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
//                 isActive
//                   ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm"
//                   : "hover:bg-gray-100 hover:shadow-sm"
//               }`
//             }
//           >
//             <img
//               className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
//               src={assets.people_icon}
//               alt="Doctors List"
//             />
//             <p className="hidden md:block text-sm">Profile</p>
//           </NavLink>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
