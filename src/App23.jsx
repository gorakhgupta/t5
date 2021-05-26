//#7  React API Call to get Pokemon JSON data using axious and useEffect
// # useParams ans useLocation
import React, { useEffect, useState } from 'react';
// import CompA from './CompA';
import About from './About.jsx';
import Contact from './Contact';
import { Redirect, Route,Switch } from "react-router-dom";
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//use render for passing props cause it print only that which is change from first call
// else
//componenet


const App23=()=>{
    return(
       <>
       <h1 className="bg-danger" >This is Cool</h1>
       <button className="btn btn-outline-success">Welcome</button>
       <Menu/>
       <Switch>
      <Route exact path="/" component={()=><About name="G"/>}></Route>
      <Route path="/service" render={()=><Service name="s"/>}></Route>
      {/* <Route path="/contact" component={Contact}></Route> */}
      {/* <Route path="/search" component={Search}></Route> */}
      {/* <Route path="/user/:fname/:lname" component={User}></Route> */}
      {/* <Route component={Error}></Route> */}
      <Redirect to="/" /> 
       </Switch>
       </>
        
    )
  
}
export default App23;
