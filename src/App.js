import React, {useState} from 'react';
import data from "./data.json"

import Header from './header';
import ToDoList from './ToDoList.js';


function App() {
  const[toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
