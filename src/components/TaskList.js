import React from 'react';
import TaskItem from "./TaskItem";

// This generates the unordered list that the li's go in
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeTask = (taskId, done) => {
    this.props.removeTask(taskId, done);
    return;
  }
  toggleDone = taskId => {
    this.props.toggleDone(taskId);
    return;
  }
//  the logic here renders a li only if the active/complete status matches active filter
  render() {
    if (this.props.display === 'active') {
      var taskNodes = this.props.tasks
        .filter(task => task.done === "false").map(listItem => {
        return (
          <TaskItem
            key={listItem.id}
            taskId={listItem.id}
            task={listItem.task}
            done={listItem.done}
            removeTask={this.removeTask}
            toggleDone={this.toggleDone} />
        );
      }, this);
    } else if (this.props.display === 'complete') {
      var taskNodes = this.props.tasks
        .filter(task => task.done === "true").map(listItem => {
        return (
          <TaskItem
            key={listItem.id}
            taskId={listItem.id}
            task={listItem.task}
            done={listItem.done}
            removeTask={this.removeTask}
            toggleDone={this.toggleDone} />
        );
      }, this);
    } else {
      var taskNodes = this.props.tasks.map(listItem => {
        return (
          <TaskItem
            key={listItem.id}
            taskId={listItem.id}
            task={listItem.task}
            done={listItem.done}
            removeTask={this.removeTask}
            toggleDone={this.toggleDone} />
        );
      }, this);
    }
    return (
      <ul className="list-group">
        {taskNodes}
      </ul>
    );
  };
};
