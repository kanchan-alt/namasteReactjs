import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=> {
   let [btnName, setBtnName] = useState("LogIn")
   
    return (
       <div className='header'>
             <img
             className='logo'
             src={LOGO_URL}/>
            
             <ul className='nav-items'>
                <li><i class="fa-solid fa-house" style={{color:"green"}}></i> Home</li>
                <li><i class="fa-solid fa-rainbow" style={{color:"green"}}></i> About Us</li>
                <li><i class="fa-solid fa-cart-shopping" style={{color:"green"}}></i>  Cart</li>
                <li><i class="fa-solid fa-phone" style={{color:"green"}}></i>  Contact Us</li>

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