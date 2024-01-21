import React from 'react'
import Headers from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRateMovies from '../hooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRateMovies();
  

  return (
    <div>
      <Headers/>
      {
        showGptSearch ? (<GptSearch/>) :
        (
        <>
          <MainContainer/>
          <SecondaryContainer/>

        </>
        )
      }
      
    </div>
  )
}

export default Browse


/**
 * MainContainer
 *   - VideoBackground
 *   - VideoTitle
 * SecondaryContainer
 *   - MovieList * n
 *       -card * n
 * 
 */