import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <div className="pt-20 min-h-[90vh] flex items-center justify-center bg-gradient-to-tr from-[#f6f8ff] to-[#ebf3fd]">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-center justify-center">
        {/* Left Card: What We Provide */}
        <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-[#339cf7]">What We Provide</h3>
          <ul className="text-gray-700 text-base leading-relaxed flex flex-col gap-2">
            <li>✔️ Easy online appointment booking</li>
            <li>✔️ Live queue status and updates</li>
            <li>✔️ Secure patient data management</li>
            <li>✔️ 24/7 availability for scheduling</li>
            <li>✔️ Fast, responsive support team</li>
          </ul>
        </div>

        {/* Center: Login/SignUp Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-6 p-14 w-full md:w-2/5 bg-white rounded-2xl shadow-2xl"
          style={{ marginTop: "4rem", marginBottom: "4rem" }}
        >
          <div className="text-center mb-1">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
              {state === 'Sign Up' ? "Create Account" : "Login"}
            </h2>
            <div className="w-16 h-1 mt-2 mx-auto bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] rounded-full" />
            <p className="text-gray-500 text-sm mt-3">
              Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointments
            </p>
          </div>
          {state === "Sign Up" && (
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="mt-1 border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#7a5cff] transition shadow"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                placeholder="Your Name"
              />
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="mt-1 border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#7a5cff] transition shadow"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="mt-1 border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-[#7a5cff] transition shadow"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-[#7a5cff] via-[#339cf7] to-[#33cef3] hover:opacity-90 text-white w-full py-3 rounded-full font-bold text-lg transition shadow-lg"
          >
            {state === 'Sign Up' ? "Create Account" : "Login"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            {state === "Sign Up" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setState('Login')}
                  className="text-[#339cf7] font-semibold cursor-pointer transition hover:text-[#4831d4]"
                >
                  Login here
                </span>
              </>
            ) : (
              <>
                Create a new account?{" "}
                <span
                  onClick={() => setState('Sign Up')}
                  className="text-[#339cf7] font-semibold cursor-pointer transition hover:text-[#4831d4]"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </form>

        {/* Right Card: Why Choose Us */}
        <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-[#33cef3]">Why Choose Us?</h3>
          <ul className="text-gray-700 text-base leading-relaxed flex flex-col gap-2">
            <li>🛡️ Trusted by leading clinics</li>
            <li>🔒 Strong security for your info</li>
            <li>⚡ Fast bookings, no waiting</li>
            <li>🌟 Intuitive, mobile-friendly UI</li>
            <li>✅ Real-time queue transparency</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login



