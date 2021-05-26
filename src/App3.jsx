import React, { useState } from 'react';
// let val = 0 ;
// const IncNum = ()=>{
//    return val++; Will not work in react
// }
const App3 = ()=>{
//useState() shoubld be defined in main funt 
    const state = useState();
    const [count , setCount] = useState(0); //[currval,updateval]
    
    const IncNum = () =>{
        setCount(count + 1);
    };
return (
    <>
<div style={{color:'red',textAlign:'center',marginTop:'20px'}}>
<h1 > {count}</h1>
 <button onClick={IncNum}> CLick Me</button>

</div>

    </>
);
}
export default App3;