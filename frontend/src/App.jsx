import React from 'react'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Docters from './pages/Docters.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar.jsx'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/docters' element={<Docters/>}/>
        <Route path='/docters/:speciality' element={<Docters/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments'element={<MyAppointments/>}/>
        <Route path='/appointments/:docId'element={<Appointment/>}/>

      </Routes>
    </div>
  )
}

export default App
