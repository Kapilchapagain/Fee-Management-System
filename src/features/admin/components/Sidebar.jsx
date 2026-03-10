import React from 'react'

const Sidebar = ({setShowDash}) => {
  return (
   <div className='h-full w-[20%] bg-gray-300 flex flex-col p-2'>
                <p className='text-blue-600 font-serif text-xl font-bold'>Fee Management</p>
                <p onClick={()=>setShowDash(true)} className='font-serif mt-4'>Dashboard</p>
                <p onClick={()=>setShowDash(false)} className='font-serif mt-4'>Student Management</p>
            </div>
  )
}

export default Sidebar