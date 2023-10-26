<mark> what is the difference between Named Export, Default export and * as export?</mark>

 - The difference is only syntax of import and depeand upon in conditon where we using it.

*Default  export*
 - most common we used  Default  export 
 - Export a single value
 - Can use any name when importing

 ```
 const Header = ()=> {
    return()
 }

 export default Header;

 if we import to app.js file

 import Header from "path"

 ```
*Named Export*
- Can export multiple values or functions from module
- MUST use the exported name when importing
- Each export is given a name and can be imported individually in other modules using these names.

```
 export const Header = ()=> {
    return()
 }

  export const Footer = ()=> {
    return()
 }



 if we import to app.js file

 import { Header, Footer } from "path"

```

 ** as export(Namespace Export)*

- This method is used to export all the named exports from a module as properties of an object. It's especially useful when you want to import multiple exports from a module but don't want to list them individually.

```
export const title = 28;
export const Header = ()=> {
    return()
 }

 if we import to app.js file

 import * as everyThing from "path"

 <everyThing.Header/>
```


<mark>what is the importance of config.js file?</mark>

- commonly name as config.js or constant.js or common.js
- All the harcord things are put in this file 
- all the common thing are used in our project put in this
- we can make file tsest , build production time

```
Example:- 

export const CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

export const LOGO_URL ='https://img.freepik.com/premium-vector/fast-food-logo-template-design-vector_20029-840.jpg';
```

<mark> what are React Hooks?</mark>

- Hooks are a new addition in React 16.8. let use state and features without writing a class.Hooks can be stateful and can manage side-effects.

- it simply a normal/javascript function which are reusable

- The most common built-in React Hooks are:
    - useState
    - useEffect:- To manage side-effects like API calls, subscriptions, timers, mutations, and more.

<mark>why do we need a useState Hook? </mark>

- To manage states. Returns a stateful value and an updater function to update it.

- syntex  const [varible, setFunction] = useState(default value);
usestate  is function which return array of varible and function which update the varible 

- it create local state varible for functional component


```
Example:-
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```