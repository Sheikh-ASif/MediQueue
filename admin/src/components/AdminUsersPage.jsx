import React, { useEffect, useState } from 'react';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/api/admin/all-patients', {
          headers: {
            atoken: localStorage.getItem('atoken'),
          },
        });
        const data = await response.json();
        console.log("Fetched data:", data);
        if (data.success) {
          setUsers(data.patients);
          setError(null);
        } else {
          setError(data.message || 'Failed to fetch patients');
        }
      } catch (err) {
        setError('An error occurred while fetching users');
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const toggleExpand = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  if (loading) return <p className="text-center py-4">Loading users...</p>;
  if (error) return <p className="text-red-600 text-center py-4">{error}</p>;

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Users Details</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">DOB</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Address</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase">Appointments</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <React.Fragment key={user.id}>
                <tr className="hover:bg-gray-100">
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <img
                      src={user.image || 'https://via.placeholder.com/50'}
                      alt="User image"
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300"
                    />
                    <div>
                      <p className="font-semibold text-gray-700">{user.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">{user.dob}</td>
                  <td className="px-6 py-4">
                    {user.address ? `${user.address.line1}, ${user.address.line2}` : 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleExpand(user.id)}
                      className="px-3 py-1 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition"
                    >
                      {expandedUserId === user.id ? 'Hide' : 'Show'} ({user.appointments.length})
                    </button>
                  </td>
                </tr>
                {expandedUserId === user.id && (
                  <tr className="bg-gray-50">
                    <td colSpan={7} className="px-6 py-4">
                      {user.appointments.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                          {user.appointments.map(appt => (
                            <li key={appt.id} className="py-3 flex justify-between items-center">
                              <div>
                                <p>
                                  <strong>Date:</strong> {appt.slotDate} | <strong>Time:</strong> {appt.slotTime}
                                </p>
                                <p>
                                  <strong>Amount:</strong> ₹{appt.amount} |{" "}
                                  <strong>Status:</strong> {appt.cancelled ? 'Cancelled' : appt.isCompleted ? 'Completed' : 'Scheduled'}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-center py-2 text-gray-600">No Appointments</p>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersPage;
