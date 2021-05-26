import React, { useState } from 'react';
import ToDOLists from './ToDoList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App12 = ()=>{

   const [inputList , setInputList] = useState("");
   const [Items, setItems] = useState([]);
   const itemEvent = (e)=>{
       setInputList(e.target.value);
   }
   const listofItems =(e)=>{
       setItems((oldItems)=>{
           e.target.value=""
           return [...oldItems,inputList];
           
       });
       setInputList("");
   }
   const deleteItem = (id)=>{
    console.log('deleted');
    setItems((oldItems)=>{
        return oldItems.filter((arraEl,index)=>{
            return index !== id;

        })
    })
}





    return(
    <>
   <div className="main_div">
   <div className="center_div">
   <br/>
   <h1>ToDo List</h1>
   <br/>
   <input type= "text" onChange={itemEvent} placeholder="Add a items" value={inputList}/>
   <Button onClick={listofItems}><AddIcon/></Button>
   <ol>
   {
     Items.map((itemVal,index)=>{
         return (
             <ToDOLists
             key ={index}
             id = {index}
             text = {itemVal}
             onSelect = {deleteItem}




             />
         )

   })}
   </ol>

   </div>

   </div>


    </>
    )

}
export default App12;