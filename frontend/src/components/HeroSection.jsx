import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

// Strong card gradient and border
const universalCardGradient =
  "bg-gradient-to-tr from-[#0989f7] via-[#7e4ded] to-[#ffa033] shadow-lg";

const featureCards = [
  {
    icon: "🩺",
    title: "Verified Doctors",
    desc: "Consult with certified and highly experienced medical professionals for reliable care.",
  },
  {
    icon: "📅",
    title: "Instant Appointments",
    desc: "Quickly book your appointments and manage your visits online without hassle.",
  },
  {
    icon: "💊",
    title: "E-Prescriptions",
    desc: "Receive digital prescriptions sent directly to your device and pharmacy.",
  },
  {
    icon: "📊",
    title: "Health Analytics",
    desc: "Track your health metrics, lab results, and progress using interactive charts.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your medical data is encrypted and strictly confidential for your privacy.",
  },
  {
    icon: "📲",
    title: "Mobile Access",
    desc: "Easily access medical services and records on any device, anytime.",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    desc: "Automated reminders for appointments, medication, and follow-up visits.",
  },
  {
    icon: "🚑",
    title: "24/7 Emergency Support",
    desc: "Connect instantly with emergency doctors and health resources, day or night.",
  },
];
const steps = [
  {
    number: 1,
    title: "Create a Patient Account",
    desc: "Sign up with basic details and verify instantly.",
    icon: "📝",
  },
  {
    number: 2,
    title: "Find Doctor & Book",
    desc: "Browse specialists, see ratings, and pick the right slot.",
    icon: "🔍",
  },
  {
    number: 3,
    title: "Get Treated",
    desc: "Consult online, in-person, or via chat. All visits tracked.",
    icon: "👩‍⚕️",
  },
  {
    number: 4,
    title: "Follow-up & Manage",
    desc: "Receive reminders, manage labs, and stay in control of your care.",
    icon: "⏰",
  },
];
const testimonials = [
  {
    quote:
      "No more waiting rooms. Booked, consulted, and got my prescription digitally. Amazing experience!",
    author: "Anita K.",
    role: "Patient",
    rating: 5,
  },
  {
    quote:
      "Health history, meds, lab reports, all in one app. Life made easy for my family.",
    author: "Dr. Suresh T.",
    role: "Pediatrician",
    rating: 5,
  },
];
const trusted = [
  { icon: "🦷", label: "Dental Clinics" },
  { icon: "🏥", label: "Hospitals" },
  { icon: "👨‍⚕️", label: "Senior Care Centers" },
  { icon: "⚕️", label: "Telemedicine Partners" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-0 mb-0 w-full max-w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[710px] bg-gradient-to-br from-[#8058e5] via-[#6e49ed] to-[#33cef3] flex flex-col md:flex-row items-center justify-center px-0 pt-10 rounded-none shadow-2xl overflow-hidden m-0">
        <div className="w-full md:w-[45%] flex flex-col justify-center items-end z-10 pr-4 py-8">
          <span className="px-6 py-2 bg-white/25 text-white font-semibold text-base border border-white/20 rounded-lg mb-5">
            🏥 Seamless, Trusted, 24/7 Medical Care
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-3 text-right max-w-lg drop-shadow">
            Your <span className="text-[#ffe373]">Health</span>,<br />
            <span className="text-[#2ad6f8]">Our Priority</span>
          </h1>
          <p className="text-white/90 text-lg mt-2 mb-4 max-w-lg leading-normal text-right">
            <span className="text-[#2ad6f8]">Book appointments, <br />Consult specialists,<br />Manage records,</span>
          </p>
          <div className="flex gap-4 mt-2 justify-end">
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white font-bold px-8 py-3 rounded-full shadow hover:from-purple-600 hover:to-blue-400 transition"
            >
              Get Started Free
            </button>
            <button className="bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 hover:text-[#7a5cff] transition-all">
              Watch Demo
            </button>
          </div>
          <div className="mt-7 text-white/80 text-sm text-right">
            <span className="inline-flex items-center gap-4 justify-end">
              <span className="flex gap-2 items-center">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-1 rounded font-semibold">
                  🔒 Secure
                </span>
                <span>• 24/7 Emergency Care</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Appointment Tracking</span>
            </span>
          </div>
        </div>
        {/* RIGHT: Illustration */}
        <div className="w-full md:w-[45%] flex items-center justify-start pl-4 py-4">
          <img
            src={assets.header_img}
            alt="Medical Illustration"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
            loading="lazy"
            style={{ filter: "brightness(1.10) contrast(1.1) saturate(1.1)" }}
          />
        </div>
      </section>

      {/* SECTION 2-3: FEATURES */}
      <section className="w-full min-h-[480px] flex flex-col py-16 bg-gradient-to-r from-[#f4effc] via-[#ebf2ff] to-[#e3f9fe] shadow-inner m-0">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 mb-5 bg-purple-100 text-purple-600 font-semibold rounded-full">
            Why Choose Our Platform?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Smart Features for Modern Healthcare
          </h2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            Designed to make your medical experience easy, secure, and connected – for patients, doctors, and families.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className={`feature-card-pro flex flex-col items-center text-center w-64 p-8 rounded-2xl ${universalCardGradient} text-white shadow-xl border-2 border-white/50 transition-all duration-300 cursor-pointer m-0 hover:scale-105`}
            >
              <span className="text-4xl mb-2">{card.icon}</span>
              <span className="text-xl font-extrabold mb-1">{card.title}</span>
              <span className="text-base opacity-90">{card.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="w-full min-h-[400px] bg-white py-12 rounded-none shadow-xl m-0 flex flex-col">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 mb-4 bg-purple-100 text-purple-600 font-semibold rounded-xl">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            A Simple 4-Step <span className="text-purple-500">Medical Journey</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Our care process makes health simple and efficient for everyone.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mt-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center w-60 p-8 rounded-xl bg-gradient-to-tr from-purple-50 to-blue-50 border shadow-md hover:scale-105 hover:shadow-lg transition-all"
            >
              <span className="text-[#6e49ed] text-3xl mb-2 font-bold">
                {step.icon}
              </span>
              <span className="mb-2 text-xl font-bold text-gray-900">
                {step.title}
              </span>
              <span className="text-gray-500 text-base text-center">
                {step.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="w-full py-12 bg-gradient-to-br from-[#f0f3fa] via-[#e9e4fc] to-[#e4f7fd] rounded-none shadow-lg m-0 flex flex-col">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 mb-3 bg-purple-100 text-purple-500 font-semibold rounded-xl">
            What Patients & Doctors Say
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Real Experiences, Real Impact
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="w-96 bg-white rounded-xl shadow-md px-8 py-8 flex flex-col items-center border m-0 hover:scale-105 hover:shadow-xl transition-all"
            >
              <span className="text-5xl mb-4">“</span>
              <p className="text-gray-700 italic mb-5">"{testi.quote}"</p>
              <div className="font-semibold text-purple-800">{testi.author}</div>
              <div className="text-sm text-purple-500 mb-2">{testi.role}</div>
              <div className="flex gap-1">
                {[...Array(testi.rating)].map((_star, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: TRUSTED BY */}
      <section className="w-full py-10 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 shadow-inner m-0 flex flex-col">
        <div className="text-center mb-5">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Trusted by Clinics and Institutions
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {trusted.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{t.icon}</span>
              <span className="font-semibold text-gray-800">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#8058e5] via-[#6e49ed] to-[#33cef3] shadow-2xl">
        <div className="mb-7 flex items-center justify-center">
          <span className="px-7 py-3 bg-white/15 text-white font-semibold text-lg rounded-full border border-white/10 shadow">
            🌟 Ready to Modernize Your Healthcare?
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center leading-tight mb-2">
          Start Your <span className="text-[#6be7e2]">Digital Health</span> Journey <br />
          <span className="text-[#ffe373]">Today</span>
        </h1>
        <p className="text-white/90 text-lg my-3 max-w-2xl text-center">
          Join thousands of patients and providers already using our platform for fast, secure, and effective care.
        </p>
        <div className="flex flex-wrap justify-center gap-3 my-4">
          <div className="flex items-center gap-2 px-7 py-3 rounded-lg bg-white/15 border border-white/15 text-white font-medium shadow">
            <span>🛡️</span> Secure & Private
          </div>
          <div className="flex items-center gap-2 px-7 py-3 rounded-lg bg-white/15 border border-white/15 text-white font-medium shadow">
            <span>🤝</span> Easy to Use
          </div>
          <div className="flex items-center gap-2 px-7 py-3 rounded-lg bg-white/15 border border-white/15 text-white font-medium shadow">
            <span>🕑</span> 24/7 Support
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white font-bold px-8 py-3 rounded-full shadow hover:from-purple-600 hover:to-blue-400 transition"
          >
            Get Started Free
          </button>
          <button className="bg-white/15 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 hover:text-[#7a5cff] transition-all cursor-pointer">
            Sign In
          </button>
        </div>
        <div className="mt-10 text-white/80 text-base font-semibold text-center">
          <span>
            <span className="text-green-400 mr-3">●</span>No Hidden Fees
            <span className="text-blue-400 mx-3">●</span>Easy Cancellation
            <span className="text-purple-400 mx-3">●</span>Available Nationwide
          </span>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
