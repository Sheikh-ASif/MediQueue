
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
    { name: "General Physician", icon: "🩺" },
    { name: "Gynecologist", icon: "👩‍⚕️" },
    { name: "Dermatologist", icon: "💊" },
    { name: "Pediatrician", icon: "🧒" },
    { name: "Neurologist", icon: "🧠" },
    { name: "Gastroenterologist", icon: "🍽️" },
  ];

  return (
    <div className="py-6">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold text-gray-800">
        Explore Trusted Medical Specialties
      </h2>
      <p className="text-gray-600 mt-1 text-sm">
        Choose from a wide range of experienced doctors
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6 mt-8">
        {/* Filter Button for Mobile */}
        <button
          className={`py-2 px-4 border rounded-lg text-sm font-medium transition-all sm:hidden shadow-sm ${
            showFilter ? "bg-blue-600 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters (Icon + Text Nav) */}
        <div
          className={`flex flex-col gap-3 text-sm font-medium ${
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all duration-200 cursor-pointer
                ${
                  speciality === spec.name
                    ? "bg-blue-600 text-white shadow-md border-blue-600"
                    : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-gray-200"
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
              className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer bg-white shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                className="w-full h-48 object-cover object-top bg-blue-50"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4 space-y-2">
                {/* Availability */}
                <div className="flex items-center gap-2 text-xs font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Available</span>
                </div>
                {/* Name */}
                <p className="text-gray-900 text-lg font-semibold">
                  {item.name}
                </p>
                {/* Speciality */}
                <p className="text-gray-600 text-sm">{item.speciality}</p>
                {/* CTA */}
                <button
                  className="mt-3 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
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
