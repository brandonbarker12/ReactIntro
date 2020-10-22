import React, {Component} from 'react';

class TaskItems extends Component{
    render(){
        return(
            <div>
            Title of Task
            <TaskList />
            <button>Done/Delete</button>
            </div>
        )
    }
}

export default TaskItems;