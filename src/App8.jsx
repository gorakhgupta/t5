import React, { useState } from 'react';
import './index.css';
const App8 = ()=>{
    // const state = useState();

    const [Fullname,SetFullname] = useState({
        fname : "",
        lname : "",
    });

    const InputEvent = (e)=>{
      const value = e.target.value;
      const name = e.target.name;
      SetFullname((preValue)=>{
          if(name == "Fname")
          {
              return (
                  {
                      fname : value,
                      lname : preValue.lname
                  }
              )
          }
          else
          {
            return (
                {
                    fname : preValue.fname,
                    lname : value
                }
            ) 
          }
      })



    }
 
    // const onsub = (e)=>{
    //     e.preventDefault();
    //     Setnname(cuu);
    //     Setnname1(cuu1);

    // }

return (
    <form >
    <div >
    
        <h1>Hello {Fullname.fname} {Fullname.lname}</h1>
        <br></br>
        <input type = "text" name ="Fname" placeholder="Enter first Ur Name :"    onChange={InputEvent}/><br/><br/>
        <input type = "text" name ="Lname" placeholder="Enter Last Ur Name :"     onChange={InputEvent}/><br/><br/>
        <button type= 'submit' >Click Me 👍</button>
    </div>
    </form>
)
}
export default App8;
