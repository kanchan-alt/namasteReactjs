### planining the things first

- Header
    - logo
    - Nav Items
- Body
    - search
    - RestaurantContainer
- Footer
    - copyright
    - Links
    - Address

- swiggi link
    https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957747377982441&lng=77.69931770861149&is-seo-homepage-en

- hardcode put in utils folder (common thing in whole app)    

 - Two type of Export/Import

 export default  Components;
 import components from "path"

 export const  Components;
 import {components} from "path"

 - React hooks{Normal JS utility function}
    - useState() -  local state varible  super powerfull varible
    - useEffect()



- const arrr = useState(restaurantList)  

  const [listOfRestuarnts, setListOfRestuarnts] = arr;
  const listOfRestuarnts = arr[0]
  const setListOfRestuarnts = arr[1]

![microservices-guide](" https://opensenselabs.com/blog/articles/microservices-guide")


#### API call in React in two way

<mark>first way</mark>
  - userload the page => make a API call  => renderPage

<mark>first way</mark>
  - user load the page => render page(inital page) => API call => Upadate UI


### Finding the Path 07

- useEffect call every time when my component render
- change the behaviour of render

    - if no dependency array => useEffect is called on every render

    - if dependency  array is empty = []=> useEffect is called on inital render(just once)

    - if dependency array is[some_thing] called every time wnen some_thing(useState varible) is updated


- never called outside function component

    #### React don't like Inconsistency
- dont do ifelse(condition)/for()loop/ function(){}

       ``` if(){
          const [search,setSearch] = useState("")
        }
      ```

- never create component inside component(*if you want to write component then write above of that component*)  

- we can create more than one useEffect
#### React Router
- React Router(npm i react-router-dom)
- go to rootlevel component say AppLayout()=>{}

- ***whenever you create route you need routing configuration***

    - Firstly import { createBrowserRouter} from "react-router-dom"

    - then configure below Applayout (squence matter)


       ```
          const appRouter = createBrowserRouter([
         {
          path: "/",
          element:<AppLayout/>,
          errorElement:<Error/>

         },

          ])

       ```

     - 
      ```
              import { useRouteError } from 'react-router-dom'

              const Error = () => {
                 const err = useRouteError();
                 console.log(err);
             return (
                      <div>
                        <h1>Ooops!!!!</h1>
                        <h2>Something went wrong</h2>
                        <h3>{err.status}:{err.statusText}</h3>
                      </div>
                        
                      )
                       }
      ```  

     - we can see  createBrowserRouter() take array of object  where path is given

     - then we should provide to router for this we have to import RouterProvider from react-route-dom  

     ```
       import { createBrowserRouter, RouterProvider } from "react-router-dom"
     ```


   - how we render this path in place of <appLayout/>  

      ```
          root.render(<AppLayout/>);
                    (In Place)
          root.render(<RouterProvider router={ appRouter }/>)
      ```


 - react-router-dom also provied better showing error   
 - we create Error.js  and ther we used hook 

    ```
        import React from 'react'
        import { useRouteError } from 'react-router-dom'

        const Error = () => {
            const err = useRouteError();
            console.log(err); this object we get we can see in console
          return (
          <div>
            <h1>Ooops!!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
          </div>
            
          )
        }

        export default Error
    ```

      ##### children Router

      - using outlet we can change the chidlern only  header will be in same place only body part change accoding to what path we choosing 

      - React-router-dom gives access to outlet this outlet will be filled by the configuration so, all the children willl go inside outlet according to the route


      ```
                const AppLayout = ()=> {
            return(
                <div className="app">
                  <Header/>
                  <Outlet/> 
                  
                </div>
            )
          }
      ```


 - how we create a link?
   
   - <li><a href="/about">Home</a></li>
   - dont use <a> tag while using react for link (*it reload whole page*)

   ``` 
       import { Link } from "react-router-dom";  

       <li>
          <Link to="/about">
               Home (witout refresh)only component change
          </Link>
       </li>
   ```

 - we can see in console we can see blink where component change

 - *single page application* it not change the network call and fetch the data it only change component which are already there when app start

- 2 type routing in web page
      
   - client side routing
   - server side routing


- we used to do network call and get html,css and javascript and load the whole page it called (*server side routing 
*)

- we don't do network call and get html,css and javascript  we only just change the component(everthing there in code) *server side routing*


#### dynamic routing

- if the route to restaurant menu page is like

```
   {
    path: "/restaurant/:resId"
      this resId is dynamic(it can be anything)

    element: <RestaurantMenu/>
   }
```


```
  import { useParams } from 'react-router-dom';

  using this hook we grape resId 

  const RestaurantMenu = () => {
    const params = useParams();
    const {resId } = params
             OR
    const { resId } = useParams();



  }


```

- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.957747377982441&lng=77.69931770861149&restaurantId=23690&catalog_qa=undefined&submitAction=ENTER


### Let's get classy 08









