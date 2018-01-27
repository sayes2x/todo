import React from 'react';
import Styles from "./NewTaskForm.css";

// this is the form to enter new tasks
export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitTask = e => {
    e.preventDefault();
    var task = this.refs.task.value.trim();
    if (!task) {
      return;
    }
    this.props.onTaskSubmit(task);
    this.refs.task.value = '';
    return;
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <form onSubmit={this.submitTask}>
            <div  className="input-row">
              <label className="label" htmlFor="task">Task:</label>
              <input
                className="text" type="text" id="task" ref="task"
                placeholder="Enter your next task" maxLength="25" autoComplete="off" />
            </div>
            <br />
            <div className="submit-row">
              <input className="submit" type="submit" value="Submit Task" />
            </div>
          </form>
          <br />
        </div>
      </div>
    );
  };
};
