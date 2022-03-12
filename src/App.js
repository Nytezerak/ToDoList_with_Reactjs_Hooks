import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";



function App() {
  const[toDoList, setToDoList] = useState(data);

  //maps trough data to edit formatation depending of the boolean
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete} : {...task}
    })
    setToDoList(mapped)
  }

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
