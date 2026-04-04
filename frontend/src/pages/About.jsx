import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="pt-28 pb-24 bg-gradient-to-br from-[#f9fbff] via-[#f1f4ff] to-[#eef1ff] text-gray-700 font-sans w-full overflow-hidden">
      
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wide text-[#3a3e61]">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e49ed] to-[#9b7cff]">US</span>
        </h1>
        <div className="w-28 h-1.5 bg-gradient-to-r from-[#6e49ed] to-[#9b7cff] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row gap-16 lg:gap-28 items-center max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#6e49ed] to-[#9b7cff] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img
            className="relative w-[500px] h-[340px] rounded-3xl border border-[#e3e7ff] object-cover shadow-xl group-hover:scale-105 transition-transform duration-500"
            src={assets.about_image1}
            alt="About MediQueue"
            loading="lazy"
          />
        </div>

        <div className="space-y-7 md:w-2/3 text-center md:text-left text-lg leading-relaxed text-[#293255]">
          <p>
            <span className="font-semibold text-[#6e49ed]">MediQueue</span> is dedicated to transforming healthcare through smart,
            seamless, and human-centered technology that simplifies how care is accessed.
          </p>

          <p>
            From instant appointment booking to real-time queue tracking, MediQueue
            empowers both patients and providers with transparency, speed, and control.
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-bold text-[#6e49ed] inline-block pb-2 border-b-2 border-[#6e49ed]">
              ✨ Our Vision
            </h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mt-4">
              To create a connected healthcare ecosystem where technology bridges gaps,
              reduces waiting, and delivers truly personalized care experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-28 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-[#3a3e61]">
          WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6e49ed] to-[#9b7cff]">CHOOSE US</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#6e49ed] to-[#9b7cff] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 px-6 md:px-0">
        {[
          {
            icon: "⚡",
            title: "EFFICIENCY",
            desc: "Smart scheduling designed to save time and eliminate unnecessary waiting.",
          },
          {
            icon: "📍",
            title: "CONVENIENCE",
            desc: "Instant access to trusted healthcare professionals around you.",
          },
          {
            icon: "💙",
            title: "PERSONALIZATION",
            desc: "Health insights, reminders, and care tailored specifically for you.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-3xl bg-white/70 backdrop-blur-lg border border-[#e3e7ff] p-10 flex flex-col gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#6e49ed]/10 to-[#9b7cff]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative text-5xl">{icon}</div>
            <h3 className="relative text-2xl font-bold text-gray-800">{title}</h3>
            <p className="relative text-gray-600 text-base leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;



