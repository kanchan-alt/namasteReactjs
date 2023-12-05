import React, { useStat,useEffect } from 'react'
import ItemList from './ItemList';

const RestaurantCategories = ({data, showItems, setShowIndex,setHideIndex}) => {

  console.log(showItems);
  console.log(setShowIndex);



  const handleClick = ()=> {
  
    setShowIndex()
    console.log(setShowIndex);

    {showItems && setHideIndex()}
   
  }





  return (
    <div>
        {/* Header */}
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>

            <div 
              className='flex justify-between cursor-pointer'
              onClick={
                  handleClick
              }
              >
                  <span>{data.title}({data.itemCards.length})</span>
                  <span>🔽</span>

            </div>
         {/* Accordian Body  */}
           

            {showItems &&  <ItemList items={data.itemCards}/>}

           

           


            

        </div>

       

       

    </div>
  )
}

export default RestaurantCategories