
const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

console.log(heading); // return object

/**
 *  <div id = "parent">
       <div id= "child">
         <h1> i am h1 tag </h1>

       </div>
    </div> 
 */

    const parent = React.createElement(
        "div", 
        {id:"parent"}, 
        React.createElement(
        "div", 
        {id:"child"},
        React.createElement(
         "h1", 
         {}, 
         "I am h1 tag")
    ) 
    );


/**
 *  <div id = "parent1">
       <div id= "child1">
         <h1> i am h1 tag </h1>
         <h2> i am h2 tag </h2>

       </div>
    </div> 
 */


    const parent1 = React.createElement(
        "div", 
        {id:"parent"}, 
        React.createElement(
        "div", 
        {id:"child1"},
       [ React.createElement(
         "h1", 
         {}, 
         "I am h1 tag"), 
        React.createElement(
            "h1", 
            {}, 
            "I am h1 tag")
        ])
    ) 


    
   

 /**
  *  <div id = "parent3">
       <div id= "child1">
         <h1> i am h1 tag </h1>
         <h2> i am h2 tag </h2>

       </div>

       <div id= "child2">
         <h1> i am h1 tag </h1>
         <h2> i am h2 tag </h2>

       </div>
    </div> 
  */   


    const parent3 = React.createElement(
        "div", 
        {id:"parent3"}, 
       [React.createElement(
        "div", 
        {id:"child1"},
       [ React.createElement(
         "h1", 
         {}, 
         "I am h1 tag of child1"), 
        React.createElement(
            "h1", 
            {}, 
            "I am h1 tag child1")
        ]),
        React.createElement(
            "div", 
            {id:"child2"},
           [ React.createElement(
             "h1", 
             {}, 
             "I am h1 tag  child2"), 
            React.createElement(
                "h1", 
                {}, 
                "I am h1 tag child2 ")
            ])
    ] 
    )



const root = ReactDOM.createRoot(document.getElementById("root"))

   root.render(parent3)

// this render converted this object into tag and put into dom