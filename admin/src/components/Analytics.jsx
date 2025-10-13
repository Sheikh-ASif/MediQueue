import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics = () => {
  const { appointments, getAllAppointments } = useContext(AdminContext);
  const [statusData, setStatusData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllAppointments();
  }, [getAllAppointments]);

  useEffect(() => {
    if (!appointments || appointments.length === 0) return;

    const statusCounts = {
      completed: 0,
      rejected: 0,
      pending: 0,
      recent: 0,
    };
    const today = new Date();

    appointments.forEach((appt) => {
      if (appt.isCompleted) statusCounts.completed++;
      else if (appt.cancelled) statusCounts.rejected++;
      else statusCounts.pending++;

      const apptDate = new Date(appt.slotDate); 
      const diffTime = today.getTime() - apptDate.getTime();
      const diffDays = diffTime / (1000 * 3600 * 24);

      if (diffDays <= 7) statusCounts.recent++;
    });

    setStatusData([
      { name: "Completed", value: statusCounts.completed },
      { name: "Rejected", value: statusCounts.rejected },
      { name: "Pending", value: statusCounts.pending },
      { name: "Recent", value: statusCounts.recent },
    ]);

    const dailyCounts = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().slice(0, 10);

      const count = appointments.filter((appt) => {
        const apptDateOnly = appt.slotDate ? appt.slotDate.slice(0, 10) : null;
        return apptDateOnly === dateStr;
      }).length;

      dailyCounts.push({ date: dateStr, appointments: count });
    }
    setDailyData(dailyCounts);
  }, [appointments]);

  return (
    <div className="w-full min-h-screen p-8 bg-gray-50">
      <button
        className="flex items-center gap-2 mb-8 text-indigo-700 hover:text-indigo-900 font-semibold"
        onClick={() => navigate("/all-appointments")}
        title="Back to Appointments"
      >
        <FiArrowLeft size={20} />
        Back
      </button>
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-800">
        Appointments Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        {/* Donut Pie Chart */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
            Appointment Status Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={5}
                label={({ percent, name }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, "Appointments"]} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Composed Bar and Line Chart */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
            Daily Appointments (Last 7 Days)
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fill: "#4B5563" }} />
              <YAxis allowDecimals={false} tick={{ fill: "#4B5563" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#00C49F" barSize={30} radius={[10, 10, 0, 0]} />
              <Line type="monotone" dataKey="appointments" stroke="#8884d8" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
