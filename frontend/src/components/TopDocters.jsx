import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDocters = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-indigo-900 md:mx-10 px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center relative">
        Our{" "}
        <span className="text-indigo-600">Top-Rated</span> Specialists
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] rounded-full" />
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-center text-sm md:text-base text-indigo-700/80">
        Connect with reputable doctors for reliable medical care and trusted expertise.
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
            className="bg-white border border-indigo-200 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              className="w-full h-52 object-cover object-top bg-indigo-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-5 space-y-2">
              
              {/* Availability + Experience */}
              <div className="flex items-center gap-3">
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

                {/* Experience Badge */}
                <div className="text-xs font-semibold rounded-full px-3 py-1 bg-blue-100 text-blue-700">
                  {item.experience} of exp
                </div>
              </div>

              {/* Name */}
              <p className="text-indigo-900 text-lg font-semibold">
                {item.name}
              </p>

              {/* Speciality */}
              <p className="text-indigo-600 text-sm">
                {item.speciality}
              </p>
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
        className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] text-white px-12 py-3 rounded-full mt-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
      >
        View More Doctors
      </button>
    </div>
  );
};

export default TopDocters;





// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const TopDocters = () => {
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   return (
//     <div className="flex flex-col items-center gap-6 my-20 text-indigo-900 md:mx-10 px-6">
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center relative">
//         Our{" "}
//         <span className="text-indigo-600">Top-Rated</span> Specialists
//         <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] rounded-full" />
//       </h1>

//       {/* Subtitle */}
//       <p className="max-w-xl text-center text-sm md:text-base text-indigo-700/80">
//         Connect with reputable doctors for reliable medical care and trusted expertise.
//       </p>

//       {/* Doctors Grid */}
//       <div className="w-full grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6 pt-8">
//         {doctors.slice(0, 10).map((item, index) => (
//           <div
//             onClick={() => {
//               navigate(`/appointment/${item._id}`);
//               scrollTo(0, 0);
//             }}
//             key={index}
//             className="bg-white border border-indigo-200 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
//           >
//             <img
//               className="w-full h-52 object-cover object-top bg-indigo-50"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="p-5 space-y-2">
//               {/* Availability */}
//               <div
//                 className={`inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 ${
//                   item.available
//                     ? "bg-green-100 text-green-700"
//                     : "bg-red-100 text-red-600"
//                 }`}
//               >
//                 <span
//                   className={`w-2 h-2 rounded-full ${
//                     item.available ? "bg-green-600" : "bg-red-500"
//                   }`}
//                 />
//                 {item.available ? "Available" : "Not Available"}
//               </div>

//               {/* Name */}
//               <p className="text-indigo-900 text-lg font-semibold">{item.name}</p>

//               {/* Speciality */}
//               <p className="text-indigo-600 text-sm">{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <button
//         onClick={() => {
//           navigate("/docters");
//           scrollTo(0, 0);
//         }}
//         className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#fb7185] text-white px-12 py-3 rounded-full mt-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
//       >
//         View More Doctors
//       </button>
//     </div>
//   );
// };

// export default TopDocters;
