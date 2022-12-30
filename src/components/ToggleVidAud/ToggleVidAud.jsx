import React, {useState} from 'react'
import Navbar from "../../container/Navbar/Navbar";
import Hero from "../../container/Hero/Hero";

const ToggleVidAud = () => {
    const [toggleVid,setToggleVid] = useState(true);

    const [toggleAud,setToggleAud] = useState(true);

    return(

        {toggleVid,setToggleVid,toggleAud,setToggleAud}
        
    )
}
export default ToggleVidAud;