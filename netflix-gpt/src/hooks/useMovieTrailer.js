import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useMovieTrailer = (movieId)=> {

    const dispatch = useDispatch();


    // fetch trailer video and updating the store with trailer data

    const getMovieVideos = async () => {

        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',
             API_OPTION)

        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];

        console.log(trailer);

        dispatch(addTrailerVideo(trailer))
  

    }

    useEffect(()=>{

        getMovieVideos();

    },[])


}

export default useMovieTrailer;