import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";

const Header = ()=> {
   let [btnName, setBtnName] = useState("LogIn")
   
    return (
       <div className='header'>
             <img
             className='logo'
             src={LOGO_URL}/>
            
             <ul className='nav-items'>
                <li>
                  <Link to="/">
                  <i class="fa-solid fa-house" style={{color:"green"}}></i> Home
                  </Link>
                  
               </li>
                
                <li>
                  <Link to="/about">
                  <i class="fa-solid fa-rainbow" style={{color:"green"}}></i> About Us
                  </Link>
                </li>

                <li>
                  <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping" style={{color:"green"}}></i>  Cart
                  </Link>
                  
               </li>

                <li>
                  <Link to="/contact">
                  <i class="fa-solid fa-phone" style={{color:"green"}}></i>  Contact Us

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
                
             </ul>
         
       </div>
 
     
    )
 }

 export default Header;