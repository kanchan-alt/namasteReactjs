import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer';

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);

  const toggleSignInForm =()=> {
    setIsSignForm(!isSignForm)
  };
  return (
    

  
    <div className=''>
         <Header/>
         <div className='absolute'>
           <img src='
          https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg'
          alt='background' 
          className=''/>

         </div>

         <form className='w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white my-36 rounded-md opacity-90'>
          <h1 className='font-bold text-3xl py-4'>{isSignForm ? "Sign In" :"Sign Up"}</h1>
          {!isSignForm &&  <input type='text' placeholder='Full name' className='p-2 my-2 w-full bg-gray-800 opacity-80 rounded-lg '/>}
          <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-800 opacity-80 rounded-lg '/>
          <input type='password' placeholder='password' className='p-2 my-2 w-full  bg-gray-800 opacity-80 rounded-lg '/>
          <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignForm ? "Sign In" :"Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignForm? "New to Neflix? Sign Up Now": "Already registered? Sign In Now"}</p>

         </form>
        
        
   

       

    </div>
  )
}

export default Login