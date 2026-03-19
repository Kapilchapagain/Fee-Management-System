import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const SendOtp = () => {
  const[otp,setOtp]=useState("");
    const navigate=useNavigate()
     let cOtp=12345;
  return (
  <div className="h-screen w-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="relative w-96 bg-white rounded-2xl shadow-lg p-6">

        {/* Close Button */}
        {/* <button className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-sm bg-black text-white hover:bg-red-500 transition">
          X
        </button> */}

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password ?
        </h2>

        {/* Otp Input */}
        <div className="flex flex-col gap-2 mb-5">
          <label className="text-sm font-medium text-gray-600">
            Generated Otp
          </label>
          <input
            type="number"
            onChange={(e)=>setOtp(e.target.value)}
            placeholder="Enter the otp"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button onClick={()=>{
        if(cOtp=otp)
         navigate("/changepassword")}
        }
           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>

      </div>

    </div>
  )
}

export default SendOtp