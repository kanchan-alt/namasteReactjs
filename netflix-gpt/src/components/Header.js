import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {toggleGptSearchView} from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const{ uid, email, displayName, photoURL} = user;
        dispatch(
          addUser(
          {
          uid: uid,
          email:email,
          displayName: displayName,
          photoURL:photoURL,
          }
        ));

        navigate("/browse")
       
      } else {
           dispatch(removeUser());
           navigate("/")
       
      }
    });

    return ()=> unsubscribe();

  },[])

  const handleSignOut = ()=> {

    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  };

  const handleGptSearchClick = () => {
    // Toggle Gpt Search
    dispatch(toggleGptSearchView());

  }

  const handleLanguageChange = (e) => {
      // console.log(e.target.value);

      dispatch(changeLanguage(e.target.value))
  }

     
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img src={LOGO} alt='Logo'
      className='w-44'/>

     {user && <div className='p-2 flex gap-2 items-center'>

       { showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>

          {
            SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))
          }

        </select>}
        <button 
         onClick={handleGptSearchClick}
         className='py-2 px-4 m-2 text-white bg-orange-500 font-bold rounded-xl'>
         {showGptSearch? "Home" : "GPT Search"}
          </button>
        <img 
        alt='userIcon'
       
        src={user?.photoURL}
       
        className='w-12 h-12 rounded-2xl'
        />

        <h6 className='text-red-800 font-bold'>Ironman{user.displayName}</h6>
        

        <button 
        onClick={handleSignOut}
        className='font-bold text-white'>(Sign Out)
        </button>
       
      </div>}

      
    </div>
  )
}

export default Header