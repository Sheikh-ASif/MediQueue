import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16 px-6 md:px-12 text-indigo-900 bg-gradient-to-b from-white via-[#ebf0ff] to-white pb-5"
      id="speciality"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center relative tracking-tight">
        Find By{" "}
        <span className="text-[#4f46e5]">Speciality</span>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185]" />
      </h1>

      {/* Subtext */}
      <p className="max-w-xl text-center text-sm md:text-base text-indigo-700/80">
        Connect with trusted medical experts and schedule appointments
        effortlessly.
      </p>

      {/* Speciality Cards */}
      <div className="flex sm:justify-center gap-8 pt-10 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/docters/${item.speciality}`}
            className="flex flex-col items-center bg-white rounded-3xl p-6 cursor-pointer flex-shrink-0 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 snap-center"
          >
            <img
              className="w-20 sm:w-24 mb-4 object-contain"
              src={item.image}
              alt={item.speciality}
              loading="lazy"
            />
            <p className="text-base md:text-lg font-semibold text-indigo-900">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
