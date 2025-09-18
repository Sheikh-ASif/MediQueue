import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { atoken, setAtoken } = useContext(AdminContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    atoken && setAtoken('')
    atoken && localStorage.removeItem('atoken')
  }

  return (
    <div className="flex justify-between items-center px-6 sm:px-12 py-4 border-b bg-white shadow-sm">
    
      <div className="flex items-center gap-3 text-xs sm:text-sm">
        <img
          className="w-32 sm:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
          src={assets.admin_logo}
          alt="Admin Logo"
        />
        <p className="border px-3 py-1 rounded-full border-gray-400 text-gray-700 font-medium shadow-sm cursor-pointer hover:bg-gray-100 transition-colors duration-300">
          {atoken ? 'Admin' : 'Doctor'}
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-primary text-white text-sm sm:text-base font-medium px-6 sm:px-10 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
