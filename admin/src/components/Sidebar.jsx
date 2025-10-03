import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {
  const { atoken } = useContext(AdminContext)
  const { dtoken } = useContext(DoctorContext)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8faff] border-r shadow-md">
      {atoken && 
        <ul className="text-[#4a4a4a] mt-8 space-y-2 px-3">
          
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.home_icon}
              alt="Dashboard"
            />
            <p className="text-sm">Dashboard</p>
          </NavLink>

          
          <NavLink
            to="/all-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <p className="text-sm">Appointments</p>
          </NavLink>

         
          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.add_icon}
              alt="Add Doctor"
            />
            <p className="text-sm">Add Doctor</p>
          </NavLink>

         
          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.people_icon}
              alt="Doctors List"
            />
            <p className="text-sm">Doctors List</p>
          </NavLink>
        </ul>
      }

      {dtoken && 
        <ul className="text-[#4a4a4a] mt-8 space-y-2 px-3">
          
          <NavLink
            to="/doctor-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.home_icon}
              alt="Dashboard"
            />
            <p className="text-sm">Dashboard</p>
          </NavLink>

          
          <NavLink
            to="/doctor-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.appointment_icon}
              alt="Appointments"
            />
            <p className="text-sm">Appointments</p>
          </NavLink>
         
          <NavLink
            to="/doctor-profile"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-8 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary text-primary font-semibold shadow-sm'
                  : 'hover:bg-gray-100 hover:shadow-sm'
              }`
            }
          >
            <img
              className="w-5 h-5 opacity-70 group-hover:scale-110 transition-transform"
              src={assets.people_icon}
              alt="Doctors List"
            />
            <p className="text-sm">Profile</p>
          </NavLink>
        </ul>
      }
      
    </div>
  )
  
}

export default Sidebar
