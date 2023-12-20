import React from 'react'

const VideoCard = ({info}) => {
   
    const {snippet, statistics} = info;
    const {channelTitle,thumbnails, localized}= snippet;
    const {title} =localized;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul className=''>
            <li className='py-2 truncate text-[1rem] text-base font-medium'>{title}</li>
            <li className='text-base font-medium'>{channelTitle}</li>
            <li className='text-base font-base'>{statistics.viewCount} views</li>

        </ul>

    </div>
  )
}



export const AdVideoCard = ({info}) => {
  return(
    <div className='P-1 M-1 border border-red-900'>
      <VideoCard  info={info}/>
    </div>
  )
}

export default VideoCard