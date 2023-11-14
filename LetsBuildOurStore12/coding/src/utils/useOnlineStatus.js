import { useEffect, useState } from "react";

const useOnlineStaus = ()=> {

    const [ onlineStaus, setOnlineStaus] = useState(true)

    //check if online

    useEffect(()=> {

        window.addEventListener("offline", ()=> {
            setOnlineStaus(false);
        })


        window.addEventListener("online", ()=> {
            setOnlineStaus(true);
        })


        return()=> {
            window.removeEventListener("offline", ()=> {
                setOnlineStaus(false);
            })

            window.removeEventListener("online", ()=> {
                setOnlineStaus(true);
            })
        }

    }, [])

    // boolean value

    return onlineStaus;
}

export default useOnlineStaus;