import React from 'react'
import { CDN_URL } from '../utils/constants';

import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';



const ItemList = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item)=> {

      // Dispatch an action
      // dispatch(addItem("pizza"))

      dispatch(addItem(item))

    }
  return (
    <div>
 {
        items.map((item)=> (

                <div key={item?.card?.info?.id}
                  className=' border-gray-200 border-b-2 p-2 m-2'>
                    <div className='flex justify-between'>

                        <div className='py-2 w-9/12 text-left'>
                            <span>{item?.card?.info?.name}</span>
                            <h6>₹{item?.card?.info?.price ? item?.card?.info?.price / 100:
                            item?.card?.info?.defaultPrice / 100

                            }
                            
                            </h6>

                            <p className='text-xs'>{item?.card?.info?.description}</p>

                        </div>

                    <div className=' w-3/12 border-amber-400 relative'>
                        <img src={CDN_URL +item?.card?.info?.imageId } className='w-full h-32'/>
                       <div className='absolute bottom-0 left-10'>
                       <button className='px-4 py-1 bg-green-400 rounded-lg shadow-lg text-sm text-white'
                       onClick={
                        ()=> handleAddItem(item)
                       }>+ Add</button>


                       </div>
                    </div>
                        
                       

                    </div>

                  
                   

                </div>
        ))
}
    </div>
  )
}

export default ItemList