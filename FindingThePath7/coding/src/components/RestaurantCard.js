import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props
    
    const {name, cuisines, avgRating } = restaurantData?.info
    const {deliveryTime }= restaurantData?.info?.sla 
    return (
       <div className='restaurant-card'>
          <img src={CDN_URL+ restaurantData.info.cloudinaryImageId }alt="restaurant-logo" className='restaurant-logo'/>
          <div className="restaurant-basic">
          <h3 className="restaurant-name">{name}</h3>
      
          <span className="restaurant-rating">{avgRating} star</span>
          <span className="restaurant-delivery-time">{deliveryTime} minutes</span>
          <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
          </div>
       </div>
    )
 }


 export default RestaurantCard;

