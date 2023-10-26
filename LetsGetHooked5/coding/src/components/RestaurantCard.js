import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props
    
    const {name, cuisines, avgRating } = restaurantData?.info
    const {deliveryTime }= restaurantData?.info?.sla 
    return (
       <div className='restaurant-card' style={{backgroundColor:"#cccccc"}}>
          <img src={CDN_URL+ restaurantData.info.cloudinaryImageId }alt="restaurant-logo" className='restaurant-logo'/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} minutes</h4>
       </div>
    )
 }


 export default RestaurantCard;

