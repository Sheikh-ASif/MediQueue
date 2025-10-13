
import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Checking for all data for the doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: 'All fields are required' });
        }

        // Validating the email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Invalid email' });
        }

        // Validating the strong password
        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long' });
        }

        // Hashing doctor password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Uploading image to cloudinary
        let imageUrl = "";
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            imageUrl = imageUpload.secure_url;
        }

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: typeof address === "string" ? JSON.parse(address) : address,
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: 'Doctor added successfully' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//api for the admin login
const loginAdmin = async (req, res) => {
    try{

        const {email, password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, message: 'Login successful', token: token})
        } else{
            res.json({success: false, message: 'Invalid credentials'})
        }

    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

//Api to get all doctors list for the admin panel

const allDoctors = async (req,res) => {
    try{

        const doctors = await doctorModel.find({}).select('-password');
        res.json({success: true, doctors})

    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// API to get all patients for admin panel
const allPatients = async (req, res) => {
  try {
    // If you have a 'role' or similar, use it: { role: 'patient' }
    const patients = await userModel.find({});
    res.json({ success: true, patients });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api to get all appointments list

const appointmentsAdmin = async (req,res) => {
    try {
        
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

//Api for the Cancel the Appointments 
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
   

    const appointmentData = await appointmentModel.findById(appointmentId);


    

    // mark appointment cancelled
    appointmentData.cancelled = true;
    await appointmentData.save();

    // release doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);
    if (doctorData.slots_booked[slotDate]) {
      doctorData.slots_booked[slotDate] = doctorData.slots_booked[slotDate].filter(
        (e) => e !== slotTime
      );
      await doctorData.save();
    }

    res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        const users = await userModel.find({});
        const appointments = await appointmentModel.find({});

        // Count by speciality -- EXCLUDE cancelled
        const specialityCount = {};
        for (const appt of appointments) {
            if (appt.cancelled) continue;
            if (!appt.docId) continue;
            const doctor = doctors.find(doc => doc._id.toString() === appt.docId.toString());
            if (doctor) {
                specialityCount[doctor.speciality] = (specialityCount[doctor.speciality] || 0) + 1;
            }
        }

        // Latest appointments with doc info (EXCLUDE cancelled)
        const latestAppointments = appointments
            .filter(appt => !appt.cancelled)
            .reverse()
            .slice(0, 5)
            .map(item => {
                const docData = doctors.find(doc => doc._id.toString() === item.docId.toString());
                return { ...item._doc, docData };
            });

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.filter(a => !a.cancelled).length,
            patients: users.length,
            latestAppointments,
            specialityCount
        };

        res.json({ success: true, dashData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addDoctor, loginAdmin, allDoctors, allPatients, appointmentsAdmin, appointmentCancel, adminDashboard };

// //api to get the dashboard data for admin pannel 

// const adminDashboard = async (req,res) => {

//     try {
        
//         const doctors = await doctorModel.find({})
//         const users = await userModel.find({})
//         const appointments = await appointmentModel.find({})

//          // Count appointments by speciality
//         const specialityCount = {}
//         for (const appt of appointments) {
//             const doctor = doctors.find(doc => doc._id.toString() === appt.docId.toString())
//             if (doctor) {
//                 specialityCount[doctor.speciality] = (specialityCount[doctor.speciality] || 0) + 1
//             }
//         }

//         const dashData = {
//             doctors: doctors.length,
//             appointments: appointments.length,
//             patients: users.length,
//             latestAppointments: appointments.reverse().slice(0,5),
//             specialityCount
//         }

//         res.json({success:true,dashData})

//     } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//     }

// }





