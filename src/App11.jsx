import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
const App11 = ()=>{
const [curr ,Setcurr] = useState(0);
const increment = ()=>{
Setcurr(curr+1);
}
const decrement = ()=>{
let v =curr;
if(v<=0)
{alert('OutOFBound');
return;
}
Setcurr(v-1);
}

   return (
       <>
       <h1>This is Heading</h1>
       <input type="number" value={curr}  /><br></br><br></br>
       <Button className="efect" onClick={increment}><AddIcon/></Button> <Button className="efect1" onClick={decrement} ><RemoveIcon/></Button>
       </>
   )
}
export default App11;
