import React from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import TaskFilter from "./TaskFilter";
import DeleteComplete from "./DeleteComplete";
import Styles from "./TodoApp.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial state of todo app
      tasks: [
        { id: 1, task: "Create todo list app", done: false },
        { id: 2, task: "Fix bugs in todo list app", done: false },
        { id: 3, task: "Resubmit todo list app", done: false }
      ],
      currentId: 3,
      display: "all",
      activeTasks: 3,
      completeTasks: 0,
      allTasks: 3
    };
  }
  generateId = () => {
    var newId = this.state.currentId + 1;
    this.setState({ currentId: newId });
    return newId;
  };
  // keep track of how many active/complete tasks and update state to write reults to the DOM
  updateTaskNumbers = () => {
    var tasks = this.state.tasks;
    var active = 0,
      complete = 0,
      all = 0;
    tasks.forEach(task => {
      if (task.done === true) {
        complete += 1;
      } else {
        active += 1;
      }
    });
    all = this.state.tasks.length;
    this.setState({
      activeTasks: active,
      completeTasks: complete,
      allTasks: all
    });
  };
  handleRemoveTask = taskId => {
    var tasks = this.state.tasks;
    var index = tasks.findIndex(task => task.id === taskId);
    tasks.splice(index, 1);
    this.setState({ tasks });
    this.updateTaskNumbers();
    return;
  };
  handleDeleteAllCompleteTasks = () => {
    var tasks = this.state.tasks;
    var indexes = [];
    tasks.forEach(task => {
      if (task.done === true) {
        indexes.push(tasks.findIndex(item => item.id === task.id));
      }
    });
    for (var index = indexes.length - 1; index >= 0; index--) {
      tasks.splice(indexes[index], 1);
    }
    this.setState({ tasks });
    this.updateTaskNumbers();
    return;
  };
  handleSubmit = task => {
    var tasks = this.state.tasks;
    var newTask = {};
    newTask["id"] = this.generateId();
    newTask["task"] = task;
    newTask["done"] = false;
    tasks.push(newTask);
    this.setState(prevState => {
      return { tasks };
    });
    this.updateTaskNumbers();
    return;
  };
  handleToggleDone = taskId => {
    var tasks = this.state.tasks;
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
    });
    this.setState({ tasks });
    this.updateTaskNumbers();
    return;
  };
  handleSetDisplay = filter => {
    this.setState({
      display: filter
    });
    return;
  };
  render() {
    return (
      <div className="todo-app">
        <h1>To do</h1>
        <TaskList
          tasks={this.state.tasks}
          display={this.state.display}
          removeTask={this.handleRemoveTask}
          toggleDone={this.handleToggleDone}
        />
        <TaskFilter
          numberActiveTasks={this.state.activeTasks}
          numberCompleteTasks={this.state.completeTasks}
          numberAllTasks={this.state.allTasks}
          setDisplay={this.handleSetDisplay}
        />
        <NewTaskForm onTaskSubmit={this.handleSubmit} />
        <DeleteComplete
          onDeleteAllCompleteTasks={this.handleDeleteAllCompleteTasks}
        />
      </div>
    );
  }
}
