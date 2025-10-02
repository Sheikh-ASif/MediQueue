import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllApointments = () => {
  const { atoken, appointments, getAllAppointments } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (atoken) {
      getAllAppointments()
    }
  }, [atoken, getAllAppointments])

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      <p className="mb-5 text-2xl font-bold text-gray-800 tracking-tight">All Appointments</p>
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto">
        <div className="hidden sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] py-4 px-8 border-b bg-gray-100 text-gray-700 font-semibold uppercase tracking-wider text-xs">
          <span>S.no</span>
          <span>Patient</span>
          <span>Age</span>
          <span>Date & Time</span>
          <span>Doctor</span>
          <span>Fees</span>
          <span>Action</span>
        </div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="sm:grid grid-cols-[0.8fr_2.5fr_1.1fr_2.5fr_2.5fr_1.1fr_1.2fr] items-center py-4 px-8
                     bg-white border-b transition-colors
                     hover:bg-blue-50 hover:shadow-md flex flex-wrap max-sm:gap-4"
            style={{ minHeight: '62px' }}
          >
            {/* Serial Number */}
            <span className="max-sm:hidden text-center text-base font-bold text-gray-500">{index + 1}</span>
            {/* Patient */}
            <div className="flex items-center gap-3">
              <img
                src={item.userData.image}
                alt="Patient"
                className="w-10 h-10 rounded-full border border-gray-200 shadow"
              />
              <span className="font-medium text-gray-900 text-base">{item.userData.name}</span>
            </div>
            {/* Age */}
            <span className="max-sm:hidden text-center text-gray-600 font-medium">{calculateAge(item.userData.dob)}</span>
            {/* Date & Time */}
            <p className="max-sm:hidden truncate text-gray-700 font-medium">
              {slotDateFormat(item.slotDate)}, <span className="text-gray-500">{item.slotTime}</span>
            </p>
            {/* Doctor */}
            <div className="flex items-center gap-3">
              <img
                src={item.docData.image}
                alt="Doctor"
                className="w-10 h-10 rounded-full border border-gray-200 bg-gray-100 shadow"
              />
              <span className="font-medium text-gray-900 text-base">{item.docData.name}</span>
            </div>
            {/* Fees */}
            <p className="text-center font-semibold text-green-600">
              {currency}{item.amount}
            </p>
            {/* Action */}
            <div className="flex items-center justify-center">
              {item.cancelled ? (
                <span className="text-red-500 rounded px-2 py-1 bg-red-50 font-medium text-xs border border-red-200">
                  Cancelled
                </span>
              ) : (
                <button title="Cancel appointment">
                  <img
                    className="w-8 h-8 p-1 rounded hover:bg-red-100 transition"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllApointments

