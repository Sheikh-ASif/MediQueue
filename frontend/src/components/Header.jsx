import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const doctorsList = [
  "Dr. Sneha Nair - Neurologist",
  "Dr. Rajesh Kumar - General Physician",
  "Dr. Anjali Singh - Dermatologist",
  "Dr. Rahul Patil - Pediatrician",
];

const Header = () => {
  // State for cycling dynamic headline text
  const cyclingTexts = ["Trusted Doctors", "Specialists", "Care Experts"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cycle the headline text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) =>
        prev === cyclingTexts.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cyclingTexts.length]);

  // Search input and results state
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filtered = doctorsList.filter((doctor) =>
      doctor.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
  };

  // Dummy function for booking button tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  // Toast notification state for live chat
  const [showToast, setShowToast] = useState(false);

  const handleLiveChatClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="relative w-full min-h-[630px] flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#e9fafe] via-[#e4ebfc] to-[#e3f9fe] px-8 md:px-16 lg:px-24 pt-50 pb-10 md:pb-20 shadow-inner">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent leading-tight drop-shadow-lg">
          Book Appointments <br /> with{" "}
          <span
            key={cyclingTexts[currentTextIndex]}
            className="inline-block transition-opacity duration-1000"
          >
            {cyclingTexts[currentTextIndex]}
          </span>
        </h1>

        {/* Group profile image */}
        <div className="flex items-center gap-6">
          <img
            src={assets.group_profiles}
            alt="group of doctors"
            className="w-40 h-auto rounded-lg shadow-lg cursor-pointer"
            title={doctorsList.join(", ")}
          />
          <p className="text-lg text-[#4e5d77] max-w-md">
            Your health matters. Browse our trusted doctors and schedule
            appointments effortlessly.
          </p>
        </div>

        {/* Doctor Search Input */}
        <div className="w-full max-w-md mt-2 mb-6">
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
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

        {/* Book Appointment Button with animated pulse and tooltip */}
        <a
          href="#speciality"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:brightness-110 transition relative animate-pulse"
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

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0 relative">
        <img
          className="w-full max-w-lg rounded-3xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
          src={assets.header_img}
          alt="doctor"
        />

        {/* Floating Live Chat Bubble */}
        <button
          onClick={handleLiveChatClick}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition"
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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 right-8 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          Live chat support is currently offline. Please try again later.
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0%, 100% {opacity: 0; transform: translateY(10px);}
          10%, 90% {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;


// import React from "react";
// import { assets } from "../assets/assets";

// const Header = () => (
//   <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl px-10 lg:px-20 py-14 mt-10 bg-gradient-to-br from-[#eaf6ff] via-[#dbeafc] to-[#e4f0fb] overflow-hidden">
//     {/* Left Side */}
//     <div className="md:w-1/2 flex flex-col gap-8 py-6 z-10">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-[#16345c] drop-shadow-md leading-tight mb-4">
//         Book Appointments<br />with Trusted Doctors
//       </h1>
//       <div className="flex items-center gap-5 bg-gradient-to-br from-[#eaf6ff] via-[#dbeafc] to-[#e4f0fb] rounded-2xl shadow-xl px-7 py-5 mb-3">
//         <img
//           src={assets.group_profiles}
//           alt="group"
//           className="w-16 h-16 rounded-full shadow"
//         />
//         <span className="text-base md:text-lg text-[#1952c4] font-medium">
//           Your health matters. Browse our trusted doctors and schedule appointments effortlessly.
//         </span>
//       </div>
//       <a
//         href="#speciality"
//         className="inline-flex items-center gap-2 bg-[#27c3b5] px-5 py-2 rounded-full text-white text-sm font-semibold shadow hover:bg-[#209b91] hover:scale-105 transition-all"
//       >
//         Book Appointment
//         <img className="w-4" src={assets.arrow_icon} alt="arrow" />
//       </a>
//     </div>
//     {/* Right Side */}
//     <div className="md:w-1/2 flex items-end justify-center mt-8 md:mt-0">
//       <img
//         className="w-full md:w-[90%] lg:w-[80%] rounded-2xl shadow-xl object-contain"
//         src={assets.header_img}
//         alt="doctor illustration"
//       />
//     </div>
//   </div>
// );

// export default Header;
