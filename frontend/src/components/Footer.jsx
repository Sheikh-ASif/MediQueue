import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#f8f9ff] text-[#2c2f48] pt-20 pb-10 mt-24 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e3e7ff] via-[#f8f9ff] to-[#ffffff] opacity-90"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8 z-10">
        {/* Left Section: Logo + Description */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-1.5 bg-gradient-to-tr from-[#7a5cff] to-[#33cef3] rounded-full shadow-lg">
              <img
                src={assets.logo}
                alt="MediQueue logo"
                className="w-12 h-12 rounded-full bg-white p-2"
              />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#4f43a6] tracking-wide">
                MediQueue
              </h3>
              <p className="text-xs text-[#9aa0c7] font-medium">
                Queue Management System
              </p>
            </div>
          </div>
          <p className="text-[#62688f] text-sm leading-relaxed mb-6">
            Simplifying healthcare experiences through real-time queue
            management, appointment scheduling, and patient engagement tools.
          </p>

          <ul className="text-[#7c83b7] text-sm space-y-2">
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:support@mediqueue.com"
                className="hover:text-[#6e49ed] transition-colors duration-200"
              >
                support@mediqueue.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>+2-131-765-8890</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span>
              <span>42 Healthy Street, Medical City</span>
            </li>
          </ul>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex flex-col items-start md:items-center justify-center">
          <h4 className="text-lg font-semibold mb-6 text-[#4f43a6] tracking-wide">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-[#6b7198] font-medium">
            <li>
              <a
                href="/"
                className="hover:text-[#6e49ed] hover:underline transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-[#6e49ed] hover:underline transition-all duration-200"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="hover:text-[#6e49ed] hover:underline transition-all duration-200"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#6e49ed] hover:underline transition-all duration-200"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <h4 className="text-lg font-semibold mb-6 text-[#4f43a6] tracking-wide">
            Connect With Us
          </h4>
          <p className="mb-3 text-[#7c83b7] text-sm max-w-xs">
            Stay connected with MediQueue for the latest updates and news.
          </p>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-white shadow-md hover:bg-[#7a5cff] hover:text-white transition-all duration-200"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="p-2.5 rounded-xl bg-white shadow-md hover:bg-[#4a9ff5] hover:text-white transition-all duration-200"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white shadow-md hover:bg-[#0077b5] hover:text-white transition-all duration-200"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="p-2.5 rounded-xl bg-white shadow-md hover:bg-[#24292f] hover:text-white transition-all duration-200"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-16 border-t border-[#d3d8fa] opacity-60" />

      {/* Bottom Footer */}
      <div className="relative z-10 text-center mt-6 text-xs text-[#4f43a6] font-semibold pb-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center max-w-7xl mx-auto px-8">
        <div>© {new Date().getFullYear()} MediQueue. All rights reserved.</div>
        <div>
          Crafted with <span className="text-pink-500">♥</span> by MediQueue
          Team
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
