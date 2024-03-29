import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRateMovies } from '../utils/moviesSlice';

const useTopRateMovies = () => {
    
    //GOAL: Fetch Data from TMDB API and update store

    const dispatch = useDispatch()
    const getTopRateMovies = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTION)
        const json = await data.json();
        console.log(json.results);
  
        dispatch(addTopRateMovies(json.results))
  
    };
  
  
  useEffect(()=>{
      getTopRateMovies();
  },[])
   
 
}

export default  useTopRateMovies;


