import React, { Component } from "react";

export class Counters extends Component {
  formatCount = () => {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };

  getBadgeClasses = () => {
    let classes = "button-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="button-secondary"
        >
          Add item
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="button-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counters;
