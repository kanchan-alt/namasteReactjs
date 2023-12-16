import React from 'react'
import { useSelector } from 'react-redux'


const BarSide = () => {

    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return null;
  return (
    <div className='w-[15%] p-5 shadow-lg'>
        
        <ul className='font-bold text-base space-y-1 mb-2'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        

        </ul>

        <hr></hr>
        

        <h1 className='font-bold mt-2 mb-2'>Explore</h1>
           <ul className='space-y-1 mb-2'>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sport</li>
            <li>Learning</li>
            <li>Fashion & beauty</li>
            <li>Podcasts</li>
           </ul>

        <hr></hr>

        <h1 className='font-bold my-2'>More from YouTube</h1>

            <ul className='space-y-2 mb-2'>
                <li>YouTube Premium</li>
                <li>YouTube Studio</li>
                <li>YouTube Music</li>
                <li>YouTube Kids</li>
            </ul>

        <hr></hr>

            <ul className='space-y-2 my-2 '>
                <li>Setting</li>
                <li>Report history</li>
                <li>Help</li>
                <li>Send feedback</li>
            </ul> 

        <hr></hr>

        <div className='text-[14px] font-medium text-slate-700 '>
           <p>About Press Copyright Contact Us Creartor Advertise Developers</p>  
           <p>Terms Privacy Police & Safety How Youtube works Test new features</p> 
        </div>    



    </div>
  )
}

export default BarSide