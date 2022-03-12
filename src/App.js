import React, {useState} from 'react';
import data from "./data.json"
import './index.css';

import Header from './header';
import ToDoList from './ToDoList.js';



function App() {
  const[toDoList, setToDoList] = useState(data)

  //maps trough data to edit formatation depending of the boolean
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete : !task.complete}:{...task}
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
