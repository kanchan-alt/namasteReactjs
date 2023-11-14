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

  - for class base component  we use keyword class after class name and we extends(inherita some power from react) like React.Component

       - class UserClass extends React.Component(example)

  - while using clas component always write render() which return jsx

        ``` class UserClass extends React.Component{
          render(){
            return(
              "Jsx return"
            )
          }
        }
       ```


  - then we how props work on class componet 
    
    - we <UserClass name={"virat 18"}location= {"Whole World ❤️"}/> pass arugument

     - in class componet we use constuctor to used prop 
            
            ```
            constructor(props){
              super(props);
              console.log(props);
          }
            ```

     - How we used props in our component using this.props which destructed   
     
     ```
             render(){
            const {name, location} = this.props;

              return(
                  <div className='user-card'>
                  <h1>Class base component</h1>   
                  <h2>Name:{name}</h2>
                  <h3>Location:{location}</h3>
                  <h4>Contact: telepath</h4>
              </div>

        )}
          ```     


- Remeber all the state varible in constructor

    ``` this.state = {
      all state varibele
            count: 0,
            coun2: 1,
            // never Upadate state variable directly

        };```

- how we updated never Upadate state variable directly
 this.setState({here we upadte})

 ``` <button
                onClick={()=>{
                  this.setState({
                      count:count + 1,// deconstruct
                      count:this.state.count + 1,
                  })
                }}
              >countIncrease
              
           </button> 
           
  ```

- how cycle behind work  

 - when class load  class instance are created
 -  first- constuctor call
 -  then -render() call

 - About.js(parent componet change in class componet)


- constructor(){} => render(){}=> componentDidMount(){}

- why we call Api call in componentDidMount(){}  bez:

   - render the component
   - api call in componentDidMount
   - upadte(dom with data)
   - re-render the component


- react cycle has two phase 

  - render phase
  - commit phase   


- constucter then render for parent component and if there children component inside  then it call children constuctor and render for every sibling (batch up ) then dom upadte(batch up) then all (commit phase)componentdidmount call in sequence like first child  componentdidmount  second child  componentdidmount .... then parent componentdidmount 


- /**
 * -----MOUNTING-----
 * 
 * CONSTRUCTOR(DUMMY)
 * RENder(dummy)
 *    <html dummpy>
 * 
 * COmponent Did Mount
 *   <API call>
 *   <this.setState> -> state varible is updated
 * 
 * ----UPDATE------
 * 
 *   render(api data)
 *   <HTML (NEW API data)>
 *  COmponent Did Update
 * 
 * 
 * ---- unMounting---
 *  when we change the page
 */


- useEffect(()=> {
     // Api CALL
}, [count, count2]) // undestand why we used array better than if else for evey state

   OR

- componentDidUpdate(prevProps,prevState){
  if(this.state.count === prevState.count || this.state.count === prevState.count){
    //code
  }

if two useEffect call => two if else loop here
  if(this.state.count2 === prevState.count 2|| this.state.count2 === prevState.count2){
    //code
  }
}


- componentWillUnmount  where we clean up  it make scalable application(performace losses)




### Optimizing Our App


<mark>Single responsibility principale</mark>

- single idenity
- REstaurantMenu -> only have responsibilty of showing menu

- modularity mean break down your code in different diff modules(*code should be maintainable and testable*)

- you write test case for each code like REstaurantMenu(module) finding bug is easy

- Beacause of modularity it can we reuseable

- your code should be readable


<mark>Custom hook</mark>

- Why we make Hook 
   - reuseablity
   - modulity
   - readblity
   - seperation of concern
   - Maintainablity


- hook are kind of utility functions
- we just abstract some responsbility from component
and extract in hook both component and hook moduleable

- REstaurantMenu (worried for display not for where the data coming from)

- we make custom hook for fetch code in useResturantMenu

      const resInfo = useRestrauntMenu(resId);

- in utils we make make useRestrauntMenu.js
   
   - hooks are functional component thing simple way

   ```
        const  useRestrauntMenu = (resId)=> {


          const [resInfo, setResInfo] = useState(null)
          // fetchdata

          useEffect(()=>{
              fetchMenu();
          },[])

          const fetchMenu = async ()=> {
             // here fetch work get the data in local state varible using function and return the local state varible
              
          }

          return resInfo;
      }


   ```

- Other Example to understand about custom Hook

   - Online status


-  chunking/ code splitting/ Dynamic Bundling / lazy loading/ on demand loading/ dynamic import


### tailwind


- PostCSS Language Support extension

-  setting -> unknown -> (change warning to ignore)