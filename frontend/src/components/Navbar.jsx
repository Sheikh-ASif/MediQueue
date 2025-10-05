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
    navigate("/login")
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 border-b bg-white shadow-sm sticky top-0 z-30">
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer hover:opacity-90 transition"
        src={assets.logo}
        alt="MediQueue Logo"
      />

      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        {[
          { name: "HOME", path: "/" },
          { name: "ALL DOCTORS", path: "/docters" },
          { name: "ABOUT", path: "/about" },
          { name: "CONTACT", path: "/contact" },
        ].map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative py-1 px-2 transition duration-300 ${
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <li>{link.name}</li>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <div className="relative">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                className="w-9 h-9 rounded-full border-2 border-gray-200 shadow-sm"
                src={userData.image}
                alt="profile"
              />
              <img
                className="w-3 transition-transform group-hover:rotate-180"
                src={assets.dropdown_icon}
                alt="dropdown"
              />

              <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-right">
                <div className="flex flex-col gap-2 py-3 px-4 text-gray-600 text-sm font-medium">
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-lg cursor-pointer transition"
                  >
                    👤 My Profile
                  </p>
                  <p
                    onClick={() => navigate("my-appointments")}
                    className="hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-lg cursor-pointer transition"
                  >
                    📅 My Appointments
                  </p>
                  <p
                    onClick={logout}
                    className="hover:bg-red-50 hover:text-red-600 px-3 py-2 rounded-lg cursor-pointer transition"
                  >
                    🚪 Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hidden md:block hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <img className="w-32" src={assets.logo} alt="logo" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-start gap-4 mt-6 px-6 text-lg font-medium text-gray-700">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/docters"
            className="hover:text-blue-600 transition"
          >
            All Doctors
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
