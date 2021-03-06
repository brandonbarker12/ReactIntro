import React, { Component }  from 'react';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['item 1', 'item 2'],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) =>this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter A New Task'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add To List</button>
                </form>
                <TaskList title={'Pending Tasks'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed'} tasks={['Done']} buttonFunction={this.deleteTodo} />
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
        this.setState({ text: ''});
    }

    removeTodo = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
            todoList.splice(index, 1);
            this.setState({todoList: todoList})
        }
    }

    deleteTodo = key =>{
        console.log(key)
    }
}

export default App;