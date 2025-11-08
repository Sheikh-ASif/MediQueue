import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // const response = await fetch("http://localhost:4000/api/admin/all-patients", {
        //   headers: { atoken: localStorage.getItem("atoken") },
        // });
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/all-patients`,
          {
            headers: { atoken: localStorage.getItem("atoken") },
          }
        );

        const data = await response.json();
        if (data.success) {
          setUsers(data.patients);
          setFilteredUsers(data.patients);
        } else {
          setError(data.message || "Failed to fetch patients");
        }
      } catch (err) {
        setError("An error occurred while fetching users");
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const toggleExpand = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(value) ||
        user.email?.toLowerCase().includes(value) ||
        user.phone?.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
  };

  if (loading)
    return (
      <p className="text-center text-lg font-medium text-gray-600 py-10">
        Loading users...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-600 py-10 font-semibold">{error}</p>
    );

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          👥 User Management
        </h2>
        <p className="text-gray-500 text-lg">
          View and manage all registered users and their appointment details.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name, email or phone..."
          className="w-full max-w-xl px-5 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* TABLE CONTAINER */}
      <div className="overflow-x-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <tr>
              {[
                "User",
                "Email",
                "Phone",
                "Gender",
                "DOB",
                "Address",
                "Appointments",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-12 text-gray-500 text-lg font-medium"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <React.Fragment key={user._id || user.id}>
                  {/* USER ROW */}
                  <tr className="hover:bg-indigo-50 transition-all duration-200">
                    <td className="px-6 py-4 flex items-center space-x-4">
                      <img
                        src={user.image || "https://via.placeholder.com/50"}
                        alt="User"
                        className="w-12 h-12 rounded-full border-2 border-indigo-300 shadow-sm"
                      />
                      <p className="font-semibold text-gray-800 text-lg">
                        {user.name}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{user.email}</td>
                    <td className="px-6 py-4 text-gray-700">{user.phone}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.gender === "Male"
                            ? "bg-blue-100 text-blue-700"
                            : user.gender === "Female"
                            ? "bg-pink-100 text-pink-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.gender || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {user.dob || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {user.address
                        ? `${user.address.line1 || ""}, ${
                            user.address.line2 || ""
                          }`
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggleExpand(user._id || user.id)}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-md transition-all duration-300 ${
                          expandedUserId === (user._id || user.id)
                            ? "bg-indigo-600 text-white hover:bg-indigo-700"
                            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                        }`}
                      >
                        {expandedUserId === (user._id || user.id)
                          ? "Hide"
                          : "Show"}{" "}
                        ({user.appointments?.length || 0})
                      </button>
                    </td>
                  </tr>

                  {/* EXPANDED SECTION */}
                  <AnimatePresence>
                    {expandedUserId === (user._id || user.id) && (
                      <motion.tr
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <td colSpan={7} className="px-6 py-6 bg-gray-50">
                          {user.appointments?.length > 0 ? (
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                              {user.appointments.map((appt) => (
                                <motion.div
                                  key={appt.id}
                                  whileHover={{ scale: 1.03 }}
                                  className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
                                >
                                  <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-semibold text-gray-800 text-lg">
                                      Appointment
                                    </h4>
                                    <span
                                      className={`text-sm font-medium px-2 py-1 rounded-full ${
                                        appt.cancelled
                                          ? "bg-red-100 text-red-600"
                                          : appt.isCompleted
                                          ? "bg-green-100 text-green-600"
                                          : "bg-yellow-100 text-yellow-600"
                                      }`}
                                    >
                                      {appt.cancelled
                                        ? "Cancelled"
                                        : appt.isCompleted
                                        ? "Completed"
                                        : "Scheduled"}
                                    </span>
                                  </div>
                                  <div className="text-gray-700 text-sm space-y-1">
                                    <p>
                                      <strong>Date:</strong> {appt.slotDate}
                                    </p>
                                    <p>
                                      <strong>Time:</strong> {appt.slotTime}
                                    </p>
                                    <p>
                                      <strong>Amount:</strong> ₹{appt.amount}
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-600 py-4">
                              No Appointments Available
                            </p>
                          )}
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
