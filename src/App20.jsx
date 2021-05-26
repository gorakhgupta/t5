//#7  React API Call to get Pokemon JSON data using axious and useEffect
import React, { useEffect, useState } from 'react';
// import CompA from './CompA';
import About from './About.jsx';
import Contact from './Contact';
import { Route,Switch } from "react-router-dom";
import Error from './Error';
import Menu from './Menu';




const App20=()=>{
    return(
       <>
       <Menu/>
       <Switch>
      <Route exact path="/" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route component={Error}></Route>
       </Switch>
       </>
        
    )
  
}
export default App20;
