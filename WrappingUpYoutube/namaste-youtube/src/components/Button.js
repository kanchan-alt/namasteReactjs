import React from 'react'


const Button = ({name}) => {
 

  
  return (
   
         <div className='rounded-lg w-min m-2'>
       <button className='cursor-pointer px-5 py-2 font-bold text-base  shadow-md bg-slate-200 rounded-xl hover:text-orange-400'>  {name}</button>
    </div>
   
   
  )
}

export default Button