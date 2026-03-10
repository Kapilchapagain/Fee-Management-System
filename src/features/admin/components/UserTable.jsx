import { Pencil, Search, Trash } from 'lucide-react'
import React from 'react'

const UserTable = () => {
  return (
    <div className='m-10  h-fit rounded bg-gray-100 '>
                    <div className='flex justify-between px-5 '>
                        <div className='flex mt-8'>
                            <input type="text" className='h-10 w-60 border-2 rounded' placeholder=' Search...' />
                            <Search className=' absolute ml-52 mt-2' />

                        </div>

                        <button className='bg-blue-600 h-10 w-40 text-white rounded font-serif mt-8'>Add Student</button>


                    </div>
                    <div className='flex items-center justify-around mt-5 px-5'>
                        
                    <table className='min-w-full border-2'>
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
                            <th className='border px-4 py-2'>Action</th>

                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr className='hover:bg-gray-200'>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Kapil Chapagain</td>
                                <td className='border px-4 py-2'>example@gmail.com</td>
                                <td className='border px-4 py-2'>10</td>
                                <td className='border px-4 py-2'>9815993593</td>
                                <td className='border px-4 py-2'>50000</td>
                                <td className='border px-4 py-2'>15000</td>
                                <td className='border px-4 py-2'>35000</td>
                                <td className='border px-4 py-2'>pending</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex gap-2 p-2'>
                                 <Pencil className='bg-green-400 rounded-lg' />
                                <Trash className='bg-red-400 rounded-lg'/>
                                </div>
                                </td>
                                
                                
                            </tr>

                             
                                <tr className='hover:bg-gray-200'>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Kapil Chapagain</td>
                                <td className='border px-4 py-2'>example@gmail.com</td>
                                <td className='border px-4 py-2'>10</td>
                                <td className='border px-4 py-2'>9815993593</td>
                                <td className='border px-4 py-2'>50000</td>
                                <td className='border px-4 py-2'>15000</td>
                                <td className='border px-4 py-2'>35000</td>
                                <td className='border px-4 py-2'>pending</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex gap-2 p-2'>
                                 <Pencil className='bg-green-400 rounded-lg' />
                                <Trash className='bg-red-400 rounded-lg'/>
                                </div>
                                </td>
                            </tr>

                            
                               <tr className='hover:bg-gray-200'>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Kapil Chapagain</td>
                                <td className='border px-4 py-2'>example@gmail.com</td>
                                <td className='border px-4 py-2'>10</td>
                                <td className='border px-4 py-2'>9815993593</td>
                                <td className='border px-4 py-2'>50000</td>
                                <td className='border px-4 py-2'>15000</td>
                                <td className='border px-4 py-2'>35000</td>
                                <td className='border px-4 py-2'>pending</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex gap-2 p-2'>
                                  <Pencil className='bg-green-400 rounded-lg' />
                                <Trash className='bg-red-400 rounded-lg'/>
                                </div>
                                </td>
                            </tr>

                                <tr className='hover:bg-gray-200'>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Kapil Chapagain</td>
                                <td className='border px-4 py-2'>example@gmail.com</td>
                                <td className='border px-4 py-2'>10</td>
                                <td className='border px-4 py-2'>9815993593</td>
                                <td className='border px-4 py-2'>50000</td>
                                <td className='border px-4 py-2'>15000</td>
                                <td className='border px-4 py-2'>35000</td>
                                <td className='border px-4 py-2'>pending</td>
                                <td className='border px-4 py-2'>
                                    <div className='flex gap-2 p-2'>
                                    <Pencil className='bg-green-400 rounded-lg' />
                                <Trash className='bg-red-400 rounded-lg'/>
                                </div>
                                </td>
                            </tr>

                           
                            

                            

                            

                             
                        </tbody>
                    </table>
                   
                    </div>
                     <div className='flex gap-5 m-5 py-5'>
                        <button className='h-10 w-20  bg-blue-500 rounded'>Prev</button>
                        <p className='gap-2 flex py-2 font-mono '>1 2 3 4 5</p>
                        <button className='h-10 w-20  bg-blue-500 rounded'>Next</button>
                    </div>
                </div>
  )
}

export default UserTable