import React, {Component} from 'react';
import Tasks from './Tasks';

class Task extends Component{
    render(){
        const {task} = this.props;
        return <div>
             {task.title} - {task.description} - {task.done} - {task.id}
            <input type="checkbox"/>
            <button>
                X
            </button>
        </div>
    }
}

export default Task;