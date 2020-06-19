import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class TaskList extends Component {
    render() {
        return (
            <List>
            {this.props.data.map((task) => 
                <ListItem key={task.id}>
                      <Icon>dynamic_form</Icon>
                  <ListItemText
                    primary={task.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=> {this.props.handleClick(task.id)}}>
                    <Icon>delete</Icon>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            )}
          </List>
        )
    }
}

export default TaskList;