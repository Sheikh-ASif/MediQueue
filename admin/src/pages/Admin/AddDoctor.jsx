import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, atoken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Doctor image is required");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { atoken } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setFees("");
        setAbout("");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong" + error.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-50 to-indigo-100 py-12 px-2">
      <form onSubmit={onSubmitHandler} className="w-full max-w-4xl mx-auto">
        <p className="mb-7 text-3xl font-extrabold text-indigo-700 text-center tracking-tight">
          ➕ Add Doctor
        </p>
        <div className="bg-white px-10 py-10 border border-indigo-200 rounded-2xl shadow-xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-7 mb-10 text-gray-700">
            <label htmlFor="doc-img" className="cursor-pointer flex-shrink-0">
              <img
                className="w-24 h-24 border-4 border-dashed border-indigo-300 hover:border-indigo-400 bg-indigo-50 rounded-full shadow transition-transform hover:scale-105 object-cover"
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt="Upload doctor"
              />
            </label>
            <input
              onChange={(e) => setDocImg(e.target.files[0])}
              type="file"
              id="doc-img"
              hidden
            />
            <p className="text-base">
              <span className="font-semibold">Upload doctor picture</span>
              <br />
              <span className="text-gray-400">JPG, PNG up to 5MB</span>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-700">
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 font-semibold text-indigo-700">
                  Doctor Name
                </p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">
                  Doctor Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Experience</p>
                <select
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                >
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>4 Years</option>
                  <option>5 Years</option>
                  <option>6 Years</option>
                  <option>7 Years</option>
                  <option>8 Years</option>
                  <option>9 Years</option>
                  <option>10 Years</option>
                </select>
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Fees</p>
                <input
                  onChange={(e) => setFees(e.target.value)}
                  value={fees}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="number"
                  placeholder="Enter fees"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Speciality</p>
                <select
                  onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                >
                  <option>General Physician</option>
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>Neurologist</option>
                  <option>Gastroenterologist</option>
                </select>
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Education</p>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="text"
                  placeholder="Education"
                  required
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-indigo-700">Address</p>
                <input
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 mb-2 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="text"
                  placeholder="Address line 1"
                  required
                />
                <input
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  className="border border-indigo-200 shadow rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  type="text"
                  placeholder="Address line 2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-2 font-semibold text-indigo-700">About Doctor</p>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              className="w-full px-4 py-3 border border-indigo-200 shadow rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Write about the doctor"
              rows={5}
              required
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 px-14 py-3 text-white font-bold rounded-full shadow-xl text-lg tracking-wide transition-all duration-200"
            >
              Add Doctor
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;

