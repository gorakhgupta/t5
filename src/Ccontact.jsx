import React from "react";
import { useState } from "react";



const Ccontact=()=>{
  const [data,setData]=useState({
      fullname:"",
      mobile:"",
      email:"",
      msg:""
  });
const InputEvent=(e)=>
{
    const {name,value} = e.target;
    setData((preval)=>{
        return {
            ...preval,
            [name]:value,
        };
    })

}

    const formSubmit=(e)=>{
      e.preventDefault();
      alert(`My name is ${data.fullname} My Email is ${data.email} My phone number is ${data.mobile} and my messege is ${data.msg}`)

    }
    return(
       <>
<div className="my-5">
<h1 className="text-center">Contact Us</h1>
</div>
<div className="container my-5">
<div className="row">
<div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input value={data.fullname} name="fullname" onChange={InputEvent} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input value={data.email} name="email" onChange={InputEvent} type="email" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <input value={data.msg} name="msg" onChange={InputEvent} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mobile No</label>
    <input value={data.mobile} name="mobile" onChange={InputEvent} type="number" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>

</div>

</div>
       </>
        
    )
  
}
export default Ccontact;
