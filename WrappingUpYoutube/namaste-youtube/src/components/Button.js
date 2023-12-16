import React from 'react'


const Button = ({name}) => {
    console.log(name);

  
  return (
   
         <div className='border rounded-lg w-min m-2'>
       <button className='cursor-pointer px-5 py-2 font-bold text-base text-zinc-500 shadow-md hover:text-orange-500 '>  {name}</button>
    </div>
   
   
  )
}

export default Button