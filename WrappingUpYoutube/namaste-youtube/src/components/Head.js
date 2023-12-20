import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showsuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector((store)=> store.search)

  /**
   * searchCache = {
   *  "iphone":["iphone15, "iphone14"]
   * }
   * 
   * searchQueary = iphone;
   */

 

  useEffect(()=> {
    console.log(searchQuery);
    // const timer = setTimeout(()=> getSearchSuggestion(),200)

    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
             getSearchSuggestion()
      }
    },200)

    return ()=> {
      clearTimeout(timer)
    }

    /**
     * make anapi call after ever key press
     * 
     * 
     * key -i
     *  - render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     * 
     * key -ip
     * - destory the component(useEffect return method)(clean)
     *  - render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     * 
     * change the timer- time 3000 you can se for every key 
     */
  

  },[searchQuery])

  const getSearchSuggestion = async()=> {
    console.log("API CALL-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1])

    //update cache
    dispatch(
      cacheResults({
        // "iphone":[1,2,3]
        [searchQuery]:json[1]
      })
    )
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=> {
    console.log("hi iam working");
    dispatch(toggleMenu())
    
  }
 
  return (
    <div className='grid grid-flow-col p-2.5 m-1 shadow-lg'>
        <div className='flex items-center justify-around col-span-1'>
          
            <img 
            onClick={()=> toggleMenuHandler()}
            alt='menu' 
            src='https://cdn.icon-icons.com/icons2/2348/PNG/512/hamburger_icon_143010.png'
            className='h-10 cursor-pointer'
           />

          <a href='/'>
            <img  alt='youtube-logo'
              src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg'
              className='h-[72px]'/>
          </a>
          

        </div>

        <div className='col-span-10  w-[100%]'>
            <div className='w-[100%] flex justify-center '>
            <input type='text' placeholder='   Enter here.....'
              className='border-2 border-indigo-600  w-[40%] p-1 rounded-l-full
              '
              value={searchQuery}
              onChange={(e)=> setSearchQuery(e.target.value)}
              onFocus={()=> setShowSuggestions(true)}
              onBlur={()=> setShowSuggestions(false)}
              />
              <button className='bg-green-500 rounded-r-full py-1.5 px-3 font-bold text-white'>Search</button>

             { showsuggestions && <div className='fixed bg-white py-2 px-5 w-[30%] top-24 left-[39rem] shadow-lg rounded-lg'>
                <ul>
                {suggestions.map(s =>  <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>)}
                  
                </ul>

            </div>}

          </div>

          

            

        </div>

      
          

        <div className='col-span-1  flex items-center justify-center'>
            <img alt='user'src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
            className='h-10'/>
        </div>
    </div>
  )
}

export default Head