import RestaurantCard, {withPromtedLabel} from "./RestaurantCard";
import resturantList from "../utils/mocksData";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=> {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    console.log(listOfRestaurants);

    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    console.log(filteredRestaurant);

    const [searchText, setsearchText] = useState('')

    const ResaturantCardPromoted = withPromtedLabel(RestaurantCard)


    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async ()=> {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957747377982441&lng=77.69931770861149&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            const json = await data.json();
            console.log(json);

            const mainData = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            console.log(mainData);

            setListOfRestaurants(mainData)
            setFilteredRestaurant(mainData)

            console.log(mainData);
    }catch(e){
        console.log(e);
    }
            
        
    };
        
    const {loggedInUser, setUserName} = useContext(UserContext)

    const onlineStaus = useOnlineStaus()

    if(onlineStaus === false)
      return (
            <h1>
            Looks like you're offline!! Please check your internet connection
            </h1>
    )

    
     

    return listOfRestaurants.length === 0 ?(<Shimmer/>):(
       <div className='body pb-8 m-4'>
             {/* flitering area */}
            <div className="filter flex justify-center  items-center">

                {/* serching using restaurant name */}
                <div className="search m-4 p-4 ">
                    <input type="text" className="search-box border border-solid border-black "
                    value = {searchText}
                    onChange={
                        (e)=> {
                            setsearchText(e.target.value)
                        }
                    }
                    />
                    
                    <button
                    className="px-4 py-1 bg-green-300 m-4 rounded-lg"
                     onClick={
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

                <div>
                    <button
                                className="filter-btn px-4 py-1 bg-green-300 m-4 rounded-lg "
                                onClick={()=> {
                                    const filteredList = listOfRestaurants.filter(
                                        (res) => res.info.avgRating > 4
                                    );
                                setFilteredRestaurant(filteredList)
                                }}>

                                Top Rated Restaurants
                    </button>
                 </div>

                 {/* for using Context */}

                 <div className="m-4 p-4 flex items-center">
                    <label> UserName :  </label>
                    <input className="p-2 border-pink-950 bg-amber-300 rounded-lg"
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}/>
                 </div>
                    

            </div>

            {/* showing card area */}
            <div className='restaurant-container flex flex-wrap justify-center gap-8'>
                
                {filteredRestaurant.map((restaurant )=>(

                  <Link 
                  key={restaurant.info.id} 
                  to={"/restaurants/"+ restaurant.info.id }>
                   

                   {restaurant.info.isOpen ? (
                    <ResaturantCardPromoted restaurantData={restaurant}/>
                  ):
                  (<RestaurantCard restaurantData={restaurant}/>)
                  }

                     

                    

                  </Link>  
                
                ))}
                    
            </div>
       </div>
    )
 }

 export default Body;

