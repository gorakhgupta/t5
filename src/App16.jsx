import React,{ createContext} from 'react';
import ComA from './ComA';
const FirstName = createContext();
const LastName = createContext();

const App16=()=>{
    return (
        <FirstName.Provider value={"Rocky"}>

        <LastName.Provider value ={"1995"}> <ComA/> </LastName.Provider>
         </FirstName.Provider>
       
    );

}
export default App16;
export {FirstName,LastName};