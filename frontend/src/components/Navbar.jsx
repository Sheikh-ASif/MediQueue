import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const links = token
    ? [
        { name: "Home", path: "/" },
        { name: "Doctors", path: "/docters" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ];

  return (
    <nav className="backdrop-blur-md bg-white/60 border-b border-white/30 shadow-md fixed top-0 w-full z-30 flex items-center justify-between px-6 py-3">
      {/* Brand */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-extrabold text-[#4f46e5] tracking-wide cursor-pointer select-none"
      >
        🏨 MediQueue
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4f46e5] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[#4f46e5] after:w-full" : "hover:text-[#4f46e5]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <img
                className="w-9 h-9 rounded-full border border-[#4f46e5]/30 shadow-sm"
                src={userData.image}
                alt="profile"
              />
              <img
                className="w-3 transition-transform duration-300 group-hover:rotate-180"
                src={assets.dropdown_icon}
                alt="dropdown"
              />
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 top-12 w-56 bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-right">
              <div className="flex flex-col py-3 text-gray-700 font-medium">
                <p
                  onClick={() => navigate("my-profile")}
                  className="px-4 py-2 hover:bg-[#eef2ff] hover:text-[#4f46e5] transition cursor-pointer"
                >
                  👤 My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="px-4 py-2 hover:bg-[#eef2ff] hover:text-[#4f46e5] transition cursor-pointer"
                >
                  📅 My Appointments
                </p>
                <p
                  onClick={logout}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 transition cursor-pointer"
                >
                  🚪 Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all cursor-pointer"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-7 md:hidden cursor-pointer invert brightness-0"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-lg text-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-gray-200/50">
          <h1 className="text-xl font-bold text-[#4f46e5]">MediQueue</h1>
          <img
            className="w-8 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <ul className="flex flex-col items-start gap-5 mt-7 px-6 text-lg font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.name}
              onClick={() => setShowMenu(false)}
              to={link.path}
              className="hover:text-[#4f46e5] transition-all duration-200 w-full"
            >
              {link.name}
            </NavLink>
          ))}
          {!token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
              className="mt-5 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white px-6 py-2 rounded-full font-bold w-full shadow-md hover:opacity-90 transition-all cursor-pointer"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
