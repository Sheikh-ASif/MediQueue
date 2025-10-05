import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Docters from "./pages/Docters";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute"; // <-- import your ProtectedRoute component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/docters" element={<Docters />} />
        <Route path="/docters/:speciality" element={<Docters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/:docId" element={<Appointment />} />

        {/* Protected Dashboard Routes, wrapped in ProtectedRoute */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Docters from "./pages/Docters";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import MyProfile from "./pages/MyProfile";
// import MyAppointments from "./pages/MyAppointments";
// import Appointment from "./pages/Appointment";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import DashboardLayout from "./components/DashboardLayout";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <div className="mx-4 sm:mx-[10%]">
//       <ToastContainer/>
//       <Navbar />

//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/docters" element={<Docters />} />
//         <Route path="/docters/:speciality" element={<Docters />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />

//         {/* Dashboard Routes */}
//         <Route element={<DashboardLayout />}>
//           <Route path="/my-profile" element={<MyProfile />} />
//           <Route path="/my-appointments" element={<MyAppointments />} />
//         </Route>
//       </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;
