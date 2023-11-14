import React from "react";

const Shimmer = ()=> {
    return(

       

            <div className="shimmer-container wrapper flex justify-center flex-wrap gap-8 mt-32">

            {Array(13).fill("").map(( e, index)=>(

                <div className="shimmer-card border border-gray-200 bg-gray-300 w-[270px] h-[200px] p-3 shadow-sm "
                    key={index}>

                        <img/>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        </div>




                ))}

            </div>

        
           
    )
}

export default Shimmer;