import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
  const Role=localStorage.getItem("role")
  const navigate= useNavigate()
  return (
    <div className='h-15 bg-blue-300 flex justify-end'>
                    <button onClick={()=>{navigate("/login"),localStorage.clear()}} className='bg-blue-600 h-10 w-25 m-2 flex rounded  text-white items-center justify-center font-serif'>{Role}</button>
                </div>
  )
}

export default AdminNav