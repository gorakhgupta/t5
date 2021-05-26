//#4 challenge
import React from 'react';
import ReactDOM from 'react-dom';
function App(){
    const gm="Good Morning ";
    const ga="Good AfterNoon ";
    const gn="Good Night ";
    let ans="";
    const tm=new Date(2020,6,6,18);
    let hrs=tm.getHours();
    const design={
     
    }
    if(hrs>=1 && hrs<=11)
    {ans=gm;
      design.color='green';


    }
    else if(hrs>=12 && hrs<=19)
    {ans=ga;
      design.color='orange';
    }
    else if(hrs>19 && hrs<=23)
    {ans=gn;
      design.color='black';
    }


    return (
       
    
    < >
    <div className="stdiv">
    <h1 >Hello sir, <span style={design}>{ans}</span></h1>

    </div>


    </>
    
    
    );
}
export default App;