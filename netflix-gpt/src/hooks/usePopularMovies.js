import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    
    //GOAL: Fetch Data from TMDB API and update store

    const dispatch = useDispatch()
    const getPopularMovies = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
        const json = await data.json();
        console.log(json.results);
  
        dispatch(addPopularMovies(json.results))
  
    };
  
  
  useEffect(()=>{
      getPopularMovies();
  },[])
   
 
}

export default usePopularMovies;


