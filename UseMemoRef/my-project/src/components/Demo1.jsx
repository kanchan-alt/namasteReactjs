import React, { useState, useRef, useEffect } from 'react'


const Demo1 = () => {
  // const x = 0;/
  let x = 0;
  const [y,setY] = useState(0);

  const ref = useRef(0)
  // console.log(ref);

  // let i = 0

  // let i = {
  //   current: null;
  // }
  const i = useRef(0)
  useEffect(() => {
    i.current  = setInterval(()=>{
      console.log("Namaste React", Math.random());
    }, 1000)
  
    return () => clearInterval(i.current)
  }, [])
  

  return (
    <div className='m-4 p-2 w-96 h-96 border border-black bg-gray-300'>
      <div>
      <button className='bg-green-400 p-2 m-4'
      onClick={()=> {
        x = x+1;
        console.log(x);
        
      }}>normal-varible</button>

<span className='font-bold text-xl'>{x}</span>


      </div>

      <div>
      <button className='bg-green-700 p-2 m-4 text-white'
      onClick={()=> {
        setY(y+1)
        
      }}>state-varible</button>
      <span className='font-bold text-xl'>{y}</span>


      </div>


      <div>
      <button className='bg-green-700 p-2 m-4 text-white'
      onClick={()=> {
      ref.current = ref.current + 1;
        
      }}>useRef</button>
      <span className='font-bold text-xl'>{ref.current}</span>


      </div>

      <button className='bg-red-400 p-2 m-3'
      onClick={()=>{
        clearInterval(i.current)
      }}>

        stop Prrinting

      </button>
      
      
    
    </div>
  )
}

export default Demo1

/**
 * not like => ref = 0
 * ref = {
 * current: 0
 * }
 */