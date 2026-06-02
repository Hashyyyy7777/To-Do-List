import { useState } from "react";
function UpdateForm({updatetask,task,index}){
    const [ name, setName]=useState(task.name);

    function handlesubmit(e){

        e.preventDefault();
        updatetask(index,name);
        

    }
    return(
        <div > 
    <form onSubmit={handlesubmit}> 
   <input type="text"
   value={name} 
   onChange={(e) => setName(e.target.value)}
     />
     
     <button type="submit" 
    >Update</button>
   
    </form>
        
        </div>
    );
}
export default UpdateForm;