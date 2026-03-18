import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const navigate=useNavigate()
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="relative w-96 bg-white rounded-2xl shadow-lg p-6">


                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Forgot Password ?
                </h2>

                {/* Password Input */}
                <div className="flex flex-col gap-2 mb-5">
                    <label className="text-sm font-medium text-gray-600">
                        New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Confirm password */}
                <div className="flex flex-col gap-2 mb-5">
                    <label className="text-sm font-medium text-gray-600">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Button */}
                <button onClick={()=>navigate("/login")} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Submit
                </button>

            </div>

        </div>
    )
}

export default ChangePassword