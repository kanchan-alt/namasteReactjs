import React, { useState } from 'react'

const User = ({name}) => {

  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    
  // Api call

  const timer = setInterval(()=> {
    console.log("NamasteReact OP");
  }, 1000)

  console.log("useEffect");

  return ()=> {
    clearInterval(timer)
    console.log("useEffect return");
  }
    
  }, []);
  
  console.log("render");
  return (
    <div className='user-card'>
       <h1> Function base component</h1> 
        <h4>Count:{count}</h4>
        <h4>Count2:{count2}</h4>
        <h2>Name:{name}</h2>
        <h3> Location:Dil</h3>
        <h4>Contact: telepath</h4>
    </div>
  )
}

export default User

// props -> {props.name}