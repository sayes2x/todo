import React from "react";
import Styles from "./TaskFilter.css";

// this generates the filter buttons the the todo app
export default class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setDisplayActive = () => {
    this.props.setDisplay("active");
    return;
  };

  setDisplayComplete = () => {
    this.props.setDisplay("complete");
    return;
  };

  setDisplayAll = () => {
    this.props.setDisplay("all");
    return;
  };

  render() {
    return (
      <div className="filter-buttons">
        <button
          type="button"
          className="display-active"
          onClick={this.setDisplayActive}
        >
          Active: {this.props.numberActiveTasks}
        </button>
        <button
          type="button"
          className="display-done"
          onClick={this.setDisplayComplete}
        >
          Complete: {this.props.numberCompleteTasks}
        </button>
        <button
          type="button"
          className="display-all"
          onClick={this.setDisplayAll}
        >
          All: {this.props.numberAllTasks}
        </button>
      </div>
    );
  }
}
