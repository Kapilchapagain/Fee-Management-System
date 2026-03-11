import React, { useState } from "react";

const Dueform=({setShowForm})=> {
  const [totalFee,setTotalFee]=useState("")
  const [payDue,setPayDue]=useState("")
  const [error,setError]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(totalFee==="" || payDue===""){
      setError("Both fields are required")
      return
    }
    if(Number(totalFee)<0 || Number(payDue)<0){
      setError("Values cannot be negative")
      return
    }
    // if(Number(payDue)>Number(totalFee)){
    //   setError("cannot be more than total fee")
    //   return
    // }
    setError("")
    alert("Form Submitted")

  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-500">

      {/* Modal Box */}
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">

        {/* Close Button */}
        <button onClick={()=>setShowForm(false)} className="absolute top-3 right-3 border px-2 py-1 text-sm rounded">X</button>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">Pay Due</h2>

        {/* Total Fee */}
        <div className="flex items-center justify-between mb-4">
          <label className="font-medium">Total Fee :</label>
          <input type="Number" min={0} value={totalFee} onChange={(e) => setTotalFee(e.target.value)}  className="border rounded px-3 py-1 w-40 outline-none"/>
          {error && (
  <p className="text-red-500 text-sm text-center mb-3">
    {error}
  </p>
)}
        </div>

        {/* Pay Due */}
        <div className="flex items-center justify-between mb-6">
          <label className="font-medium">Pay Due :</label>
          <input type="Number" min={0} value={payDue} onChange={(e) => setPayDue(e.target.value)}  className="border rounded px-3 py-1 w-40 outline-none"/>
          {error && (
  <p className="text-red-500 text-sm text-center mb-3">
    {error}
  </p>
)}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="border px-6 py-2 rounded-full hover:bg-gray-100">Submit</button>
        </div>
        </form>

      </div>

    </div>
  );
};
export default Dueform;
 