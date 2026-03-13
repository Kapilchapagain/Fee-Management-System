import { CircleUserIcon, DollarSign, SquareCheckBig, User } from 'lucide-react'
import React from "react";
import { useParams } from 'react-router-dom';
import { students } from '../Data'; 



const Profile = () => {
  const {id}=useParams()
  const temp=students
  const student= temp.find((obj)=>obj.id===Number(id))

  console.log(student)
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-green-400 p-10">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-700">
          Student Profile Page Design Example
        </h1>
        <p className="text-gray-700">
          A responsive student profile page design.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Left Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">

          <img
            src={student.image}
            alt="profile"
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />

          <h2 className="text-xl font-semibold">
            {student.name}
          </h2>

          <div className="mt-6 text-left space-y-2 text-gray-700">
            <p><strong>Student ID:</strong>{student.id}</p>
             
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Email:</strong> {student.email}</p>
           
          </div>

        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6">

          {/* General Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-lg font-semibold mb-4">
              General Information
            </h2>

            <table className="w-full">

              <tbody className="text-gray-700">

                <tr className="border-b">
                  <td className="py-2 font-medium">Roll</td>
                  <td>{student.roll}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Academic Year</td>
                  <td>{student.academicYear}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Gender</td>
                  <td>{student.gender}</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Religion</td>
                  <td>{student.religion}</td>
                </tr>

                <tr>
                  <td className="py-2 font-medium">Blood</td>
                  <td>{student.blood}</td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Other Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-lg font-semibold mb-4">
              Other Information
            </h2>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;