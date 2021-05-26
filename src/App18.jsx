//#7  React Challenge
import React, { useEffect, useState } from 'react';
import ComA from './ComA';


const App18=()=>{
    const [num,setNum]=useState(0);

    useEffect(()=>{
        // alert("I m clicked");
        document.title=`You Have Clicked ${num} times`;

    },[num])

    return (
        <>
        <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>

      </>
    );

}
export default App18;
