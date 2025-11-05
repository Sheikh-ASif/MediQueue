import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
import { LogOut } from "lucide-react"; 

const Navbar = () => {
  const { atoken, setAtoken } = useContext(AdminContext);
  const { dtoken, setDtoken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    if (atoken) {
      setAtoken("");
      localStorage.removeItem("atoken");
    }
    if (dtoken) {
      setDtoken("");
      localStorage.removeItem("dtoken");
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 sm:px-12 py-4 bg-gradient-to-r from-white via-indigo-50 to-white backdrop-blur-lg shadow-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      {/* Left: Logo and Role */}
      <div className="flex items-center gap-4">
        <img
          src={assets.admin_logo}
          alt="Admin Logo"
          className="w-32 sm:w-40 cursor-pointer hover:brightness-110 transition-all duration-300"
          onClick={() => navigate("/")}
        />
        <span className="text-sm sm:text-base font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shadow-sm">
          {atoken ? "Admin" : "Doctor"}
        </span>
      </div>

      {/* Right: Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-indigo-600 text-white font-medium px-5 sm:px-8 py-2 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
      >
        <LogOut size={18} className="hidden sm:block" />
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
