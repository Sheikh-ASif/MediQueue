import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const universalCardGradient =
  "bg-gradient-to-tr from-[#e3f1fd] via-[#ede7ff] to-[#f3f6fd] shadow-lg";

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

const mediqueueFAQs = [
  {
    question: "Is Mediqueue free for patients?",
    answer:
      "Absolutely! Mediqueue is completely free for patients. Our aim is to make modern healthcare accessible for everyone.",
  },
  {
    question: "Can I access prescriptions online?",
    answer:
      "Yes, all your prescriptions and medical records are securely stored and available for download anytime.",
  },
  {
    question: "How do appointment reminders work?",
    answer:
      "You get automated reminders by SMS and email for upcoming appointments, medication schedules, and follow-ups.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-0 mb-0 w-full max-w-full">
      {/* SECTION 1: HERO */}
      <section className="relative w-full  min-h-[610px] bg-gradient-to-br from-[#e6f1fb] via-[#ede7ff] to-[#f0f7fd] flex flex-col md:flex-row items-center justify-center px-0 pb-25 pt-40 rounded-none shadow-2xl overflow-hidden m-0">
        <div className="w-full md:w-[48%] flex flex-col justify-center items-end z-10 pr-4 py-8">
          <span className="px-6 py-2 bg-white/70 text-[#475da9] font-semibold text-base border border-white/80 rounded-lg mb-5 shadow">
            🏥 Modern, Trusted, 24/7 Medical Care
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 text-right max-w-lg drop-shadow bg-gradient-to-r from-[#4871ff] via-[#9f6ae4] to-[#fb5baa] bg-clip-text text-transparent">
            Health Management for the{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
              Modern Patient
            </span>
          </h1>
          <p className="text-[#4e5d77] text-lg mt-2 mb-4 max-w-lg leading-normal text-right font-medium">
            Experience seamless medical care with instant doctor bookings, smart
            reminders, and secure records—all in one place.
            <span className="block text-[#576ff7] font-semibold mt-2">
              No more queues. No more confusion.
            </span>
          </p>
          <div className="flex gap-4 mt-2 justify-end">
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#4871ff] via-[#8b5cf6] to-[#fb5baa] text-white font-bold px-8 py-3 rounded-full shadow-md hover:from-[#2563eb] hover:to-[#7c3aed] transition"
            >
              Get Started Free
            </button>
            <button className="bg-white/60 border border-[#ede7ff] text-[#7b5cff] font-semibold px-8 py-3 rounded-full hover:bg-white/80 hover:text-[#497fff] transition-all shadow-md">
              Watch Demo
            </button>
          </div>
          <div className="mt-7 text-[#7e6afb] text-sm text-right">
            <span className="inline-flex items-center gap-4 justify-end">
              <span className="flex gap-2 items-center">
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#4871ff] px-3 py-1 rounded font-semibold text-white">
                  🔒 Secure
                </span>
                <span>• 24/7 Emergency Care</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Appointment Tracking</span>
            </span>
          </div>
        </div>
        <div className="w-full md:w-[48%] flex items-center justify-start pl-4 py-4">
          <img
            src={assets.header_img}
            alt="Medical Illustration"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
            loading="lazy"
            style={{ filter: "brightness(1.10) contrast(1.1) saturate(1.1)" }}
          />
        </div>
      </section>

      {/* SECTION: Built for Modern Patient */}
      <section className="w-full pt-12 flex flex-col items-center bg-gradient-to-br from-[#e9fafe] to-[#e4ebfc]">
        <span className="inline-block px-5 py-2 mb-7 bg-blue-100 text-blue-500 font-semibold rounded-full">
          Why Patients & Clinics Choose Mediqueue
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Built for the{" "}
          <span className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
            Modern Patient
          </span>
        </h2>
        <p className="text-[#374151] text-lg mb-2 text-center max-w-3xl mx-auto">
          Discover a new way to manage your health. Mediqueue connects patients
          and doctors effortlessly, removes waiting, and brings clarity to your
          care journey.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 py-8">
          <div className="bg-white rounded-xl shadow p-8 w-80 flex flex-col items-center">
            <span className="text-3xl mb-3 inline-flex items-center justify-center h-12 w-12 bg-gradient-to-br from-[#3b82f6] to-[#2ad6f8] rounded-lg">
              <span role="img" aria-label="search-folder">
                📁
              </span>
            </span>
            <span className="text-xl font-bold mb-2 text-gray-900">
              Smart Queue Management
            </span>
            <span className="text-base text-gray-600">
              Fair, AI-powered appointment allocation. No more endless
              waiting—your spot in line is optimized and transparent.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-8 w-80 flex flex-col items-center">
            <span className="text-3xl mb-3 inline-flex items-center justify-center h-12 w-12 bg-gradient-to-br from-[#34d399] to-[#bef8e0] rounded-lg">
              <span role="img" aria-label="team">
                👥
              </span>
            </span>
            <span className="text-xl font-bold mb-2 text-gray-900">
              Team-based Consultation
            </span>
            <span className="text-base text-gray-600">
              Collaborate with doctors, caregivers, and family—all appointments
              and updates are instantly synced.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-8 w-80 flex flex-col items-center">
            <span className="text-3xl mb-3 inline-flex items-center justify-center h-12 w-12 bg-gradient-to-br from-[#a78bfa] to-[#f43f5e] rounded-lg">
              <span role="img" aria-label="zero-conflict">
                🎯
              </span>
            </span>
            <span className="text-xl font-bold mb-2 text-gray-900">
              Zero-Conflict Scheduling
            </span>
            <span className="text-base text-gray-600">
              Guaranteed fair appointments with instant notifications and
              approval tracking.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION: Simple Fast Effective */}
      <section className="w-full pt-14 pb-12 flex flex-col items-center bg-white">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Simple. Fast.{" "}
          <span className="bg-gradient-to-r from-[#34d399] to-[#3b82f6] bg-clip-text text-transparent">
            Effective.
          </span>
        </h2>
        <p className="text-[#64748b] text-lg mb-8 text-center max-w-3xl mx-auto">
          Get from booking to treatment in three fast steps. No more congestion
          or manual paperwork.
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-1 flex-row justify-center gap-16 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 inline-flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#fb5baa] to-[#fdba74] rounded-xl">
                <span role="img" aria-label="explore">
                  📖
                </span>
              </span>
              <span className="font-bold text-lg mb-2 text-gray-900">
                Discover & Book
              </span>
              <span className="text-gray-500 text-base text-center">
                Browse top doctors, book appointments, and see available slots.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 inline-flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#6366f1] to-[#a5b4fc] rounded-xl">
                <span role="img" aria-label="apply">
                  ⚡
                </span>
              </span>
              <span className="font-bold text-lg mb-2 text-gray-900">
                Apply Instantly
              </span>
              <span className="text-gray-500 text-base text-center">
                Confirm using quick forms and get immediate validation—skip the
                long wait.
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-4 inline-flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#34d399] to-[#67e8f9] rounded-xl">
                <span role="img" aria-label="progress">
                  📈
                </span>
              </span>
              <span className="font-bold text-lg mb-2 text-gray-900">
                Track Progress
              </span>
              <span className="text-gray-500 text-base text-center">
                Monitor every step—status updates and notifications at your
                fingertips.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: We Solved the Nightmare */}
      <section className="w-full py-16 flex flex-row items-stretch justify-center bg-gradient-to-r from-[#fef6f3] via-[#fff7e7] to-[#eeffee] gap-12">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-left">
            We Solved the{" "}
            <span className="bg-gradient-to-r from-[#fb5baa] to-[#fdba74] bg-clip-text text-transparent">
              Wait Nightmare
            </span>
          </h2>
          <ul className="space-y-4 w-full max-w-lg">
            <li className="bg-white rounded-xl shadow px-6 py-4 text-[#e11d48] font-semibold text-base">
              • Long queues for appointments
            </li>
            <li className="bg-white rounded-xl shadow px-6 py-4 text-[#e11d48] font-semibold text-base">
              • Endless confusion & manual check-ins
            </li>
            <li className="bg-white rounded-xl shadow px-6 py-4 text-[#e11d48] font-semibold text-base">
              • Zero clarity on appointment status
            </li>
            <li className="bg-white rounded-xl shadow px-6 py-4 text-[#e11d48] font-semibold text-base">
              • Conflicts that waste time & energy
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-left">
            Our{" "}
            <span className="bg-gradient-to-r from-[#34d399] to-[#3b82f6] bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <ul className="space-y-4 w-full max-w-lg">
            <li className="bg-[#e1fae7] rounded-xl shadow px-6 py-4 text-[#0d9488] font-semibold text-base">
              <span>✔ Transparent queue management & allocation</span>
            </li>
            <li className="bg-[#e1fae7] rounded-xl shadow px-6 py-4 text-[#0d9488] font-semibold text-base">
              <span>✔ Instant booking confirmation</span>
            </li>
            <li className="bg-[#e1fae7] rounded-xl shadow px-6 py-4 text-[#0d9488] font-semibold text-base">
              <span>✔ Real-time updates and smart notifications</span>
            </li>
            <li className="bg-[#e1fae7] rounded-xl shadow px-6 py-4 text-[#0d9488] font-semibold text-base">
              <span>✔ Hassle-free cancellation and reschedule</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 2-3: FEATURES */}
      <section className="w-full min-h-[480px] flex flex-col py-16 bg-gradient-to-r from-[#f4effc] via-[#ebf2ff] to-[#e3f9fe] shadow-inner m-0">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 mb-5 bg-purple-100 text-purple-600 font-semibold rounded-full">
            Key Features of Mediqueue
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Smart Tools for Modern Healthcare
          </h2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            Designed to make your experience easy, secure, and connected—for
            patients, doctors, and families.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className={`feature-card-pro flex flex-col items-center text-center w-64 p-8 rounded-2xl ${universalCardGradient} text-[#32364b] shadow-xl border-2 border-white/50 transition-all duration-300 cursor-pointer m-0`}
            >
              <span className="text-4xl mb-2">{card.icon}</span>
              <span className="text-xl font-extrabold mb-1">{card.title}</span>
              <span className="text-base opacity-90">{card.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section className="w-full min-h-[400px] bg-white py-12 rounded-none shadow-xl m-0 flex flex-col">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 mb-4 bg-purple-100 text-purple-600 font-semibold rounded-xl">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Your Simple 4-Step{" "}
            <span className="text-purple-500">Medical Journey</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Our process makes care fast, secure and efficient for everyone.
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

      {/* SECTION: FAQ */}
      <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-[#e9fafe] via-[#e4ebfc] to-[#e3f9fe]">
        <span className="inline-block px-7 py-3 mb-7 bg-blue-100 text-blue-600 font-semibold rounded-full">
          Got Questions?
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-center">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-[#475da9] text-lg text-center mb-8 max-w-3xl">
          Everything you need to know about using Mediqueue.
        </p>
        <div className="w-full max-w-2xl mx-auto">
          {mediqueueFAQs.map((item, idx) => (
            <details
              key={idx}
              className="bg-white border rounded-xl shadow-sm mb-5 p-6"
            >
              <summary className="font-semibold text-[#6366f1] cursor-pointer mb-2">
                {item.question}
              </summary>
              <p className="text-gray-600 mt-2">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION: Testimonials */}
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

      {/* SECTION: Trusted By */}
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

      {/* SECTION: Call to Action */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf4ff] via-[#e8eaff] to-[#f0f7fd]">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e2e8f0] p-10 flex flex-col items-center transition hover:shadow-[0_0_32px_8px_#d6e6ff80]">
          <div className="mb-8 w-full flex items-center justify-center">
            <span className="px-8 py-4 bg-gradient-to-r from-[#f3f7ff] to-[#ecebfa] text-[#4172fa] font-semibold text-lg rounded-2xl border shadow-lg tracking-wide">
              🌟 Ready to Modernize Your Healthcare?
            </span>
          </div>
          <h1 className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold text-center leading-tight mb-2 tracking-tight">
            Start Your <span className="text-[#21d7ec]">Digital Health</span>{" "}
            Journey <br />
            <span className="text-[#f9cc25]">Today</span>
          </h1>
          <p className="text-[#415381] text-lg my-4 max-w-xl text-center font-medium">
            Join thousands of patients and providers already using Mediqueue for
            fast, secure, and effective care.
          </p>
          <div className="flex flex-wrap justify-center gap-3 my-4">
            <div className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f3f6fd] border border-[#e0e7ef] text-[#4172fa] font-semibold shadow-sm">
              <span>🛡️</span> Secure & Private
            </div>
            <div className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f3f6fd] border border-[#e0e7ef] text-[#10b981] font-semibold shadow-sm">
              <span>🤝</span> Easy to Use
            </div>
            <div className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f3f6fd] border border-[#e0e7ef] text-[#6366f1] font-semibold shadow-sm">
              <span>🕑</span> 24/7 Support
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-7">
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#4172fa] via-[#8b5cf6] to-[#ec4899] text-white font-bold px-8 py-3 rounded-full shadow-md hover:from-[#2563eb] hover:to-[#a78bfa] transition"
            >
              Get Started Free
            </button>
            <button className="bg-white border border-[#e0e7ef] text-transparent bg-clip-text bg-gradient-to-r from-[#4172fa] via-[#8b5cf6] to-[#ec4899] font-semibold px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#f3f7ff] hover:to-[#ecebfa] transition-all cursor-pointer">
              Sign In
            </button>
          </div>
          <div className="mt-10 w-full text-[#8091ba] text-base font-semibold text-center flex justify-center flex-wrap gap-4">
            <span>
              <span className="text-green-400 mr-2">●</span>No Hidden Fees
            </span>
            <span>
              <span className="text-blue-400 mr-2">●</span>Easy Cancellation
            </span>
            <span>
              <span className="text-purple-400 mr-2">●</span>Available
              Nationwide
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
