import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {

     const [resInfo, setResInfo] = useState(null)

     const { resId } = useParams();

     console.log(resId);


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=> {
        const data = await fetch( MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER" )
        const json = await data.json();
        // console.log(json)

        setResInfo(json.data)
        console.log(json.data);
        
    }

    if(resInfo === null) return <Shimmer/>

    // destructure restaurant Basic infromation

    const {name, cuisines, costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



   

  return (
    <div>
      <h1>{name}</h1>
      <p> {cuisines.join(", ")} - {costForTwoMessage}</p>
      <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
        ))}
       
      </ul>

    
    </div>
  )
}

export default RestaurantMenu