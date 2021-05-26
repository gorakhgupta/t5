//#7  React API Call to get Pokemon JSON data using axious and useEffect
// # useParams ans useLocation
import React, { useEffect, useState } from 'react';
// import CompA from './CompA';
import About from './About.jsx';
import Contact from './Contact';
import { Route,Switch } from "react-router-dom";
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';

//use render for passing props cause it print only that which is change from first call
// else
//componenet


const App22=()=>{
    return(
       <>
       <Menu/>
       <Switch>
      <Route exact path="/" component={()=><About name="G"/>}></Route>
      <Route path="/service" render={()=><Service name="s"/>}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/user/:fname/:lname" component={User}></Route>
      <Route component={Error}></Route>
       </Switch>
       </>
        
    )
  
}
export default App22;
