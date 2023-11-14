import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';
// import Grocery from './components/Grocery';

import UserContext from './utils/UserContext';
 

// lazy loading

const Grocery = lazy(()=> import('./components/Grocery'))

const AppLayout = ()=> {

   const [userName, setUserName] = useState();

   useEffect(()=> {
      // Making an api call and send userName and password

      const data = {
         name:"virat18"
      }

      setUserName(data?.name)

      

   },[])
   return(
      <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
         <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
         
      </div>

      </UserContext.Provider>
      
   )
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element:<AppLayout/>,
      children:[
         {
            path: "/",
            element:<Body/>,
      
         },
         {
            path: "/about",
            element:<About/>,
      
         },
         {
            path: "/contact",
            element:<Contact/>,
      
         },
         {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
      
         },
         {
            path: "/restaurants/:resId",
            element:<RestaurantMenu/>,
      
         },
   

         ],
      errorElement:<Error/>

  
   }])



const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<AppLayout/>);

root.render(<RouterProvider router={ appRouter }/>)




