import React,{Component} from 'react';
import './App.css';

import tasks from './sample/task.json';
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
console.log(tasks);

class App extends Component{
  
  state ={
    tasks: tasks
  }

  addTask = (title,description)=>{
    const newtask ={
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks,newtask]
    })
  }
  render(){//Mostrar algo
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
