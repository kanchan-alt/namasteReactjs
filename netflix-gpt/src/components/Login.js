import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidaData } from '../utils/validate';
import { auth } from "../utils/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm =()=> {
    setIsSignForm(!isSignForm)
  };


  const handleButtonClick = ()=> {

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidaData(email.current.value, password.current.value)
    console.log(message);

    setError(message);

    if(message)return;

    if(!isSignForm){
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/53052588?v=4"
          })
          
          .then(() => {
            const { uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({

                uid: uid,
                email:email,
                displayName: displayName,
                photoURL:photoURL,

              })
              );
            navigate("/browse")
          }).catch((error) => {
            setError(error)
            
          });

          
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage)
        });

    }else{

    // Sign In LogicS

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {

        const user = userCredential.user;
         console.log(user);
         navigate('/browse')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + "-" + errorMessage)
      });


    }

  }


  return (
  
    <div className=''>
         <Header/>
        
          <img 
          src='
          https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg'
          alt='background'
          className='absolute max-h-full w-full' />
       
      
         <form 
          onSubmit={(e)=> e.preventDefault()}
          className='w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white my-36 rounded-md opacity-90'>
          <h1 
            className='font-bold text-3xl py-4'>
            {isSignForm ? "Sign In" :"Sign Up"}
          </h1>

          {!isSignForm && 
           <input 
           ref={name}
           type='text' 
           placeholder='Full name' 
           className='p-2 my-2 w-full bg-gray-800 opacity-80 rounded-lg '/>}

          <input
           ref={email}
           type='text' 
           placeholder='Email Address' 
           className='p-2 my-2 w-full bg-gray-800 opacity-80 rounded-lg '/>

          <input
           ref={password} 
          type='password' 
          placeholder='password' 
          className='p-2 my-2 w-full  bg-gray-800 opacity-80 rounded-lg '/>

          <p className='text-red-500 font-bold text-lg'>{error}</p>

          <button className='p-4 my-4 bg-red-700 w-full rounded-lg'
             onClick={handleButtonClick}>
            {isSignForm ? "Sign In" :"Sign Up"}
          </button>

          <p className='py-4 cursor-pointer' 
            onClick={toggleSignInForm}>
            {isSignForm? "New to Neflix? Sign Up Now": "Already registered? Sign In Now"}
          </p>

         </form>

    </div>
  )
}

export default Login