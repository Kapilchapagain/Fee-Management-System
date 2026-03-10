import React from 'react'

const Top = () => {
  return (
    
                
                <div className='m-5  h-40 w-230 bg-green-200 rounded-xl'>

                    <p className='px-5 py-6 text-xl'>Overall Summary</p>
                    <div className='flex items-center justify-between px-10  '>

                        <div>
                            <p>Total Due</p>
                            <p className='text-xl bg-white h-8 w-fit rounded'>10,000</p>
                        </div>

                        <div>
                            <p>Total Paid</p>
                            <p className='text-xl'>20,000</p>
                        </div>
                        <div>
                            <p>Next Due Date</p>
                            <p className='text-xl'>October 15, 2024</p>
                        </div>
                        <div className='mb-5'>
                            <button className='bg-amber-400 h-12 w-48 rounded-3xl text-white text-lg '>Pay Total Due</button>
                        </div>

                    </div>
                    <div className='flex items-center justify-center gap-10'>



                    </div>
                </div>

            
  )
}

export default Top