import React from 'react'
import Button from './Button'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const list = ["All","Sitcoms", "Music", "Trending", "Shopping", "Films", "Sport", "Podcast", "viratkholi", "shivgod",
"billonare","kanchan","lazyPanda", "MyDemon"]





const ButtonList = () => {

  const settings = {
    dots:true,
    infinite:false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
   
    
  };
 
  return (
   
       <div className='m-1 p-2'>
        <Slider {...settings}> {list.map((item, index)=> <Button name={item} key={index}/>)}</Slider>
         
    </div>
  
   
  )
}

export default ButtonList