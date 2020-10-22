import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

function App() {    
  return (
    <div className="App">
        <h1>To-Do List</h1>
        <input> </input>
        <button>Add Todo</button>   
        <TaskList />
    </div>
  );
}

export default App;
