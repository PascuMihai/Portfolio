import React, { Component } from "react";
import BodyComponent from "./BodyComponent";

export class Body extends Component {
  render() {
    return (
      <div className='body'>
        <button onClick={this.props.handleReset} class="btn-reset"
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
            handleEdit={() => this.props.handleEdit(text.text)}
            increment={() => this.props.increment(text.id)}
            decrement={() => this.props.decrement(text.id)}
          />
        ))}
      </div>
    );
  }
}

export default Body;
