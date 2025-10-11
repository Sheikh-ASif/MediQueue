import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RelatedDocters = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-indigo-900 md:mx-10 px-4">
      <h1 className="text-3xl font-semibold">Our Top-Rated Specialists</h1>
      <p className="sm:w-1/3 text-center text-sm text-indigo-700/80">
        Connect with reputable doctors for reliable medical care
      </p>
      <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-5 pt-5 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="bg-white border border-indigo-200 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            key={index}
          >
            <img className="bg-indigo-50" src={item.image} alt={item.name} />
            <div className="p-4">
              <div
                className={`inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1 ${
                  item.available ? "text-green-700 bg-green-100" : "text-red-600 bg-red-100"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-600" : "bg-gray-500"
                  }`}
                ></span>
                {item.available ? "Available" : "Not Available"}
              </div>

              <p className="text-indigo-900 text-lg font-medium mt-2">{item.name}</p>
              <p className="text-indigo-700 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/docters");
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] text-white px-12 py-3 rounded-full mt-10 shadow-lg hover:brightness-110 transition cursor-pointer"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDocters;
