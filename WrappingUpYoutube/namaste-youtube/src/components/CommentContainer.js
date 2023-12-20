
import React from 'react'

const commentsData = [{
    name:"kanchan",
    text:"Kohli was ranked number one in the ICC rankings for ODI batsmen. In 2018, he was ranked top Test batsman, making him the only Indian ",
    replies:[]
},
{
    name:"kanchan",
    text:"kfifdhdjfj",
    replies:[
        {
            name:"kanchan",
            text:"kfifdhdjfj",
            replies:[]
        },
        {
            name:"kanchan",
            text:"kfifdhdjfj",
            replies:[]
        },
        {
            name:"kanchan",
            text:"kfifdhdjfj",
            replies:[]
        }
    ]
},

{
    name:"kanchan",
    text:"kfifdhdjfj",
    replies:[]
},
{
    name:"kanchan",
    text:"kfifdhdjfj",
    replies:[
        {
            name:"kanchan",
            text:"kfifdhdjfj",
            replies:[
                {
                    name:"kanchan",
                    text:"kfifdhdjfj",
                    replies:[]
                },
                {
                    name:"kanchan",
                    text:"kfifdhdjfj",
                    replies:[]
                }
            ]
        },
        {
            name:"kanchan",
            text:"kfifdhdjfj",
            replies:[]
        }
    ]
}
]


const Commant = ({data})=> {
    const {name, text, replies} =data;
    return(
        <div className='flex shadow-sm bg-gray-100p-2 rounded-lg'>
            <img
            className='w-12 h=12'
            alt='user'
            src=''/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>
        </div>
    )
}


const CommantList =({commants})=> {

    return commants.map((comment, index)=>(
        <div key={index}>
            <Commant  data={comment}/>
            <div className='pl-5 border border-l-black mk-5'>
                <CommantList commants={comment.replies}/>
                {/* <Commant key={index} data={comment} */}

            </div>

        </div>
        
    )) 

}




const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comment:</h1>
       {/* <Commant data={commentsData[0]}/> */}
       <CommantList commants={commentsData}/>


    </div>
  )
}

export default CommentContainer