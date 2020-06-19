import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";

class TaskInput extends Component {
    state = {
        input: ''
    }

    render() {
        return (
          <TextField
            className="add-task-input"
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            label="Add new task"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.props.handleSubmit(this.state.input);
                this.setState({
                    input: ''
                })
              }
            }}
          />
        );
    }
}

export default TaskInput;