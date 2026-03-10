import { CircleUserIcon, DollarSign, SquareCheckBig, User } from 'lucide-react'
import React from "react";


// const Profile = () => {
//     return (
        // <div className='flex  h-screen w-fit mt-10  justify-around gap-10 p-5'>


        //     <div className='h-150 w-80 rounded-lg bg-green-300 font-mono'>
        //         <div className='flex items-center justify-center rounded-t-lg p-8  bg-pink-600'>
        //             <CircleUserIcon className='size-25' />
        //         </div>
        //         <div className='flex flex-col items-center mt-8 '>
        //             <div className='   '>
        //                 <img className='h-25 w-25 border rounded-lg' src="" alt="" />
        //             </div>
        //             <div className=''>
        //                 <p className='mt-8'>Name: Kapil Chapagain</p>
        //                 <p className='mt-2'>Email: Kapilchapagain@gmail.com</p>
        //                 <p className='mt-2'>Class: 4</p>
        //             </div>
        //             <div className='bg-green-200 h-10 w-40 flex items-center rounded-2xl font-sans justify-center mt-6'>STATUS: ENROLLED</div>

        //         </div>

        //     </div >
        //     <div className='h-150 w-fit bg-blue-300 rounded-lg font-mono'>
                
        //         <div className='m-5  h-40 w-230 bg-green-200 rounded-xl'>

        //             <p className='px-5 py-6 text-xl'>Overall Summary</p>
        //             <div className='flex items-center justify-between px-10  '>

        //                 <div>
        //                     <p>Total Due</p>
        //                     <p className='text-xl bg-white h-8 w-fit rounded'>10,000</p>
        //                 </div>

        //                 <div>
        //                     <p>Total Paid</p>
        //                     <p className='text-xl'>20,000</p>
        //                 </div>
        //                 <div>
        //                     <p>Next Due Date</p>
        //                     <p className='text-xl'>October 15, 2024</p>
        //                 </div>
        //                 <div className='mb-5'>
        //                     <button className='bg-amber-400 h-12 w-48 rounded-3xl text-white text-lg '>Pay Total Due</button>
        //                 </div>

        //             </div>
        //             <div className='flex items-center justify-center gap-10'>



        //             </div>
        //         </div>
                {/* <div className='m-5 h- w-230 bg-white rounded-xl gap-'>
                    <div className=' px-4 py-2'>Payment Detail Cards</div>
                    <div className='px-3' >
                        <table className=' min-w-full'>
                        <thead className=''>
                            <tr className='border-b border-gray-400'>
                                <th className=' px-4 py-2'>Fee Detail</th>
                                <th className='flex px-4 py-2'>Total Amount
                                    <DollarSign className='size-4 mt-1'/> 
                                </th>
                                <th className=' px-4 py-2'>Paid</th>
                                <th className=' px-4 py-2'>Due</th>
                                <th className='flex px-4 py-2'>Status
                                    <SquareCheckBig className='size-4 mt-1'/>
                                </th>
                                <th className=' px-4 py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-gray-400'>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                            <tr className='border-b border-gray-400'>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                            <tr className='border-b border-gray-400'>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                            <tr className='border-b border-gray-400'>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                            <tr className='border-b border-gray-400'>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                            <tr>
                                <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                <td className=' px-4 py-2'>50000</td>
                                <td className=' px-4 py-2'>40000</td>
                                <td className=' px-4 py-2'>10000</td>
                                <td className=' px-4 py-2'>Partial</td>
                                <td className=' px-4 py-2'>
                                    <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                </td>
                            </tr>
                        </tbody>

                        </table>
                       
                </div>

                </div> */}

        //     </div>
        // </div>
        
//     )
// }

// export default Profile


const Profile = () => {
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
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />

          <h2 className="text-xl font-semibold">
            Ishmam Ahasan Samin
          </h2>

          <div className="mt-6 text-left space-y-2 text-gray-700">
            <p><strong>Student ID:</strong> 321000001</p>
            <p><strong>Class:</strong> 4</p>
            <p><strong>Section:</strong> A</p>
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
                  <td>125</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Academic Year</td>
                  <td>2020</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Gender</td>
                  <td>Male</td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 font-medium">Religion</td>
                  <td>Group</td>
                </tr>

                <tr>
                  <td className="py-2 font-medium">Blood</td>
                  <td>B+</td>
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