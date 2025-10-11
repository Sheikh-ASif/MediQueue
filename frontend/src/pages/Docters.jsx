import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Docters = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialties = [
    { name: "General physician", icon: "🩺" },
    { name: "Gynecologist", icon: "👩‍⚕️" },
    { name: "Dermatologist", icon: "💊" },
    { name: "Pediatrician", icon: "🧒" },
    { name: "Neurologist", icon: "🧠" },
    { name: "Gastroenterologist", icon: "🍽️" },
  ];

  return (
    <div className="py-6 px-6 bg-gradient-to-b from-white via-[#f0f4ff] to-white min-h-screen pt-20 pb-5">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold text-indigo-900 mb-1 text-center md:text-left">
        Explore Trusted Medical Specialties
      </h2>
      <p className="text-indigo-700 text-sm md:text-base mb-6 text-center md:text-left max-w-xl">
        Choose from a wide range of experienced doctors
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        {/* Filter Button for Mobile */}
        <button
          className={`py-2 px-4 rounded-lg text-sm font-medium transition-all sm:hidden shadow-sm ${
            showFilter
              ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg"
              : "bg-white text-indigo-700"
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters */}
        <div
          className={`flex flex-col gap-3 text-sm font-medium w-full max-w-xs ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {specialties.map((spec) => (
            <button
              key={spec.name}
              onClick={() =>
                speciality === spec.name
                  ? navigate("/docters")
                  : navigate(`/docters/${spec.name}`)
              }
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                speciality === spec.name
                  ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-md border-transparent"
                  : "bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:text-indigo-900"
              }`}
            >
              <span className="text-lg">{spec.icon}</span>
              {spec.name}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="bg-white border border-indigo-200 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                className="w-full h-48 object-cover object-top bg-indigo-50"
                src={item.image}
                alt={item.name}
              />
              <div className="p-5 space-y-2">
                {/* Availability */}
                <div
                  className={`inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 ${
                    item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? "bg-green-600" : "bg-red-500"
                    }`}
                  />
                  {item.available ? "Available" : "Not Available"}
                </div>

                {/* Name */}
                <p className="text-indigo-900 text-lg font-semibold">{item.name}</p>

                {/* Speciality */}
                <p className="text-indigo-700 text-sm">{item.speciality}</p>

                {/* CTA */}
                <button
                  className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] text-white text-sm font-medium hover:brightness-110 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/appointment/${item._id}`);
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docters;

