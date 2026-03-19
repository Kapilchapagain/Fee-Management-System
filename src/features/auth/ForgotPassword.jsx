import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  localStorage.setItem("email","user@gmail.com");
  const emailFromDb=localStorage.getItem("email");
  const[email,SetEmail]=useState("");




    const navigate=useNavigate()
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="relative w-96 bg-white rounded-2xl shadow-lg p-6">


        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password ?
        </h2>

        {/* Email Input */}
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            onChange={(e)=>SetEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className='text-red-400'>
            {emailFromDb!=email?"please enter correct user email":""}
          </p>

        </div>

        {/* Button */}
        <button onClick={()=>{
              if(emailFromDb==email)navigate("/sendotp")  
            } }
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Send OTP
        </button>

      </div>

    </div>
  )
}

export default ForgotPassword