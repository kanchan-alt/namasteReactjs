import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    useMovieTrailer(movieId);
  

  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen'
       
        height="800px"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1"} title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>

    </div>
  )
}

export default VideoBackground



// {
//     "id": 955916,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Kevin Hart Tries Not To Laugh at His Own Jokes",
//         "key": "aHMnP0Z3Y9Y",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-01-05T20:30:00.000Z",
//         "id": "659f607e4fd14101317dac4b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "New Year's Final Trailer",
//         "key": "QfFasuouxQI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-01-01T17:00:02.000Z",
//         "id": "6593277c64f716677d8f58e8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "m2L-Sa_6MU0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-11-05T21:25:00.000Z",
//         "id": "65480a1ed55c3d00e2128de4"
//       }
//     ]
// }


/**
 * const [trailerId, setTrailerId] = useState(null)
 * 
 * and setTrailerId(trailer.key) so we can used key for video
 */