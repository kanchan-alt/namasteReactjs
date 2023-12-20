import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    useEffect(()=>{
       dispatch(closeMenu());
    },[])
  return (
    <div className='flex flex-col'>
    <div className='px-2'>
        <iframe 
            width="930" 
            height="600" 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

         </iframe>



    </div>
    <CommentContainer/>
   

    </div>
  )
}

export default WatchPage