//#54
import React, { useEffect, useState } from 'react';
import ComA from './ComA';


const App17=()=>{
    const [num,setNum]=useState(1);
    const [nums,setNums]=useState(5);
    useEffect(()=>{
        alert("I m clicked");

    },[num])

    return (
        <>
        <button onClick={()=>{setNum(num+1)}}>Click me {num}</button>
        <button onClick={()=>{setNums(nums+1)}}>Click me {nums}</button>
      </>
    );

}
export default App17;
