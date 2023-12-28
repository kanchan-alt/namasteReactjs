import React, { useMemo } from 'react'
import { useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText]= useState("")

    const [isDarkTheme, setIsDarkTheme]= useState(false)

    console.log("Rendring....");

    //  const prime = findPrime(text)

    // const prime = ()=> {
    //    console.log("calculate Prime Number of", text)
    //   return findPrime(text)
    // }

    const prime = useMemo(()=>  findPrime(text), [text])
   
  return (
    <div className={" w-96 h-96  m-4 p-8 border border-black " + (isDarkTheme && "bg-sky-700 text-sky-900")}>
       

       <div>
        <button className='bg-green-300 rounded-lg my-8 p-2'
        onClick={()=> setIsDarkTheme(!isDarkTheme)}>
          Toggle
        </button>
       </div>
      
        <div>
            <input
            className='border border-black w-72 px-2'
            type='number'
            value={text}
            onChange={(e)=> setText(e.target.value)}/>

        </div>
       
        <div className='my-5'>
          <h1 className='font-bold text-2xl text-red-950'>nth Prime: {prime}</h1>
        </div>

    </div>
  )
}

export default Demo