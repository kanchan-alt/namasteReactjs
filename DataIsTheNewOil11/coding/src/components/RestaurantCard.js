import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
    const {restaurantData} = props

    const {loggedInUser} = useContext(UserContext)
   
    
    const {name, cuisines, avgRating } = restaurantData?.info
    const {deliveryTime }= restaurantData?.info?.sla 
    return (
       <div className='restaurant-card 
       w-[270px] p-3 shadow-sm hover:shadow-2xl'>
          <img src={CDN_URL+ restaurantData.info.cloudinaryImageId }alt="restaurant-logo" className='restaurant-logo w-[100%] h-[170px]'/>
          <div className="restaurant-basic">
          <h3 className="restaurant-name font-Georgia font-semibold text-[16px] truncate leading-8 text-[#2d3544]">{name}</h3>
      
          <span className="restaurant-rating text-[#191f28] text-base">{avgRating} star </span>
          <span className="restaurant-delivery-time text-[#191f28] text-base">{deliveryTime} minutes</span>
          <h4 className="restaurant-cuisines truncate text-[#4f4f50] text-[14.5px]">{cuisines.join(", ")}</h4>
          <h4 className="text-[#4f4f50] text-[14.5px] font-extrabold">Context User: {loggedInUser}</h4>
          </div>
       </div>
    )
 }

 //? Higher order component

 //* input - RestaurantCard => ResaturantCardPromoted

 export const withPromtedLabel = (RestaurantCard) => {
 
    return(props) =>{
      
      return (
         <div>
            <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg text-sm">IsOpen</label>
            <RestaurantCard{...props}/>
         </div>
      )

    }
 }

 export default RestaurantCard;

