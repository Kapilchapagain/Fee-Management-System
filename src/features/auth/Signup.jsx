import React from 'react'

const Signup = ({setShowReg,obj}) => {
  console.log(obj)
  return (
    <div className='h-screen w-screen flex  bg-gray-200 items-center justify-center'>
      
        <div className='h-180 w-200  rounded-lg bg-white  '> 
          <div className='flex m-5 justify-end'>
        <button onClick={()=>setShowReg(false)} className='bg-black text-white border h-10 w-10 '>X</button>
      </div>
          <div className='flex flex-col items-center m-4'>
              <h1 className='text-4xl font-bold font-serif'>{obj?.id?"Sign Up":"Add Students"}</h1>
            </div>
            <div className='flex flex-col items-center font-serif '>
              <span className='flex mr-60'>Name</span>
              <input  value={obj.name?obj.name:""}
               type="text " className='h-10 w-70 border rounded '  />
            </div>
            <div className='flex flex-col items-center font-serif mt-3 '>
              <span className='flex mr-60'>Email</span>
              <input value={obj.email?obj.email:""} type="text " className='h-10 w-70 border rounded '  />
            </div>
            <div className='flex flex-col items-center mt-3 font-serif'>
              <span className='flex mr-60'>Class</span>
              <input value={obj.class?obj.class:""} type="password " className='h-10 w-70 border rounded'  />
            </div>
             <div className='flex flex-col items-center mt-3 font-serif'>
              <span className='flex mr-60'>Phone</span>
              <input value={obj.phone?obj.phone:""} type="password " className='h-10 w-70 border rounded'  />
            </div>
             <div className='flex flex-col items-center mt-3 font-serif'>
              <span className='flex mr-55'>Total Fee</span>
              <input value={obj.totalFee?obj.totalFee:""} type="password " className='h-10 w-70 border rounded'  />
            </div>
             <div className='flex flex-col items-center mt-3 font-serif'>
              <span className='flex mr-49'>Due Amount</span>
              <input value={obj.dueFee?obj.dueFee:""} type="password " className='h-10 w-70 border rounded'  />
            </div>
            <div className='flex flex-col items-center mt-3 font-serif'>
              <span className='flex mr-48'>Total Amount</span>
              <input value={obj.paidFee?obj.paidFee:""}  type="password " className='h-10 w-70 border rounded'  />
            </div>
            <div>
              <div className='flex mt-2 items-center justify-center font-serif '>
              <input type="Checkbox"/>
              <p >I agree to all the </p>
              <p className='text-blue-500 underline '>Terms and Conditions</p>
            </div>
            </div>
            <div className='flex justify-center '>
              <button className='h-10 w-70 border  bg-blue-600 rounded text-2xl text-white font-serif   mt-5'>Sign Up</button>
            </div>
          
                
              
            
           
        </div>
        </div>
  
  )
}

export default Signup