
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import { useState } from 'react';
import RestaurantCategories from './RestaurantCategories';



const RestaurantMenu = () => {

     const { resId } = useParams();
     
     const resInfo = useRestrauntMenu(resId);
     const [showIndex, setShowIndex] = useState(0)

    if(resInfo === null) return <Shimmer/>


    const { name, cuisines, costForTwoMessage,

    } = resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo?.cards[0]?.card?.card?.info);

   
    const {itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories);

    

   

     

  return (
   
      
      <div className='border border-red-600 text-center'>
          <h1 className='font-bold my-6 text-2xl'>{name}</h1>
          <p className='font-bold text-lg'> {cuisines.join(", ")}</p>

          {/* {categories accordiance} */}

          {
            categories.map((categorie, index)=>(
              <div>
              
              <RestaurantCategories key={categorie?.card?.card?.title} data={categorie?.card?.card}
              showItems = {index === showIndex ? true : false}
              setShowIndex={()=> setShowIndex(index)}

              />

              </div>
           
            ))
          }
         

      </div>
      

    
 
  )
}

export default RestaurantMenu