import React, { useEffect, useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#5DADE2"];

const SummaryReport = () => {
  const {
    appointments,
    doctors,
    patients,
    getAllAppointments,
    getAllDoctors,
    getAllPatients,
  } = useContext(AdminContext);
  const navigate = useNavigate();

  const [specialtyData, setSpecialtyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [topDoctors, setTopDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Kick off data fetch on mount
  useEffect(() => {
    getAllAppointments();
    getAllDoctors();
    getAllPatients();
  }, [getAllAppointments, getAllDoctors, getAllPatients]);

  // Watch for data loading completion
  useEffect(() => {
    // If appointments, doctors, patients are not empty arrays, mark loading false
    if (Array.isArray(appointments) && Array.isArray(doctors) && Array.isArray(patients)) {
      setLoading(false); // All loaded!
    }
  }, [appointments, doctors, patients]);

  // Compute charts when data updates
  useEffect(() => {
    if (!appointments || !doctors || !patients) return;

    // Appointments count per specialty
    const specCountMap = {};
    appointments.forEach(appt => {
      const spec = appt.docData?.speciality || "Unknown";
      specCountMap[spec] = (specCountMap[spec] || 0) + 1;
    });
    setSpecialtyData(Object.entries(specCountMap).map(([name, value]) => ({ name, value })));

    // Weekly trends count
    const today = new Date();
    const weekArray = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const ds = d.toISOString().split('T')[0];
      const count = appointments.filter(appt => appt.slotDate && appt.slotDate.startsWith(ds)).length;
      weekArray.push({ date: ds, count });
    }
    setWeeklyData(weekArray);

    // Top doctors by completed appts
    const doctorCountMap = {};
    appointments.forEach(appt => {
      if (appt.isCompleted && !appt.cancelled && appt.docData) {
        const docId = appt.docData._id;
        doctorCountMap[docId] = (doctorCountMap[docId] || 0) + 1;
      }
    });
    // Map doctor ids to names and counts
    const topDocsArray = Object.entries(doctorCountMap)
      .map(([docId, count]) => {
        const doctor = doctors.find(d => d._id === docId);
        return { name: doctor?.name || 'Unknown', count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    setTopDoctors(topDocsArray);
  }, [appointments, doctors, patients]);

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
        Summary Report
      </h1>
      <div className="max-w-7xl mx-auto space-y-12">
        {
          loading ? (
            <div className="text-center py-12">
              <div className="loader"></div>
              <p>Loading data...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              {/* Specialty Pie Chart */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-6">Appointments by Specialty</h2>
                {specialtyData.length === 0 ? (
                  <p className="text-center text-gray-400">No appointment data available for specialties.</p>
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        dataKey="value"
                        data={specialtyData}
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                      >
                        {specialtyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
              {/* Weekly Appointments */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-6">Appointments in Last 7 Days</h2>
                {weeklyData.every(d => d.count === 0) ? (
                  <p className="text-center text-gray-400">No appointments made in the last 7 days.</p>
                ) : (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#4F46E5" radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
              {/* Top Doctors */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-6">Top Doctors (Completed Appointments)</h2>
                {topDoctors.length === 0 ? (
                  <p className="text-center text-gray-400">No completed appointments found.</p>
                ) : (
                  <ol className="list-decimal list-inside space-y-2 text-lg">
                    {topDoctors.map(({ name, count }, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{name}</span> - {count} completed appointments
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              {/* Patients Summary - now includes detailed table */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-6">Total Patients</h2>
                <p className="text-3xl font-bold">{patients.length}</p>
                {/* Patients Details Table */}
                {patients.length === 0 ? (
                  <p className="text-center text-gray-400">No patient records found.</p>
                ) : (
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-indigo-100">
                          <th className="p-2 border">Name</th>
                          <th className="p-2 border">Age</th>
                          <th className="p-2 border">Booking Date</th>
                          <th className="p-2 border">Booking Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient, idx) => {
                          // Find their latest appointment
                          const lastAppt = appointments
                            .filter(
                              a => a.patientData && a.patientData._id === patient._id
                            )
                            .sort(
                              (a, b) =>
                                new Date(b.slotDate) - new Date(a.slotDate)
                            )[0];
                          return (
                            <tr key={idx} className="bg-white even:bg-gray-50">
                              <td className="p-2 border">{patient.name}</td>
                              <td className="p-2 border">{patient.age}</td>
                              <td className="p-2 border">
                                {lastAppt ? lastAppt.slotDate : "N/A"}
                              </td>
                              <td className="p-2 border">
                                {lastAppt && lastAppt.slotTime
                                  ? lastAppt.slotTime
                                  : "N/A"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default SummaryReport;
