import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDocters from '../components/RelatedDocters';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () =>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo);
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // 9 PM

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        let day = currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true


        if (isSlotAvailable) {
           timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
          available: true // Here you can implement your real logic
        });
        }



      
        // Example logic: all slots available
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => ([...prev, timeSlots]));
    }
  }



  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book Appointment')
      return navigate('/login')
    }

    try {
      
      const date = docSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth() +  1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year
      // const slotDate = date.toISOString().split('T')[0] // "YYYY-MM-DD"

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment',{docId,slotDate,slotTime}, {headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }

      // console.log(slotDate)

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  


  useEffect(() => { fetchDocInfo(); }, [doctors, docId]);
  useEffect(() => { if (docInfo) getAvailableSlots(); }, [docInfo]);

  return docInfo && (
    <div className="px-6 md:px-12 lg:px-20 py-10 pt-22">
      {/* Doctor Profile */}
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <img className="w-full sm:w-72 rounded-2xl shadow-md" src={docInfo.image} alt={docInfo.name} />
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="verified" />
          </h2>
          <p className="text-gray-600 mt-1">{docInfo.degree} • {docInfo.speciality}</p>
          <span className="mt-2 inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">{docInfo.experience}</span>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-1">About <img className="w-4" src={assets.info_icon} alt="info"/></h3>
            <p className="text-gray-500 text-sm mt-1">{docInfo.about}</p>
          </div>

          <p className="mt-6 text-gray-700 font-medium">
            Appointment fee: <span className="text-blue-600 font-bold">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Slots</h3>
        
        {/* Days */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {docSlots.map((daySlots, index) => (
            <button
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`min-w-[60px] px-4 py-2 flex flex-col items-center rounded-full border
                transition ${slotIndex === index ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer'}`}
              aria-pressed={slotIndex === index}
            >
              <span className="text-xs">{daySlots[0] && daysOfWeek[daySlots[0].datetime.getDay()]}</span>
              <span className="text-lg font-bold">{daySlots[0] && daySlots[0].datetime.getDate()}</span>
            </button>
          ))}
        </div>

        {/* Times */}
        <div className="flex gap-2 flex-wrap mt-6 ">
          {docSlots.length > 0 && docSlots[slotIndex].map((slot, idx) => (
            <button
              key={idx}
              onClick={() => setSlotTime(slot.time)}
              disabled={!slot.available}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition
                ${slot.time === slotTime ? 'bg-blue-600 text-white shadow-md font-bold ' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer'}
                ${!slot.available && 'opacity-60 cursor-not-allowed'}`}
              aria-pressed={slot.time === slotTime}
              aria-disabled={!slot.available}
              title={slot.available ? 'Available' : 'Unavailable'}
            >
              <span>{slot.time.toLowerCase()}</span>
              {slot.available
                ? <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                : <span className="w-3 h-3 bg-gray-300 rounded-full"></span>}
            </button>
          ))}
        </div>

        {/* Selection Summary */}
        {slotTime && (
          <div className="mt-4 text-center text-blue-700 ">
            <span className="font-semibold">Selected Slot:</span> {docSlots[slotIndex][0] && `${daysOfWeek[docSlots[slotIndex][0].datetime.getDay()]}, ${docSlots[slotIndex][0].datetime.getDate()}`} at {slotTime}
          </div>
        )}

        {/* CTA */}
        <div className="mt-8">
          <button onClick={bookAppointment} className="w-full sm:w-auto px-10 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition cursor-pointer" disabled={!slotTime}>
            Book Appointment
          </button>
        </div>
      </div>

      {/* Related Doctors */}
      <div className="mt-16">
        <RelatedDocters docId={docId} speciality={docInfo.speciality} />
      </div>
    </div>
  )
}

export default Appointment


