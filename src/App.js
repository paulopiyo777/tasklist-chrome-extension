import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import FolderIcon from '@material-ui/icons/Folder';
// import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

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
          <TextField
            className='add-task-input'
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })} 
            label= "Add new task"
            onKeyPress={e => {
              if(e.key==='Enter') {
                this.addTask(this.state.input);
              }
            }}
            />
          <List>
            {this.state.tasks.map((task) => 
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Icon>dynamic_form</Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={task.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                    <Icon>delete</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
            )}
          </List>
        </Card>
      </div>
    );
  }
}

export default App;
