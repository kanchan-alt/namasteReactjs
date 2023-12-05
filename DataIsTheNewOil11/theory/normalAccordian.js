import React, { useState } from 'react'

const Section = ({title, description})=> {

  const [isVisible, setIsVisible] = useState(false)
   return(
    <div className='border border-black p-5 m-8'>
    <h3 className='font-bold'>{title}</h3>
    {isVisible? 
    <button 
    className='cursor-pointer underline'
    onClick={()=> setIsVisible(false)}>Show</button> 
    :
    <button 
     className='cursor-pointer underline'
     onClick={()=>setIsVisible(true)}>Hide</button>
    }
{/* 
    <button
    className='cursor-pointer underline'
    onClick={()=>setIsVisible(!isVisible)}>{isVisible? 'Show': 'Hide'}
    </button> */}
   {isVisible && <p>{description}</p>}
  </div>

   )
 

}

const Grocery = () => {
  return (
    <div>
        <h1 className='font-bold text-red-900 text-center text-[24px] p-2'>Our grocery online store, we have a lot  of child components inside this web page</h1>

        <Section title={"About Instamart"}
        description={"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of the sport.[3] He is the highest run scorer in T20I and IPL. In 2020, the International Cricket Council named him the male cricketer of the decade. Kohli is currently fourth-highest run-scorer in international cricket and stands second in the list of most international centuries scored. He also holds the record for scoring the most centuries in One Day International cricket.[4][5] Kohli was a member of the Indian team that won the 2011 Cricket World Cup and 2013 ICC Champions Trophy."}
        />

       <Section title={"Team Instamart"}
        description={"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of the sport.[3] He is the highest run scorer in T20I and IPL. In 2020, the International Cricket Council named him the male cricketer of the decade. Kohli is currently fourth-highest run-scorer in international cricket and stands second in the list of most international centuries scored. He also holds the record for scoring the most centuries in One Day International cricket.[4][5] Kohli was a member of the Indian team that won the 2011 Cricket World Cup and 2013 ICC Champions Trophy."}/>


       <Section title={"Careers"}
        description={"Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of the sport.[3] He is the highest run scorer in T20I and IPL. In 2020, the International Cricket Council named him the male cricketer of the decade. Kohli is currently fourth-highest run-scorer in international cricket and stands second in the list of most international centuries scored. He also holds the record for scoring the most centuries in One Day International cricket.[4][5] Kohli was a member of the Indian team that won the 2011 Cricket World Cup and 2013 ICC Champions Trophy."}/>
      
    </div>
  )
}

export default Grocery