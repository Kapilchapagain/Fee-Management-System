import { CircleUserIcon } from 'lucide-react'
import React from 'react'

const Left = () => {
  return (
    <div className='h-150 w-80 rounded-lg bg-green-300 font-mono'>
                <div className='flex items-center justify-center rounded-t-lg p-8  bg-pink-600'>
                    <CircleUserIcon className='size-25' />
                </div>
                <div className='flex flex-col items-center mt-8 '>
                    <div className='   '>
                        <img className='h-25 w-25 border rounded-lg' src="" alt="" />
                    </div>
                    <div className=''>
                        <p className='mt-8'>Name: Kapil Chapagain</p>
                        <p className='mt-2'>Email: Kapilchapagain@gmail.com</p>
                        <p className='mt-2'>Class: 4</p>
                    </div>
                    <div className='bg-green-200 h-10 w-40 flex items-center rounded-2xl font-sans justify-center mt-6'>STATUS: ENROLLED</div>

                </div>

            </div >
  )
}

export default Left