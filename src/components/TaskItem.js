import React from 'react';
import Styles from "./TaskItem.css";

// here the li's and the content for the li's of the task list are generated
export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeTask = e => {
    e.preventDefault();
    this.props.removeTask(this.props.taskId);
    return;
  }
  toggleDone = e => {
    e.preventDefault();
    this.props.toggleDone(this.props.taskId);
    return;
  }

  render() {
    var classes = 'task';
    if (this.props.done === 'true') {
      classes = classes + ' done';
    }
    return (
      <li className={classes}>
        <div className="task-item">{this.props.task}</div>
        <div className="pull-right" role="group">
          <button
            type="button"
            className="task-done"
            onClick={this.toggleDone}
          >&#x2713;</button>
          <button
          type="button"
          className="task-remove"
          onClick={this.removeTask}
        >&#xff38;</button>
        </div>
      </li>
    );
  };
};
