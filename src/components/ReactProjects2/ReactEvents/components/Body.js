import React, { Component } from "react";
import BodyComponent from "./BodyComponent";

export class Body extends Component {
  render() {
    return (
      <div className='body'>
        <button onClick={this.props.handleReset} className="btn-reset"
        style={{background: 'yellow'}}
        >
          Reset
        </button>
        {this.props.texts.map(text => (
          <BodyComponent
            key={text.id}
            text={text}
            handleCheck={() => this.props.handleCheck(text.id)}
            handleDelete={() => this.props.handleDelete(text.id)}
            handleEdit={() => this.props.handleEdit(text.text, text.id)}
            increment={() => this.props.increment(text.id)}
            decrement={() => this.props.decrement(text.id)}
            itemDelete={this.props.itemDelete}
          />
        ))}
      </div>
    );
  }
}

export default Body;
