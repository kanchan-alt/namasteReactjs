import RestaurantCard from "./RestaurantCard";
import resturantList from "../utils/mocksData";
import { useState } from "react";

const Body = ()=> {
    const [listOfRestaurants, setListOfRestaurants] = useState(resturantList)
    console.log(listOfRestaurants);
    return(
       <div className='body'>
          <div className="filter">
            <button
            className="filter-btn"
            onClick={()=> {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurants(filteredList)
            }}>

                Top Rated Restaurants
            </button>

          </div>
          <div className='restaurant-container'>
             
             {listOfRestaurants.map((restaurant )=>(<RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>))}
                   
          </div>
       </div>
    )
 }

 export default Body;