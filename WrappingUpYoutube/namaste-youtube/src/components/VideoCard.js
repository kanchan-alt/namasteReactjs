import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
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

export default VideoCard