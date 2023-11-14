import {Component} from 'react'

import User from './User';
import UserClass from './UserClass';
import UserClass1 from './UserClass1';



class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent Constuctor");

  }

 componentDidMount(){
    console.log("Parent componentDidMount");

   this.timer = setInterval(()=> {
      console.log("NamasteReact OP");
    }, 1000)

   
 }

 componentWillUnmount(){
  clearInterval(this.timer)
 }

  render(){
    console.log("Parent Render");

   
    return (
          <div>
            <h1>About</h1>
            <h2> THis is Namaste React web series</h2>
            <UserClass name={"virat 18"}
            location= {"Whole world ❤️"}/>

            <UserClass1 name={"virat 24"}
            location= {"Whole world ❤️"}/>                    

            
          </div>
        )

  }

}





export default About

// 1. functional componet(as parent)
// const About = () => {
  
//   return (
//     <div>
//       <h1>About</h1>
//       <h2> THis is Namaste React web series</h2>
//       <User  name={"kanchanLata kujur"}/>
//       <UserClass name={"virat 18"}
//       location= {"Whole world ❤️"}/>
      
//     </div>
//   )
// }



// 2.multiple children


// class About extends Component{
//   constructor(props){
//     super(props);

//     console.log("Parent Constuctor");
//   }

//  componentDidMount(){
//     console.log("Parent componentDidMount");
//  }

//   render(){
//     console.log("Parent Render");
//     return (
//           <div>
//             <h1>About</h1>
//             <h2> THis is Namaste React web series</h2>
//             <UserClass name={"virat 18"}
//             location= {"Whole world ❤️"}/>

//             <UserClass name={"Anuska 18"}
//             location= {"Whole world ❤️"}/>
            
//           </div>
//         )

//   }

// }

