import RestaurantCard from "./RestaurantCard";
import resturantList from "../utils/mocksData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    console.log(listOfRestaurants);

    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    console.log(filteredRestaurant);

    const [searchText, setsearchText] = useState('')

   // whenever state varible update, react triggers a reconcilation cycle(re-render the component)
    

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957747377982441&lng=77.69931770861149&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            const json = await data.json();
            console.log(json);

            const mainData = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

            setListOfRestaurants(mainData)
            setFilteredRestaurant(mainData)
    }catch(e){
        console.log(e);
    }
            
        
    };
        
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length === 0 ?(<Shimmer/>):(
       <div className='body'>
             {/* flitering area */}
            <div className="filter">

                {/* serching using restaurant name */}
                <div className="search">
                    <input type="text" className="search-box"
                    value = {searchText}
                    onChange={
                        (e)=> {
                            setsearchText(e.target.value)
                        }
                    }
                    />
                    
                    <button onClick={
                        ()=> {
                        console.log(searchText);
                    const filteredRestaurant =  listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                // we just setFilteredRestaurant not setListOfRestaurants
                     setFilteredRestaurant(filteredRestaurant)
                     setsearchText('')

                        }
                    }>Search</button>
                </div>
 

                {/* top rating */}
                    <button
                            className="filter-btn"
                            onClick={()=> {
                                const filteredList = listOfRestaurants.filter(
                                    (res) => res.info.avgRating > 4
                                );
                            setFilteredRestaurant(filteredList)
                            }}>

                            Top Rated Restaurants
                    </button>

            </div>

            {/* showing card area */}
            <div className='restaurant-container'>
                
                {filteredRestaurant.map((restaurant )=>(<RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>))}
                    
            </div>
       </div>
    )
 }

 export default Body;