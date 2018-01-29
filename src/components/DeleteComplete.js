import React from "react";
import Styles from "./DeleteComplete.css";

// this generates the button to delete all completed tasks
export default class DeleteComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteCompleteTasks = () => {
    this.props.onDeleteAllCompleteTasks();
    return;
  };

  render() {
    return (
      <div className="complete-row">
        <button
          type="button"
          className="delete"
          onClick={this.deleteCompleteTasks}
        >
          Delete All Complete Tasks
        </button>
      </div>
    );
  }
}
