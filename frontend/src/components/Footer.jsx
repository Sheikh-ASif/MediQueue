import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 md:mx-10 rounded-t-2xl shadow-inner">
      {/* Content */}
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 px-6 md:px-12 lg:px-20 py-16 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-4 w-44" src={assets.logo} alt="MediQueue logo" />
          <p className="max-w-md text-gray-600 leading-6 font-medium">
            We empower patients by providing simple, reliable, and seamless
            access to a wide network of trusted healthcare professionals,
            ensuring quality care and convenience anytime, anywhere.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-lg font-semibold mb-5 text-gray-900">Company</p>
          <ul className="flex flex-col gap-3 text-gray-600 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-5 text-gray-900">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-3 text-gray-600 font-medium">
            <li className="hover:text-blue-600 transition">+2-131-765-8890</li>
            <li className="hover:text-blue-600 transition">
              mediqueue@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Bottom */}
      <div className="text-center py-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MediQueue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
