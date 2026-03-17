import { CircleUser, IndianRupee, Search, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../features/admin/components/Sidebar'
import Card from '../features/admin/components/Card'
import { cardData } from '../Data'
import AdminTable from '../features/admin/components/AdminTable'
import AdminNav from '../features/admin/components/AdminNav'
import UserTable from '../features/admin/components/UserTable'
import { useNavigate } from 'react-router-dom'

const AdminLayout = () => {
    const[showDash,setShowDash]=useState(true)
    const navigate=useNavigate()
    const [item,setItem]=useState()
    const Role=localStorage.getItem("role")
    const Email=localStorage.getItem("Email")
    useEffect(()=>{
        if(Email!="admin@gmail.com" && Role!="admin")
            navigate("/login")
    },[Role,Email]
) 
    return (
        <div className='flex h-full w-full bg-white'>

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
                <AdminTable  />
                
            </div>
        </div>
    )
}

export default AdminLayout