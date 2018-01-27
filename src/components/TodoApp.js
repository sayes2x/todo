import React from 'react';
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import TaskFilter from "./TaskFilter";
import DeleteComplete from "./DeleteComplete";
import Styles from "./TodoApp.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // initial state of todo app
      tasks: [
        { "id": "00001", "task": "Get out of bed", "done": "false" },
        { "id": "00002", "task": "Get dressed", "done": "false" },
        { "id": "00003", "task": "Have some oatmeal", "done": "false" }
      ],
      display: "all",
      activeTasks: 3,
      completeTasks: 0,
      allTasks: 3
    };
  }
  generateId =  () => {
    return Math.floor(Math.random() * 90000) + 10000;
  }
  // This should keep track of how many active/complete tasks,
  // but it does not work correctly and I have not been able to figure out why yet.
  updateTaskNumbers = () => {
    var tasks = this.state.tasks;
    var active = 0, complete = 0, all = 0;
    tasks.forEach(task => {
       if(task.done === "true") {
        complete +=1;
      } else {
        active +=1;
      }
    });
    all = this.state.tasks.length;
      this.setState({
      activeTasks: active,
      completeTasks: complete,
      allTasks: all
    });
  }
  handleRemoveTask = (taskId, done) => {
    var tasks = this.state.tasks;
    tasks = tasks.filter(el => {
      return el.id !== taskId;
    });
    this.setState({ tasks });
    this.updateTaskNumbers();
     return;
  }
  handleDeleteAllCompleteTasks = () => {
    var tasks = this.state.tasks;
    tasks = tasks.filter(task => {
      return task.done !== "true";
    });
    this.setState({ tasks });
    this.updateTaskNumbers();
    return;
  }
  handleSubmit = task => {
    var tasks = this.state.tasks;
    var id = this.generateId().toString();
    var done = 'false';
    tasks = tasks.concat([{ id, task, done }]);
    this.setState({ tasks });
    this.updateTaskNumbers();
    return;
  }
  handleToggleDone = taskId => {
    var active = 0, complete = 0;
    var tasks = this.state.tasks;
    for (var i in tasks) {
      if (tasks[i].id === taskId) {
        if(tasks[i].done === 'true') {
          tasks[i].done = 'false';
        } else {
          tasks[i].done = 'true';
        }
      }
    }
    this.setState({ tasks });
    this.setState({
      activeTasks: active,
      completeTasks: complete
    })
    this.updateTaskNumbers();
    return;
  }
  handleSetDisplay = filter => {
    this.setState({
      display: filter
    });
    return;
  }
  render() {
    return(
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
        <DeleteComplete onDeleteAllCompleteTasks={this.handleDeleteAllCompleteTasks}/>
      </div>
    );
  };


};
