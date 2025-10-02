import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts"

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
        // decode token to get user id
        const decoded = JSON.parse(atob(token.split('.')[1]))
        setMyId(decoded.id)

        // calculate waiting time for the next upcoming appointment
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

  // Chart Data Builder
  const chartData = appointments.map((apt, index) => ({
    time: apt.slotTime,
    patient: apt.userData?.name || "Patient " + (index + 1),
    me: apt.userId === myId
  }))

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

      {/* Graph Section */}
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
                      fill={payload.me ? "#f97316" : fill} // orange for my slot
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

      {/* Appointment List */}
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
                {!item.cancelled && (
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 border border-yellow-300">
                    Pay Later
                  </span>
                )}
                {!item.cancelled && (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className=" cursor-pointer text-sm px-6 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>
                )}
                {item.cancelled && (
                  <button className="px-4 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm">
                    Not an Active Appointment
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









// import React, { useContext, useState, useEffect } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)
//   const [appointments, setAppointments] = useState([])

//   const months = ["","jan", "Feb","Mar", "Apr", "May", "jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2]
//   }

//   const getUserAppointments = async () => {
//     try {
//       const { data } = await axios.get(
//         backendUrl + '/api/user/appointments',
//         { headers: { token } }
//       )

//       if (data.success) {
//         setAppointments(data.appointments)
//         console.log(data.appointments)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const cancelAppointment = async (appointmentId) => {

//     try {
      
      
//       const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})
//       if(data.success){
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       } else {
//         toast.error(data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }


//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     }
//   }, [token])

//   return (
//     <div className="px-6 md:px-12 lg:px-20 py-10">
//       <h2 className="text-center text-2xl font-bold text-gray-800 border-b pb-3 mb-8">
//         My Appointments
//       </h2>

//       {appointments.length === 0 ? (
//         <p className="text-center text-gray-500">No appointments yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {appointments.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row gap-6 bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition"
//             >
//               {/* Doctor Image */}
//               <div className="flex-shrink-0">
//                 <img
//                   className="w-32 h-32 object-cover rounded-lg bg-indigo-50"
//                   src={item.docData.image}
//                   alt={item.docData.name}
//                 />
//               </div>

//               {/* Appointment Info */}
//               <div className="flex-1 text-sm text-gray-600">
//                 <p className="text-lg font-semibold text-gray-800">{item.docData.name}</p>
//                 <p className="text-blue-600 font-medium">{item.docData.speciality}</p>

//                 <div className="mt-3">
//                   <p className="text-gray-700 font-semibold">Address:</p>
//                   <p className="text-xs">{item.docData.address.line1}</p>
//                   <p className="text-xs">{item.docData.address.line2}</p>
//                 </div>

//                 <p className="text-xs mt-3">
//                   <span className="font-medium text-gray-700">Date & Time:</span>{" "}
//                   {slotDateFormat(item.slotDate)} | {item.slotTime}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex flex-col gap-3 justify-center sm:items-end">
//                {!item.cancelled && <button className="text-sm px-6 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition">
//                   Pay Later
//                 </button>} 
//                 {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className="text-sm px-6 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition">
//                   Cancel Appointment
//                 </button> }
//                 {item.cancelled && <button>Not the Active Appointment</button>}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default MyAppointments

















