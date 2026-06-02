function TodoList({tasks, deletetask,setEditindex}){

return(
    <div className="todolist">
        {tasks.length === 0 ?  ( <p className="text"> no tasks available</p>):
     (
           <ul className="ul" > 
       {tasks.map((task, index) =>(
       <li key={index}>
      <span className="span">
      { task.name} 
           </span>
                    <div className="div2">
   <button className="button2"
     onClick={() => deletetask(index)}>
         delete</button>
        
       
         <button onClick={()=>setEditindex(index)} className="update">update</button>
         
     </div>
           </li>
        )
    )
      }
       </ul>
        )

        
    }
    </div>
);
}
export default TodoList;
