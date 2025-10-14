import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAtoken, backendUrl } = useContext(AdminContext);
  const { setDtoken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("atoken", data.token);
          setAtoken(data.token);

          navigate("/admin-dashboard");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dtoken", data.token);
          setDtoken(data.token);

          navigate("/doctor-dashboard");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 px-6 py-12 gap-8">
      
      {/* Left Card */}
      <div className="hidden md:flex flex-col bg-white rounded-3xl shadow-xl p-8 w-80 text-center select-none">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
          {state === "Doctor" ? "Doctor Features" : "Admin Features"}
        </h3>
        <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
          {state === "Doctor" ? (
            <>
              <li>📅 Manage your appointments with ease</li>
              <li>⌛ View live queue status in real-time</li>
              <li>🗂️ Access patient history securely</li>
              <li>🔔 Receive instant notifications</li>
              <li>💻 Use a clean, intuitive dashboard</li>
            </>
          ) : (
            <>
              <li>🔐 Control platform access and roles</li>
              <li>📊 Monitor system-wide analytics</li>
              <li>🛠️ Manage doctor and patient accounts</li>
              <li>📅 Oversee all appointments and schedules</li>
              <li>⚙️ Customize system settings and policies</li>
            </>
          )}
        </ul>
      </div>

      {/* Center: Login Form */}
      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full border border-gray-200 flex flex-col gap-6"
      >
        <h2 className="text-center text-3xl font-extrabold text-indigo-700 mb-8">
          {state} Login
        </h2>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:scale-[1.05] transform transition-transform duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-600 text-sm select-none">
          {state === "Admin" ? (
            <>
              Doctor Login?{" "}
              <span
                onClick={() => setState("Doctor")}
                className="text-indigo-600 font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Admin Login?{" "}
              <span
                onClick={() => setState("Admin")}
                className="text-pink-600 font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>

      {/* Right Card */}
      <div className="hidden md:flex flex-col bg-white rounded-3xl shadow-xl p-8 w-80 text-center select-none">
        <h3 className="text-2xl font-semibold text-pink-700 mb-4">
          {state === "Doctor" ? "Doctor Support" : "Admin Support"}
        </h3>
        <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
          {state === "Doctor" ? (
            <>
              <li>💬 24/7 support for doctors</li>
              <li>📚 Access to training materials</li>
              <li>🧰 Tools to manage your practice</li>
              <li>🔄 Regular system updates</li>
              <li>🌐 Access from anywhere</li>
            </>
          ) : (
            <>
              <li>📞 Dedicated admin assistance</li>
              <li>⚙️ Technical support for configurations</li>
              <li>📈 Reports and insights delivery</li>
              <li>🔒 Security audits and compliance</li>
              <li>🛠️ Maintenance and troubleshooting</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Login;
