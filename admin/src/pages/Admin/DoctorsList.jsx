import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, atoken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (atoken) getAllDoctors();
  }, [atoken]);

  return (
    <div className="p-8 w-full min-h-screen bg-gradient-to-tr from-sky-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
          All Doctors
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {doctors.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl border border-indigo-100 bg-white flex flex-col w-64 group transition-transform hover:-translate-y-2`}
              style={{
                minHeight: "320px",
              }}
            >
              {/* Gradient header bar */}
              <div className="h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 w-full rounded-t-2xl" />

              {/* Doctor image */}
              <div className="flex justify-center -mt-8">
                <img
                  className="w-20 h-20 rounded-full border-4 border-white shadow -mt-4 object-cover bg-indigo-50 group-hover:border-blue-400 transition"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col items-center p-5 pb-6 flex-1">
                <p className="text-xl font-bold text-indigo-700 mb-1">
                  {item.name}
                </p>
                <p className="text-gray-500 font-medium mb-2">
                  {item.speciality}
                </p>
                <div className="w-full flex items-center gap-2 justify-center mt-auto">
                  <input
                    onChange={() => changeAvailability(item._id)}
                    type="checkbox"
                    checked={item.available}
                    readOnly
                    className="accent-indigo-600 w-5 h-5"
                    id={`avail-${item._id}`}
                  />
                  <label
                    htmlFor={`avail-${item._id}`}
                    className={`font-semibold text-${
                      item.available ? "green" : "gray"
                    }-600`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;

// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";

// const DoctorsList = () => {
//   const { doctors, atoken, getAllDoctors, changeAvailability } =
//     useContext(AdminContext);

//   useEffect(() => {
//     if (atoken) {
//       getAllDoctors();
//     }
//   }, [atoken]);

//   return (
//     <div className="m-5 max-h-[90vh] overflow-scroll">
//       <h1 className="text-lg font-medium">All Doctors</h1>
//       <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
//         {doctors.map((item, index) => (
//           <div
//             className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
//             key={index}
//           >
//             <img
//               className="border-indigo-50 group-hover:bg-primary transition-all duration-500"
//               src={item.image}
//               alt=""
//             />
//             <div className="p-4">
//               <p className="text-neutral-800 text-lg font-medium">
//                 {item.name}
//               </p>
//               <p className="text-zinc-600 text-sm">{item.speciality}</p>
//               <div className="mt-2 flex items-center gap-1 text-sm">
//                 <input
//                   onChange={() => changeAvailability(item._id)}
//                   type="checkbox"
//                   checked={item.available}
//                   readOnly
//                 />
//                 <p>Available</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;
