 import React from "react";

 class UserClass extends React.Component{

    constructor(props){
        super(props);

       
    this.state = {
        userInfo: {
            name: "Dummy",
            location:"Default",
            avatar_url: "http://dummpy-photo.com",
            twitter_username: "kuch be",

        }
      }

        console.log(this.props.name +"Child Constructor");
    }

    async componentDidMount(){
        console.log(this.props.name +"child componentDidMount");

        // Api call

        const data = await fetch("https://api.github.com/users/akshaymarch7")

        const json = await data.json()
        console.log(json);
    
        this.setState({
          userInfo:json,
        })
    }

    componentDidUpdate(){
       console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
         const {name, location, avatar_url, twitter_username
         } = this.state.userInfo

        

            console.log(" Child Render");

        return(
            <div className='user-card'>
            <h1>Class base component</h1> 
             <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:{twitter_username} </h4>
        </div>

        )

    }


}

export default UserClass;


/**
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