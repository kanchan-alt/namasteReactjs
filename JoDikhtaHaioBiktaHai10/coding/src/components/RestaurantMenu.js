
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import { useState } from 'react';



const RestaurantMenu = () => {

     const { resId } = useParams();
     
     const resInfo = useRestrauntMenu(resId);

    if(resInfo === null) return <Shimmer/>


    const { name, cuisines, costForTwoMessage,

    } = resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo?.cards[0]?.card?.card?.info);

   
    const {itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

   

     

  return (
    <div>
      
      <div className='border border-red-600'>
        <div>
          <h1>{name}</h1>
          <p> {cuisines.join(", ")}</p>
        </div>
        <div>
          <h1></h1>
          <p></p>

        </div>

      </div>
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