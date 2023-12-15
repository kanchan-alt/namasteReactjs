import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2.5 m-1 shadow-lg'>
        <div className='flex items-center justify-around col-span-1'>
            <img 
            alt='menu' 
            src='https://cdn.icon-icons.com/icons2/2348/PNG/512/hamburger_icon_143010.png'
            className='h-10'/>
            <img  alt='youtube-logo'
             src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg'
             className='h-[72px]'/>

        </div>

        <div className='col-span-10 flex items-center justify-center  w-[100%]'>
            <input type='text' placeholder='   Enter here.....'
            className='border-2 border-indigo-600  w-[40%] p-1 rounded-l-full'
            />
            <button className='bg-green-500 rounded-r-full py-1.5 px-3 font-bold text-white'>Search</button>
        </div>

        <div className='col-span-1  flex items-center justify-center'>
            <img alt='user'src='https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
            className='h-10'/>
        </div>
    </div>
  )
}

export default Head