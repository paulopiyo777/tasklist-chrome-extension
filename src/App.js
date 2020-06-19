import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class App extends Component {
  state = {
    tasks: [],
    idCount: 0,
    input: ''
  }

  // addTask: creates a new task with a unique ID; keeps track of previous state's ID
  addTask(taskName) {
    this.setState(prevState => {
      // concat function adds new task to state object
      const newTasks = prevState.tasks.slice().concat({
        name: taskName,
        id: prevState.idCount
      })
      // return new state object with new task and unique ID incremented by 1
      return {
        tasks: newTasks,
        idCount: prevState.idCount + 1,
        input: '' // clear input once added
      }
    })
  }

  // deleteTask: gets rid of task using unique ID
  deleteTask(taskId) {
    this.setState(prevState => {
      // keep tasks with IDs different from ID to be deleted; delete task with ID
      const newTasks = prevState.tasks.slice().filter( task => task.id !== taskId);

      return {
        tasks: newTasks
      }
    })
  }

  render() {
    return(
      <div>
        <input type='text' value={this.state.input} onChange={e => this.setState({input: e.target.value})}></input>
        <button onClick={this.addTask.bind(this, this.state.input)}>Add Task</button>
        <ul>
          {this.state.tasks.map(task => 
          <li key={task.id}>{task.name}<button onClick={this.deleteTask.bind(this, task.id)}>delete</button></li>)}
        </ul>
      </div>
    );
  }
}

export default App;
