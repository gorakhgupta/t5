import React, { useState } from 'react';
import './index.css';
const App7 = ()=>{
    // const state = useState();

    const [cuu,SetCur] = useState("");
    const [nname,Setnname] = useState("");
    const [cuu1,SetCur1] = useState("");
    const [nname1,Setnname1] = useState("");
    const InputEvent1 = (e)=>{
       SetCur(e.target.value);
    
    }
    const InputEvent2 = (e)=>{
        SetCur1(e.target.value);
     
     }
    const onsub = (e)=>{
        e.preventDefault();
        Setnname(cuu);
        Setnname1(cuu1);

    }

return (
    <form onSubmit={onsub}>
    <div >
    
        <h1>Hello {nname} {nname1}</h1>
        <br></br>
        <input type = "text" placeholder="Enter first Ur Name :" onChange={InputEvent1}/><br/><br/>
        <input type = "text" placeholder="Enter Last Ur Name :"    onChange={InputEvent2}/><br/><br/>
        <button type= 'submit' >Click Me 👍</button>
    </div>
    </form>
)
}
export default App7;
