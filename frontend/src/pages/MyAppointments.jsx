import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])

  const months = ["","jan", "Feb","Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/user/appointments',
        { headers: { token } }
      )

      if (data.success) {
        setAppointments(data.appointments)
        console.log(data.appointments)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {
      
      
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})
      if(data.success){
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-center text-2xl font-bold text-gray-800 border-b pb-3 mb-8">
        My Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments yet.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition"
            >
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <img
                  className="w-32 h-32 object-cover rounded-lg bg-indigo-50"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
              </div>

              {/* Appointment Info */}
              <div className="flex-1 text-sm text-gray-600">
                <p className="text-lg font-semibold text-gray-800">{item.docData.name}</p>
                <p className="text-blue-600 font-medium">{item.docData.speciality}</p>

                <div className="mt-3">
                  <p className="text-gray-700 font-semibold">Address:</p>
                  <p className="text-xs">{item.docData.address.line1}</p>
                  <p className="text-xs">{item.docData.address.line2}</p>
                </div>

                <p className="text-xs mt-3">
                  <span className="font-medium text-gray-700">Date & Time:</span>{" "}
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 justify-center sm:items-end">
               {!item.cancelled && <button className="text-sm px-6 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition">
                  Pay Online
                </button>} 
                {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className="text-sm px-6 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition">
                  Cancel Appointment
                </button> }
                {item.cancelled && <button>Not the Active Appointment</button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyAppointments

















