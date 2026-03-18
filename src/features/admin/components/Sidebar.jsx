import React from 'react'

const Sidebar = ({setShowDash}) => {
  return (
   <div className=' h-screen w-[20%] bg-gray-300 flex flex-col flex-shrink-0 '>
                <p className='text-blue-600 font-serif text-xl font-bold'>Fee Management</p>
                <p onClick={()=>setShowDash(true)} className='cursor-pointer font-serif mt-4 h-10 w-full flex items-center hover:bg-gray-400'>Dashboard</p>
                <p onClick={()=>setShowDash(false)} className='cursor-pointer font-serif flex items-center h-10 w-full hover:bg-gray-400'>Student Management</p>
            </div>
  )
}

export default Sidebar