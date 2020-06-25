import React, {Component} from 'react';
import './App.css';

import tasks from './sample/task.json';
import Tasks from './components/Tasks.js';
console.log(tasks);

class App extends Component{
  
  state ={
    tasks: tasks
  }
  render(){//Mostrar algo
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;
