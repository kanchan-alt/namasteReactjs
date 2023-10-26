import React from 'react';
import ReactDOM from 'react-dom/client'; 


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