import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between
      bg-gradient-to-r from-[#e6f1fb] via-[#ede7ff] to-[#f0f7fd]
      rounded-3xl px-8 sm:px-16 lg:px-24 my-16 md:mx-10 shadow-2xl min-h-[270px]"
    >
      {/* Left Side */}
      <div className="flex-1 py-12 md:py-16 lg:py-20 md:pl-8">
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug mb-4 drop-shadow-lg">
          <div>Your Health, Our Priority</div>
          <div className="text-gradient bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent font-extrabold">
            Book With 100+ Trusted Doctors
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white text-base lg:text-lg px-12 py-4 rounded-full mt-6 font-bold shadow-lg hover:brightness-110 transition-all"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 lg:w-[360px] relative justify-center items-center">
        <img
          className="w-full max-w-md mx-auto object-contain drop-shadow-xl"
          src={assets.appointment_img}
          alt="Appointment Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
