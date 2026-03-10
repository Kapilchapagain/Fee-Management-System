import { CircleUser, IndianRupee, Search, Wallet } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from '../features/admin/components/Sidebar'
import Card from '../features/admin/components/Card'
import { cardData } from '../Data'
import AdminTable from '../features/admin/components/AdminTable'
import AdminNav from '../features/admin/components/AdminNav'
import UserTable from '../features/admin/components/UserTable'

const AdminLayout = () => {
    const[showDash,setShowDash]=useState(true)
    return (
        <div className='flex h-screen w-screen bg-white'>

            <Sidebar setShowDash={setShowDash}/>
            
            <div className='bg-white w-[80%]'>
                <AdminNav/>
                {
                    showDash ?<div className=' flex h-60 justify-around '>
                    
                    {
                        cardData?.map((data,index)=>{
                            return(
                            <Card {...data} key={index}/>
                            )
                        })

                    }
                </div>:""
                }
                <AdminTable/>
                
            </div>
        </div>
    )
}

export default AdminLayout