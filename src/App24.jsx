import React from "react";
import Hhome from './Hhome';
import Aabout  from './Aabout';
import Ccontact from './Ccontact';
import Sservice from './Sservice';
import {Switch,Route} from 'react-router-dom';
import NavBar from './NavBar'
import './index.css';   
import Footer from './Ffooter';



const App24=()=>{
    return(
       <>
         <NavBar/>
        <Switch>
      
       <Route exact path="/" component={Hhome} />
       <Route exact path="/about" component={Aabout} />
       <Route exact path="/service" component={Sservice} />
       <Route exact path="/contact" component={Ccontact} />
       
        </Switch>
        <Footer/>
     

       </>
        
    )
  
}
export default App24;
