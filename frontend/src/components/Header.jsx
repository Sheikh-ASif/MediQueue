import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

// ✅ Static data (moved outside to prevent re-creation)
const cyclingTexts = ["Trusted Doctors", "Specialists", "Care Experts"];
const doctorsList = [
  "Dr. Sneha Nair - Neurologist",
  "Dr. Rajesh Kumar - General Physician",
  "Dr. Anjali Singh - Dermatologist",
  "Dr. Rahul Patil - Pediatrician",
];

const Header = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) =>
        prev === cyclingTexts.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
      if (value.trim() === "") {
        setSearchResults([]);
        return;
      }
      const filtered = doctorsList.filter((doctor) =>
        doctor.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    }, 300);
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchResults([]);
  };

  
  const [showTooltip, setShowTooltip] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLiveChatClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="relative w-full min-h-[630px] flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#e9fafe] via-[#e4ebfc] to-[#e3f9fe] px-8 md:px-16 lg:px-24 pt-40 pb-16 shadow-inner">
      
      <div className="md:w-1/2 flex flex-col items-start justify-center space-y-8 relative">
      
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Book Appointments <br />
          with{" "}
          <span
            key={cyclingTexts[currentTextIndex]}
            className="inline-block transition-opacity duration-1000"
          >
            {cyclingTexts[currentTextIndex]}
          </span>
        </h1>

       
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={assets.group_profiles}
            alt="group of doctors"
            className="w-40 h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            title={doctorsList.join(", ")}
          />
          <p className="text-lg text-[#4e5d77] max-w-md text-center sm:text-left">
            Your health matters. Browse trusted specialists and book your
            appointment effortlessly — anytime, anywhere.
          </p>
        </div>

     
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
          />
          {searchInput && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-lg"
            >
              ×
            </button>
          )}
          {searchResults.length > 0 && (
            <ul className="mt-1 max-h-48 overflow-auto border border-gray-300 rounded-lg bg-white shadow-md text-gray-700 text-sm">
              {searchResults.map((result, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => alert(`Selected: ${result}`)}
                >
                  {result}
                </li>
              ))}
            </ul>
          )}
          {searchInput.trim() !== "" && searchResults.length === 0 && (
            <p className="text-red-600 mt-1 text-sm">No doctors found.</p>
          )}
        </div>

        
        <a
          href="#speciality"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 relative"
        >
          Book Appointment
          <img className="w-5" src={assets.arrow_icon} alt="arrow" />
          {showTooltip && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded bg-purple-700 text-white text-sm whitespace-nowrap shadow-lg z-20 pointer-events-none">
              Click to schedule your visit
            </div>
          )}
        </a>
      </div>

      
      <div className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0 relative">
        <img
          className="w-full max-w-lg rounded-3xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
          src={assets.header_img}
          alt="doctor"
        />

       
        <button
          onClick={handleLiveChatClick}
          className={`fixed right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${
            showToast ? "bottom-24 bg-blue-700" : "bottom-8 bg-blue-600"
          }`}
          aria-label="Live chat"
          title="Live Chat Support"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-7l-4 4v-4H7a2 2 0 01-2-2v-2"
            />
          </svg>
        </button>
      </div>

     
      {showToast && (
        <div className="fixed bottom-8 right-28 z-50 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fadeInOut">
          <span>💬 Live chat is currently offline. Please try later.</span>
          <button
            onClick={() => setShowToast(false)}
            className="text-white font-bold hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

     
      <style>{`
        @keyframes fadeInOut {
          0%, 100% {opacity: 0; transform: translateY(10px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInOut {
          animation: fadeInOut 5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;



