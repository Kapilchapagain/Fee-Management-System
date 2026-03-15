import { EyeIcon, Pencil, Search, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { students } from '../../../Data'; 
import Signup from '../../auth/Signup';





const AdminTable = () => {
  const[showReg,setShowReg]=useState(false)
  const[editData,setEditData]=useState({})
  const[search,setSearch]=useState("")
  
  let filteredStudents=null
  if(search){
 filteredStudents = students.filter(student =>
     student.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filteredStudents)
  }else{
    filteredStudents=students
  }


  const temp=students;
    const navigate=useNavigate()

    // const handleClick=()=>{
    //     navigate("/Profile")
    // }
  return (
    <div className='flex '>
    <div className='m-10  h-fit rounded bg-gray-100  '>
                    <div className='flex justify-between px-5 '>
                        <div className='flex mt-2'>
                            <input onChange={(e)=>setSearch(e.target.value)}   type="text" className='h-10 w-60 border-2 rounded' placeholder=' Search...' />
                            
                            <Search className=' absolute ml-52 mt-2' />
                            

                        </div>

                        <button onClick={()=>{setShowReg(true),setEditData(null)}} className='bg-blue-600 h-10 w-40 text-white rounded font-serif mt-2'>Add Student</button>


                    </div>
                    <div className='flex justify-around mt-5 px-5 overflow-y-scroll h-50'>
                        
                    <table className='min-w-full border-2 '>
                        <thead className='bg-red-500 sticky top-[0px] ' >
                            <tr >
                            <th className=' px-2 py-2'>SN</th>
                            <th className=' px-2 py-2' >NAME</th>
                            <th className=' px-2 py-2'>EMAIL</th>
                            <th className=' px-2 py-2'>CLASS</th>
                            <th className=' px-2 py-2'>PHONE</th>
                            <th className=' px-2 py-2'>Total Fee</th>
                            <th className=' px-2 py-2'>Due Amount</th>
                            <th className=' px-2 py-2'>Paid Amount</th>
                            <th className=' px-2 py-2'>STATUS</th>
                            <th className=' px-2 py-2'>Action</th>

                            </tr>
                            
                        </thead>
                        <tbody>
                            {filteredStudents?.map((student)=>{
                                return(
                            <tr key={student.id} className='hover:bg-gray-200'>
                                <td className='border px-2 py-2'>{student.id}</td>
                                <td className='border px-2 py-2'>{student.name}</td>
                                <td className='border px-2 py-2'>{student.email}</td>
                                <td className='border px-2 py-2'>{student.class}</td>
                                <td className='border px-2 py-2'>{student.phone}</td>
                                <td className='border px-2 py-2'>{student.totalFee}</td>
                                <td className='border px-2 py-2'>{student.dueFee}</td>
                                <td className='border px-2 py-2'>{student.paidFee}</td>
                                <td className='border px-2 py-2'>{student.status}</td>
                                <td className='border px-2 py-2'>
                                    <div className='flex gap-2 p-2'>
                                 <Pencil onClick={()=>{setShowReg(true),setEditData(student)}} className='bg-green-400 rounded-lg' />
                                <Trash className='bg-red-400 rounded-lg'/>
                                <EyeIcon onClick={()=> navigate(`/profile/${student.id}`)} className='bg-blue-500 rounded-lg'/>
                                </div>
                                </td>
                            </tr>
                            )})}
                        </tbody>
                    </table>
                   
                    </div>
                     {/* <div className='flex gap-5 m-5 py-5'>
                        <button className='h-10 w-20  bg-blue-500 rounded'>Prev</button>
                        <p className='gap-2 flex py-2 font-mono '>1 2 3 4 5</p>
                        <button className='h-10 w-20  bg-blue-500 rounded'>Next</button>
                    </div> */}
                    {
        showReg && (
          <div className='h-screen w-screen absolute inset-0 '>
        <Signup  setShowReg={setShowReg} obj={editData} />
      </div>
        )
        
      }
     
                </div>
                </div>
  )
}

export default AdminTable