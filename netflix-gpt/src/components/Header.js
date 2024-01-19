import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = ()=> {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  };

     
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo'
      className='w-44'/>

     {user && <div className='p-2 flex gap-2 items-center'>
        <img 
        alt='userIcon'
        // src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=299"

        src={user?.photoURL}
       
        className='w-12 h-12 rounded-2xl'
        />

        <h6 className='text-red-800 font-bold'>Ironman{user.displayName}</h6>
        

        <button 
        onClick={handleSignOut}
        className='font-bold text-white'>(Sign Out)</button>
       
      </div>}

      
    </div>
  )
}

export default Header