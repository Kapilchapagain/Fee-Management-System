import { Search } from 'lucide-react'
import React from 'react'
import { students } from '../../../Data'

const UserTable = () => {
  return (
    
      <div className='m-10  h-80 rounded bg-gray-100 '>
                    <div className='flex justify-between px-5 '>
                        <div className='flex mt-8'>
                            <input type="text" className='h-10 w-60 border-2 rounded' placeholder=' Search...' />
                            <Search className=' absolute ml-52 mt-2' />
                        </div>

                        <button className='bg-blue-600 h-10 w-40 text-white rounded font-serif mt-8'>Add Student</button>


                    </div>
                    <div className='flex items-center justify-around mt-5 px-5 '>
                        
                    <table className='min-w-full  border-2'>
                        <thead >
                            <tr className='hover:bg-gray-200'>
                            <th className='border px-4 py-2'>SN</th>
                            <th className='border px-4 py-2' >NAME</th>
                            <th className='border px-4 py-2'>EMAIL</th>
                            <th className='border px-4 py-2'>CLASS</th>
                            <th className='border px-4 py-2'>PHONE</th>
                            <th className='border px-4 py-2'>Total Fee</th>
                            <th className='border px-4 py-2'>Due Amount</th>
                            <th className='border px-4 py-2'>Paid Amount</th>
                            <th className='border px-4 py-2'>STATUS</th>

                            </tr>
                            
                        </thead>
                        <tbody>
                            {students.map((student)=>{
                                return(

                            
                            <tr className='hover:bg-gray-200'>
                                <td className='border px-4 py-2'>{student.id}</td>
                                <td className='border px-4 py-2'>{student.name}</td>
                                <td className='border px-4 py-2'>{student.email}</td>
                                <td className='border px-4 py-2'>{student.class}</td>
                                <td className='border px-4 py-2'>{student.phone}</td>
                                <td className='border px-4 py-2'>{student.totalFee}</td>
                                <td className='border px-4 py-2'>{student.dueFee}</td>
                                <td className='border px-4 py-2'>{student.paidFee}</td>
                                <td className='border px-4 py-2'>{student.status}</td>
                            </tr>
                                )
                            })}

                     
                        </tbody>
                    </table>
                    </div>
                </div>
   
  )
}

export default UserTable