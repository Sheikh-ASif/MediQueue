import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

// Section 2-3 Cards (Medical Features)
const featureCards = [
  {
    icon: "🩺",
    title: "Verified Doctors",
    desc: "Consult only with highly qualified, certified healthcare professionals.",
    color: "bg-gradient-to-tr from-blue-500 to-purple-400",
  },
  {
    icon: "📅",
    title: "Instant Appointments",
    desc: "Book slots in seconds and manage your schedule digitally.",
    color: "bg-gradient-to-tr from-green-400 to-blue-400",
  },
  {
    icon: "💊",
    title: "E-Prescriptions",
    desc: "Doctors send your prescription straight to your device and pharmacy.",
    color: "bg-gradient-to-tr from-pink-400 to-yellow-300",
  },
  {
    icon: "📊",
    title: "Health Analytics",
    desc: "Track your progress, health metrics, and wellness trends with ease.",
    color: "bg-gradient-to-tr from-indigo-500 to-blue-300",
  },
];

// Section 4 - How It Works Steps
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

// Section 5 - Testimonials
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

// Section 6 - Trusted by
const trusted = [
  { icon: "🦷", label: "Dental Clinics" },
  { icon: "🏥", label: "Hospitals" },
  { icon: "👨‍⚕️", label: "Senior Care Centers" },
  { icon: "⚕️", label: "Telemedicine Partners" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: Hero */}
      <section className="relative w-full bg-gradient-to-br from-[#8058e5] via-[#6e49ed] to-[#33cef3] min-h-[520px] flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl px-10 pt-16 pb-10 overflow-hidden mb-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 z-10">
          <div className="mb-6 flex items-center">
            <span className="px-5 py-2 rounded-full bg-white/20 text-white font-semibold text-base border border-white/15 shadow">
              🏥 Seamless, Trusted, 24/7 Medical Care
            </span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Your <span className="text-[#ffe373]">Health</span>,<br />
            <span className="text-[#2ad6f8]">Our Priority</span>
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-xl">
            Book appointments, consult specialists, manage records, and access
            care in just a few clicks—anytime, anywhere.
          </p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white font-bold px-8 py-3 rounded-full shadow hover:from-purple-600 hover:to-blue-400 transition cursor-pointer"
            >
              Get Started Free
            </button>
            <button className="bg-white/15 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 hover:text-[#7a5cff] transition-all">
              Watch Demo
            </button>
          </div>
          <div className="mt-7 text-white/80 text-sm">
            <span className="inline-flex items-center gap-4">
              <span className="flex gap-2 items-center">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 px-2 py-1 rounded font-semibold">
                  🔒 Secure
                </span>
                <span>• 24/7 Emergency Care</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Appointment Tracking</span>
            </span>
          </div>
        </div>
        {/* Right: Medical Illustration (optional for SaaS look) */}
        <div className="hidden md:flex w-1/2 items-center justify-end">
          <img
            src={assets.header_img}
            alt="Medical Illustration"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
            loading="lazy"
            style={{ filter: "brightness(1.10) contrast(1.1) saturate(1.1)" }}
          />
        </div>
      </section>

      {/* Section 2-3: Feature Cards */}
      <section className="w-full flex flex-wrap items-center justify-center gap-8 py-10 bg-gradient-to-r from-[rgba(110,73,237,0.07)] to-[rgba(51,206,243,0.08)] rounded-3xl shadow-inner mb-12">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col items-center text-center w-60 p-8 rounded-2xl ${card.color} text-white shadow-xl`}
          >
            <span className="text-4xl mb-2">{card.icon}</span>
            <span className="text-xl font-extrabold mb-1">{card.title}</span>
            <span className="text-base opacity-90">{card.desc}</span>
          </div>
        ))}
      </section>

      {/* Section 4: How It Works */}
      <section className="bg-white py-12 rounded-3xl shadow-xl max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <span className="inline-block px-5 py-2 mb-4 bg-purple-100 text-purple-600 rounded-full font-semibold text-base">
            How It Works
          </span>
          <h2 className="text-[2rem] md:text-3xl font-extrabold text-gray-900">
            A Simple 4-Step{" "}
            <span className="text-purple-500">Medical Journey</span>
          </h2>
          <p className="text-gray-600 mt-1 text-lg">
            Our care process makes health simple and efficient for everyone.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 mt-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center w-56 p-8 rounded-2xl bg-gradient-to-tr from-purple-50 to-blue-50 border shadow-md"
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

      {/* Section 5: Testimonials */}
      <section className="py-12 bg-gradient-to-br from-[#f0f3fa] via-[#e9e4fc] to-[#e4f7fd] rounded-3xl max-w-6xl mx-auto shadow-lg mb-12">
        <div className="text-center mb-8">
          <span className="inline-block px-5 py-2 mb-3 bg-purple-100 text-purple-500 rounded-full font-semibold text-base">
            What Patients & Doctors Say
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
            Real Experiences, Real Impact
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="w-96 bg-white rounded-2xl shadow-md px-8 py-7 flex flex-col items-center border"
            >
              <span className="text-5xl mb-4">“</span>
              <p className="text-gray-700 italic mb-5">"{testi.quote}"</p>
              <div className="font-semibold text-purple-800">
                {testi.author}
              </div>
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

      {/* Section 6: Trusted By */}
      <section className="py-10 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-3xl shadow-inner max-w-4xl mx-auto mb-10">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
            Trusted by Clinics and Institutions
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {trusted.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{t.icon}</span>
              <span className="font-semibold text-gray-800">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/** Section 7 */}

      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#8058e5] via-[#6e49ed] to-[#33cef3] rounded-3xl shadow-2xl px-6 pt-24 pb-20 mb-10">
        <div className="mb-6 flex items-center justify-center">
          <span className="px-5 py-2 rounded-full bg-white/20 text-white font-semibold text-base border border-white/10 shadow">
            🌟 Ready to Modernize Your Healthcare?
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center leading-tight mb-3">
          Start Your <span className="text-[#6be7e2]">Digital Health</span>{" "}
          Journey
          <br />
          <span className="text-[#ffe373]">Today</span>
        </h1>
        <p className="text-white/90 text-lg mt-2 mb-8 max-w-2xl text-center">
          Join thousands of patients and providers already using our platform
          for fast, secure, and effective care.
        </p>
        <div className="flex flex-wrap justify-center gap-4 my-3">
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium shadow">
            <span>🛡️</span> Secure & Private
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium shadow">
            <span>🤝</span> Easy to Use
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium shadow">
            <span>🕑</span> 24/7 Support
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-7">
          <button className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 text-white font-bold px-8 py-3 rounded-full shadow hover:from-purple-600 hover:to-blue-400 transition">
            Get Started Free
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white/15 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 hover:text-[#7a5cff] transition-all cursor-pointer"
          >
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
