import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

class TaskList extends Component {
    render() {
        return this.taskMethod()
    }

  taskMethod() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <List
              ref={provided.innerRef}
            >
              {this.props.data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItem key={item.id}>
                        <Icon>dynamic_form</Icon>
                        <ListItemText
                          primary={item.name} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete" onClick={() => { this.props.handleClick  (item.id); } }>
                            <Icon>delete</Icon>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default TaskList;