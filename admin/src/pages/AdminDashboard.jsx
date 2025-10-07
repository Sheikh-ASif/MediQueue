import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-primary">Welcome Admin 🎉</h1>
        <p className="mt-4 text-gray-600">
          You are logged in to the Admin Panel.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
