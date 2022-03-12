import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return(
        <div>
            {toDoList.map(todo =>{
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
        </div>
    )
}


export default ToDoList;