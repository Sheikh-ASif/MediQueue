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




