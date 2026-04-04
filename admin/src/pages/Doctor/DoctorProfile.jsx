import React from "react";
import { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorProfile = () => {
  const { dtoken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };
      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dtoken } }
      );
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dtoken) getProfileData();
  }, [dtoken]);

  return (
    profileData && (
      <div className=" w-full flex flex-col items-center py-10 min-h-screen bg-gradient-to-tr from-sky-50 to-indigo-100">
        <div className="bg-white rounded-2xl shadow-2xl border border-indigo-100 p-10 flex flex-col sm:flex-row gap-12 max-w-4xl w-full">
          {/* Doctor Photo and Sidebar */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <div className="flex justify-center w-full">
              <img
                className="w-40 h-40 rounded-full shadow-lg border-4 border-white bg-indigo-50 object-cover"
                src={profileData.image}
                alt={profileData.name}
              />
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 mt-4">
              <p className="text-indigo-700 text-2xl font-extrabold">
                {profileData.name}
              </p>
              <p className="text-gray-500 text-base font-semibold">
                {profileData.degree} - {profileData.speciality}
              </p>
              <div className="py-1 px-4 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-400 to-indigo-700 text-white shadow-md my-2">
                {profileData.experience}
              </div>
              <div className="flex gap-2 items-center mt-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    isEdit &&
                    setProfileData((prev) => ({
                      ...prev,
                      available: !prev.available,
                    }))
                  }
                  checked={profileData.available}
                  className="accent-indigo-600 w-5 h-5"
                  id="profile-available"
                />
                <label
                  htmlFor="profile-available"
                  className={`font-semibold ${
                    profileData.available ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {profileData.available ? "Available" : "Unavailable"}
                </label>
              </div>
            </div>
          </div>
          {/* Info/Editable main card */}
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <p className="font-bold text-lg text-indigo-700 mb-2">About</p>
              <p className="text-gray-700 bg-indigo-50 p-3 rounded-lg">
                {profileData.about}
              </p>
            </div>
            <div>
              <p className="font-bold text-lg text-indigo-700 mb-2">
                Appointment Fee
              </p>
              <span className="text-gray-800 font-semibold">
                {currency}
                {isEdit ? (
                  <input
                    type="number"
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: Number(e.target.value),
                      }))
                    }
                    value={profileData.fees}
                    className="border border-indigo-300 px-3 py-1 rounded-lg ml-2 w-28"
                  />
                ) : (
                  profileData.fees
                )}
              </span>
            </div>
            <div>
              <p className="font-bold text-lg text-indigo-700 mb-2">Address</p>
              <span className="block text-gray-700">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                      value={profileData.address.line1}
                      className="border border-indigo-300 px-3 py-1 rounded-lg mb-2 w-full"
                    />
                  </>
                ) : (
                  <span>{profileData.address.line1}</span>
                )}
              </span>
              <span className="block text-gray-700">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                      value={profileData.address.line2}
                      className="border border-indigo-300 px-3 py-1 rounded-lg mt-2 w-full"
                    />
                  </>
                ) : (
                  <span>{profileData.address.line2}</span>
                )}
              </span>
            </div>

            <div className="mt-5 flex gap-6">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 px-7 py-2 text-base text-white font-bold rounded-full shadow-xl transition-all"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 px-7 py-2 text-base text-white font-bold rounded-full shadow-xl transition-all"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;

