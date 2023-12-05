- What is prop drilling?

prop mean properties we pass/can access from parent to children

prop drilling mean we pass/can access from parent to extact child and in-between the child the props come through its a waste(no used of props in that child component) this concept called prop- drilling
  

- what Provider  is lifting the state up?
 if we want pass data from parent component to child component we have way to do but vise- versa from children component to parent component so sibling component can access the data through parent component using lifting the state 

 for Example like 
  Parent Component(RestaurantMenu.js)
  child component(Reestaurantcategories.js)
  accodians we make all controlling of state for children by parent component here we  lifting the state up
      



- what are Context Provider and Context Consumer?
 to find way to stop prop drilling we can use context which are top of tree component and which component want are used it

  first creating context using createContext() hook
  this provide you first Provider and other Consumer

  const value = useContext(MyContext); Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree



```
  <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
         <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
         
      </div>

      </UserContext.Provider>

```

no we consume thecontext using hook called useContext but class base compuntent used this consumer 

```
   <MyContext.Consumer>
    {value => /* render something based on the context value */}
    </MyContext.Consumer>

    my context is context hook which gave power of both Provider using value  and where we want to used using consumer

```


- if you don't pass a value to the provider does it take the default value?

 No we have to pass value in provider to pass any data
 <MyContext.Provider> // we must pass value then we share the data from context
 <MyContext.Provider value={{loggedInUser:userName}}> // here we get default value 
   <MyContext.Provider value={{loggedInUser:userName, setUserName}}> // here we see that change in input it change the loggedInUser value dynamic data


### coding

- Pratices React Context with code examples
- Try out Nested Contexts


### References
[Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)

[React Context](https://legacy.reactjs.org/docs/context.html)

[prop-drilling](https://medium.com/analytics-vidhya/props-drilling-in-react-js-934120a4906b)