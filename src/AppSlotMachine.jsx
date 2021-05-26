import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const SlotM = (props)=>{
    // let x= "😄";
    // let y= "😄";
    // let z= "🥰";
    if( props.x===props.y && props.y===props.z)
    {
        return (
            <>
           <div className="slot_inner">
           <h1>
            
            {props.x} {props.y} {props.z} 
           </h1>
           <br/>
           <h3>This is Matching</h3>
           <hr/>
           </div>
            </>
        )
    }
    else
    {
        return (
           
                  <>
           <div className="slot_inner">
           <h1>
            
           {props.x} {props.y} {props.z}
           </h1>
           <br/>
           <h3>This is NOT Matching</h3>
           <hr/>
           </div>
            </>


           
        )
    }
     
}
const AppSlotMachine = () =>{
    return (
        <>
        <h1 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{fontWeight:"bold"}}>Slot Machine </span>
       <div>
      
       
       <SlotM x="😄" y="😄" z="😄" />
       <SlotM x="😄" y="😃" z="😄" />
       <SlotM x="😄" y= "😏" z="😄" />
       <SlotM x= "🤧" y= "❄️" z= "🤩" />
       <SlotM x="😄" y="😄" z="😄" />
     
       </div>

        </h1>


        </>
    )
}
export default AppSlotMachine;