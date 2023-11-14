import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ()=> {
   let [btnName, setBtnName] = useState("LogIn")

   const onlineStaus = useOnlineStaus();

   const { loggedInUser } = useContext(UserContext);
   
   
    return (
       <div className='header text-white flex justify-between items-center px-4 shadow-md bg-gray-900'>
             <img
             className='logo w-24'
             src={LOGO_URL}/>
            
             <ul className='nav-items flex'>
                <li className="mx-2">
                 {onlineStaus ? "🟢": "🔴"} Online Status 
                </li>

                <li className="mx-2">
                  <Link to="/">
                  <i className="fa-solid fa-house" style={{color:"green"}}></i> Home
                  </Link>
                  
               </li>
                
                <li className="mx-2">
                  <Link to="/about">
                  <i className="fa-solid fa-rainbow" style={{color:"green"}}></i> About Us
                  </Link>
                </li>

                <li className="mx-2">
                  <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping" style={{color:"green"}}></i>  Cart
                  </Link>
                  
               </li>

                <li className="mx-2">
                  <Link to="/contact">
                  <i className="fa-solid fa-phone" style={{color:"green"}}></i>  Contact Us

                  </Link>
                  
               </li>

               <li className="mx-2">
                  <Link to="/grocery">
                  <i className="fa-solid fa-star" style={{color:"green"}}></i> Grocery

                  </Link>
                  
               </li>

                <button className="login"
                onClick={
                  ()=> {
                     btnName === "LogIn" ?
                     (setBtnName("LogOut")):
                     (setBtnName("LogIn"))
                     
                  }
                }>
                {btnName}
                </button>

                <li className="px-4">{loggedInUser}</li>
                
             </ul>
         
       </div>
 
     
    )
 }

 export default Header;