import React, { useState } from 'react';

const App4 = ()=>{
    let tm = new Date().toLocaleTimeString();
    const state = useState();
    const [ct,setCt] = useState(tm);
    setInterval(() => {
        time();
        
    }, 1000);
   const time = ()=> {
       let ntm =new Date().toLocaleTimeString();
       setCt(ntm);
   }


    return (
        <>
        <h1 style= {{color:'red',textAlign:'center'}}>Time:{time} is  {tm}</h1>
        </>
    )
}
export default App4;