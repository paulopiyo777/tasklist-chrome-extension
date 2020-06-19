import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

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
    return (
      <div className='App'>
        <Card className='main-container'>
          <TaskInput handleSubmit={this.addTask.bind(this)} />
          <TaskList data={this.state.tasks} handleClick={this.deleteTask.bind(this)}/>
        </Card>
      </div>
    );
  }
}

export default App;
