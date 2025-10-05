import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16 px-4 text-gray-800 bg-gradient-to-b from-white via-blue-50 to-white"
      id="speciality"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center relative">
        Find By <span className="text-blue-600">Speciality</span>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
      </h1>

      {/* Subtext */}
      <p className="max-w-xl text-center text-sm md:text-base text-gray-600">
        Connect with trusted medical experts and schedule appointments
        effortlessly.
      </p>

      {/* Speciality Cards */}
      <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/docters/${item.speciality}`}
            className="flex flex-col items-center bg-white shadow-md rounded-xl px-6 py-4 cursor-pointer flex-shrink-0 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-16 sm:w-24 mb-3 object-contain"
              src={item.image}
              alt={item.speciality}
            />
            <p className="text-sm md:text-base font-medium text-gray-700">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

