import React from 'react'
import BarSide from './BarSide'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className='flex'>
      <BarSide/>
      {/* <MainContainer/> */}
      <Outlet/>
      
    </div>
  )
}

export default Body