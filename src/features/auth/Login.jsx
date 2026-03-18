import { Eye, Home, Lock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { students } from '../../Data'

const Login = () => {
  const[password,setPassword]=useState()
  const[email,setEmail]=useState()
  const navigate=useNavigate()

  const handleSubmit=()=>{
    console.log(email,password)
    if(email=="admin@gmail.com" && password=="admin123")
      {
        localStorage.setItem("role","admin")
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",password)
      navigate("/adminlayout")
    }
    else if(email=="student@gmail.com" && password=="student123")
      {
        localStorage.setItem("role","student")
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",password)
      navigate("/userlayout")
    }
    else{
      alert("Not Valid ")
    }
      
    
    
    

    }

  return (
    <div className='h-screen w-screen flex bg-gray-200 items-center justify-center'>
        <div className='h-120 w-120   rounded-lg bg-white '> 
          <div className='flex flex-col items-center m-8'>
              <h1 className='text-4xl font-bold font-serif'>Welcome Back</h1>
              <h2 className='font-serif'>Please login to your account</h2>
            </div>
           

             <div className='flex flex-col items-center mt-5 font-serif'>
              <span className='flex mr-60'>Email</span>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text " className='h-10 w-70 pl-8 border rounded '  />
              <Mail className='mt-8 mr-60 absolute text-gray-400 '/>
            </div>

            <div className='flex flex-col items-center mt-5 font-serif'>
              <span className='flex mr-54'>Password</span>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password " className='h-10 w-70 pl-8 border rounded'  />
              <Lock className='mt-8 mr-60 absolute text-gray-400 '/>
              <Eye className='mt-8 ml-60 absolute text-gray-400 '/>
            </div>
            <div className='flex mt-5 items-center justify-center font-serif '>
              <input type="Checkbox"/>
              <p className=''>Remember me</p>
              <p className='cursor-pointer  ml-10 text-blue-500 hover:underline ' onClick={()=>navigate("/forgotpassword")}>Forgot Password?</p>
            </div>
          
                
              
            <div className='flex justify-center mt-5'>
              <button onClick={()=>handleSubmit()} className='h-10 w-70 border  bg-blue-600 rounded text-2xl text-white font-serif   '>Submit</button>
            </div>
            <div className='flex mt-5 justify-center font-serif'>
              <p>Don't have an account?</p>
              <p className='cursor-pointer text-blue-500 hover:underline'>Sign Up</p>
            </div>
            <div>
             
            </div>
        </div>

    </div>
  )
}

export default Login