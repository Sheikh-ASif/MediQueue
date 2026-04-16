axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [atoken, setAtoken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);           // ADDED for patients
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        // backendUrl + "/api/admin/all-doctors",
        "/api/admin/all-doctors",
        {},
        { headers: { atoken } }
      );
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getAllPatients = async () => {            // ADDED: fetch patients
    try {
      // const { data } = await axios.get(backendUrl + "/api/admin/all-patients", {
       const { data } = await axios.get("/api/admin/all-patients", {
        headers: { atoken },
      });
      if (data.success) {
        setPatients(data.patients);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        // backendUrl + "/api/admin/change-availability",
        "/api/admin/change-availability",
        { docId },
        { headers: { atoken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getAllAppointments = async () => {
    try {
      // const { data } = await axios.get(backendUrl + "/api/admin/appointments", {
      const { data } = await axios.get("/api/admin/appointments", {
        headers: { atoken },
      });

      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        // backendUrl + "/api/admin/cancel-appointment",
        "/api/admin/cancel-appointment",
        { appointmentId },
        { headers: { atoken } }
      );

      if (data.succes) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getDashData = async () => {
    try {
      // const { data } = await axios.get(backendUrl + "/api/admin/dashboard", {
      const { data } = await axios.get("/api/admin/dashboard", {
        headers: { atoken },
      });

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    atoken,
    setAtoken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    setAppointments,
    getAllAppointments,
    cancelAppointment,
    dashData,
    getDashData,
    patients,             // ADDED patient state
    getAllPatients,       // ADDED getter for patients
    setPatients,          // ADDED setter for flexibility
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

