import { Wallet } from 'lucide-react'
import React from 'react'

const Card = ({icon:Icon,title,amount,color}) => {
  return (
    
      <div className= {`h-40 w-70  ${color} mt-10 rounded-xl`}>
                        <Icon className='size-8 rounded-3xl animate-pulse font-serif text-white mt-2 ml-2' />
                        <p className='font-serif text-white mt-8 ml-2 '>{title}</p>
                        <p className='font-serif text-white ml-2 text-2xl'>{amount}</p>
                    </div> 
  )
}

export default Card