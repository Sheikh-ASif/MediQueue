import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts"

const COLORS = ["#4F46E5", "#16A34A", "#DC2626", "#F59E0B", "#06B6D4", "#9333EA"]

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const [myId, setMyId] = useState(null)
  const [waitingTime, setWaitingTime] = useState(null)

  const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

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

        const decoded = JSON.parse(atob(token.split('.')[1]))
        setMyId(decoded.id)

        if (data.appointments.length > 0) {
          const sorted = [...data.appointments].sort((a, b) => {
            const t1 = new Date(`${a.slotDate.replace(/_/g, "/")} ${a.slotTime}`)
            const t2 = new Date(`${b.slotDate.replace(/_/g, "/")} ${b.slotTime}`)
            return t1 - t2
          })
          const myAppointmentIndex = sorted.findIndex(ap => ap.userId === decoded.id && !ap.cancelled)
          if (myAppointmentIndex !== -1) {
            const avgConsultationMinutes = 15
            const minutes = myAppointmentIndex * avgConsultationMinutes
            setWaitingTime(minutes)
          }
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const {data} = await axios.post(
        backendUrl + '/api/user/cancel-appointment',
        {appointmentId},
        {headers:{token}}
      )
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

  // -------- BAR CHART DATA --------
  const chartData = appointments.map((apt, index) => ({
    time: apt.slotTime,
    patient: apt.userData?.name || "Patient " + (index + 1),
    me: apt.userId === myId
  }))

  // -------- PIE CHART DATA (Date-wise) --------
  const dateWiseData = () => {
    const grouped = {}

    appointments.forEach((apt) => {
      const formattedDate = slotDateFormat(apt.slotDate)
      if (!grouped[formattedDate]) {
        grouped[formattedDate] = 0
      }
      grouped[formattedDate] += 1
    })

    return Object.keys(grouped).map(date => ({
      name: date,
      value: grouped[date]
    }))
  }

  const pieData = dateWiseData()

  return (
    <div className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-center text-2xl font-bold text-gray-800 border-b pb-3 mb-8">
        My Appointments
      </h2>

      {/* Waiting Time Info */}
      {waitingTime !== null && (
        <div className="mb-6 text-center">
          <p className="text-lg font-medium text-gray-700">
            ⏳ Estimated Waiting Time: <span className="text-blue-600">{waitingTime} minutes</span>
          </p>
        </div>
      )}

      {/* -------- BAR GRAPH -------- */}
      {chartData.length > 0 && (
        <div className="w-full h-64 mb-10">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="patient"
                fill="#3b82f6"
                shape={(props) => {
                  const { fill, x, y, width, height, payload } = props
                  return (
                    <rect
                      x={x}
                      y={y}
                      width={width}
                      height={height}
                      fill={payload.me ? "#f97316" : fill}
                      rx={6}
                    />
                  )
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm mt-2 text-gray-600">
            Orange bar = Your appointment
          </p>
        </div>
      )}

      {/* -------- PIE CHART (DATE-WISE) -------- */}
      {pieData.length > 0 && (
        <div className="w-full h-80 mb-12">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center text-sm mt-2 text-gray-600">
            Pie chart shows number of appointments per date
          </p>
        </div>
      )}

      {/* -------- APPOINTMENT LIST -------- */}
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments yet.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0">
                <img
                  className="w-32 h-32 object-cover rounded-lg bg-indigo-50"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
              </div>

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

              <div className="flex flex-col gap-3 justify-center sm:items-end">
                {!item.cancelled && !item.isCompleted && (
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 border border-yellow-300">
                    Pay Later
                  </span>
                )}
                {!item.cancelled && !item.isCompleted && (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="cursor-pointer text-sm px-6 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>
                )}
                {item.cancelled && !item.isCompleted && (
                  <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm">
                    Cancelled
                  </button>
                )}
                {item.isCompleted && (
                  <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyAppointments
