
import './App.css';
import { Provider } from 'react-redux';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';

import { createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

 const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {

          path:"watch",
          element:<WatchPage/>
        }
      
      ]

 }])


function App() {
  return (
   
      <Provider store={store}>
        <div>
          <Head/>
          {/* <Body/> */}
          <RouterProvider router={appRouter}/>

        </div>
        

      </Provider>
     
    
  );
}

export default App;
