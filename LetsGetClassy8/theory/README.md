- How do you create Nested Routes react-router-dom configuration

  ```
   like http://localhost:1234/about/course(
    we creating nested Router configruation 
   )

    const appRouter = createBrowserRouter([{

      path: "/",
      element:<AppLayout/>,
      children:[
         {
            path: "/",
            element:<Body/>,
      
         },

        {
        path:"/contact",
        element: "/<About>"
        children: [{
                path:"/course",
                element:<Courses/>

        }],
        errorElement: <CoursesError/>

      },

       {
            path: "/about",
            element:<About/>,
      
         },
      
      ],  
          
    }])
  ```

 



- what is the order of life cycle method calls in class Based Components


       - 3 phases of life cyle method in class based components
            
            -  Mounting phase(this method called when an instance of component are created and inserted in Dom)
            -  updating phase( when props and state change it call)
            -  unMounting phase(component removed  from Dom)

       - Mounting phase:- first constuctor() call then render() then componentDidMount()[this call after first render of component]

       - updating phase any chnage in state or props it render then dom update the componentDidUpdated() call

       - unMounting phase cleaning phase mean change page we unmount component
       
       - REMEMBER if there more children inside parent all children first render(in batch) then dom upadate then componentDidMount()


- why do we use componentDidMount?

   - for third party Api call its is best place 

   - for user experience component render()---> constuctor() --> componentDidMount() call ---> again render....
     
      
- why do we use componentWillUnmount? Show with example

    - componentWillUnmount is method used when we change the component withour refresh

    - we create class with name Parent in componentDidMount method we set setInterval for 1000s it execute after render component and constuctor  when it go to other component  then it call  componentWillUnmount() because of this our app scalable

    ```
    import { Component } from "react"

    class Parent extends  components {
      constructor(props){
          super(props)

      }
      componentDidMount() {

          this.timer = setInterval(() => {
          console.log('slow study create impact');
          }, 1000);

      }

      componentWillUnmount(){

       clearInterval(this.intervalId);

      }

      render(){
         return(
            <div>
            <h1>code speak more...</h1>
            </div>
         )

      }
    }

    export default Parent;


    ```

   - When the Parent is mounted, the interval timer starts running, and it logs a message to the console every second.

   - When the component is about to be unmounted (e.g., when the user navigates to a different page or removes the component from the UI), the componentWillUnmount method is called.

   - Inside componentWillUnmount, clear the interval timer using clearInterval.

   - By using componentWillUnmount, we ensure that any resources created by the component are properly cleaned up before it's removed from the DOM, 
   - helping to prevent memory leaks and unexpected behavior in your React application. 

   - It's important to note that with the introduction of React hooks, especially the useEffect hook's cleanup function, the usage of componentWillUnmount is less common in modern React applications.

   - Read about createHashRouter, createMemoryRouter from React Router docs.

- (Research)why do we use Super(props) in constructor?

  - Initialize the Component mean we need to call super(props) to invoke the constructor of the parent class.

  - Access this.props: Inside your component, you often need to access the props passed to it. The super(props) call makes this.props available for use in your component's constructor and other methods.

  - this used when we need to access a few variables in the parent class. It returns an object which represents the parent class.

  - You should not use console.log(super(props)) within a constructor in a React component. super(props) is not a value that can be logged, and it should be used solely for invoking the constructor of the parent class and initializing the component correctly.

- (Research) why can't we have the callback function of useEffect async?

   - useEffect( async () => {
   // api call or data fetch
   }, [])

   - The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument. 

   - an effect hook should return nothing or a clean up function

   -   *07:41:22.910 index.js:1452 Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => ...) are not supported, but you can call an async function inside an effect..*


   - Timing and order of execution: When you mark a function as async, it returns a promise. If the useEffect callback were allowed to be async, it would introduce complexity in terms of timing and order of execution. You may have multiple useEffect callbacks, and handling them as asynchronous functions could lead to unpredictable and hard-to-debug behavior.

   - Synchronization: The primary purpose of useEffect is to handle side effects like data fetching, DOM manipulation, and subscribing to data sources. Synchronizing these side effects is often crucial for a smooth user experience. Allowing useEffect callbacks to be async could make it challenging to ensure that these side effects are executed in a specific order or at the right time.

   - Error handling: With asynchronous functions, handling errors becomes more complex. In a non-async useEffect, if an error occurs in the callback, it's easier to catch and handle the error using a try...catch block. When using an async callback, you'd need to handle errors within the async function using try...catch or .catch(), which can be less straightforward.





### Reference
[React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)

[super(props)](https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react)

[How to use async functions in useEffect](https://devtrium.com/posts/async-functions-useeffect)
