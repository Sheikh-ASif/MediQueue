import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    message: "",
  });
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="px-6 pt-24 md:px-16 lg:px-28 bg-gradient-to-br from-[#f4f7ff] to-[#e5f3fa] min-h-screen">
      {/* Section Header */}
      <div className="text-center pb-3">
        <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] bg-clip-text tracking-wide">
          CONTACT <span className="text-gray-900">US</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7a5cff] to-[#33cef3] mx-auto mt-2 rounded-full shadow"></div>
      </div>

      <div className="my-14 flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[400px] rounded-3xl border-4 border-[#e0e6ff] shadow-xl hover:scale-105 transition-transform duration-500"
          src={assets.contact_us1}
          alt="Contact MediQueue"
        />

        {/* Contact Info Block */}
        <div className="flex flex-col justify-center items-start gap-7 p-8 bg-white/80 border border-[#e0e6ff] rounded-2xl shadow backdrop-blur-md">
          <div>
            <p className="font-bold text-lg text-[#2a3080] mb-1">📍 Our Office</p>
            <p className="text-gray-600">
              32671 New Street Tower <br /> Suite 420, Birmingham, UK
            </p>
          </div>
          <div>
            <p className="font-bold text-lg text-[#2a3080] mb-1">☎ Get in Touch</p>
            <p className="text-gray-600">
              Tel: (415) 555-0132 <br />
              Email:{" "}
              <a
                href="mailto:mediqueue@example.com"
                className="text-blue-600 hover:underline"
              >
                mediqueue@example.com
              </a>
            </p>
          </div>
          <div>
            <p className="font-bold text-lg text-[#2a3080] mb-1">
              💼 Careers at MediQueue
            </p>
            <p className="text-gray-600">
              Learn more about our teams and exciting job opportunities.
            </p>
          </div>
          <button className="mt-2 font-bold border border-[#7a5cff] text-[#7a5cff] rounded-full px-8 py-3 text-sm hover:bg-[#7a5cff] hover:text-white transition duration-400 shadow-lg">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="max-w-xl mx-auto my-12">
        <div
          onMouseEnter={() => setFormVisible(true)}
          onMouseLeave={() => setFormVisible(false)}
          className="relative w-full"
        >
          <button className="bg-gradient-to-r from-[#8058e5] via-[#6e49ed] to-[#33cef3] text-white rounded-full px-10 py-4 font-bold shadow-xl hover:scale-105 transition w-full cursor-pointer text-lg">
            Talk to Our Team
          </button>
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden shadow-2xl
              ${formVisible ? "max-h-[44rem] opacity-100 py-9" : "max-h-0 opacity-0 py-0 pointer-events-none"}`}
            style={{
              position: "absolute",
              top: "110%",
              left: 0,
              width: "100%",
              background: "white",
              borderRadius: "1.5rem",
              border: "1px solid #e0e6ff",
              boxShadow: "0 14px 44px 0 rgba(30,64,175,0.10)",
              zIndex: 50,
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-8">
              <h3 className="font-semibold text-[#3d3c60] text-2xl mb-1 text-center tracking-wide">Send Your Inquiry</h3>
              <div>
                <label className="block text-sm font-bold text-[#7a5cff] mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="block w-full px-5 py-3 border border-[#d0d9f7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a5cff] bg-[#f6f8fb] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#7a5cff] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Your password"
                  className="block w-full px-5 py-3 border border-[#d0d9f7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a5cff] bg-[#f6f8fb] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#7a5cff] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter your message..."
                  className="block w-full px-5 py-3 border border-[#d0d9f7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a5cff] bg-[#f6f8fb] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#8058e5] via-[#6e49ed] to-[#33cef3] text-white rounded-full px-10 py-3 font-bold shadow-lg hover:bg-[#553cdd] transition-all w-full cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;










