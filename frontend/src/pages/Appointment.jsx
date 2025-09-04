import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDocters from '../components/RelatedDocters';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

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
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => ([...prev, timeSlots]));
    }
  }

  useEffect(() => { fetchDocInfo(); }, [doctors, docId]);
  useEffect(() => { if (docInfo) getAvailableSlots(); }, [docInfo]);

  return docInfo && (
    <div className="px-6 md:px-12 lg:px-20 py-10">
      
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
        <div className="flex gap-3 overflow-x-auto pb-2">
          {docSlots.map((daySlots, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`cursor-pointer min-w-[70px] px-4 py-3 text-center rounded-xl shadow-sm transition 
                ${slotIndex === index ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}
            >
              <p className="font-medium">{daySlots[0] && daysOfWeek[daySlots[0].datetime.getDay()]}</p>
              <p className="text-sm">{daySlots[0] && daySlots[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className="flex gap-3 flex-wrap mt-6">
          {docSlots.length > 0 && docSlots[slotIndex].map((slot, idx) => (
            <button
              key={idx}
              onClick={() => setSlotTime(slot.time)}
              className={`px-5 py-2 rounded-full text-sm transition 
                ${slot.time === slotTime 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100'}`}
            >
              {slot.time.toLowerCase()}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="w-full sm:w-auto px-10 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition">
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






// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import RelatedDocters from '../components/RelatedDocters';

// const Appointment = () => {

//   const {docId} = useParams();
//   const {doctors,currencySymbol} = useContext(AppContext)
//   const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState('');

//   const fetchDocInfo = async () =>{
//     const docInfo = doctors.find(doc => doc._id === docId)
//     setDocInfo(docInfo);
//   }

//   const getAvailableSlots =async () => {
//     setDocSlots([])

//     //getting current date
//     let today = new Date();

//     for(let i=0; i<7; i++){
//       //getting date with index
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);
      
//       // Setting end time of the date with index
//       let endTime = new Date();
//       endTime.setDate(today.getDate() +  i);
//       endTime.setHours(21,0,0,0); // 9 PM

//       // Setting hours
//       if(today.getDate() === currentDate.getDate()){
//         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0); 
//       }
//       else{
//         currentDate.setHours(10); // 10 AM
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];

//       while(currentDate < endTime){
//         let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});

//         //add slot to array
//         timeSlots.push({
//           datetime: new Date(currentDate),
//           time: formattedTime,

//         });

//         //Increment current time by 30 mins
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }
//       setDocSlots(prev => ([...prev, timeSlots]));
//     }
//   }

//   useEffect(()=>{
//     fetchDocInfo();
//   },[doctors,docId])

//   useEffect(() => {
//     getAvailableSlots();
//   },[docInfo])

//   useEffect(() => {
//      console.log(docSlots);
//   },[docSlots])

//   return docInfo && (
//     <div>
//         {/** Doc details */}
//         <div className='flex flex-col sm:flex-row gap-4'>
//           <div>
//             <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
//           </div>
//           <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
//             {/**Doc info */}
//             <p className='flex items-center gap-2 text-2xl font-medium text-shadow-gray-900'>{docInfo.name}
//             <img className='w-5' src={assets.verified_icon} alt="" />
//             </p>
//             <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
//               <p>{docInfo.degree} - {docInfo.speciality}</p>
//               <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//             </div>
//             {/**Doctor About */}
//             <div>
//               <p className='flex items-center gap-1 text-sm font-medium text-shadow-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
//               <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
//             </div>
//             <p className='text-gray-500 font-medium mt-8'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
//           </div>
//         </div>
//         {/**Booking Slots */}
//         <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
//           <p>Booking Slots</p>
//           <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//             {docSlots.length && docSlots.map((item,index)=>(
//               <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200'}`} key={index}>
//                 <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                 <p>{item[0] && item[0].datetime.getDate()}</p>
//               </div>
//             )
//             )}
//           </div>
//           <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//             {
//               docSlots.length && docSlots[slotIndex].map((item,index) => (
//                   <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-500 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
//                     {item.time.toLowerCase() }
//                   </p>
//               ))
//             }
//           </div>
//           <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
//         </div>
//         {/** lisiting the related doctors */}
//         <RelatedDocters docId={docId} speciality={docInfo.speciality} />
//     </div>
//   )
// }

// export default Appointment