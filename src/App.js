import React, {useState} from 'react';
import data from "./data.json"

import Header from './header';
import ToDoList from './ToDoList.js';


function App() {
  const[toDoList, setToDoList] = useState(data)

  const handleToggle = (id) =>{
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete}:{}
    })
    setToDoList(mapped)
  }

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
