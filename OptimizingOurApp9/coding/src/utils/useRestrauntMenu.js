
import { useEffect, useState } from "react";
import { MENU_API } from '../utils/constants';

const  useRestrauntMenu = (resId)=> {


    const [resInfo, setResInfo] = useState(null)
    // fetchdata

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=> {
        const data = await fetch( MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER" )
        const json = await data.json();
          console.log(json.data);
        setResInfo(json.data)
        
    }

    return resInfo;
}


export default useRestrauntMenu;