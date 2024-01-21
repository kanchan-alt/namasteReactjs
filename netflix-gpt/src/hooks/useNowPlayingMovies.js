import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
    
    //GOAL: Fetch Data from TMDB API and update store

    const dispatch = useDispatch()
    const getNowPlayingMovies = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
        const json = await data.json();
        console.log(json.results);
  
        dispatch(addNowPlayingMovies(json.results))
  
    };
  
  
  useEffect(()=>{
      getNowPlayingMovies();
  },[])
   
 
}

export default useNowPlayingMovies


// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));