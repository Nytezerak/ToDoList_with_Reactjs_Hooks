import React, {useState} from 'react';
import data from "data.json"

import './App.css';
import Header from './header';


function App() {
  const[toDoList, setToDoList] = useState(data)

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
