import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, User, Calendar, Stethoscope, Bell, Search } from "lucide-react";
import { assets } from "../assets/assets";

// Example doctors data (you can replace this with your backend data later)
const doctors = [
  { _id: 1, name: "Dr. John Smith", speciality: "Cardiologist" },
  { _id: 2, name: "Dr. Emily Johnson", speciality: "Dermatologist" },
  { _id: 3, name: "Dr. Sarah Lee", speciality: "Neurologist" },
  { _id: 4, name: "Dr. Michael Brown", speciality: "Pediatrician" },
];

const DashboardLayout = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter doctors by name OR speciality
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col p-5">
        <div className="text-2xl font-bold mb-10">MediQueue</div>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <Home size={20} /> Home
          </Link>
          <Link
            to="/docters"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <Stethoscope size={20} /> Doctors
          </Link>
          <Link
            to="/my-appointments"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <Calendar size={20} /> Appointments
          </Link>
          <Link
            to="/my-profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 transition"
          >
            <User size={20} /> My Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-10 bg-white shadow flex items-center justify-between px-6 py-3">
          {/* Search bar */}
          <div className="relative w-1/2">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search doctors or specialities..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredDoctors.length > 0) {
                    navigate(`/appointment/${filteredDoctors[0]._id}`);
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

            {/* Dropdown Results */}
            {query && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden z-50">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc) => (
                    <div
                      key={doc._id}
                      onClick={() => {
                        navigate(`/appointment/${doc._id}`);
                        setQuery("");
                      }}
                      className="flex justify-between items-center px-4 py-3 hover:bg-blue-50 cursor-pointer transition"
                    >
                      <div>
                        <p className="text-gray-800 font-medium">{doc.name}</p>
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

          {/* Notifications + User */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full cursor-pointer"></span>
            </button>
            <img
              src={assets.profile_pic}
              alt="profile"
              className="w-9 h-9 rounded-full border"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
