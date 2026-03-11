import { CircleUserIcon, DollarSign, Pencil, Search, Sidebar, SquareCheckBig, Trash } from 'lucide-react'
import React, { useState } from 'react'
import UserTable from '../features/admin/components/UserTable'
import Top from '../features/user/components/Top'
import Left from '../features/user/components/Left'
import Details from '../features/user/components/Details'
import DueForm from '../features/user/components/DueForm'

const obj={
    TotalDue:10000,
    TotalPaid:5000,
    NextDueDate:"Jan 28, 2026"
}


const UserLayout = () => {
  const [showForm,setShowForm]=useState(false)
  return (
    <div className='flex flex-col'>
      <div className='flex  h-screen w-screen mt-10  justify-around gap-10 p-5'>
        <Left />
        <div className='h-150 w-fit bg-blue-300 rounded-lg font-mono'>
          <Top setShowForm={setShowForm}   td={obj}/>

          <Details />
        </div>

      </div>
      {
        showForm ?(
          <div className='h-screen w-screen absolute'>
        <DueForm setShowForm={setShowForm} />
      </div>

        ):""
      }
      

    </div>

  )
}

export default UserLayout