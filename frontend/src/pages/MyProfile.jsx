import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success("Profile updated successfully!");
        setUserData(data.userData);
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    }
  };

  if (!userData) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-gray-700 font-sans">
      {/* ---------- PROFILE HEADER ---------- */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start gap-6 border-b pb-6 mb-8">
        <div className="relative group">
          {isEdit ? (
            <label htmlFor="image" className="cursor-pointer relative block">
              <img
                className="w-36 h-36 object-cover rounded-full border-4 border-blue-200 shadow-md opacity-90 group-hover:opacity-60 transition"
                src={
                  image
                    ? URL.createObjectURL(image)
                    : userData.image || assets.upload_icon
                }
                alt="Profile"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-sm font-semibold">
                  Upload
                </span>
              </div>
              <input
                type="file"
                id="image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          ) : (
            <img
              className="w-36 h-36 object-cover rounded-full border-4 border-blue-200 shadow-md"
              src={userData.image || assets.upload_icon}
              alt="Profile"
            />
          )}
        </div>

        <div className="text-center sm:text-left">
          {isEdit ? (
            <input
              className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-2xl font-semibold text-center sm:text-left w-full max-w-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-3xl font-bold text-gray-800">
              {userData.name}
            </h2>
          )}
          <p className="text-gray-500 text-sm mt-1">{userData.email}</p>
        </div>
      </div>

      {/* ---------- CONTACT INFO ---------- */}
      <div>
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Contact Information
        </h3>
        <div className="grid grid-cols-[1fr_2fr] gap-y-3 gap-x-4 text-sm sm:text-base">
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 border rounded px-3 py-1 focus:ring-2 focus:ring-blue-300 outline-none"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-600">{userData.phone || "Not provided"}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                className="bg-gray-50 border rounded px-3 py-1 focus:ring-2 focus:ring-blue-300 outline-none"
                type="text"
                placeholder="Address line 1"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-50 border rounded px-3 py-1 focus:ring-2 focus:ring-blue-300 outline-none"
                type="text"
                placeholder="Address line 2"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-gray-600 whitespace-pre-line">
              {userData.address.line1}
              {"\n"}
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* ---------- BASIC INFO ---------- */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Basic Information
        </h3>
        <div className="grid grid-cols-[1fr_2fr] gap-y-3 gap-x-4 text-sm sm:text-base">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-50 border rounded px-3 py-1 focus:ring-2 focus:ring-blue-300 outline-none"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-600">{userData.gender}</p>
          )}

          <p className="font-medium">Date of Birth:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 border rounded px-3 py-1 focus:ring-2 focus:ring-blue-300 outline-none"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-600">{userData.dob}</p>
          )}
        </div>
      </div>

      {/* ---------- BUTTON SECTION ---------- */}
      <div className="mt-10 flex justify-center sm:justify-end">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className="px-8 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-8 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
