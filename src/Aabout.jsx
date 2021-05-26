import React from "react";
import { NavLink } from "react-router-dom";
import Common from './Common';


import img from './bg2.jpg';
const Aabout    =()=>{
    return(
       <>
       <Common 
    name="Welcome To About Page" 
    visit="/service" 
    btnname="Contact Now" 
    imgsrc={img} 
    info="Here You 'll Know what u Need"/>
    
       </>
        
    )
  
}
export default Aabout;
