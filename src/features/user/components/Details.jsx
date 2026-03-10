import { DollarSign, SquareCheckBig } from 'lucide-react'
import React from 'react'

const Details = () => {
  return (
    <div className='m-5 h- w-230 bg-white rounded-xl gap-'>
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
                                    {/* <th className=' px-4 py-2'>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-gray-400'>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                                <tr className='border-b border-gray-400'>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                                <tr className='border-b border-gray-400'>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                                <tr className='border-b border-gray-400'>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                                <tr className='border-b border-gray-400'>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                                <tr>
                                    <td className=' px-4 py-2'>Tuition (Sem 1)</td>
                                    <td className=' px-4 py-2'>50000</td>
                                    <td className=' px-4 py-2'>40000</td>
                                    <td className=' px-4 py-2'>10000</td>
                                    <td className=' px-4 py-2'>Partial</td>
                                    {/* <td className=' px-4 py-2'>
                                        <button className='bg-green-700 rounded text-white h-8 w-30'>View/Pay Due</button>
                                    </td> */}
                                </tr>
                            </tbody>
    
                            </table>
                           
                    </div>
    
                    </div>
  )
}

export default Details