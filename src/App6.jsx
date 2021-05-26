import React, { useState } from 'react';
import './index.css';
const App6 = ()=>{
    // const state = useState();

    const [cuu,SetCur] = useState("");
    const [nname,Setnname] = useState("");
    const InputEvent = (e)=>{
       SetCur(e.target.value);
    
    }
    const onsub = ()=>{
        Setnname(cuu);

    }

return (
    <div >
        <h1>Hello {nname}</h1>
        <br></br>
        <input type = "text" placeholder="Enter Ur Name :"  onChange={InputEvent}/><br/><br/>
        <button onClick={onsub}>Click Me 👍</button>
    </div>
)
}
export default App6;
