const Shimmer = ()=> {
    return(
        <div className="shimmer-container wrapper">

            {Array(13).fill("").map(( e, index)=>(

                   <div className="shimmer-card"
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