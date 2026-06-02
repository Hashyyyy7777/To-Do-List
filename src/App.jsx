import { useState } from "react";
import TodoList from "./components/TodoList";
import ListForm from "./components/ListForm";
import UpdateForm from "./components/UpdateForm";

import "./App.css";
function App(){
  const[tasks,SetTasks]=useState([]);
  const[editindex,setEditindex]=useState(null);

function addtasks(name){
if( name === "") return;
 const newtasks={
  name:name
 };
 SetTasks ([...tasks,newtasks]);
};

function deletetask(index){
  const updatedtasks= tasks.filter((_,i) => i !== index);
  SetTasks (updatedtasks);
}
function updatetask(index,name){
const updatedtasks =tasks.map((task,i)=>
i === index
?{
  name
}
: task
);
SetTasks(updatedtasks);
setEditindex(null);
}
   
  

return (
  <div className="div">
  <h1 className="head"> TO DO LIST </h1> <hr className="hr" />
  
  <ListForm addtasks={addtasks}
  />
  {editindex !== null && (
    <UpdateForm 
    task={tasks[editindex]}
    index={editindex}
    updatetask={updatetask}
    />

  )}
  <TodoList
   tasks={tasks}
  deletetask={deletetask}
  setEditindex={setEditindex} />
 


  </div>
);
}


export default App;
