1. ***When and Why do we need lazy()?***

    <mark>When</mark>
    - If you created large application and have one bundle it slow down the app so we need to do:-chunking/ code spliting/ dynamic bundling /lazy loading / OnDemandLoading / dynamic Import

    - Bundlers can divide a large bundle of code into multiple smaller bundles that can be dynamically loaded at runtime.

    - we can see [makemytrip](https://www.makemytrip.com/) site using the lazy loading bundling the different componet like train journey different bundle to airplane journey 


    <mark>Why</mark>

    - we should make logical bundler for app
    - Don't break the experience of user and don't gave bundle of big size


   


    - with Example we understand In our app we  creatr  a[Grocery.js]

        ```
           import React from 'react'

            const Grocery = () => {
                return (
                       <div>
                        <h1>

                        Our grocery online store, we have a lot  of child components inside this web page

                        </h1>
                        </div>
                    )
                    }

                    export default Grocery
            ```

  - How we make different bundler for [Grocery.js]

    - Without a dynamic import(), here is how we would import a regular component:

    ```
       import Grocery from './components/Grocery';

       Here we have same bundler  when we used this import 

    ```
       <mark>how to use components imported dynamically as regular imports:</mark>

    - const Grocery = lazy(()=> import('./components/Grocery'))

    - In createBrowserRouter how we using dyanmaic loading while routing and different bundler for all app and one for grocery.js
    ```
       {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
      
         },
    ```




2. ***What is suspense?***

- from name we undestand it suspend till component render till show fallback

```
     import React, { lazy } from 'react';
     const MyComponent = lazy(() =>
                 import("./components/Grocery'"));
```

- when we using lazy(()=> import('./components/Grocery')) while it rendering it might take time till time we must show some fallback content while we’re waiting for it to loading....


- You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.

                     or

- You can even wrap multiple lazy components with a single React Suspense component


   ```
       {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading......</h1>}>
               <Grocery/>
               <AnotherComponent />
            </Suspense>,
      
         },
    ```


- A component created using React lazy() is loaded only when it needs to be rendered. Therefore, you need to display some kind of placeholder content while the lazy component is being loaded . Such as a loading indicator so users know that there’s actually something loading that they need to wait for.

React Suspense component lets us show a loading indicator as a fallback prop while we’re waiting for the lazy component to load.

- Error boundries <mark>import MyErrorBoundary from './MyErrorBoundary';</mark>

If the other module fails to load (for example, due to network failure), it will trigger an error. it take care user experience and manage recovery Error boundries.

  ```

  
          const MyComponent = () => (
                <div>
                    <MyErrorBoundary>
                    <Suspense fallback=
                    {<div>Loading...</div>}>
                        <section>
                        <OtherComponent />
                        <AnotherComponent />
                        </section>
                    </Suspense>
                    </MyErrorBoundary>
                </div>
);
  ```

3. ***Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replace with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?***

    - Yes, you need to wrap the component inside  a suspense component. What’s happening return a promise (it uses a hook that does that)



4. ***Advantage and disadvantages od using this code spliting pattern?*** 


    - advantages, such as faster initial loading time, lower memory usage, better user experience, and a smaller app size. Splitting the code into smaller chunks and loading them on demand can reduce the time it takes for your app to start, while loading only necessary code and resources can prevent memory leaks and crashes. Additionally, lazy loading components or resources that are not immediately visible or needed can improve the responsiveness and interactivity of your app, as well as avoid blocking the main thread or showing blank screens. Furthermore, splitting your code into smaller bundles can reduce the overall size of your app and the amount of code that is downloaded and stored on the device.


    - such as increased complexity in development and testing processes, more network requests that can affect performance, and additional code and dependencies that can increase the bundle size. Managing dependencies, handling errors, debugging, and the loading time can all be impacted by code splitting and lazy loading.

5. ***When do we and why do we need suspense?***

   <mark> When do we why do we need suspense</mark>
- Improved User Experience: Suspense allows you to manage asynchronous operations and loading states more gracefully. Instead of showing a loading spinner or error message while waiting for data, you can use Suspense to suspend the rendering of a component until the required data is ready, creating a smoother and more responsive user experience.

  

- Code Splitting: Suspense can be used to split your application's code into smaller, more manageable chunks. This can improve initial load times and reduce the amount of JavaScript loaded upfront, making your app faster and more efficient.

- Error Handling: Suspense also helps with handling errors during asynchronous operations. You can use it to catch errors and display fallback UI or an error message when something goes wrong during data fetching.

    ```
    import React, { Suspense } from 'react';

    const LazyComponent = React.lazy(() => import('./LazyComponent'));

    function MyComponent() {
    return (
        <div>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
        </div>
    );
    }
    ```



  


 - [react-lazy](https://www.copycat.dev/blog/react-lazy/)