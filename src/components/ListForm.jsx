import { useState } from "react";
function ListForm({addtasks}){
   const [name, setName]=useState("");

    function handlesubmit(e){

        e.preventDefault();

        addtasks(name);

        setName("");
      
        
    }
    return(
        <form onSubmit={handlesubmit} className="form">

            <input type="text"
            placeholder="enter your task " className="text2"
            value={name}
            onChange={(e) => setName(e.target.value)} />

            <button type="submit" className="button">ADD</button>
        </form>
    );
}
export default ListForm;