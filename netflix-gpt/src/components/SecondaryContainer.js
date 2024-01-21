import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies) 
  
  return movies.nowPlayingMovies && (
    <div className=' bg-black'>
      <div className='-mt-48 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rates"} movies={movies.TopRateMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
     
      </div>
    </div>
  )
}

export default SecondaryContainer

/**
 * Movielist - popular
 *   MovieCard * n
 * now playing
 *    MovieCard * n
 * Trending
 *    MovieCard * n
 * Horror
 *  MovieCard * n
 */