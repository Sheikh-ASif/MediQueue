import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#28244b] via-[#312b5b] to-[#122642] text-[#f3f5fe] pt-16 pb-4 mt-24 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        {/* Left Section: Logo + Description */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <img className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8058e5] via-[#6e49ed] to-[#33cef3] shadow-lg p-1" src={assets.logo} alt="MediQueue logo" />
            <div>
              <span className="text-xl font-extrabold text-[#a589fa] tracking-wide">
                MediQueue
              </span>
              <div className="text-xs text-[#bfc6ea] font-semibold">
                Management System
              </div>
            </div>
          </div>
          <div className="text-[#c7d2ee] text-sm mb-5">
            A secure and efficient platform for healthcare appointment scheduling, patient management, and seamless medical team communication.
          </div>
          <ul className="text-[#92b5d4] text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:support@mediqueue.com"
                className="hover:underline hover:text-[#6be7e2] transition"
              >
                support@mediqueue.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              +2-131-765-8890
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              42 Healthy Street, Medical City
            </li>
          </ul>
        </div>
        {/* Center Section: Quick Links */}
        <div className="flex flex-col items-start md:items-center justify-center">
          <div className="text-lg font-bold mb-6 text-[#a589fa] tracking-wider">
            Quick Links
          </div>
          <ul className="flex flex-col gap-3 text-[#c7d2ee] font-medium">
            <li>
              <a href="/" className="hover:text-[#75d5f6] hover:underline transition">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-[#75d5f6] hover:underline transition">
                Login
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-[#75d5f6] hover:underline transition">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#75d5f6] hover:underline transition">
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* Right Section: Social Links */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <div className="text-lg font-bold mb-6 text-[#a589fa] tracking-wider">
            Connect With Us
          </div>
          <div className="mb-3 text-[#d6ddf6] text-sm">
            Follow us on social media for updates and announcements.
          </div>
          <div className="flex space-x-3 mt-1">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-[#1a2036] hover:bg-[#3b82f6] transition"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="p-2 rounded-lg bg-[#1a2036] hover:bg-[#38bdf8] transition"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-[#1a2036] hover:bg-[#818cf8] transition"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="p-2 rounded-lg bg-[#1a2036] hover:bg-[#bfc6ea] transition"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-[#222848] opacity-70" />
      <div className="text-center mt-6 text-xs text-[#6edcfa] font-semibold pb-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto px-8">
        <div>© {new Date().getFullYear()} MediQueue. All rights reserved.</div>
        <div className="text-[#a589fa] tracking-wide">
          Crafted with <span className="text-pink-400">♥</span> for patients and healthcare professionals
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200 md:mx-10 rounded-t-2xl shadow-inner">
//       {/* Content */}
//       <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 px-6 md:px-12 lg:px-20 py-16 text-sm">
//         {/* Left Section */}
//         <div>
//           <img className="mb-4 w-44" src={assets.logo} alt="MediQueue logo" />
//           <p className="max-w-md text-gray-600 leading-6 font-medium">
//             We empower patients by providing simple, reliable, and seamless
//             access to a wide network of trusted healthcare professionals,
//             ensuring quality care and convenience anytime, anywhere.
//           </p>
//         </div>

//         {/* Center Section */}
//         <div>
//           <p className="text-lg font-semibold mb-5 text-gray-900">Company</p>
//           <ul className="flex flex-col gap-3 text-gray-600 font-medium">
//             <li className="hover:text-blue-600 cursor-pointer transition">
//               Home
//             </li>
//             <li className="hover:text-blue-600 cursor-pointer transition">
//               About Us
//             </li>
//             <li className="hover:text-blue-600 cursor-pointer transition">
//               Contact Us
//             </li>
//             <li className="hover:text-blue-600 cursor-pointer transition">
//               Privacy Policy
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div>
//           <p className="text-lg font-semibold mb-5 text-gray-900">
//             Get In Touch
//           </p>
//           <ul className="flex flex-col gap-3 text-gray-600 font-medium">
//             <li className="hover:text-blue-600 transition">+2-131-765-8890</li>
//             <li className="hover:text-blue-600 transition">
//               mediqueue@example.com
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="px-6 md:px-12 lg:px-20">
//         <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
//       </div>

//       {/* Bottom */}
//       <div className="text-center py-6">
//         <p className="text-gray-500 text-sm">
//           © {new Date().getFullYear()} MediQueue. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
