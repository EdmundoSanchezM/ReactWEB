import React,{Component} from 'react';
import './App.css';

import tasks from './sample/task.json';
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts';
console.log(tasks);

class App extends Component{
  
  state ={
    tasks: tasks
  }

  addTask = (title,description)=>{ //Pasando funciones
    const newtask ={
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks,newtask]
    })
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !==id);
    this.setState({tasks: newTask})//Lo que hacemos es solo repransar por el arreglo que no tiene el id eliminado
  }

  checkDone = (id) => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTask})
  }

  render(){//Mostrar algo
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks 
        tasks={this.state.tasks} 
        deleteTask={this.deleteTask} 
        checkDone={this.checkDone}
      />
      <Posts />
    </div>
  }
}

export default App;
