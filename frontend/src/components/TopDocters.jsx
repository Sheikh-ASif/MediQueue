import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDocters = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10 px-4">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center relative">
        Our <span className="text-blue-600">Top-Rated</span> Specialists
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-center text-sm md:text-base text-gray-600">
        Connect with reputable doctors for reliable medical care and trusted
        expertise.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6 pt-8">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              className="w-full h-52 object-cover object-top bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4 space-y-2">
              {/* Availability */}
              <div
                className={`inline-flex items-center gap-2 text-xs font-medium ${
                  item.available ? " text-green-600" : "text-red-500"
                } bg-green-100 px-3 py-1 rounded-full`}
              >
                <span
                  className={`w-2 h-2 ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }  rounded-full`}
                ></span>
                {item.available ? "Available" : "Not Available"}
              </div>

              {/* Name */}
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>

              {/* Speciality */}
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => {
          navigate("/docters");
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-3 rounded-full mt-10 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        View More Doctors
      </button>
    </div>
  );
};

export default TopDocters;

