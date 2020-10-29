import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input>
                <button>Add Todo</button>
                <TaskList />
                <TaskList />
            </div>
        );
    }
  
}

export default App;
