import React, { useState } from 'react';

const App5 = () =>{
    // const bgi = "yellow";
//   const state = useState();
  const [bg,setBg]= useState("red");
  const updatebgagain = ()=>{
      let nnbg = "red";
      setBg(nnbg);
  }
   const updatebg = ()=>{
       let nbg = "yellow";
       setBg(nbg);

 }
    return (
        <>
        <div style={{backgroundColor:bg,height:'1000px' ,width:'1900px'}}>
            <button onClick={updatebg} onDoubleClick={updatebgagain}> Click Me</button>
        </div>
        </>
    );
}
export default App5;





