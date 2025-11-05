import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { atoken } = useContext(AdminContext);
  const { dtoken } = useContext(DoctorContext);

  const baseLinkStyle =
    "flex items-center gap-3 py-3 px-4 md:px-7 rounded-lg transition-all duration-200 group";
  const iconStyle =
    "w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc] border-r border-gray-200 shadow-sm flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-600 px-6 mt-8 mb-6">
        MediQueue
      </div>

      {/* Admin Sidebar */}
      {atoken && (
        <ul className="space-y-1 px-2 text-[1rem] font-medium text-gray-700">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img className={iconStyle} src={assets.home_icon} alt="Dashboard" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/all-appointments"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <span>Appointments</span>
          </NavLink>

          <NavLink
            to="/admin-users"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
              src={assets.people_icon}
              alt="Users"
            />
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
              src={assets.people_icon}
              alt="Doctors List"
            />
            <span>Doctors List</span>
          </NavLink>

          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
              src={assets.add_icon}
              alt="Add Doctor"
            />
            <span>Add Doctor</span>
          </NavLink>
        </ul>
      )}

      {/* Doctor Sidebar */}
      {dtoken && (
        <ul className="space-y-1 px-2 text-[1rem] font-medium text-gray-700">
          <NavLink
            to="/doctor-dashboard"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img className={iconStyle} src={assets.home_icon} alt="Dashboard" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/doctor-appointments"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <span>Appointments</span>
          </NavLink>

          <NavLink
            to="/doctor-profile"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-400 shadow-sm"
                  : "hover:bg-gray-50 hover:translate-x-[2px]"
              }`
            }
          >
            <img
              className={iconStyle}
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
