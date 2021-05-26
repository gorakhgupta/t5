import React, { useState } from 'react';
import './index.css';
const App9 = ()=>{
    // const state = useState();

    const [Fullname,SetFullname] = useState({
        fname : "",
        lname : "",
        email: "",
        number: "",
    });

    const InputEvent = (e)=>{
    //   const value = e.target.value;
    //   const name = e.target.name;
    //modified one
      const {name, value }= e.target;
      SetFullname((preValue)=>{
          return{
              ...preValue,
              [name]:value,

    }
}
    )
}


 


return (
    <form >
    <div >
    
        <h1>Hello {Fullname.fname} {Fullname.lname} {Fullname.email} {Fullname.number} </h1>
        <br></br>
        <input type = "text" name ="fname" placeholder="Enter first Ur Name :"    onChange={InputEvent}/><br/><br/>
        <input type = "text" name ="lname" placeholder="Enter Last Ur Name :"     onChange={InputEvent}/><br/><br/>
        <input type = "email" name ="email" placeholder="Enter Email :"     onChange={InputEvent}/><br/><br/>
        <input type = "number" name ="number" placeholder="Enter Number :"     onChange={InputEvent}/><br/><br/>
        <button type= 'submit' >Click Me 👍</button>
    </div>
    </form>
)
}
export default App9;
