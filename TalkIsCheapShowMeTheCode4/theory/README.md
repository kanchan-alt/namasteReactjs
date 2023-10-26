<mark>*Is JSX mandatory for React?*</mark>

    1. JSX is not mandatory for React, but it is highly recommended and widely used in React applications. JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.
    2. provides a more concise and readable way to define the structure of your React components. 

    3. While you can write React applications without JSX by using pure JavaScript or using reactElements

    4. it is much more common to use JSX because it simplifies the process of building and rendering React components.

 <mark>*Is ES6 mandotory for React?*</mark>

    1. no ES6 not mandotory for React ES6 introduced several features and improvements to JavaScript, which can make your React code more concise, readable, and maintainable.

    2. ES6 introduced several features and improvements to JavaScript, which can make your React code more concise, readable, and maintainable.

    3. using ES6 or later versions is considered best practice for modern React development.


 <mark>*{TitleComponent} vs <TitleComponent/> vs <TitleComponent><TitleComponent/>*</mark>

     1. they all are use for calling react component and mostly we used {<TitleComponent/}

     ```
   const Header = ()=> {
   return (
      <div className='header'>
        <h1> Hi i am header</h1>
        
      </div>

      const Body = ()=> {
        return(
            <Header/>
            <Header> <Header/>
            {Header()}
        )
      }
     ```


<mark>How can i write comments in JSX?</mark>

    single-line comment:using the double slash //

    Multi-Line Comments: /** multi-line comments */
 
<mark>what is <React.Fragment></React.Fragment> and <></>?</mark>

    1.react gaves as React.Fragment which allow you to group a list of children without adding extra nodes to the dom

    2. we know in react we use only one parent that is root we never use more parent component

    3. React.Fragment is empty tag and  <></> is syntatic sugar for React.Fragment


<mark>what is Virtual DOM?</mark>

1. virtual DOM is represtnation of actual DOM

<mark>what is Reconciliation in React?</mark>

    1. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. 

    2. Reconciliation is process where we have driffting algorithm which findout the difference b/w virtual DOM and actual DOM  after find out the difference then render the change in Browser

<mark>what is React Fiber?</mark>

    1. Fiber is a reimplementation of the React reconciliation algorithm that was introduced in React 16.

    2. One of the primary responsibilities of React fiber is the smooth rendering of our website animation and gestures. It also divides the whole rendering work into multiple frames. It also adds the ability in React JS to define the priorities for each frame, re-use them, or abort them.


<mark>why we need keys in React? when do we need keys in React?</mark>

    1. Keys are used in React to identify which items in the list are changed, updated, or deleted.

    2. a key is the only thing React uses to identify DOM elements. 

<mark>can we use index as keys in React?</mark>


    1.YES we use index as keys in React but it is not good way to gave keys to reactElement beacause This can negatively impact performance and may cause issues with component state.(Robin Pokorny) 

<mark>what is props in React? Ways to?</mark>


    1. props mean properites it behavies like parameter in  function

    2. props are normal is object

<mark> What is a Config Driven UI?</mark>

    1. we controlling front-end by data using back-end that is called Config Driven UI


### References

- Virtual DOM : https://reactjs.org/docs/faq-internals.html
- Reconciliation: https://reactjs.org/docs/reconciliation.html
- React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
- React Without ES6: https://reactjs.org/docs/react-without-es6.html
- Index Keys as Anti-Pattern:https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
