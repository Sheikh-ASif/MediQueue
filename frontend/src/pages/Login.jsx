import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendUrl, token, setToken} = useContext(AppContext)
  const navigate = useNavigate()
   
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add authentication logic here
    // console.log({ name, email, password });

    try{

      if(state === 'Sign Up') {
        const {data} = await axios.post( backendUrl + '/api/user/register', {name, password, email})
        if(data.success ){
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else{
          toast.error(data.message)
        }
      } else{
        const {data} = await axios.post( backendUrl + '/api/user/login', {password, email})
        if(data.success ){
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else{
          toast.error(data.message)
        }
      }

    } catch(error){
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if(token){
      navigate('/')
    }

  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col gap-4 p-8 w-full max-w-md rounded-xl shadow-2xl bg-white text-gray-700">
       
        <h2 className="text-2xl font-semibold text-center">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-sm text-gray-500">
          Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointments
        </p>

      
        {state === "Sign Up" && (
          <div className="flex flex-col">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              // onChange={(e) => setEmail(e.target.name)}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md font-medium transition cursor-pointer"
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        
        <p className="text-center text-sm text-gray-500 mt-3">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState('Login')}
                className="text-blue-500 cursor-pointer font-medium"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setState('Sign Up')}
                className="text-blue-500 cursor-pointer font-medium"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  )
}

export default Login

