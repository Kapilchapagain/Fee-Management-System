import React from 'react'
import { useState } from 'react'

const Signup = ({ setShowReg, obj }) => {
  const [name, setNameData] = useState(obj?obj.name:"")
  const [email, setEmailData] = useState(obj?obj.email:"")
  const [classData, setClassData] = useState(obj?obj.classData:"")
  const [password,setPassword]=useState(obj?obj.password:"")
  const [phone, setPhoneData] = useState(obj?obj.phone:"")
  const [totalFee, setTotalFee] = useState(obj?obj.totalFee:"")
  const [dueAmt, setDueData] = useState(obj?obj.dueAmt:"")
  const [totalAmt, setTotalAmt] = useState(obj?obj.totalAmt:"")
  const [error, setError] = useState("")
  const[agree,setAgree]=useState(false)

  const handleSubmit = (e) => {
  e.preventDefault()

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    classData === "" ||
    phone === "" ||
    totalFee === "" ||
    dueAmt === "" ||
    totalAmt === ""
  ) {
    setError("All fields are required")
    return
  }

  if (Number(totalFee) < 0 || Number(dueAmt) < 0 || Number(totalAmt) < 0) {
    setError("Numbers cannot be negative")
    return
  }

  if (phone.length !== 10) {
    setError("Phone must be 10 digits")
    return
  }

  if (!agree) {
    setError("You must accept terms and conditions")
    return
  }

  setError("")
  console.log(name, email,password, phone, totalFee, dueAmt, totalAmt)
  alert("Form Submitted")
}



 
 console.log(name,email)
  // console.log(obj)
  return (
    <div className='h-screen w-screen flex  bg-gray-200 items-center justify-center'>

      <div className='h-fit w-200  rounded-lg bg-white  '>
        <div className='flex m-3 justify-end'>
          <button onClick={() => setShowReg(false)} className='bg-black text-white border h-10 w-10 '>X</button>
        </div>
        <div className='flex flex-col items-center m-2'>
          <h1 className='text-4xl font-bold font-serif'>{obj ?.id? "Edit Form" : "Add Students"}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center font-serif '>
            
            <input value={name} onChange={(e) => setNameData(e.target.value)}
              type="text " className='h-10 w-70 border rounded ' placeholder='Enter the Name' />
                      {error && (
  <label className="text-red-500 text-sm text-center mb-3">
    {error}
  </label>
)}

          </div>
          <div className='flex flex-col items-center font-serif mt-3 '>
            <input value={email} type="email " onChange={(e) => setEmailData(e.target.value)} className='h-10 w-70 border rounded 'placeholder='Enter the Email' />
          </div>
            <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={password} type="password " onChange={(e) => setPassword(e.target.value)} className='h-10 w-70 border rounded' placeholder='Enter the Password' />
          </div>
          <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={classData}  type="Number " onChange={(e) => setClassData(e.target.value)} className='h-10 w-70 border rounded' placeholder='Enter the Class' />
          </div>
          <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={phone} type="Number " onChange={(e) => setPhoneData(e.target.value)} className='h-10 w-70 border rounded' placeholder='Enter the Phone' />
          </div>
          <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={totalFee} type="number " onChange={(e) => setTotalFee(e.target.value)} className='h-10 w-70 border rounded'placeholder='Enter the Total Fee' />
          </div>
          <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={dueAmt} type="number " onChange={(e) => setDueData(e.target.value)} className='h-10 w-70 border rounded' placeholder='Enter the Due Amount' />
          </div>
          <div className='flex flex-col items-center mt-3 font-serif'>
            
            <input value={totalAmt} type="number " onChange={(e) => setTotalAmt(e.target.value)} className='h-10 w-70 border rounded' placeholder='Enter the Total Amount'/>
          </div>
          <div>
            <div className='flex mt-2 items-center justify-center font-serif '>
              <input checked={agree} onChange={(e)=>setAgree(e.target.checked)} type="Checkbox"  />
              <p >I agree to all the </p>
              <p className='cursor-pointer text-blue-500 hover:underline'>Terms and Conditions</p>
            </div>
          </div>
          <div className='flex justify-center p-3 '>
            <button className='h-10 w-70 border  bg-blue-600 rounded text-2xl text-white font-serif   mt-5'>Sign Up</button>
          </div>
    
        </form>

{/* 
value={obj ? obj.email : ""}  */}


      </div>
    </div>
    

  )
  
}

export default Signup