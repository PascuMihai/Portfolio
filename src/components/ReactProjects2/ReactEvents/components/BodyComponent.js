import React, { Component } from "react";

export class BodyComponent extends Component {
  render() {
    return (
      <div className="container-practice">
        <div className="todos">
          <input
            className="checkbox"
            type="checkbox"
            onChange={this.props.handleCheck}
          />
          <span
            className="todo"
            style={{
              textDecoration: this.props.text.completed
                ? "line-through"
                : "none"
            }}
          >
            {this.props.text.text}
          </span>
        </div>
        <div className="count">
          <span className="todo">{this.props.text.count}</span>
          <button className="btn-events" onClick={this.props.increment}
          style={{background: 'lightblue'}}
          >
            +
          </button>
          <button className="btn-events" onClick={this.props.decrement}
          style={{background: 'lightcoral'}} onChange={this.props.itemDelete}
          >
            -
          </button>
          <button
            onClick={this.props.handleEdit}
            className="btn-events"
            style={{ background: "green" }}
          >
            Edit
          </button>
          <button
            className="btn-events"
            onClick={this.props.handleDelete}
            style={{ background: "red" }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default BodyComponent;
