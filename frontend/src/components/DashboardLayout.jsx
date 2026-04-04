import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, User, Calendar, Stethoscope, Bell, Search } from "lucide-react";
import { assets } from "../assets/assets";


// Example doctors data (replace with backend fetch if needed)
const doctors = [
  { _id: 1, name: "Dr. Sneha Nair", speciality: "Neurologist" },
  { _id: 2, name: "Dr. Rizwan Abbas", speciality: "Pediatrician" },
  { _id: 3, name: "Dr. Ubaid Rehman", speciality: "Gynecologist" },
  { _id: 4, name: "Dr. Sadaf Aziz", speciality: "Gastroenterologist" },
];

const DashboardLayout = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter doctors by name or speciality for search dropdown
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="pt-25 w-full md:w-64 bg-blue-600 text-white flex flex-col p-6">
        <div className="text-3xl font-extrabold mb-10">MediQueue</div>
        <nav className="flex flex-col gap-5 text-lg">
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <Home size={22} /> Home
          </Link>
          <Link
            to="/docters"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <Stethoscope size={22} /> Doctors
          </Link>
          <Link
            to="/my-appointments"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <Calendar size={22} /> Appointments
          </Link>
          <Link
            to="/my-profile"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 transition"
          >
            <User size={22} /> My Profile
          </Link>
        </nav>
      </aside>

      {/* Main Panel */}
      <div className="pt-15 flex-1 flex flex-col">
        {/* Header with Search and Bell Icon */}
        <header className="sticky top-0 z-20 bg-white shadow flex items-center justify-between px-6 py-4">
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Search size={18} className="text-gray-500 mr-3" />
              <input
                type="search"
                placeholder="Search doctors or specialities..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate("/docters");
                    setQuery("");
                  }
                }}
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filtered results dropdown */}
            {query && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden z-50 max-h-60 overflow-y-auto">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc) => (
                    <div
                      key={doc._id}
                      onClick={() => {
                        navigate(`/docters/${doc._id}`);
                        setQuery("");
                      }}
                      className="flex justify-between items-center px-4 py-3 hover:bg-blue-50 cursor-pointer transition"
                    >
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {doc.speciality}
                        </p>
                      </div>
                      <span className="text-blue-500 text-sm font-semibold">
                        Book →
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">
                    No doctors or specialities found.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bell Icon Only */}
          <div className="flex items-center gap-6 relative">
            <button
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
              title="Notifications"
              type="button"
              disabled
            >
              <Bell size={24} />
            </button>

            {/* <img
              src={assets.profile_pic}
              alt="User profile"
              className="w-10 h-10 rounded-full border cursor-pointer"
              title="User Profile"
            /> */}
            
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

