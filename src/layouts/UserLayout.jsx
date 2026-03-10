import { CircleUserIcon, DollarSign, Pencil, Search, Sidebar, SquareCheckBig, Trash } from 'lucide-react'
import React from 'react'
import UserTable from '../features/admin/components/UserTable'
import Top from '../features/user/components/Top'
import Left from '../features/user/components/Left'
import Details from '../features/user/components/Details'
import DueForm from '../features/user/components/DueForm'


const UserLayout = () => {
  return (
    <div>
     <div className='flex  h-screen w-fit mt-10  justify-around gap-10 p-5'>
        <Left/>
        <div className='h-150 w-fit bg-blue-300 rounded-lg font-mono'>
    <Top/>
    
    <Details/>
    </div>

        </div>
        <DueForm/>
        </div>
        
  )
}

export default UserLayout